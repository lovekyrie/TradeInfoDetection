<template>
  <div class="publish">
    <div class="publish-item" v-for="(item, index) in releaseList" :key="index" @click="toDetail(item.mxComuPk)">
      <div class="row-first">
        <div></div>
        <div>{{item.nm}}</div>
      </div>
      <div class="row-second">
        <div>下载金币数：{{item.price}}金币</div>
        <div>{{item.crtTm}}</div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props:['releaseList'],
  data(){
    return {
      overdue,

    }
  },
    methods:{
        toDetail(val){
            window.location.href = 'communicationDetail.html?pk='+val
        }
    }
}
</script>

<style lang="less">
  .publish{

    background-color: #fff;
    .publish-item{
      padding: .3rem;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border-bottom: 1px solid #F5F5F5;
      >div{
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        align-items: center;
      }
      .row-first{
        /*position: relative;*/
        margin-bottom: .2rem;
        >div:nth-of-type(1){
          width: 3px;
          margin-right: 7px;
          height: 3px;
          background-color: #666;
        }
        >div:nth-of-type(2){
          width: 78%
        }
      }
      .row-second{
        font-size: 12px;
        display: -webkit-flex;
        display: flex;
        >div:nth-of-type(1){
          margin-left: 10px;
          /*width:12%;*/
        }
        >div:nth-of-type(2){
          flex: 1;
          text-align: right;
        }
        /*>div:nth-of-type(3){*/
          /*width: 25%;*/
        /*}*/
      }
    }
  }
</style>
