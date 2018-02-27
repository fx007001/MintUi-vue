<template>
  <div class="learingCourse">
    <mt-search v-model="searchValue"></mt-search>
    <div class="courseItem">
      <div class="item" v-for=" (item, index) in data" :key="index">
        <div class="ico"><img src="../assets/cs1.png" alt=""></div>
        <div class="info">
          <p class="tit">Think PHP 5.0 博客系统实战项目</p>
          <p class="speed">
            <mt-progress :value="30" :barHeight="10">
              <div slot="end"> 进度30%</div>
            </mt-progress>
            <a href="#/"><i class="icon-play"></i>开始学习</a>
          </p>
        </div>
      </div>
    </div>
    <!--<learingFooter></learingFooter>-->
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'
  export default {
    name: 'learingCourse',
    data () {
      return {
        data: [1, 2, 3, 4],
        searchValue: ''
      }
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
