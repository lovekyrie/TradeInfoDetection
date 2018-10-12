<template>
  <div id="app">
    <div class="header">
      <img :src="productInfo" alt="">
    </div>
    <div class="detection-title">
      <div>{{title}}</div>
      <span>联系方式：{{linked}}</span>
    </div>
    <div class="product-detail">
      <h3>商品详情</h3>
      <div>
        <span>产品参数：{{proParam}}</span>
      </div>
      <span>联系人：{{linkedMan}}</span>
      <span>联系电话：{{linkedPhone}}</span>
    </div>
    <div class="footer">
      <foot-button :btnObj="btnObj"></foot-button>
    </div>
  </div>
</template>

<script>
import productInfo from './images/productinfo.png'
import footButton from 'components/footButton'
export default {
  data(){
    return {
      productInfo,
      title:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
      linked:'0574-88889999',
      proParam:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
      linkedMan:'张三',
      linkedPhone:'13599990000',
      btnObj:{
        btnName:'立即预约',
        src:'',
      }
    }
  },
  methods:{

  },
  components:{
    footButton,
  }
}
</script>

<style lang='less'>
  html,body{
    height: 100%;
    background-color: #F7F7F7;
    #app{
      height: 100%;
      .header{
        img{
          vertical-align: bottom;
        }
      }
      .detection-title{
        padding: .3rem;
        background-color: #fff;
        >div{
          font-size: 16px;
          margin-bottom: .3rem;
        }
        >span{
          color: #A7A7A7;
        }
      }
      .product-detail{
        margin-top: .3rem;
        padding: .3rem;
        background-color: #fff;
        h3{
          margin-bottom: .3rem;
          font-weight: 400;
          font-size: 16px;
        }
        div{
          margin-bottom: .3rem;
          color: #A7A7A7;
        }
        span{
          color:#A7A7A7;
          &:nth-of-type(2){
            margin-left: .5rem;
          }
        }
      }
    }
  }
</style>
