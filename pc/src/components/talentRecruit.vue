<template>
  <div class="talent-list">
    <div class="talent-wrap" v-for="(item, index) in talentList" :key="index"  @click="toDetailLink(item.mxPubRecrPk)">
      <div>
        <span></span>
        <span>{{item.nm}}</span>
        <span>{{item.entpNm}}</span>
      </div>
      <div>
        <span>{{item.frSala}}-{{item.toSala}}元/月</span>
        <span>{{item.mob}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    talentList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods:{
    toDetailLink(val){
      window.location.href='../buyers/recruitdetail.html?pk='+val
    }
  }
};
</script>

<style lang='less'>
.talent-list {
  width: 1200px;
  margin: 0 auto;
  .talent-wrap {
    cursor: pointer;
    padding: 30px 30px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    border-bottom: 1px solid #ddd;
    > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      /*justify-content: space-around;*/
      align-items: center;
      font-size: 18px;
      &:nth-of-type(1){
        margin-bottom: 15px;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        >span{
          &:nth-of-type(1){
            width: 5px;
            height: 5px;
            background-color: #0d55d2;
            margin-right: 21px;
          }
          &:nth-of-type(2){
            flex: 1;
            color: #5a7fdb;
          }
          &:nth-of-type(3){

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
            /*color: #d0d0d0;*/
          }
        }
      }
    }
  }
}
</style>
