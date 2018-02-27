let state = {
  newNavData:{titA:'项目管理', titB:'项目列表'}
};

const mutations = {
  updateNavData(context,newCont){
    context.newNavData = newCont
  }
};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
  updateNav({commit}, msg){
    commit('updateNavData', {titA:'项目管理', titB:'项目列表'})    // 提交到mutations中处理
  }
};

// 返回改变后的数值
const getters = {
  getStartDataes(obj){
    return obj.newNavData
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
