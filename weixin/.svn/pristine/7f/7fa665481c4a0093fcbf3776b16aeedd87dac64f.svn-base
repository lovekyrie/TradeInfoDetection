<template>
<div class="hr-content">
  <div class="hr-item" @click="toDetailLink()" v-for="(item, index) in developList" :key="index">
    <div class="hr-theme">
      <div>{{item.title}}</div>
      <div></div>
      <div>{{item.name}}</div>
    </div>
    <div class="hr-info">
      <div>联系电话：{{item.phone}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:['developList'],
  data(){
    return {

    }
  },
  methods:{
    toDetailLink(){
      // window.location.href='../hr/hrdetailinfo.html'
    }
  }
}
</script>

<style lang="less">
  .hr-content{
    background-color: #fff;
    .hr-item{
      padding: .3rem;
      border-bottom: 1px solid #F5F5F5;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      >div{
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        >div{
          width: 50%;
        }
      }
      >.hr-theme{
        >div:nth-of-type(1){
          width: 38%;
          color: #4C9AF4;
        }
        >div:nth-of-type(2){
          background-color: #D2D2D2;
          width: .3%;
        }
        >div:nth-of-type(3){
          width: 49.9%;
        }
        margin-bottom: .2rem;
      }
      >.hr-info{
        font-size: 12px;
      }
    }
  }
</style>
