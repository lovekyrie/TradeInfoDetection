<template>
  <div class="address">
    <div class="address-wrap" :class="{active:addrPk==item.sysAddrPk}" @click="choose(item.sysAddrPk)" v-for="(item, index) in addressList" :key="index">
      <div><span>收货人：</span>{{item.receNm}}</div>
      <div><span>联系电话：</span>{{item.receMob}}</div>
      <div><span>详细地址：</span><span>{{item.provNm}}{{item.cityNm}}{{item.distNm}}{{item.streetNm}}{{item.addrDtl}}</span></div>
      <img :src="addrActive" v-if="addrPk==item.sysAddrPk"/>
    </div>
  </div>
</template>

<script>
  import addrActive from "./images/选中.png";
export default {
  props: ["addressList",'addrPk'],
  data() {
    return {
      addrActive,
    };
  },
  methods: {
    choose(item) {
      this.$emit('changeAddr',item)
    }
  }
};
</script>

<style lang='less'>
.address {
  margin-top: 20px;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /*justify-content: space-between;*/
  .address-wrap {
    padding: 20px 20px 30px;
    width: 335px;
    height: 160px;
    margin-right: 15px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    position: relative;
    img{
      position: absolute;
      right: 0;
      bottom: 0;
    }
    > div {
      color: #666666;
      width: 100%;
      margin: 4px 0;
      line-height: 26px;
      /*overflow: hidden;*/
      display: flex;
      display: -webkit-flex;
      span{
        /*display: block;*/
        /*float: left;*/
        /*width: auto;*/
        &:nth-child(2){
          flex: 1;
        }
      }

    }
  }
  .active {
    border-color: #0d55d2;

  }
}
</style>
