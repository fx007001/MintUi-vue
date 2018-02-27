import HttpClient from './httpClient'

export default {
  // 常量配置
  // 用户信息
    users: (callback) => {
    HttpClient.get(
      `/user`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
}
