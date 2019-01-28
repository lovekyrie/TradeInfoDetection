<template>
  <div class="partner">
    <div class="partner-wrap" v-for="(item, index) in partnerList" :key="index">
      <div>
        <span>{{item.nm}}</span>
        <span>{{item.catNm}}</span>
      </div>
      <div>
        <span>{{item.rmks}}</span>
      </div>
      <div>
        <span>{{item.contNm}}</span>
        <span>{{item.contMob}}</span>
        <span>{{item.crtTm}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['partnerList'],
  data(){
    return {
      
    }
  }
}
</script>

<style lang='less'>
  .partner-wrap{
    padding: .3rem;
    background-color: #fff;
    border-bottom: 1px solid #EEE;
    >div{
      display: -webkit-flex;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &:nth-of-type(1){
        margin-bottom: .2rem;
        font-size: 16px;
        >span:nth-of-type(1){
          width: 80%;
        }
        >span:nth-of-type(2){
          width: 20%;
        }
      }
      &:nth-of-type(2){
        margin-bottom: .2rem;
        color: #AAA;
      }
      &:nth-of-type(3){
        >span:nth-of-type(1){
          width: 25%;
        }
        >span:nth-of-type(2){
          width: 35%;
        }
        >span:nth-of-type(3){
          width: 35%;
          text-align: right;
        }
      }
    }
  }
</style>
