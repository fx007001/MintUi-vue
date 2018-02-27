<template>
  <div class="learingIndexList">
    <mt-header title="数据分析">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="selectBox"><span @click="selectedOpen('type')">全部分类</span><span  @click="selectedOpen('rank')">全部等级</span></div>
    <!--<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>-->
    <ClassItem :dataes="data"></ClassItem>
    <learingFooter></learingFooter>
  </div>
</template>
<script>
  import ClassItem from './../components/class-Item.vue'
  import learingFooter from './../components/footer.vue'

  export default {
    name: 'learingIndexList',
    data () {
      return {
        data: [1, 4, 3, 3, 3, 3, 3, 3],
        slots: [{
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'center'
        }]
      }
    },
    methods:{
      selectedOpen: function(obj){
        console.log(obj)
      },
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
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
.learingIndexList{
  text-align: center;
  .selectBox{
    font-size: 14px;
    background: $cl1;
    padding:10px;
    color:$cl9;
    display: flex;
    span{
      flex: 1;
    }
    span:first-child{
      border-right: solid 1px $cl5;
    }
  }
}
</style>
