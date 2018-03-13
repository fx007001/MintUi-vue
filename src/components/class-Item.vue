<template>
  <div class="classItem">
    <div class="title" v-show="title"><i class="icon-logo"></i>{{title}} <a href="#/list/all" class="labs" v-show="labs">查看全部</a></div>
    <div class="content"  >
      <div v-if="isLoadMores"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">
        <a v-for="(item, index) in dataes" :key="item.id" :href="'#/detail/'+ item.id">
        <div class="item">
          <div class="iconInfo"><img :src="imgBaseUrl + item.cover_img" alt=""></div>
          <div class="info">
            <div class="tit">{{item.name}}</div>
            <div class="des">{{item.desc}}</div>
            <div class="rank"><em v-if="item.level == 3">高级</em><em v-else-if="item.level == 2">中级</em><em v-if="item.level == 1">初级</em><i>●</i> {{item.view_count}}人在学习</div>
          </div>
        </div>
        </a>
        <div class="loading" v-if="loading"><mt-spinner type="triple-bounce"></mt-spinner></div>
        <div class="loadNone" v-show="loadNoDat"><span>- 没有了 -</span></div>
      </div>
      <div v-else>
        <a v-for="(item, index) in dataes" :key="index" :href="'#/detail/'+ item.id">
          <div class="item">
            <div class="iconInfo"><img :src="imgBaseUrl + item.cover_img" alt=""></div>
            <div class="info">
              <div class="tit">{{item.name}}</div>
              <div class="des">{{item.desc}}</div>
              <div class="rank"><em v-if="item.level == 3">高级</em><em v-else-if="item.level == 2">中级</em><em v-if="item.level == 1">初级</em><i>●</i> {{item.view_count}}人在学习</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import cfg from './../utils/config'

  export default {
    name: 'classItem',
    props: ['title', 'labs', 'dataes', 'isLoadMores', 'loading'],
    data () {
      return {
        selected: 'ind',
        imgBaseUrl:cfg.imgBaseUrl,
        loadNoDat:false,
        msg:0
      }
    },
    methods:{
      loadMore() {
        this.msg ++
        if(this.msg == 1 ){ // 因为是公用的 组件  所以去掉 首次加载  统一使用init 默认载入
          return
        }
        this.$emit('getloadMore', this.msg)
      }
    },
    watch:{
      dataes(val,oldval){
        if(val.length == oldval.length ){
          this.loadNoDat = true
        }
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
      .loading{
        text-align: center;
      }
      .loadNone{
        font-size: 12px;color:#999;text-align: center;
      }
    }
  }
</style>
