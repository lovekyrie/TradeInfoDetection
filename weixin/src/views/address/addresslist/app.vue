<template>
  <div id="app">
    <address-manage :addressList="addressList"></address-manage>
    <div class="footer">
      <div @click="toAddAddress">
        <img :src="addAddress" alt="">
        <span>
          添加地址
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import addressManage from "components/addressManage";
import addAddress from "./images/添加地址.png";

export default {
  data() {
    return {
      addAddress,
      addressList: [
        {
          receiver: "李泳",
          phoneNumber: 15988899900,
          address: "浙江省宁波市镇海区329创业社区212室"
        },
        {
          receiver: "李泳",
          phoneNumber: 15988899900,
          address: "浙江省宁波市镇海区329创业社区212室"
        }
      ]
    };
  },
  methods:{
    toAddAddress(){
      window.location.href='./addaddress.html'
    }
  },
  components: {
    addressManage
  }
};
</script>

<style lang="less">
  html,body{
    height: 100%;
    background-color: #F7F7F7;
    #app{
      height: 100%;
      .footer{
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: #2A8AF2;
        text-align: center;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        >div{
          width: 30%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items:center;
          padding: .2rem 0;
          color: #fff;
          >span{
            font-size: 16px;
            margin-left: .2rem;
          }
        }
      }
    }
  }
</style>
