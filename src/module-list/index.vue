<template>
  <div class="learingList">
    <div @click="goSeach"><mt-search v-model="searchValue"></mt-search></div>
    <div class="listBox">
      <mt-navbar v-model="selected">
        <mt-tab-item v-for="(item, index) in listItemData" :key="index" :id="index" on-click="selected()">{{item.name}}</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected" >
        <mt-tab-container-item v-for="(item, index) in listItemData" :key="index" :id="index">
          <div class="banner" v-if="listInfoData.carousel_imgs"><img :src="imgBaseUrl + listInfoData.carousel_imgs['1']" alt=""></div>
          <div class="labs">
            <router-link v-for="(it, ind) in listInfoData.parent" :key="ind"  :to="'/list/all/' + it.id">{{it.name}}</router-link>
          </div>
          <div class="tit">推荐课程</div>
          <div class="recLabs">
            <router-link v-for="(it, ind) in listInfoData.courses" :key="ind"  :to="'/detail/' + it.id">{{it.name}}</router-link>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <learingFooter></learingFooter>
  </div>
</template>
<script>
  import learingFooter from './../components/footer.vue'
  import IndexApi from '../api/learingInd.js'
  import cfg from './../utils/config'

  export default {
    name: 'learingList',
    data () {
      return {
        imgBaseUrl:cfg.imgBaseUrl,
        searchValue: '',    // 搜索关键词
        selected: 0,        // 分类选项
        listItemData: [],   // 分类列表
        listInfoData: []    // 当前分类信息
      }
    },
    methods:{
      init: function() {
        this.getCourseItem()
      },
      // 分类列表
      getCourseItem: function(obj){
        let pam = obj ? obj : ''
        IndexApi.listItem({parent_id: pam},(ret, err) => {
          if (err) {
            console.log(err)
          }else{
            this.listItemData = ret.data
            this.selected = ret.data[0].id
            this.getCourseInfo(this.selected)
          }
        })
      },
      // 首页搜索
      goSeach: function() {
        this.$router.push({path:'/search/'})
      },
      // 分类详情
      getCourseInfo: function(obj){
        let pam = obj ? obj : ''
        IndexApi.listInfo({id: pam},(ret, err) => {
          if (err) {
            console.log(err)
          }else{
            this.listInfoData = ret.data
          }
        })
      }
    },
    // 选项切换执行
    watch: {
      selected(curVal, oldVal) {
        this.getCourseInfo(curVal)
      },
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
