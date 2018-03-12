<template>
  <div class="classItem">
    <div class="title" v-show="title"><i class="icon-logo"></i>{{title}} <a href="#/list/all" class="labs" v-show="labs">查看全部</a></div>
    <div class="content">
      <a v-for="(item, index) in dataes" :key="index" :href="'#/detail/'+ item.id">
      <div class="item">
        <div class="iconInfo"><img :src="imgBaseUrl + item.cover_img" alt=""></div>
        <div class="info">
          <div class="tit">{{item.name}}</div>
          <div class="des">{{item.desc}}</div>
          <div class="rank"><em v-if="item.level == 3">高级</em><em v-else-if="item.level == 2">中级</em><em v-if="item.level == 1">初级</em><i>●</i> {{item.view_count}}人在学习</div>
        </div>
      </div></a>
    </div>
  </div>
</template>
<script>
  import cfg from './../utils/config'
  export default {
    name: 'classItem',
    props: ['title', 'labs', 'dataes'],
    data () {
      return {
        selected: 'ind',
        imgBaseUrl:cfg.imgBaseUrl
      }
    },
    methods:{
      init:function(){

      }
    },
    mounted:function(){
      this.init()
    },
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
