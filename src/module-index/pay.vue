<template>
  <div class="learingIndexPay">
    <!--<div class="top"><span class="icon-back">  </span> 收银台 </div>-->
    <mt-header title="收银台">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="courseInfo">
      <div class="tit">商品信息</div>
      <div class="cont">
        <div class="ico"><img src="../assets/cs1.png" alt=""></div>
        <div class="info">
          <p class="name">Think PHP 5.0 博客系统实战项目</p>
          <p class="pic">￥299</p>
        </div>
      </div>
    </div>
    <div class="payWay">
      <div class="tit">支付方式</div>
      <div class="cont">
        <mt-radio
          align="right"
          v-model="value"
          :options="options">
        </mt-radio>
      </div>
    </div>
    <div class="payCourse">￥ 299.00<a href="#/">立即付款</a></div>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'

  export default {
    name: 'learingIndexPay',
    data () {
      return {
        value: 'wx',
        options: [
          {
            label: '微信',
            value: 'wx',
          },
          {
            label: '支付宝',
            value: 'zfb'
          }]
      }
    },
    components: {
      learingFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .learingIndexPay{
    text-align: center;
    .top{
      background: $cl1;
      position: relative;
      line-height: 40px;
      color:$cl7;
      font-size: 16;
      span:before{font-size: 15px;}
      span:nth-child(1){
        position: absolute;
        top:10px;
        left:15px;
      }
      span:nth-child(2){
        position: absolute;
        top:10px;
        right:15px;
      }
    }
    .courseInfo{
      text-align: left;
      background: $cl1;
      margin: 10px 0;
      padding:10px;
      .tit{
        line-height: 30px;
        border-bottom: solid 1px $cl5;
        margin-bottom: 10px;
      }
      .cont{
        display: flex;
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
    }
    .courseInfo{
      text-align: left;
      background: $cl1;
      margin: 10px 0;
      padding:10px;
      .tit{
        line-height: 30px;
        border-bottom: solid 1px $cl5;
        margin-bottom: 10px;
      }
      .cont{
        display: flex;
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
    }
    .payWay{
      text-align: left;
      background: $cl1;
      margin: 10px 0;
      padding:10px;
      .tit{
        line-height: 30px;
      }
      .cont{
        .mint-cell-wrapper{padding:0px;}
      }
    }
    .payCourse{
      position: fixed;
      bottom:0px;
      width: 100%;
      text-align: left;
      background: $cl1;
      padding-left: 30px;
      font-size: 18px;
      line-height: 50px;
      color:$cl13;
      a{
        position: absolute;
        right: 0px;
        width: 50%;
        background: $cl0;
        color:$cl1;
        text-align: center;
      }
    }
  }
</style>
