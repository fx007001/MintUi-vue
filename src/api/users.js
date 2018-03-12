import HttpClient from './httpClient'

export default {
  // 登录接口
  login: (parameters, callback) => {
    HttpClient.post(
      `/users/login`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 注册接口
  register: (parameters, callback) => {
    HttpClient.post(
      `/users/register`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 退出接口
  logOut: ( callback) => {
    HttpClient.post(
      `/users/out`,
      {},
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  //我的-个人信息
  myMessage: ( callback) => {
    HttpClient.get(
      `/users/info`,
      {},
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 我的订单
  myOrder: (parameters, callback) => {
    HttpClient.get(
      `/myorder/`+ parameters.status,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 短信验证码
  sendCode: (parameters, callback) => {
    HttpClient.post(
      `/system/telcode`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }
}
