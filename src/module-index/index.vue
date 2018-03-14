<template>
  <div class="learingIndex">
    <mt-tab-container v-model="selected" swipeable="swipeable">
      <mt-tab-container-item id="index">
        <LearingHeader></LearingHeader>
        <ClassItem v-if="rcomData.length > 0" :title="'精品推荐'" :dataes="rcomData"></ClassItem>
        <ClassItem v-if="courseData.length > 0" :title="'数据分析'" :labs="'true'" :dataes="courseData"></ClassItem>
      </mt-tab-container-item>
      <mt-tab-container-item id="list">
        <listModular></listModular>
      </mt-tab-container-item>
      <mt-tab-container-item id="course">
        <courseModular></courseModular>
      </mt-tab-container-item>
      <mt-tab-container-item id="my">
        <myModular></myModular>
      </mt-tab-container-item>
    </mt-tab-container>

    <div class="learingFooter">
      <mt-tabbar v-model="selected" :fixed="true">
        <mt-tab-item id="index" >
          <i class="icon icon-ind"></i>
          首页
        </mt-tab-item>
        <mt-tab-item id="list" >
          <i class="icon icon-class"></i>
          分类
        </mt-tab-item>
        <mt-tab-item id="course">
          <i class="icon icon-course"></i>
          课程
        </mt-tab-item>
        <mt-tab-item id="my">
          <i class="icon icon-my"></i>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  import httpCt from '../api/httpClient'
  import LearingHeader from './../components/index-header.vue'
  import ClassItem from './../components/class-Item.vue'
  import listModular from './../module-list/index.vue'
  import courseModular from './../module-course/index.vue'
  import myModular from './../module-my/index.vue'
  import learingFooter from './../components/footer.vue'
  import IndexApi from '../api/learingInd.js'
  import cfg from './../utils/config'

  export default {
    name: 'learingIndex',
    data () {
      return {
        rcomData: [],       // 推荐课程
        courseData: [],     // 全部（首页数据分析）课程
        swipeable: 'false',
        selected: 'index',
        imgBaseUrl:cfg.imgBaseUrl,
        param:{}
      }
    },
    methods:{
      init: function() {
        let sel = this.$route.path
        if (sel.slice(1)){
          this.selected = sel.slice(1)
        }
        // 精品推荐
        this.getCourseItem('rcom')
        // 全部分类
        this.getCourseItem()
      },
      getCourseItem: function(obj){
        if(obj){
          this.param.rcom = true
          this.param.page = 3
        }else{
          this.param.rcom = ''
          this.param.page = 10
        }
        IndexApi.coursesItem(this.param,(ret, err) => {
          if (err) {
            console.log(err)
          }else{
            if(obj){
              this.rcomData = ret.data
            }else{
              this.courseData = ret.data
            }
          }
        })
      }
    },
    watch:{
      selected(val, oldVal){
        this.$router.push(val)
      }
    },
    mounted:function(){
      this.init()
    },
    components: {
      LearingHeader,
      ClassItem,
      listModular,
      courseModular,
      myModular,
      learingFooter
    },

  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
.learingIndex{
  text-align: center;
}
.learingFooter{
  color:$cl7;
  margin-top: 51px;
.icon{
  display: block;
  font-size: 22px;
  margin-bottom: 3px;
}
}
</style>
