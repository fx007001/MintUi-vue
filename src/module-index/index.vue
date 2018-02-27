<template>
  <div class="learingIndex">
    <mt-tab-container v-model="selected" swipeable="swipeable">
      <mt-tab-container-item id="index">
        <LearingHeader></LearingHeader>
        <ClassItem :title="'精品推荐'" :dataes="data"></ClassItem>
        <ClassItem :title="'数据分析'" :labs="'true'" :dataes="data2"></ClassItem>
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
  import LearingHeader from './../components/index-header.vue'
  import ClassItem from './../components/class-Item.vue'
  import listModular from './../module-list/index.vue'
  import courseModular from './../module-course/index.vue'
  import myModular from './../module-my/index.vue'
  import learingFooter from './../components/footer.vue'

  export default {
    name: 'learingIndex',
    data () {
      return {
        data: [1, 2, 3],
        data2: [1, 2, 3, 4, 5],
        swipeable: 'false',
        selected: 'index',
      }
    },
    methods:{
      init: function() {
        console.log(345678)
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
