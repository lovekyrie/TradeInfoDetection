<template>
  <div class="talent-list">
    <div class="talent-wrap" v-for="(item, index) in recruitList" :key="index"  @click="toDetailLink(item.taleMxPubTalePk)">
      <div>
        <span></span>
        <span>{{item.talePost}}</span>
        <span>{{item.persNm}}</span>
      </div>
      <div>
        <span>{{item.taleMob}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recruitList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods:{
    toDetailLink(val){
      window.location.href = 'newproducttalentd.html?pk='+val
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
      color: #666666;
      &:nth-of-type(1){
        margin-bottom: 15px;
        >span{
          &:nth-of-type(1){
            width: 5px;
            height: 5px;
            margin-right: 10px;
            background-color: #0d55d2;
          }
          &:nth-of-type(2){
            width: 50%;
            color: #5a7fdb;

          }
          &:nth-of-type(3){
            width: 46%;
            text-align: right;
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
