import Axios from 'axios'
import kindOf from 'kind-of'
import jsonTrans from './../utils/json'

let APIBase = '/e-learning-app-api/index.php/api/mob/v1/'
if (process.env.NODE_ENV === 'development') {
  APIBase = 'api'
}

let tonke = ''
if(window.localStorage.mobUser){
  tonke = jsonTrans.stringToJson(window.localStorage.mobUser).api_token
}

let requestConfig = {
  method: 'get',
  responseType: 'json',
  baseURL: APIBase,
  headers: {
    'Authorization': tonke,
    'Cache-Control': 'no-cache',
    'content-type': 'application/json;charset=utf-8',
    'X-Pagination-Current-Page': '1',
    'X-Pagination-Per-Page': '10'
  }
}

// 是否无效字段
function checkZero(val) {
  if ((val === -1) || (val === '') || (val === null) || (val === undefined)) {
    return true
  }
  return false
}
// 转成驼峰格式
function transformStrHump(str) {
  // let re = /_(\w)/g
  // return str.replace(re, function ($0, $1) {
  //   return $1.toUpperCase()
  // })
  return str
}
// 格式化所有参数
function formatHump(jsonData) {
  if(jsonData.page){
    requestConfig.headers['X-Pagination-Per-Page'] = jsonData.page
  }
  if (jsonData.currentPage) {
    requestConfig.headers['X-Pagination-Current-Page'] = jsonData.currentPage
  }
  let newList = {}
  if (kindOf(jsonData) === 'object') {
    newList = {}
  } else if (kindOf(jsonData) === 'array') {
    newList = []
  } else {
    return newList
  }
  for (var key in jsonData) {
    switch (kindOf(jsonData[key])) {
      case 'object':
        newList[transformStrHump(key)] = formatHump(jsonData[key])
        break
      case 'array':
        newList[transformStrHump(key)] = formatHump(jsonData[key])
        break
      default:
        var val = jsonData[key]
        if (checkZero(val)) {
          continue
        }
        if (key.indexOf('_date') > 0) { // 日期格式化
          let dateVal = val
          if (kindOf(val) === 'string') {
            dateVal = new Date(Date.parse(val))
          } else if (kindOf(dateVal) === 'date') {
            val = MixUtils.dateFormat(dateVal, 'yyyy-MM-dd')
          }
        } else if (key.indexOf('_cost') > 0) { // double 数据格式化
          val = parseFloat(val)
        } else if (key.indexOf('_count') > 0) { // int 数据格式化
          val = parseInt(val)
        } else if (key.indexOf('fid') > 0) { // int 数据格式化
          val = parseInt(val)
        }
        newList[transformStrHump(key)] = val
        break
    }
  }
  return newList
}

// mesage
let _errMesage = (message) => {
  iView.Message.error({content: message, duration: 5})
}
// HTTP拦截器
// hrequest header
Axios.interceptors.request.use(
  config => {
    // if (store.state.user.user) {
    //   config.headers.uid = store.state.user.user.uid
    //   config.headers.utoken = store.state.user.user.utoken
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  })
// response error
Axios.interceptors.response.use(
  response => {
    if (process.env.NODE_ENV === 'development') {
      // console.log(response.data)
    }
    // 处理返回的code
    if (response.data !== null) {
      if (response.data.code !== undefined) {
        switch (response.data.code) {
          case 1000:// 没有数据
            response.data = []
            break
          case 401:
            // _errMesage(response.data.message)
            // store.commit('user/clear')
            // router.push('/login')
            break
          default:
            _errMesage(response.data.message)
            break
        }
        return Promise.reject(response.data)
      }
    }
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:// 请求异常
          // return error.response.data
          break
        case 401:
          // store.commit('user/clear')
          router.push('/login')
          break
        case 403:// 当认证成功，但是认证过的用户没有访问资源的权限
          break
        case 404:// 当GET不到数据时
          break
        case 405:// 所请求的 HTTP 方法不允许当前认证用户访问
          break
        case 410:// 表示当前请求的资源不再可用。当调用老版本 API 的时候很有用
          break
        case 415:// 如果请求中的内容类型是错误的
          break
        case 422:// 用来表示校验错误
          break
        case 429:// 由于请求频次达到上限而被拒绝访问
          break
        case 500:// 程序错误
          _errMesage('500 服务器程序错误')
          break
        case 502:// 错误网关
          _errMesage('502 错误网关')
          break
        case 503:// 服务不可用
          _errMesage('503 服务不可用')
          break
        case 504:// 网关超时
          _errMesage('504 网关超时')
          break
      }
    }
    return Promise.reject(error)
  })

export default {
  // SELECT 从服务器取出资源（一项或多项）
  get: (url, params, callback) => {
    requestConfig.method = 'get'
    requestConfig.url = url
    requestConfig.params = formatHump(params)
    Axios(requestConfig)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        callback(null, error)
      })
  },
  // CREATE 在服务器新建一个资源
  post: (url, data, callback) => {
    requestConfig.method = 'post'
    requestConfig.url = url
    requestConfig.data = formatHump(data)
    requestConfig.params = []
    Axios(requestConfig)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        callback(null, error)
      })
  },
  // form 表单post
  postForm: (url, data, callback) => {
    let formRequestConfig = {
      method: 'post',
      responseType: 'json',
      baseURL: Config.apiBaseURL,
      headers: {
        'token': Config.token,
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: url,
      data: formatHump(data),
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }]
    }
    Axios(formRequestConfig)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        callback(null, error)
      })
  },
  // PUT UPDATE 在服务器更新资源（客户端提供完整资源数据）
  put: (url, data, callback) => {
    requestConfig.method = 'put'
    requestConfig.url = url
    requestConfig.data = formatHump(data)
    requestConfig.params = []
    Axios(requestConfig)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        callback(null, error)
      })
  },
  // PATCH UPDATE 在服务器更新资源（客户端提供需要修改的资源数据）
  patch: (url, data, callback) => {
    requestConfig.method = 'patch'
    requestConfig.url = url
    requestConfig.data = formatHump(data)
    requestConfig.params = []
    Axios(requestConfig)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        callback(null, error)
      })
  },
  // DELETE 从服务器删除资源
  delete: (url, data, callback) => {
    requestConfig.method = 'delete'
    requestConfig.url = url
    requestConfig.data = formatHump(data)
    requestConfig.params = []
    Axios(requestConfig)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        callback(null, error)
      })
  }
}
