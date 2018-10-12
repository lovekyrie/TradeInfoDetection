<template>
  <div class="order">
    <div class="order-wrap" v-for="(item, index) in myOrderList" :key="index">
      <div class="orderno">
        <div><span>订单编号：{{item.orderNo}}</span></div>
        <div :class="{active:item.state==='已完成'}"><span>{{item.state}}</span></div>
      </div>
      <div class="order-info">
        <h3>{{item.title}}</h3>
        <p><span>报告状态：{{item.uploadState}}</span></p>
        <p><span>订单二维码：</span></p>
        <div>
          <img :src="item.twoCode" alt="">
        </div>
      </div>
      <div class="order-total">
         <div><span>发布时间：{{item.releaseDate}}</span></div>
        <div><span>价格：￥{{item.price}}</span></div>
      </div>
      <div class="order-operate">
        <div>
          <button>查看详情</button>
          <button class="pay" v-if="item.state==='代付款'">支付</button>
          <button class="cancel" v-if="item.state==='已下单'">取消订单</button>
          <button class="delete" v-if="item.state==='已完成'">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['myOrderList'],
  data(){
    return {

    }
  }
}
</script>

<style lang='less'>
.order-wrap{
  background-color: #fff;
  margin-bottom: .2rem;
  >div{
    padding: .3rem .4rem;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    &:nth-of-type(1),
    &:nth-of-type(3){
      >div:nth-of-type(1){
        width: 50%;
      }
      >div:nth-of-type(2){
        width: 50%;
        text-align: right;
        color: #ff3300;
      }
    }
    &:nth-of-type(1){
      >div.active{
        color: #7F7F7F;
      }
    }
    &:nth-of-type(2){
      flex-wrap: wrap;
      h3,p,div{
        width: 100%;
      }
      h3{
       font-weight: 400;
      }
      p{
        font-size: 14px;
        color: #A6A6A6;
      }
    }
    &:nth-of-type(3){
      >div:nth-of-type(1){
        font-size: 14px;
        color: #A6A6A6;
      }
    }
    &:nth-last-of-type(1){
      justify-content: flex-end;
     >div{
       display: -webkit-flex;
       display: flex;
       flex-direction: row;
       flex-wrap: nowrap;
       justify-content: space-around;
       >button{
         padding:.1rem .3rem;
         border: 1px solid #D4D4D4;
         border-radius: 5px;
         &:not(:nth-last-of-type(1)){
           margin-right: .3rem;
         }
       }
       .pay{
         border: 0;
         background-color: #ff3300;
         color: #fff;
       }
     }
    }
  }
}
</style>
