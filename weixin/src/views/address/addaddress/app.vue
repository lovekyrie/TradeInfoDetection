<template>
  <div id="app">
    <div class="content">
      <div>
        <span>收货人姓名</span>
        <input type="text" v-model="receiverName"></div>
      <div>
        <span>手机号码</span>
        <input type="text" v-model="phone"></div>
      <div>
        <span>省 市 区</span>
        <input type="text" v-model="province"></div>
      <div>
        <span>详细地址</span>
        <input type="text" v-model="address"></div>
    </div>
    <foot-button :btnObj="btnObj"></foot-button>
  </div>
</template>

<script>
import footButton from 'components/footButton'

export default {
  data(){
    return {
      btnObj:{
        btnName:'确定',
      },
      receiverName:'李科',
      phone:13577778888,
      province:'浙江省宁波市镇海区',
      address:'永茂西路329路'
    }
  },
  methods:{

  },
  components:{
    footButton
  }
}
</script>

<style lang="less">
  html,body{
    background-color: #F7F7F7;
    height: 100%;
    #app{
      height: 100%;
      .content{
        background-color: #fff;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        >div{
          padding: .3rem;
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          border-bottom: 1px solid #E7E7E7;
          >span{
            width: 30%;
          }
          >input{
            width: 70%;
            border: 0;
          }
        }
      }
    }
  }
</style>
