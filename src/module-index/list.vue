<template>
  <div class="learingIndexList">
    <mt-header title="数据分析">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="selectBox">
      <ul @click="selectedOpen('type')">{{typeTitle}}
        <div v-show="sheetVisible === 'type'">
        <li v-for="it in actions" @click.stop="selectItem(it.name, it.id)">{{it.name}}</li>
        </div>
      </ul>
      <ul @click="selectedOpen('rank')">{{rankTitle}}
        <div v-show="sheetVisible === 'rank'">
          <li v-for="it in actions" @click.stop="selectItem(it.name, it.id)">{{it.name}}</li>
        </div>
      </ul>
    </div>
    <ClassItem :dataes="crouseDataes" :isLoadMores="true" :loading="loading" @getloadMore="loadMore"></ClassItem>
    <!--<learingFooter></learingFooter>-->
  </div>
</template>
<script>
  import ClassItem from './../components/class-Item.vue'
  import learingFooter from './../components/footer.vue'
  import IndexApi from '../api/learingInd.js'

  export default {
    name: 'learingIndexList',
    data () {
      return {
        crouseDataes: [],
        typeTitle: '全部分类',
        rankTitle: '全部等级',
        actions:[],
        subParams: {},
        sheetVisible:'',
        loading:false,
        noData:false
      }
    },
    methods:{
      // 初始化数据
      init: function () {
        if (this.$route.params.id){
          IndexApi.listItem({parent_id: this.$route.params.id},(ret, err) => {
            if (err) {
              console.log(err)
            }else{
              this.selectItem(ret.data.name, ret.data.id)
            }
          })
        }
        this.getCoursesItem()
      },
      //课程列表数据获取
      getCoursesItem:function(){
        this.subParams.page = 10
        this.subParams.currentPage = 1
        IndexApi.coursesItem(this.subParams, (ret, err) => {
          if (err) {
            console.log('获取数据失败！')
          }else{
            this.crouseDataes = ret.data
          }
        })
      },
      // 弹出下拉
      selectedOpen: function(obj){
        this.sheetVisible = obj
        if (obj == 'type') {
          IndexApi.listItem({parent_id: ''},(ret, err) => {
            if (err) {
              console.log(err)
            }else{
              this.actions = ret.data
              this.actions.unshift({id:'0', name:'全部分类'})
            }
          })
        }else{
          this.actions = [{id:0, name:'全部等级'},{id:3, name:'高级'}, {id:2, name:'中级'}, {id:1, name:'低级'}]
        }
      },
      // 选择分类
      selectItem:function (obj, id) {
        if(this.sheetVisible == 'type' || this.sheetVisible == ''){
          this.typeTitle =  obj
          this.subParams.category_id = id
        }else{
          this.rankTitle =  obj
          this.subParams.level = id
        }
        this.noData = false
        this.getCoursesItem()
        this.sheetVisible = ''
      },
      //加载更多
      loadMore:function(){
        if(this.noData){
          return false
        }
        this.loading = true
        this.subParams.currentPage++
        IndexApi.coursesItem(this.subParams, (ret, err) => {
          if (err) {
            console.log('获取数据失败！')
          }else{
            if(ret.data.length == 0){
              this.noData = true
              this.loading = false
              return false
            }else{
              this.loading = false
              this.crouseDataes = this.crouseDataes.concat(ret.data)
            }
          }
        })
      }
    },
    mounted:function(){
      this.init()
    },
    components: {
      ClassItem,
      learingFooter
    }
  }
</script>

<style lang="scss">
@import "../assets/baseScss";
.learingIndexList{
  text-align: center;
  .selectBox{
    font-size: 14px;
    background: $cl1;
    padding:10px 0;
    color:$cl9;
    display: flex;
    select{
      flex: 1;
      text-align: center;
      background: $cl1;
      border:none;
      border-radius: 0;
      option{
        text-align: center;
      }
    }
    select:first-child{
      border-right: solid 1px $cl5;
    }
    ul{
      flex: 1;
      position: relative;
      div{
        position: absolute;
        top:30px;
        left:0px;
        width: 90%;
        background: $cl1;
        border: solid 1px $cl5;
        border-top: 0px;
        line-height: 35px;
        padding: 0 5%;
        padding-bottom: 5px;
        li{
          border-bottom: dashed 1px $cl5;
        }
        li:first-child{
          border-top: dashed 1px $cl5;
        }
      }
    }
    ul:first-child{
      border-right: solid 1px $cl5;
    }
  }
}
</style>
