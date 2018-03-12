// 本地存储
export default {
  setItem: (key, val) => {
    window.localStorage.setItem(key, val)
  },
  getItem: (key, defVal) => {
    let val = window.localStorage.getItem(key)
    if (val === 'NaN' || val === 'undefined') {
      return defVal == null ? '' : defVal
    }
    // console.log(val)
    return val
  },
  removeItem: key => {
    window.localStorage.removeItem(key)
  }
}
