<template>
  <div class="classItem">
    <div class="title" v-show="title"><i class="icon-logo"></i>{{title}} <a href="#/list/all" class="labs" v-show="labs">查看全部</a></div>
    <div class="content">
      <a href="#/detail/22">
      <div class="item" v-for="(item, index) in dataes" :key="index">
        <div class="iconInfo"><img src="../assets/cs1.png" alt=""></div>
        <div class="info">
          <div class="tit">Think PHP 5.0 博客系统实战项目</div>
          <div class="des">从Web安全XSS的定义开始讲起，到深入剖析XSS</div>
          <div class="rank"><em>高级</em> <i>●</i> 1822人在学习</div>
        </div>
      </div></a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'classItem',
    props: ['title', 'labs', 'dataes'],
    data () {
      return {
        selected: 'ind'
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss.scss";
  .classItem{
    padding:10px;text-align: left;
    .title{
      text-align: left;font-size: 18px;padding: 5px 0;color: $cl0;position: relative;margin: 5px 0;
      i:before{font-size: 15px;color:$cl0;margin-right: 3px;}
      .labs{
        position: absolute;right: 10px;font-size: 12px;color: $cl7;top:8px;
      }
    }
    .content{
      .item{
        display: flex;margin-bottom: 5px;
        .iconInfo{flex:2;margin-right: 5px;}
        .info{
          flex:3;
          .tit{font-size: 16px; color:$cl3;height: 20px;overflow: hidden}
          .des{font-size: 12px; color:$cl6;height: 40px;line-height:20px; overflow: hidden; margin: 5px 0;}
          .rank{
            font-size: 14px; color:$cl6; height: 20px;overflow: hidden;
            i{color:$cl9;}
            em{color:$cl15;}
          }
        }
      }
    }
  }
</style>
