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
            <li><a href="./memberCoin.html">我的金币</a></li>
            <li><a href="./memberOrder.html">我的订单</a></li>
            <li><a href="./memberReport.html" style="color: white;background-color: rgb(13,85,210);">我的报告</a></li>
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
          <p style="text-align: left;"><a href="./memberReport.html">< 返回</a></p>

          <!--报告详情-->
          <div class="repDetail">
            <span class="dIcon"></span><span class="dTitle">报告详情</span>
            <!--标题-->
            <h1>福州福州服饰有限公司防晒衣检测报告</h1>
            <div class="repDetail_p1">
              <p>序列号：1231231231231231</p>
              <p>供应商名称：宁波贸信检测</p>
              <p>质检产品地域：浙江 - 宁波</p>
              <p>检测项目：填写关键字</p>
            </div>
            <div class="repDetail_p2">
            <p>检测机构：宁波贸信检测</p>
            <p>质检产品名称：防晒衣</p>
            </div>
          </div>
          <div class="pdf">
            PDF
          </div>

        </div>
      </div>
    </div>

    <!--页脚-->
    <tradeFooter></tradeFooter>

  </div>

</template>

<script>
  import headerMenu from 'components/headerMenu';
  import tradeFooter from 'components/tradeFooterl';

  export default {
    data() {

      return {

      }
    },
    methods: {

    },
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
