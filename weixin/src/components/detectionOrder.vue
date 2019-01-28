<template>
  <div class="order">
    <div class="order-wrap" v-for="(item, index) in myOrderList" :key="index">
      <div class="orderno">
        <div><span>订单编号：{{item.mxOrdDetePk}}</span></div>
        <div :class="{active:item.statNm==='已完成'}"><span>{{item.statNm}}</span></div>
      </div>
      <div class="order-info">
        <h3>{{item.mxPubCheckNm}}</h3>
        <p><span>报告状态：{{item.repoStatNm}}</span></p>
        <p><span>订单二维码：</span></p>
        <div>
          <vue-qr
                  :logoSrc="logo"
                  :text="item.code"
                  :margin="0"
          ></vue-qr>
        </div>
      </div>
      <div class="order-total">
         <div><span>下单时间：{{item.crtTm}}</span></div>
        <div><span>价格：￥{{item.price}}</span></div>
      </div>
      <div class="order-operate">
        <div>
          <button @click="toDetail(item.mxOrdDetePk)">查看详情</button>
          <button class="pay" v-if="item.statCd==='80020.002'" @click="pay(item.mxOrdDetePk)">支付</button>
          <button @click="cancel(item)" v-if="item.statCd==='80020.001'">取消订单</button>
          <!--<button class="delete(item.mxOrdDetePk,index)" v-if="item.statCd==='80020.004'">删除</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import VueQr from 'vue-qr'
export default {
  props:['myOrderList','logo'],
  data(){
    return {
    }
  },
    components:{
        VueQr
    },
    methods:{
      toDetail(val){
          window.location.href = 'myorderdetail.html?pk='+val
      },
        pay(id){
          let param = {
              cd:1,
              outTradeNo:id,
              catCd:'21010.150',  //订单支付
              tradeType:'JSAPI'
          }

          this.until.postData('/pay/weixin/createOrder',JSON.stringify(param))
              .then(data=>{
                  console.log('支付提交')
                  console.log(data)
                  if(data.status!=='200'){
                      this.$hero.msg.show({
                          text:data.message,
                          times:1500
                      });
                      return
                  }
                  let that = this
                  WeixinJSBridge.invoke(
                      'getBrandWCPayRequest', {
                          "appId":data.data.appId,     //公众号名称，由商户传入
                          "timeStamp":data.data.timeStamp,         //时间戳，自1970年以来的秒数
                          "nonceStr":data.data.nonceStr, //随机串
                          "package":data.data.packageValue,
                          "signType":data.data.signType,         //微信签名方式：
                          "paySign":data.data.paySign //微信签名
                      },
                      function(res){
                          console.log(res);
                          if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                              // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                              that.$hero.msg.show({
                                  text:'支付成功！',
                                  times:1500
                              });
                              that.$emit('getNewList')
                              //window.location.href="buyProduce.html?pid="+_goodsPk;
                          }else{
                              alert("支付失败");
                              //console.log("支付失败");
                          }
                      }
                  );
              })
        },
        cancel(info){
          console.log(info)

            this.until.postData('/prod/mxordete/edit',JSON.stringify(info))
                .then(res=>{
                    if(res.status=='200'){
                        info.statCd = '80020.005'
                        info.statNm = '已取消'
                        this.$hero.msg.show({
                            text:'取消成功',
                            times:1500
                        });
                    }else {
                        this.$hero.msg.show({
                            text:res.message,
                            times:1500
                        });
                    }

                })
        }
  }
}
</script>

<style lang='less'>
.order-wrap{
  background-color: #fff;
  margin-bottom: .2rem;
  img{
    width: 2.5rem;
  }
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
