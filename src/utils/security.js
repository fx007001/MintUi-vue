import JsonUtils from './json'
import config from './config'

// 安全处理
export default {
  // 检查是否登录
  chkLogin: (user, path) => {
    let ret = config.safePaths.filter((item) => {
      return path === item
    })
    if (ret.length > 0) {
        return true
    }
    return !!user
  }
}
