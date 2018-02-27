<template>
  <div class="learingList">
    <mt-search v-model="searchValue"></mt-search>
    <div class="listBox">
      <mt-navbar v-model="selected">
        <mt-tab-item id="a">大数据</mt-tab-item>
        <mt-tab-item id="b">前端</mt-tab-item>
        <mt-tab-item id="c">运维</mt-tab-item>
        <mt-tab-item id="d">云计算</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="a">
          <div class="banner"><img src="../assets/banner2.png" alt=""></div>
          <div class="labs">
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
          </div>
          <div class="tit">推荐课程</div>
          <div class="recLabs">
            <a href="#/">大数据入门1</a>
            <a href="#/">大数据入门2</a>
            <a href="#/">大数据入门3</a>
            <a href="#/">大数据入门4</a>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="b">
          <div class="banner"><img src="../assets/banner.png" alt=""></div>
          <div class="labs">
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
          </div>
          <div class="tit">推荐课程</div>
          <div class="recLabs">
            <a href="#/">大数据入门1</a>
            <a href="#/">大数据入门2</a>
            <a href="#/">大数据入门3</a>
            <a href="#/">大数据入门4</a>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="c">
          <div class="banner"><img src="../assets/banner1.png" alt=""></div>
          <div class="labs">
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
          </div>
          <div class="tit">推荐课程</div>
          <div class="recLabs">
            <a href="#/">大数据入门1</a>
            <a href="#/">大数据入门2</a>
            <a href="#/">大数据入门3</a>
            <a href="#/">大数据入门4</a>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="d">
          <div class="banner"><img src="../assets/banner3.png" alt=""></div>
          <div class="labs">
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
            <a href="#">全部</a><a href="#">Linx</a>
          </div>
          <div class="tit">推荐课程</div>
          <div class="recLabs">
            <a href="#/">大数据入门1</a>
            <a href="#/">大数据入门2</a>
            <a href="#/">大数据入门3</a>
            <a href="#/">大数据入门4</a>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <learingFooter></learingFooter>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'
  export default {
    name: 'learingList',
    data () {
      return {
        searchValue: '',
        selected: 'a',
      }
    },
    components: {
      learingFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
.learingList{
  .listBox{
    display: flex;
    .mint-navbar{
      display: block;
      flex: 2;
      .mint-tab-item{
        border-left: 3px solid $cl1;
        border-bottom: 3px solid $cl1;
      }
      .is-selected{
        background: $cl5;
        border-bottom: 3px solid $cl1;
        border-left: 3px solid $cl0;
      }
    }
    .mint-tab-container{
      text-align: center;
      line-height: 30px;
      flex: 6;
      a{
        color:$cl6;
        display: block;
        background: $cl1;
        margin:10px 15px 0px 0px;
        font-size: 15px;
        line-height: 40px;
      }
      .banner{
        padding:15px 15px 0px 15px;
      }
      .labs{
        display: flex;
        flex-wrap:wrap;
        padding-left: 15px;
        a{
          flex-grow: 2;
          width: 40%;
        }
      }
      .tit{
        text-align: left;
        padding:10px 0px 0px 15px;
        color:$cl3;
      }
      .recLabs{
        padding-left: 15px;
      }
    }
  }
}
</style>
