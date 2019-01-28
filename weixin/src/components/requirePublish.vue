<template>
  <div class="publish">
    <div class="publish-item" v-for="(item, index) in releaseList" :key="index" @click="toDetail(item.mxPubResPk)">
      <div class="row-first">
        <div></div>
        <div>{{item.nm}}</div>
        <div>{{item.catNm}}</div>
        <div v-show="!item.state">
          <img :src="overdue" alt="">
        </div>
      </div>
      <div class="row-second">
        <div>{{item.contNm}}</div>
        <div>{{item.contMob}}</div>
        <div>{{item.rcdTm}}</div>
      </div>
    </div>
  </div>  
</template>

<script>
import overdue from './img/已失效.png'

export default {
  props:['releaseList'],
  data(){
    return {
      overdue,

    }
  },
    methods:{
        toDetail(val){
            window.location.href = 'detectiondetail.html?pk='+val
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
        justify-content: space-between;
        align-items: center;
      }
      .row-first{
        position: relative;
        margin-bottom: .2rem;
        >div:nth-of-type(1){
          width: 1%;
          height: 15%;
          background-color: #666;
        }
        >div:nth-of-type(2){
          width: 78%
        }
        >div:nth-of-type(3){
          color: #318DF2;
          width: 18%;
        }
        >div:nth-last-of-type(1){
          position: absolute;
          top: 0;
          right: 22%;
          width: 15%;
          >img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-width: 100%;
          }
        }
      }
      .row-second{
        font-size: 12px;
        >div:nth-of-type(1){
          margin-left: 2.5%;
          width:12%;
        }
        >div:nth-of-type(2){
          width: 45%;
        }
        >div:nth-of-type(3){
          width: 25%;
        }
      }
    }
  }
</style>
