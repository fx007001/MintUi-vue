<template>
  <div class="learingIndexDetail">
    <!--<div class="top"><span class="icon-back">  </span> 数据分析 <span class="icon-search"></span></div>-->
    <mt-header title="数据分析">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="banner">
      <img src="../assets/banner.png" alt="">
      <span>{{courseInfoData.name}}</span>
    </div>
    <div class="contentInfo">
      <!--课程描述相关信息-->
      <div class="desInfo">
        <div class="des">
          {{courseInfoData.desc}}
        </div>
        <ul>
          <li>难度：<i v-if="courseInfoData.level == 3">高级</i><i v-else-if="courseInfoData.level == 2">中级</i><i v-if="courseInfoData.level == 1">初级</i></li>
          <li>时长：{{courseInfoData.duration}}</li>
          <li>人数：{{courseInfoData.count_student}}</li>
          <li>评分：<em>{{courseInfoData.score}}</em></li>
        </ul>
      </div>
      <!--讲师介绍相关信息-->
      <div class="teachInfo">
        <div class="teach"><img v-if="teachInfo.avatar" :src="imgBaseUrl + teachInfo.avatar" alt=""></div>
        <div class="info">
          <p class="name">{{teachInfo.username}}</p>
          <p>{{teachInfo.job}} </p>
        </div>
        <div class="goAbout"> <i class="icon-go"></i></div>
      </div>
      <!--适合人群-->
      <div class="fitPeop">
        <div class="tit">适合人群</div>
        <div>{{courseInfoData.for_student}}</div>
      </div>
      <!--课程大纲-->
      <div class="courseItem">
        <div class="tit">课程大纲</div>
        <ul v-for="(item, index) in courseItem" :key="index">{{item.name}}
          <li v-for="(it, ind) in item.lessions" :key="ind"><span v-show="it.is_video">视频</span>{{it.name}} <router-link v-if="it.free_trial" v-show="it" :to="{'path':'/play/' + it.id}">试学</router-link></li>
        </ul>
      </div>
    </div>
    <div class="payCourse" v-if="!courseInfoData.is_buy || courseInfoData.price == 0">￥ 299.00<router-link :to="{'path':'/pay/' + courseInfoData.id}">立即购买</router-link></div>
    <div v-else class="startLearing"><router-link :to="{'path':'/play/' + courseInfoData.id}">开始学习</router-link></div>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'
  import IndexApi from '../api/learingInd.js'
  import cfg from './../utils/config'

  export default {
    name: 'learingIndexDetail',
    data () {
      return {
        imgBaseUrl:cfg.imgBaseUrl,
        courseInfoData: '',           // 课程信息
        teachInfo: '',              // 讲师信息
        courseItem:''                 // 课程大纲
      }
    },
    methods:{
      // 初始化数据
      init: function() {
        IndexApi.courses({id:this.$route.params.classId},(ret, err) => {
          if (err) {
            console.log(err)
          }else{
            this.courseInfoData = ret.data
            this.teachInfo = ret.data.teacher
            this.getCourseItem(ret.data.id)
          }
        })
      },
      // 课程大纲
      getCourseItem: function(obj){
        IndexApi.coursesutline({id:obj},(ret, err) => {
          if (err) {
            console.log(err)
          }else{
            this.courseItem = ret.data.chapters

          }
        })
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
.learingIndexDetail{
  text-align: center;
  .banner{
    position: relative;
    z-index: 99;
    color:$cl1;
    font-size: 24px;
    span{
      font-weight: bold;
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
    }
  }
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
  .contentInfo{
    padding:10px;
    margin-bottom: 10px;
    .desInfo{
      background: $cl1;
      font-size: 12px;
      .des{
        color: $cl6;
        line-height: 28px;
        text-align: left;
        padding:10px;
        border-bottom: solid 1px $cl5;
      }
      ul{
        color:$cl3;
        width: 100%;
        display: flex;
        padding:5px 0px;
        li{
          flex: 1;
          text-align: center;
          border-right: solid 1px $cl5;
          em{
            color:$cl15;
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
  .teachInfo{
    display: flex;
    padding:10px 0;
    background: $cl1;
    margin: 10px 0;
    .teach{
      flex: 1;
      text-align: center;
      img{
        width: 50px;
        border-right: 50px;
        display: inline-block;
      }
    }
    .info{
      flex: 3;
      text-align: left;
      color:$cl6;
      font-size: 14px;
      p{
        height: 25px;
        line-height: 25px;
        overflow: hidden;
      }
      .name{
        color: $cl3;
        font-size: 16px;
      }
    }
    .goAbout{
      flex: 1;
      color:$cl9;
      i{
        position: relative;
        top:20px;
      }
    }
  }
  .fitPeop{
    padding:10px;
    background: $cl1;
    margin: 10px 0;
    font-size: 12px;
    line-height: 28px;
    color:$cl6;
    text-align: left;
    .tit{
      font-size: 14px;
      color: $cl3;
    }
  }
  .courseItem{
    padding:10px;
    background: $cl1;
    margin: 10px 0;
    font-size: 12px;
    line-height: 28px;
    color:$cl6;
    text-align: left;
    .tit{
      font-size: 14px;
      color: $cl3;
    }
    ul{
      color:$cl3;
      padding-left: 10px;
      li{
        color:$cl6;
        font-size: 12px;
        padding-left: 20px;
       span{
         font-size: 10px;
         padding:0px 2px;
         margin-right: 3px;
         border:solid 1px $cl6
       }
        a{
          position: absolute;
          right: 20px;
          color:$cl0;
        }
      }
    }
    ul:before{
      content: ' ● ';
      font-size: 20px;
      color:$cl5;
      position: relative;
      top:2px;
    }
    li:before{
      content: ' ';
      display: inline-block;
      position: absolute;
      left: 35px;
      color:$cl7;
      width: 18px;
      height: 30px;
      border-left: solid 1px $cl5;
    }
  }
  .payCourse{
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
  .startLearing{
    font-size: 18px;
    background: $cl0;
    color:$cl1;
    text-align: center;
    line-height: 50px;
    a{
      color:$cl1;
      display: inline-block;
      width: 100%;
      height: 50px;
    }
  }
}
</style>
