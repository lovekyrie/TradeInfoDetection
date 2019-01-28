<template>
  <div class="detection-list">
    <!--<div class="detection-wrap" v-for="(item, index) in detectionList" :key="index">-->
      <div class="detection">
        <div class="detection-item" v-for="(product, index) in detectionList" :key="index" @click="toDetail(product.mxPubCheckPk,product.mxPubThrserPk)">
          <div :style="'background-image:url('+product.imgUrl+')'">
            <!--<img :src="product.imgUrl" alt="">-->
          </div>
          <span>{{product.nm}}</span>
          <span>销量：{{product.sela}}</span>
        </div>
      </div>
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    props:['detectionList','detail'],
    data(){
      return {
      }
    },
    mounted(){
    },
    methods:{
      toDetail(val1,val2){
        let val = val1 ? val1:val2
        window.location.href = this.detail+'?pk='+val
      },

    },
    watch:{

    }
  }
</script>

<style lang='less'>
  .detection-list{
    .detection-title{
      padding: 10px 0;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      >span{
        &:nth-of-type(1){
          margin-left: 3%;
          width: 10px;
          height: 25px;
          background-color: #0d55d2;
        }
        &:nth-of-type(2){
          width: 95%;
          font-size: 18px;
        }
      }
    }
    .detection{
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      >div{
        margin-left: 20px;
        margin-bottom: 20px;
        width: 230px;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        align-content: center;
        flex-wrap: wrap;
        cursor: pointer;
        >div{
          width: 230px;
          height: 200px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          /*display:flex;*/
          /*display: -webkit-flex;*/
          /*align-items: center;*/
          /*justify-content: center;*/
          margin-bottom: 5px;
          /*img{*/
            /*height: auto;*/
            /*width: auto;*/
            /*max-height: 100%;*/
            /*max-width: 100%;*/
          /*}*/
        }
        span{
          padding: 0 10px;
          &:not(:nth-last-of-type(1)){
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>
