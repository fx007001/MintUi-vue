<template>
  <div class="register">
    <mt-header title="注册" style="background:#26a2ff;color:#fff;">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="formItem">
      <mt-field label="" v-model="phoneNum" placeholder="手机号"></mt-field>
      <p><mt-field label="" placeholder="验证码" type="telCode" readonly v-model="telCode"></mt-field>
        <span class="sendCode" @click="sendPhoCode" >发送验证码</span>
      </p>
      <mt-field label="" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <div class="subBut" @click="registerSub">完成</div>
      <div class="more">
        <router-link :to="{'path':'/login'}" class="forgetPass">已有账号去登录？去 <i>登陆</i></router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import logApi from '../api/users'
  export default {
    name: 'register',
    data () {
      return {
        phoneNum: '',
        telCode: '111111',
        mail: '',
        password: ''
      }
    },
    methods:{
      registerSub: function() {
        logApi.register({phoneNum:this.phoneNum, password:this.password},(ret, err) => {
          if (err) {
            alert('用户名或密码错误！请稍后重试！')
          }else{
            console.log(ret.data)
          }
        })
      },
      sendPhoCode: function(){
        if(this.phoneNum === '' ){
          return false
        }
        logApi.sendCode({phoneNum:this.phoneNum},(ret, err) => {
          if (err) {
            //alert('用户名或密码错误！请稍后重试！')
          }else{
            console.log(ret.headers.debug)
          }
        })
      }
    },
    mounted:function(){
    },
    components: {
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .register{
    .formItem{
      font-size: 18px;
      margin: 0 30px;
      p{position: relative}
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
        position: relative;
        width: 100%;
        left: 0px;
        top: 40px;
        text-align: center;
        i{
          color: $cl0;
        }
        .forgetPass{
          color:$cl9;
        }
      }
      .sendCode{position: absolute;right: 0px;top:6px;display: inline-block;font-size: 14px;color:$cl0;border:solid 1px $cl0;padding: 5px;}
    }
  }
</style>
