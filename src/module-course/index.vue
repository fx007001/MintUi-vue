<template>
  <div class="learingCourse">
    <div @click="goSeach"><mt-search v-model="searchValue"></mt-search></div>
    <div class="courseItem" >
      <div class="item" v-for="(item, index) in MyCoursesData" :key="index">
        <div class="ico"><img :src="imgBaseUrl + item.cover_img" alt=""></div>
        <div class="info">
          <p class="tit">{{item.name}}</p>
          <p class="speed">
            <mt-progress :value="item.done_percentage" :barHeight="10">
              <div slot="end"> 进度{{item.done_percentage}}%</div>
            </mt-progress>
            <router-link :to="'/play/'+item.id"><i class="icon-play"></i>开始学习</router-link>
          </p>
        </div>
      </div>
    </div>
    <!--<learingFooter></learingFooter>-->
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'
  import IndexApi from '../api/learingInd.js'
  import cfg from './../utils/config'

  export default {
    name: 'learingCourse',
    data () {
      return {
        imgBaseUrl:cfg.imgBaseUrl,
        searchValue: '',
        MyCoursesData:''
      }
    },
    methods:{
      init: function() {
        this.getMyCourses()
      },
      // 搜索
      goSeach: function() {
        this.$router.push({path:'/search/'})
      },
      getMyCourses: function(){
        IndexApi.myCourses((ret, err) => {
          if (err) {
            console.log(err)
          }else{
            console.log(ret.data)
            this.MyCoursesData = ret.data
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
  .learingCourse{
    .courseItem{
      .item{
        display: flex;
        padding: 15px 15px 0px;

        .ico{
          flex:1;
          margin-right: 10px;
        }
        .info{
          flex: 2;
          position: relative;
          .tit{
            text-align: left;
            height: 40px;
            line-height: 40px;
            overflow: hidden;
          }
          .speed{
            display: flex;
            font-size: 14px;
            line-height: 30px;
            margin-top: 5px;
            width: 100%;
            a{
              flex: 2;
              color:$cl0;
              text-align: right;
              font-weight: 500;
              i:before{
                position: relative;
                top:1px;
              }
            }
            .mt-progress{
              flex:3;
              color:$cl9;
            }
          }

        }
      }
    }
  }
</style>
