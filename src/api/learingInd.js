import HttpClient from './httpClient'

export default {
  // 首页 banner图
  banner: (callback) => {
    HttpClient.get(
      `/system/banner`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 课程大纲
  coursesutline: (parameters, callback) => {
    HttpClient.get(
      `/courses/outline/` + parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 讲师信息
  teachersInfo: (parameters, callback) => {
    HttpClient.get(
      `/teachers/` + parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 课程详情
  courses: (parameters, callback) => {
    HttpClient.get(
      `/courses/` + parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 课程购买接口
  payCourses: (parameters, callback) => {
    HttpClient.get(
      `/courses/` + parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 课程列表
  coursesItem: (parameters, callback) => {
    HttpClient.get(
      `/courses/`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 我的课程 - 课程接口
  myCourses: ( callback) => {
    HttpClient.get(
      `/users/mylearing`,
      {},
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 课程播放记录
  PlayStart:(parameters, callback) => {
    HttpClient.put(
      `/users/playState`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 分类列表
  listItem: (parameters, callback) => {
    HttpClient.get(
      `/categories/` + parameters.parent_id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 分类详情
  listInfo: (parameters, callback) => {
    HttpClient.get(
      `/categories/`+ parameters.id ,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 搜索-热搜词
  seachItem: (callback) => {
    HttpClient.get(
      `/hotsearch/`,
      {},
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 搜索接口
  searchResults: (parameters, callback) => {
    HttpClient.get(
      `/search/`+ parameters.keyword ,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
}
