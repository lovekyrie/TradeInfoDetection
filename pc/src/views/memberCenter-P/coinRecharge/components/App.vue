<template>
  <div id="container">
    <!--页头-->
    <headerMenu></headerMenu>


    <!--中间内容-->
    <div id="main">
      <div class="inMain">
        <!--中间左侧单边栏-->
        <div class="mainLeft">
          <ul>
            <li><a style="font-size: 18px" href="./memberCenter.html">会员中心</a></li>
            <li><a href="./memberCoin.html" style="color: white;background-color: rgb(13,85,210);">我的金币</a></li>
            <li><a href="./memberOrder.html">我的订单</a></li>
            <li><a href="./memberReport.html">我的报告</a></li>
            <li><a href="./memberRecommend.html">我的推荐</a></li>
            <li><a href="./memberExchange.html">我的兑换</a></li>
            <li><a href="./memberCollect.html">我的收藏</a></li>
            <li><a href="./memberInfo.html">人才信息</a></li>
            <li><a href="./deviceMsg.html">设备信息</a></li>
            <li><a href="./addressManager.html">收货地址管理</a></li>
            <li><a href="./changePwd.html">修改密码</a></li>

          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">
          <p style="text-align: left;"><a href="./memberCoin.html">< 返回</a></p>

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
                <el-radio v-model="pay" label="weixin"><img src="../img/微信.png"></el-radio>
                <el-radio v-model="pay" label="zhifubao"><img src="../img/支付宝.png"></el-radio>
              </div>
            </form>

          </div>
          <button class="button1">确认支付</button>
          <button class="button2" @click="cancel()">取消</button>
        </div>
      </div>
    </div>

    <!--页脚-->
    <tradeFooter></tradeFooter>

  </div>

</template>

<script>
  import headerMenu from 'components/headerMenu';
  import tradeFooter from 'components/tradeFooter';

  export default {
    data() {

      return {
        pay: '1',
        values: '100',
        payBefore: '16',
        payAfter: '',
      }
    },
    beforeMount() {
      this.payAfter = Number(this.values) + Number(this.payBefore);
    },
    methods: {
      count() {
        this.payAfter = Number(this.values) + Number(this.payBefore);
      },
      cancel() {
        window.location.href = './memberCoin.html';
      }

    },
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
