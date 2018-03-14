<template>
  <div class="personalData">
    <mt-header title="个人资料">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="itemBox">
      <mt-cell title="头像">
        <span class="myInfo"><img :src="imgBaseUrl + myInfoData.avatar" alt=""></span>
        <span class="icon-go"></span>
      </mt-cell>
      <mt-cell title="昵称">
        <span class="myInfo">{{myInfoData.username}}</span>
        <span class="icon-go"></span>
      </mt-cell>
    </div>
    <div class="itemBox">
      <mt-cell title="手机">
        <span class="myInfo">{{myInfoData.mobile}}</span>
        <span class="icon-go"></span>
      </mt-cell>
      <mt-cell title="邮箱">
        <span class="myInfo"  v-if="myInfoData.email">{{myInfoData.email}}</span>
        <span class="icon-go"></span>
      </mt-cell>
    </div>
    <div class="itemBox">
      <mt-cell title="Q Q">
        <span class="myInfo" v-if="myInfoData.qq">{{myInfoData.qq}}</span>
        <span class="icon-go"></span>
      </mt-cell>
    </div>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'
  import Users from '../api/users.js'
  import cfg from './../utils/config'

  export default {
    name: 'personalData',
    data () {
      return {
        imgBaseUrl:cfg.imgBaseUrl,
        myInfoData: []
      }
    },
    methods:{
      init: function() {
        Users.myMessage((ret, err) => {
          if (err) {
            console.log(err)
          } else {
            console.log(ret.data)
            this.myInfoData = ret.data
          }
        })
      },
      getCourseItem: function(obj){

      }
    },
    mounted:function(){
      this.init()
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
