<template>
  <div class="goldrecharge">
          <p @click="toMyGold" style="text-align: left;">
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
            <div>充值金额：<input class="rechargeInput" v-model="values" @blur="count()"><span>1元=1金币</span></div>
            <div>充值后金币：<span style="color: red;font-size: 22px;margin-left: 16px">{{payAfter}}</span></div>

            <form>
              <div>支付方式：
                <el-radio v-model="pay" label="weixin"><img :src="webchat"></el-radio>
                <el-radio v-model="pay" label="zhifubao"><img :src="alipay"></el-radio>
              </div>
            </form>

          </div>
          <button class="button1">确认支付</button>
          <button class="button2" @click="cancel()">取消</button>
        </div>
</template>

<script>
import alipay from "../images/支付宝.png";
import webchat from "../images/微信.png";

export default {
  data() {
    return {
      alipay,
      webchat,
      pay: "1",
      values: "100",
      payBefore: "16",
      payAfter: ""
    };
  },
  beforeMount() {
    this.payAfter = Number(this.values) + Number(this.payBefore);
  },
  methods: {
    count() {
      this.payAfter = Number(this.values) + Number(this.payBefore);
    },
    cancel() {
      this.$router.back(-1)
    },
    toMyGold(){
      this.$router.back(-1)
    }
  }
};
</script>

<style lang='less' scoped>
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
