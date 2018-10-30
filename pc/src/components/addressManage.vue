<template>
  <div class="address">
    <div class="address-wrap" :class="{active:selectItem==item}" @click="choose(item)" v-for="(item, index) in addressList" :key="index">
      <div><span>收货人：{{item.name}}</span></div>
      <div><span>联系电话：{{item.phone}}</span></div>
      <div><span>详细地址：{{item.address}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addressList"],
  data() {
    return {
      selectItem: null
    };
  },
  methods: {
    choose(item) {
      this.selectItem = item;
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
  justify-content: space-between;
  .address-wrap {
    padding: 20px 20px 30px;
    width: 375px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    > div {
      width: 100%;
    }
  }
  .active {
    border-color: #0d55d2;
  }
}
</style>
