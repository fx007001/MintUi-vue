import Vue from 'vue'
import Vuex from 'vuex'

import mineStore from './mineStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    namespaced: true,
    mineStore
  }
})
