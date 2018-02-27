<template>
  <div class="courseSearch">
    <mt-search v-model="searchValue" placeholder="请输入搜索内容"></mt-search>
    <div class="searchBox">
      <div class="searchHot" v-if="searchResults ===  ''">
        <div class="title">热门搜索</div>
        <div class="labs" @click="searchHotCk(PHP)">
          <li>AngularJs</li><li>PHP</li><li>Java</li><li>MySQL</li><li>C++</li><li>ajax</li>
          <li>PHP</li><li>Java</li><li>C++</li><li>JavaScript</li>
        </div>
      </div>
      <div class="searchResult" v-if="searchResults != ''">
        <div class="title">搜索结果</div>
        <div class="searchResultCont">
          <ClassItem :dataes="data"></ClassItem>
        </div>
      </div>
    </div>
    <learingFooter></learingFooter>
  </div>
</template>
<script>
  import ClassItem from './../components/class-Item.vue'
  import learingFooter from './../components/footer.vue'
  export default {
    name: 'courseSearch',
    data () {
      return {
        data: [1,2,4,5,6,4,3],
        searchValue: '',
        searchResults: ''
      }
    },
    methods:{
      searchHotCk:function(obj){
        this.searchValue = 'obj'
        this.searchResults = 'obj'
      }
    },
    components: {
      ClassItem,
      learingFooter
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .courseSearch{
    .searchBox{
      padding:15px;
      .title{
        line-height: 40px;
        color:$cl9;
        font-size: 14px;
        border-bottom: solid 1px $cl5;
      }
      .searchHot{
        .labs{
          display: flex;
          flex-wrap:wrap;
          li{
            background:$cl5;
            color:$cl3;
            padding:3px 10px;
            margin: 10px 10px 0px 0px;
          }
        }
      }
      .searchResultCont{

      }
    }
  }
</style>
