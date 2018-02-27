import Vue from 'vue'
import Router from 'vue-router'

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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',                   // 首页
      name: 'learingIndex',
      component: learingIndex,
      children: []
    },
    {
      path: '/list/all',            // 列表页
      name: 'learingIndexList',
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
      path: '/list',                   // 分类
      name: 'listIndex',
      component: listIndex
    },
    {
      path: '/course',                 // 课程 （我购买观看过的课程）
      name: 'courseIndex',
      component: courseIndex
    },
    {
      path: '/search/:searchName',      // 搜索
      name: 'courseSearch',
      component: courseSearch
    },
    {
      path: '/my',                      // 我的首页
      name: 'myIndex',
      component: myIndex,
      children: []
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
      path: '/myOrder',            // 我的订单
      name: 'myOrder',
      component: myOrder,
    },
  ]
})
