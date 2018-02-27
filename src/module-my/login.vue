<template>
  <div class="login">
    <div class="head"><img src="../assets/logo.png" alt=""></div>
    <div class="formItem">
      <mt-field label="" v-model="email" placeholder="手机号/邮箱"></mt-field>
      <mt-field label="" placeholder="密码" type="password" v-modal="password"></mt-field>
      <div class="subBut">登录</div>
      <div class="more">
        <router-link :to="{'path':'/login'}" class="register">注册</router-link>
        <router-link :to="{'path':'/login'}" class="forgetPass">忘记密码？</router-link>
      </div>
    </div>
    <div class="otherLonin">
      <div class="title"><span>第三方平台</span></div>
      <div class="cont">
        <div><img src="../assets/QQlog.png" alt=""></div>
        <div><img src="../assets/weix.png" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'
  export default {
    name: 'login',
    data () {
      return {
        email:'',
        password: '',
      }
    },
    components: {
      learingFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .login{
    .head{
      text-align: center;
      padding: 70px;
      img{
        width: 70%;
      }
    }
    .formItem{
      font-size: 18px;
      margin: 0 30px;
      .mint-cell{
        background: transparent;
      }
      .mint-cell-wrapper{
        background: transparent;
        padding: 0;
        border-bottom: solid 1px $cl14;
      }
      .subBut{
        background: $cl0;
        color:$cl1;
        text-align: center;
        line-height: 40px;
        margin: 20px 0;
      }
      .more{
        display: flex;
        text-align: center;
        .register{
          color:$cl0;
          flex: 1;
        }
        .forgetPass{
          color:$cl9;
          flex: 1;
        }
      }
    }
    .otherLonin{
      text-align: center;
      position: fixed;
      bottom: 0;
      width: 84%;
      left: 8%;
      margin: 20px 0;
      .title{
        border-bottom: solid 1px $cl14;
        position: relative;
        color:$cl9;
        span{
          background: $cl10;
          position: relative;
          display: inline-block;
          padding: 0 20px;
          top:12px;
        }
      }
      .cont{
        margin: 30px 0px;
        position: relative;
        width: 70%;
        left: 15%;
        display: flex;
        div{
          flex: 1;
        }
        img{
          width: 40%;
        }
      }
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px $cl10 inset;
    }
    input[type=text]:focus, input[type=password]:focus, textarea:focus {
      -webkit-box-shadow: 0 0 0 1000px $cl10 inset;
    }
  }
</style>
