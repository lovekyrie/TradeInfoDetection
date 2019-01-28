<template>
  <div class="require-list">
    <div class="require-wrap" v-for="(item, index) in requireList" :key="index" @click="toDetail(item.mxPubResPk)">
      <div>
        <span></span>
        <span>{{item.nm}}</span>
        <span>{{item.catNm}}</span>
      </div>
      <div>
        <span>{{item.contNm}}</span>
        <span>{{item.contMob}}</span>
        <span>{{item.rcdTm}}</span>
      </div>
      <div v-show="!item.state">
        <img :src="overdue" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import overdue from './images/已失效.png'
export default {
  props: {
    requireList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      overdue,
    };
  },
  methods:{
    toDetail(val){
      window.location.href = 'requiredetail.html?pk='+val
    }
  }
};
</script>

<style lang='less'>
.require-list {
  width: 1200px;
  margin: 0 auto;
  .require-wrap {
    cursor: pointer;
    padding: 40px 30px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    border-bottom: 1px solid #ddd;
    position: relative;
    > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      /*justify-content: space-around;*/
      align-items: center;
      font-size: 18px;
      &:nth-of-type(1){
        margin-bottom: 20px;
        display: flex;
        display: -webkit-flex;
        >span{
          &:nth-of-type(1){
            width: 5px;
            height: 5px;
            margin-right: 21px;
            background-color: #666;
          }
          &:nth-of-type(2){
            flex: 1;
          }
          &:nth-of-type(3){
            /*width: 46%;*/
            /*text-align: right;*/
            color: #5a7fdb;
          }

        }
      }
      &:nth-of-type(2){
        >span{
          flex:1;
          &:nth-of-type(1){
            margin-left: 24px;
          }
          &:nth-last-of-type(1){
            font-size: 16px;
            text-align: right;
            color: #d0d0d0;
          }
        }
      }
      &:nth-of-type(3){
        position: absolute;
        left: 50%;
      }
    }
  }
}
</style>
