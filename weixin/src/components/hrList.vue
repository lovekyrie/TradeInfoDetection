<template>
<div class="hr-content">
  <div class="hr-item" @click="toDetailLink(item.mxPubRecrPk)" v-for="(item, index) in hrInfoList" :key="index">
    <div class="hr-theme">
      <div>{{item.nm}}</div>
      <div></div>
      <div>{{item.entpNm}}</div>
    </div>
    <div class="hr-info">
      <div>{{item.frSala}}-{{item.toSala}}元/月</div>
      <div>联系电话：{{item.mob}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:['hrInfoList'],
  data(){
    return {

    }
  },
  methods:{
    toDetailLink(val){
      window.location.href='../hr/hrdetailinfo.html?pk='+val
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
        /*justify-content: space-between;*/
        >div{
          /*width: 50%;*/
        }
      }
      >.hr-theme{
        >div:nth-of-type(1){
          color: #4C9AF4;
        }
        >div:nth-of-type(2){
          background-color: #D2D2D2;
          width: 1px;
          margin: 0 8px;
        }
        >div:nth-of-type(3){
          /*width: 49.9%;*/
        }
        margin-bottom: .2rem;
      }
      >.hr-info{
        font-size: 12px;
        >div:nth-of-type(1){
          width: 45%;
        }
        >div:nth-of-type(2){
        }
      }
    }
  }
</style>
