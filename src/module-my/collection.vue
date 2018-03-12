<template>
  <div class="learingMy">
    <div class="head"><img src="../assets/banner1.png" alt="">张老师</div>
    <div class="item">
      <mt-cell title="个人资料">
        <span class="icon-go"></span>
        <i slot="icon" class="icon icon-my"></i>
      </mt-cell>
      <mt-cell title="我的订单">
        <span class="icon-go"></span>
        <i slot="icon" class="icon icon-order"></i>
      </mt-cell>
      <mt-cell title="我的消息">
        <span class="icon-go"></span>
        <i slot="icon" class="icon icon-mess"></i>
      </mt-cell>
      <mt-cell title="我的收藏">
        <span class="icon-go"></span>
        <i slot="icon" class="icon icon-col"></i>
      </mt-cell>
      <mt-cell title="设置">
        <span class="icon-go"></span>
        <i slot="icon" class="icon icon-set"></i>
      </mt-cell>
      <mt-cell title="退出">
        <span class="icon-go"></span>
        <i slot="icon" class="icon icon-my"></i>
      </mt-cell>
    </div>
    <learingFooter></learingFooter>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'

  export default {
    name: 'learingMy',
    data () {
      return {
      }
    },
    methods:{
      init: function() {

      },
      getCourseItem: function(obj){

      }
    },
    mounted:function(){

    },
    components: {
      learingFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .learingMy{
    .head{
      background: $cl1;
      padding:30px 20px;
      line-height: 50px;
      color:$cl3;
      font-size: 20px;
      margin-bottom: 15px;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        float: left;
      }
    }
    .item{
      background: $cl1;
      padding:0 15px;
      li {
        line-height: 40px;
        border-bottom:solid 1px $cl5;
        position: relative;
        i{
          position: absolute;
          right: 0px;
        }
      }
      .icon{
        position: absolute;
        left: 0px;
        top:15px;
        font-size: 18px;
      }
      .mint-cell-wrapper{
        position: relative;
        padding: 0px 0px 0px 25px ;
      }
    }
  }
</style>
