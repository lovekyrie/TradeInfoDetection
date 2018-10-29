<template>
  <div class="detection-list">
    <div class="detection-wrap" v-for="(item, index) in detectionList" :key="index">
      <div class="detection-title">
        <span></span>
        <span>{{item.title}}</span>
      </div>
      <div class="detection">
        <div class="detection-item" v-for="(product, index) in item.Arr" :key="index">
          <div>
            <img :src="product.productImg" alt="">
          </div>
          <span>{{product.name}}</span>
          <span>销量：{{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['detectionList'],
  data(){
    return {

    }
  }
}
</script>

<style lang='less'>
.detection-wrap{
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
      >div{
        width: 230px;
        img{
          height: auto;
          width: auto;
          max-height: 100%;
          max-width: 100%;
          vertical-align: middle;
        }
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
