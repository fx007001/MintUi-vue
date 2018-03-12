<template>
  <div class="learingIndexList">
    <mt-header title="数据分析">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="selectBox">
      <!--<select>-->
        <!--<option value ="all">全部分类</option>-->
        <!--<option value ="saab">Saab</option>-->
        <!--<option value="opel">Opel</option>-->
        <!--<option value="audi">Audi</option>-->
      <!--</select>-->

      <!--<select>-->
        <!--<option value ="all">全部等级</option>-->
        <!--<option value ="1">初级</option>-->
        <!--<option value="2">中级</option>-->
        <!--<option value="3">高级</option>-->
      <!--</select>-->
      <span @click="selectedOpen('type')">{{typeTitle}}</span>
      <span @click="selectedOpen('rank')">{{rankTitle}}</span>
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
    </div>
    <!--<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>-->
    <ClassItem :dataes="crouseDataes"></ClassItem>
    <learingFooter></learingFooter>
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
        actions:[{name:'高级',method:function () {console.log()}}, {name:'中级',method:function () {}}, {name:'低级',method:function () {}}],
        sheetVisible:false,
        slots: [{
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'center'
        }]
      }
    },
    methods:{
      // 初始化数据
      init: function () {
        IndexApi.coursesItem('', (ret, err) => {
          if (err) {
            console.log('获取数据失败！')
          }else{
            this.crouseDataes = ret.data
          }
        })
      },
      ck:function(){
        console.log(123)
      },
      // 弹出下拉
      selectedOpen: function(obj){
        if (obj === 'rank') {

          this.sheetVisible = true
        }else{
          this.actions = {}
          this.sheetVisible = true
        }
      },
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
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
    padding:10px;
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
    span{
      flex: 1;
    }
    span:first-child{
      border-right: solid 1px $cl5;
    }
  }
}
</style>
