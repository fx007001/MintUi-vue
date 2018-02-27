<template>
  <div class="indexHeader">
    <div class="search" ><i class="icon-search" @click="goSeach"></i> <input type="text" @blur="onblurEvent" @focus="focusEvent" :style="{width: seachWt}" v-model="searchName" placeholder="学成在线"></div>
    <mt-swipe :auto="3000">
      <mt-swipe-item><img src="../assets/banner1.png" width="100%" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/banner2.png" width="100%" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/banner3.png" width="100%" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'indexHeader',
    data () {
      return {
        searchName: '',
        seachWt: ''
      }
    },
    methods: {
      // 首页搜索
      goSeach: function() {
         console.log(this.searchName)
      },
      // 搜索处理
      onblurEvent: function() {
        if (this.searchName === '') {
          this.seachWt = '65px'
        } else {
          this.seachWt = '90%'
        }
      },
      focusEvent: function() {
          this.seachWt = '90%'
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .indexHeader{
    height: 200px;
    position: relative;
  }
  .indexHeader{
    .search{
      position: absolute;
      z-index: 99;
      width: 90%;
      left: 5%;
      top:10px;
      background: rgba(255, 255, 255, 0.9);
      color:$cl4;
      line-height: 35px;
      input{
        height: 35px;
        width: 65px;
        line-height: 35px;
        background: transparent;
        border: none;
        font-size: 16px;
        padding:0 1px;
      }
      input:focus{
        outline:medium;
        width: 85%;
      }
      i:before{
        position: relative;
        font-size: 16px;
        top:1px;
        left: 3px;
      }
    }
  }
</style>
