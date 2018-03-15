<template>
  <div class="login">
    <div class="head"><img src="../assets/logo.png" alt=""></div>
    <div class="formItem">
      <mt-field label="" v-model="username" :state="state" disableClear placeholder="手机号/邮箱"></mt-field>
      <mt-field label="" placeholder="密码"  :state="statePas" type="password" disableClear v-model="password"></mt-field>
      <div class="subBut" @click="logSub">登录</div>
      <div class="more">
        <router-link :to="{'path':'/register'}" class="register">注册</router-link>
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
  import logApi from '../api/users'
  import { MessageBox } from 'mint-ui';

  export default {
    name: 'login',
    data () {
      return {
        username:'15116921213',
        password:'111111',
        state:'success',
        statePas:'success'
      }
    },
    methods:{
      logSub: function() {
        if (this.state == 'success' && this.statePas == 'success') {
          logApi.login({username:this.username,password:this.password},(ret, err) => {
            if (err) {
              console.log('用户名或密码错误！请稍后重试！')
            }else{
              this.$store.commit('save',ret.data)
              this.$router.push('/')
            }
          })
        }else{
          MessageBox('提示', '用户名或密码错误！');
        }
      }
    },
    watch:{
      username(val, oldval){
        if(/^1[34578]\d{9}$/.test(val)){
          this.state = 'success'
        }else{
          this.state = 'warning'
        }
      },
      password(val, oldval){
        if(/^[A-Za-z0-9]{6,18}$/.test(val)){
          this.statePas = 'success'
        }else{
          this.statePas = 'warning'
        }
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
      position: relative;
      bottom: 0;
      width: 84%;
      top:20px;
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
  }
</style>
