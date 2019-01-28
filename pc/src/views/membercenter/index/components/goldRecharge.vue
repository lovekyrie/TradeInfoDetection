<template>
  <div class="goldrecharge" v-loading="loading">
    <el-dialog
      title="请用微信扫描二维码支付"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <vue-qr
        :text="wxCode"
        :size="size"
        :margin="0"
      ></vue-qr>
    </el-dialog>

          <p @click="toMyGold" style="text-align: left;" class="cursor">
            <i class="el-icon-arrow-left"></i> 返回
          </p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">金币充值</li>
            <li class="line"><span></span></li>
          </ul>

          <!--充值详情-->
          <div class="rechargeDetail">
            <div>当前金币：<span style="color: red;font-size: 22px;margin-left: 30px">{{payBefore}}</span></div>
            <div>充值金额：
              <input class="rechargeInput" v-model="amount">
              <!--<input class="rechargeInput" v-model.number.trim="amount">-->
              <span>{{money}}元={{gold}}金币</span>
            </div>
            <div>充值后金币：<span style="color: red;font-size: 22px;margin-left: 16px">{{payAfter}}</span></div>

            <form>
              <div>支付方式：
                <el-radio v-model="pay" :label="item.value" v-for="item in payList" :key="item.value"><img :src="item.nm"></el-radio>
                <!--<el-radio v-model="pay" label="weixin"><img :src="webchat"></el-radio>-->
                <!--<el-radio v-model="pay" label="zhifubao"><img :src="alipay"></el-radio>-->
              </div>
            </form>

          </div>
          <button class="button1" @click="toPay()">确认支付</button>
          <button class="button2" @click="cancel()">取消</button>
        </div>
</template>

<script>
import alipay from "../images/支付宝.png";
import webchat from "../images/微信.png";
import VueQr from 'vue-qr'
export default {
  data() {
    return {
      loading:false,
      dialogVisible:false, //二维码弹窗
      size:200,
      wxCode:'',
      timer:null, //定时器
      myTime:'',
      time:60,  //多久不再支付,秒钟
      times:2000,  //间隔多久获取一次支付状态,毫秒
      logPk:'', //获取支付状态的pk
      alipay,
      webchat,
      n:1,//充值比率,金币/人民币
      money:0,
      gold:0,
      payList:[
        {
          nm:webchat,
          value:0
        },
        // {
        //   nm:alipay,
        //   value:1
        // }
      ],
      pay: 0,
      amount: 10,
      payBefore: 0,
    };
  },
  watch:{
    amount:function () {
      setTimeout(()=>{
        // this.amount= this.amount.toString().indexOf('.') > -1 ? this.amount.toString().split('.')[0] : this.amount
      },200)
    }
  },
  computed:{
    payAfter:function () {
      return this.payBefore + this.amount * this.n
    }
  },
  mounted(){
    this.getGoldList()
    this.getGold()
  },
  methods: {
    toPay(){
      if(!this.amount){
        this.$message({
          message:'金额不能为空！',
          type:'warning'
        });
        return
      }
      this.loading = true
      let param = {
        cd:1,
        outTradeNo:'',
        payNum:this.amount,
        // productId:'1589654451111',
        catCd:'21010.160',  //金币支付
        tradeType:'NATIVE'
      }
      this.until.postData('/pay/weixin/createOrder',JSON.stringify(param))
        .then(data=>{
          this.loading = false
          if(data.status=='200'){
            console.log(data)
            this.myTime = this.time
            this.dialogVisible = true
            this.wxCode = data.data.url
            this.logPk = data.data.logPk
            this.timer = setInterval(this.count,this.times)
          }
        })

    },
    count(){
      this.myTime = (this.myTime*1000 - this.times)/1000
      if(this.myTime>0){
        console.log(this.time)
        this.until.get('/prod/log/ordLog?pk='+this.logPk)
          .then(res=>{
            if(res.status == 200){
              this.dialogVisible = false
              this.getGold()
              clearInterval(this.timer);
              this.$message({
                message:'支付成功！',
                type:'success'
              });
            }
          })

      }else {
        this.myTime = this.time
        this.dialogVisible = false
        clearInterval(this.timer);
        this.$confirm('支付超时，请重新点击支付')
          .then(_ => {
            done();
          })
          .catch(_ => {});

      }

    },
    //人民币 / 金币比例
    getGoldList(){
      this.until.get('/general/cat/getByCd?cd=81010.150')
        .then(res=>{
          this.money = res.data.arg1
          this.gold = res.data.arg2
          this.n = this.gold / this.money
        })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getGold(){

      this.until.get('/prod/mxpers/listSelf')
        .then(res=>{
          if(res.status == 200){
            this.payBefore = res.data.items[0].goldQty

          }else {
            this.$message({
              message:res.message,
              type:'warning'
            });
          }
        })
    },
    cancel() {
      this.$router.back(-1)
    },
    toMyGold(){
      this.$router.back(-1)
    }
  },
  components:{
    VueQr
  },
};
</script>

<style lang='less'>
  .el-dialog--small{
    width: 280px!important;
  }
.goldrecharge {
  flex: 5.5;
  background-color: white;
  padding: 20px 20px;
  text-align: center;
  .mainTitle {
    margin-top: 20px;
    li {
      display: inline-block;
      height: 20px;

      span {
        display: block;
        width: 130px;
        height: 1px;
        background-color: rgb(204, 204, 204);
      }
    }
    .line {
      padding-top: 10px;
    }
    //标题字体
    .title {
      font-size: 20px;
      font-weight: 400;
      margin-left: 40px;
      margin-right: 40px;
    }
  }

  //  充值详情
  .rechargeDetail {
    padding-top: 30px;
    text-align: left;
    width: 70%;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 300;
    color: rgb(111, 111, 111);
    line-height: 4em;

    .rechargeInput {
      width: 286px;
      height: 38px;
      border: 1px solid rgb(231, 231, 231);
      padding-left: 20px;
      margin-right: 20px;
      margin-left: 20px;
    }

    .el-radio {
      margin-left: 5%;
    }
  }

  //  按钮样式
  .button1,
  .button2 {
    padding: 8px 18px;
    border-radius: 4px;
    width: 100px;
    color: rgb(131, 131, 131);
    margin-top: 30px;
  }

  .button1 {
    color: white;
    background-color: rgb(13, 85, 210);
    margin-right: 20px;
  }
}
</style>
