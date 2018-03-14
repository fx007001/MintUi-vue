import localStore from '../utils/localStore'
import JsonUtils from '../utils/json'

let state = {
  uid:'',
  name: '',
  utoken: ''
};

const mutations = {
  save (state, user) {
    state.user = user
    if (user !== null) {
      state.uid = user.id
      state.name = user.username
      state.utoken = user.api_token
      localStore.setItem('mobUser', JsonUtils.jsonToString(state.user))
    }
  },
  flash (state) {
    let tmp = localStore.getItem('mobUser', null)
    let user = tmp === null ? null : JsonUtils.stringToJson(tmp)
    state.user = user
    if (user !== null) {
      state.uid = user.id
      state.name = user.username
      state.utoken = user.api_token
    }
  },
  clear (state) {
    state.uid = ''
    state.name = ''
    state.utoken = ''
    localStore.removeItem('mobUser')
  }
};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
  updateNav({commit}, msg){
    commit('mobUser', {uid:'', name:''})    // 提交到mutations中处理
  }
};

// 返回改变后的数值
const getters = {
  uid: state => state.uid,
  name: state => state.name,
  utoken: state => state.utoken,
};

export default {
  state,
  mutations,
  getters
}
