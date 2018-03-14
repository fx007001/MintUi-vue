import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import security from './../utils/security'
import localStore from './../utils/localStore'
import JsonUtils from './../utils/json'

import learingIndex from '@/module-index/index'
import learingIndexList from '@/module-index/list'
import learingIndexDetail from '@/module-index/detail'
import learingIndexPlay from '@/module-index/play'
import learingIndexPay from '@/module-index/pay'
import listIndex from '@/module-list/index'
import courseIndex from '@/module-course/index'
import courseSearch  from '@/module-course/search'
import myIndex from '@/module-my/index'
import personalData from '@/module-my/personalData'
import myOrder from '@/module-my/myOrder'
import login from '@/module-my/login'
import register from '@/module-my/register'
Vue.use(Router)

// 注册路由
const router = new Router({
  routes: [
    {
      path: '/',                   // 首页
      name: 'learingIndex',
      component: learingIndex
    },
    {
      path: '/index',                   // 首页
      name: 'learingIndex1',
      component: learingIndex
    },
    {
      path: '/course',                 // 课程 （我购买观看过的课程）
      name: 'courseIndex',
      component: learingIndex
    },
    {
      path: '/list',                   // 分类
      name: 'listIndex',
      component: learingIndex
    },
    {
      path: '/my',                      // 我的
      name: 'myIndex',
      component: learingIndex
    },
    {
      path: '/list/all',            // 列表页
      name: 'learingIndexList',
      component: learingIndexList
    },
    {
      path: '/list/all/:id',            // 列表页
      name: 'learingIndexList2',
      component: learingIndexList
    },
    {
      path: '/detail/:classId',     // 详情页
      name: 'learingIndexDetail',
      component: learingIndexDetail
    },
    {
      path: '/play/:classId',       //视频播放页
      name: 'learingIndexPlay',
      component: learingIndexPlay
    },
    {
      path: '/pay/:classId',         // 支付页
      name: 'learingIndexPay',
      component: learingIndexPay
    },
    {
      path: '/search/:searchName',      // 搜索
      name: 'courseSearch',
      component: courseSearch
    },
    {
      path: '/search/',                 // 搜索-未输入搜索词
      name: 'courseSearch2',
      component: courseSearch
    },
    {
      path: '/personalData',       // 个人资料
      name: 'personalData',
      component: personalData,
    },
    {
      path: '/login',              // 登录
      name: 'login',
      component: login,
    },
    {
      path: '/register',              // 登录
      name: 'register',
      component: register,
    },
    {
      path: '/myOrder',            // 我的订单
      name: 'myOrder',
      component: myOrder,
    },
  ]
})

// 路由权限控制
router.beforeEach((to, from, next) => {
  let user = store.state.mineStore.uid
  if (!user) {
    let tmp = localStore.getItem('mobUser', null)
    user = tmp === null ? null : JsonUtils.stringToJson(tmp)
    store.commit('save', user)
  }
  if (to.path === '/register'){
    next()
    return
  }
  if (security.chkLogin(user, to.path)) {
    next()
  } else {
    next('/login')
  }
})

export default router
