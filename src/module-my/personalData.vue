<template>
  <div class="personalData">
    <mt-header title="个人资料">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="itemBox">
      <mt-cell title="头像">
        <span class="myInfo"><img src="../assets/teachIcon.png" alt=""></span>
        <span class="icon-go"></span>
      </mt-cell>
      <mt-cell title="昵称">
        <span class="myInfo">毕鹏</span>
        <span class="icon-go"></span>
      </mt-cell>
    </div>
    <div class="itemBox">
      <mt-cell title="手机">
        <span class="myInfo">15127837287</span>
        <span class="icon-go"></span>
      </mt-cell>
      <mt-cell title="邮箱">
        <span class="icon-go"></span>
      </mt-cell>
    </div>
    <div class="itemBox">
      <mt-cell title="Q Q">
        <span class="icon-go"></span>
      </mt-cell>
    </div>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'

  export default {
    name: 'personalData',
    data () {
      return {
      }
    },
    components: {
      learingFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .personalData{
    .itemBox{
      margin: 10px 0;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .myInfo{
      margin-right: 10px;
    }
  }
</style>
