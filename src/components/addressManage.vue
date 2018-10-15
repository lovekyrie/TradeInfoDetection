<template>
  <div class="address">
    <div class="address-wrap" v-for="(item, index) in addressList" :key="index">
      <div class="address-info">
        <div>
          <span>收货人：{{item.receiver}}</span>
          <span>手机号：{{item.phoneNumber}}</span>
        </div>
        <div>
          <span>
            收货地址：{{item.address}}
          </span>
        </div>
      </div>
      <div class="address-operate">
        <div>
          <div>编辑</div>
          <div>删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addressList"],
  data() {
    return {};
  }
};
</script>

<style lang="less">
.address-wrap {
  background-color: #fff;
  border-bottom: 1px solid #F7F7F7;
  margin-bottom: .2rem;
  .address-info {
    border-bottom: 1px solid #E3E3E3;
    padding: 0.4rem;
    >div:nth-of-type(1){
      margin-bottom: .2rem;
      font-size: 12px;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      >span{
        width: 40%;
      }
    }
    >div:nth-of-type(2){
      font-size: 12px;
    }
  }
  .address-operate{
    padding: 0.4rem;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    >div{
      width: 50%;
      display: flex;
      display: -webkit-flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      >div{
        text-align: center;
        padding: .1rem 0;
        width: 35%;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
      }
    }
  }
}
</style>
