<template>
  <div class="learingIndexPlay">
    <!--<div><img src="../assets/banner.png" alt=""></div>-->
    <div class="vidPlayBox" @click="playVid">
      <video id="courseVid" src="../assets/movie.mp4" width="100%">your browser does not support the video tag</video>
      <i class="icon-plab-back"></i>
    </div>
    <div class="title"><span>章节</span></div>
    <!--课程大纲-->
    <div class="courseItem">
      <div class="tit">课程大纲</div>
      <ul>第一章：初始C程序
        <li><span>视频</span>1.1 初始C语言 <a href="#">试学</a></li>
        <li><span>视频</span>1.2 继承 <a href="#">试学</a></li>
        <li><span>视频</span>1.3 多态 <a href="#">试学</a></li>
      </ul>
      <ul>第一章：初始C程序
        <li><span>视频</span>1.1 初始C语言 </li>
        <li><span>视频</span>1.2 继承 </li>
        <li><span>视频</span>1.3 多态 </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'

  export default {
    name: 'learingIndexPlay',
    data () {
      return {
        data: [1, 4, 3, 3, 3, 3, 3, 3]
      }
    },
    methods:{
      playVid:function(){
        let myVideo = document.getElementById('courseVid')
        if (myVideo.paused)
          myVideo.play();
        else
          myVideo.pause();
      }
    },
    components: {
      learingFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .learingIndexPlay{
    text-align: center;
    .vidPlayBox{
      position: relative;
      i{
        position: absolute;
        left: 20px;
        top:20px;
        font-size: 30px;
        color:rgba(255, 255, 255, 0.6)
      };
    }
    .title{
      box-shadow: 0px 3px 5px $cl5;
      background: $cl1;
      text-align: left;
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      font-size: 18px;
      position: relative;
      top:-7px;
      span{
        display: inline-block;
        height: 38px;
        padding: 0 10px;
        color:$cl0;
        border-bottom: solid 2px $cl0;
      }
    }
    .courseItem{
      padding:10px;
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
        color:$cl4;
        position: relative;
        top:2px;
      }
      li:before{
        content: ' ';
        display: inline-block;
        position: absolute;
        left: 25px;
        color:$cl7;
        width: 18px;
        height: 30px;
        border-left: solid 1px $cl4;
      }
    }
  }
</style>
