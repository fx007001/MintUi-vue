<template>
  <div class="learingFooter">
    <!--<div>-->
      <!--<a href="#/" class="act"><i class="icon-ind-act"></i>首页</a>-->
      <!--<a href="#/list" class=""><i class="icon-class"></i>分类</a>-->
      <!--<a href="#/course" class=""><i class="icon-course"></i>课程</a>-->
      <!--<a href="#/my" class=""><i class="icon-my"></i>我的</a>-->
    <!--</div>-->

    <!--<mt-tabbar v-model="selected" :fixed="true">-->
      <!--<mt-tab-item id="index" >-->
        <!--<i class="icon icon-ind"></i>-->
        <!--首页-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="list" >-->
        <!--<i class="icon icon-class"></i>-->
        <!--分类-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="course">-->
        <!--<i class="icon icon-course"></i>-->
        <!--课程-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="my">-->
        <!--<i class="icon icon-my"></i>-->
        <!--我的-->
      <!--</mt-tab-item>-->
    <!--</mt-tabbar>-->
  </div>
</template>
<script>
  export default {
    name: 'learingFooter',
    data () {
      return {
        selected: 'index'
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .learingFooter{
    color:$cl7;
    .icon{
      display: block;
      font-size: 22px;
      margin-bottom: 3px;
    }
  }
</style>
