<template>
  <div id="app">
    <div class="content">
      <div>
        <span>当前金币：</span>
        <div><span>{{currentGold}}</span></div>
      </div>
      <div class="recharge">
        <span>充值金额：</span>
        <div>
          <input type="number" v-model.number.trim="amount" placeholder="">
          <!--<input type="number" v-model="amount" placeholder="">-->

          <span>{{money}}元={{gold}}金币</span>
        </div>
      </div>
      <div>
        <span>充值后金币：</span>
        <div><span>{{totalAmount}}</span></div>
      </div>
      <div class="paytype">
        <span>付款方式</span>
        <div>
          <div><img :src="webchat" alt=""></div>
          <span>微信</span>
        </div>
      </div>
      <div>
        <div @click="pay">
          <button>确认支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webchat from './images/微信.png'

export default {
  data(){
    return {
        n:1,//充值比率,金币/人民币
        goldNum:0,//充值的金币数
        money:0,
        gold:0,
        // totalAmount:0,
      webchat,
      amount:10,
      currentGold:16,
    }
  },
    watch:{
        amount:function () {
            setTimeout(()=>{
                this.amount= this.amount.toString().indexOf('.') > -1 ? this.amount.toString().split('.')[0] : this.amount
            },200)
        }
    },
    mounted(){
      this.currentGold = this.until.getQueryString('gold')
        this.getGoldList()
    },
    methods:{
        //人民币 / 金币比例
      getGoldList(){
        this.until.get('/general/cat/getByCd?cd=81010.150')
            .then(res=>{
                this.money = res.data.arg1
                this.gold = res.data.arg2
                this.n = this.gold / this.money
            })
      },
        pay(){
            if(!this.amount){
                this.$hero.msg.show({
                            text:'金额不能为空！',
                            times:1500
                        });
                return
            }
            this.$dialog.loading.open()
            let param = {
                cd:1,
                outTradeNo:'',
                payNum:this.amount,
                // payNum:parseInt(this.amount),

                catCd:'21010.160',  //金币支付
                tradeType:'JSAPI'
            }
            this.until.postData('/pay/weixin/createOrder',JSON.stringify(param))
                .then(data=>{
                    this.$dialog.loading.close()
                    // if(res.status !== '200'){
                    //     this.$hero.msg.show({
                    //         text:res.message,
                    //         times:1500
                    //     });
                    // }
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
                                alert("支付成功");
                                // this.$emit('getNewList')
                                window.location.href = 'mygoldcoin.html'
                                //window.location.href="buyProduce.html?pid="+_goodsPk;
                            }else{
                                alert("支付失败");
                                //console.log("支付失败");
                            }
                        }
                    );
                })

        },
    },
    computed:{
        totalAmount:function (){
            // let myAmount = this.amount ? parseInt(this.amount) : 0
            let myAmount = this.amount
            this.goldNum = myAmount *this.n
            return parseInt(this.currentGold) + this.goldNum
        }
    }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .content {
      padding: 0.3rem 0.4rem 0.6rem;
      background-color: #fff;
      > div {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        &:nth-of-type(1),
        &:nth-of-type(3) {
          > div {
            color: #ff3000;
            font-size: 20px;
          }
        }
        &:nth-of-type(2) {
          > div {
            display: -webkit-flex;
            display: flex;
            /*flex-direction: row;*/
            /*flex-wrap: nowrap;*/
            align-items: center;
            select{
              padding: .2rem .3rem;
              border: 1px solid #E9E9E9;
              margin-right: 0.1rem;
            }
            > input {
              padding: .2rem .3rem;
              border: 1px solid #E9E9E9;
              /*flex: 1;*/
              width: 55%;
            }
            > span {
              color: #bbb;
              margin-left: 0.1rem;
              width: 40%;
            }
          }
        }
        &:nth-last-of-type(1) {
          margin-top: .6rem;
          > div {
            width: 100%;
            text-align: center;
            background-color: #2a8af2;
            > button {
              width: 100%;
              padding: .2rem 0;
              background-color: #2a8af2;
              color: #fff;
            }
          }
        }
        &:not(:nth-last-of-type(1)){
          margin-bottom: .3rem;
        }
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
        }
      }
      .paytype{
        >div{
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          >div{
            width: 13%;
            img{
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
              vertical-align: middle;
            }
          }
          >span{
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
