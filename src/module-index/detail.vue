<template>
  <div class="learingIndexDetail">
    <!--<div class="top"><span class="icon-back">  </span> 数据分析 <span class="icon-search"></span></div>-->
    <mt-header title="数据分析">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="banner"><img src="../assets/banner.png" alt=""></div>
    <div class="contentInfo">
      <!--课程描述相关信息-->
      <div class="desInfo">
        <div class="des">
          本C语言教程从以下几个模块来贯穿主要知识点：初始C程序、数据类型、运算符、语句结构、函数和数组。每个阶段都配有练习题同时提供在线编程任务。希望通过本教程帮助C语言入门学习者迅速掌握程序逻辑并开始C语言编程。
        </div>
        <ul>
          <li>难度：高级</li>
          <li>时长：1h50m</li>
          <li>人数：12512</li>
          <li>评分：<em>9.5</em></li>
        </ul>
      </div>
      <!--讲师介绍相关信息-->
      <div class="teachInfo">
        <div class="teach"><img src="../assets/teachIcon.png" alt=""></div>
        <div class="info">
          <p class="name">毛老师</p>
          <p>高级前端开发工程师   10年开发经验 </p>
        </div>
        <div class="goAbout"> <i class="icon-go"></i></div>
      </div>
      <!--适合人群-->
      <div class="fitPeop">
        <div class="tit">适合人群</div>
        <div>本课程假设学生熟悉大多数入门课程所涉及的程序，但它被明确设计成不是一门特别高级的课程。学生应该熟悉变量，条件语句，数组，链表，栈，和递归（递归算法将审查和扩展）。</div>
      </div>
      <!--课程大纲-->
      <div class="courseItem">
        <div class="tit">课程大纲</div>
        <ul>第一章：初始C程序
          <li><span>视频</span>1.1 初始C语言 <a href="#/play/21">试学</a></li>
          <li><span>视频</span>1.2 继承 <a href="#/play/21">试学</a></li>
          <li><span>视频</span>1.3 多态 <a href="#/play/21">试学</a></li>
        </ul>
        <ul>第一章：初始C程序
          <li><span>视频</span>1.1 初始C语言 </li>
          <li><span>视频</span>1.2 继承 </li>
          <li><span>视频</span>1.3 多态 </li>
        </ul>
      </div>
    </div>

    <div class="payCourse">￥ 299.00<a href="#/pay/22">立即购买</a></div>
    <div class="startLearing">开始学习</div>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'

  export default {
    name: 'learingIndexDetail',
    data () {
      return {
        data: [1, 4, 3, 3, 3, 3, 3, 3]
      }
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
  }
}
</style>
