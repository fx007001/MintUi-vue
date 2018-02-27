<template>
  <div class="myOrder">
    <mt-header title="我的订单">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="noPay">未支付</mt-tab-item>
      <mt-tab-item id="finish">已完成</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="noPay">
        <div class="prompt" v-show="prompt"><i class="icon-prompt"></i>订单号24小时内有效，过期将自动关闭 <span class="icon-close" @click="promptClose"></span></div>
        <div class="item">
          <div class="tit">订单编号：201803020453</div>
          <div class="cont">
            <div class="ico"><img src="../assets/cs1.png" alt=""></div>
            <div class="info">
              <p class="name">Think PHP 5.0 博客系统实战项目</p>
              <p class="pic">￥299</p>
            </div>
          </div>
          <div class="active">
            <p>总价: <i class="pic">￥299</i></p>
            <p class="act"><a href="/">去支付</a></p>
          </div>
        </div>
        <div class="item">
          <div class="tit">订单编号：201803020453</div>
          <div class="cont">
            <div class="ico"><img src="../assets/cs2.png" alt=""></div>
            <div class="info">
              <p class="name">Think PHP 5.0 博客系统实战项目</p>
              <p class="pic">￥299</p>
            </div>
          </div>
          <div class="active">
            <p>总价: <i class="pic">￥299</i></p>
            <p class="act"><span>已过期</span></p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="finish">
        <div class="item">
          <div class="tit">订单编号：201803020453</div>
          <div class="cont">
            <div class="ico"><img src="../assets/cs1.png" alt=""></div>
            <div class="info">
              <p class="name">Think PHP 5.0 博客系统实战项目</p>
              <p class="pic">￥299</p>
            </div>
          </div>
          <div class="active">
            <p>总价: <i class="pic">￥299</i></p>
            <p class="act"><span>已完成</span></p>
          </div>
        </div>
        <div class="item">
          <div class="tit">订单编号：201803020453</div>
          <div class="cont">
            <div class="ico"><img src="../assets/cs2.png" alt=""></div>
            <div class="info">
              <p class="name">Think PHP 5.0 博客系统实战项目</p>
              <p class="pic">￥299</p>
            </div>
          </div>
          <div class="active">
            <p>总价: <i class="pic">￥299</i></p>
            <p class="act"><span>已完成</span></p>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'

  export default {
    name: 'myOrder',
    data () {
      return {
        selected: 'noPay',
        prompt:true
      }
    },
    methods:{
      promptClose:function(){
        this.prompt = false;
      }
    },
    components: {
      learingFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .myOrder{
    .mint-navbar{
      a:first-child{
        .mint-tab-item-label{
          border-right: solid 1px $cl9;
        }
      }
      .mint-tab-item-label{
        font-size: 14px;
      }
    }
    .is-selected{
      margin-bottom: 0px !important;
    }
    .prompt{
      background: $cl12;
      color:$cl1;
      line-height: 40px;
      padding:0 15px;
      margin-bottom: 3px;
      position: relative;
      i{
        position: relative;
        margin-right: 5px;
        top:1px;
      }
      span{
        position: absolute;
        right: 15px;
        top:11px;
      }
    }
    .item{
      margin: 0 15px;
      margin-bottom: 10px;
      color: $cl9;
      background: $cl1;
      .tit{
        border-bottom: solid 1px $cl5;
        line-height: 40px;
        padding:0 15px;
      }
      .cont{
        display: flex;
        padding:15px 0;
        margin:0 15px;
        border-bottom: solid 1px $cl5;
        .ico{flex: 1;margin-right: 10px;}
        .info{
          flex: 3;
          font-size: 14px;
          line-height: 33px;
          .pic{
            font-size: 18px;
            color:$cl13;
          }
        }
      }
      .active{
        display: flex;
        padding:15px;
        p{
          flex: 1;
          .pic{
            font-size: 18px;
            color:$cl13;
          }
        }
        .act{
          text-align: right;
          a{
            color: $cl0;
          }
        }
      }
    }
    .mint-tab-container{
      margin-top: 10px;
    }
  }
</style>
