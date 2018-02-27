import HttpClient from './httpClient'

export default {
  // 项目列表
  list: (callback) => {
    HttpClient.get(
      `/courses`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 项目日志列表接口
  logList: (parameters, callback) => {
    HttpClient.get(
      `/courses/${parameters.id}/logs`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 项目添加接口
  add: (parameters, callback) => {
    HttpClient.post(
      `/courses/${parameters.searchName}`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 项目修改接口
  update: (parameters, callback) => {
    HttpClient.put(
      `/courses/${parameters.id}`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 项目删除接口
  del: (parameters, callback) => {
    HttpClient.delete(
      `/courses/${parameters.id}`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 项目详情接口
  detail: (parameters, callback) => {
    HttpClient.get(
      `/courses/${parameters.id}`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  }
}
