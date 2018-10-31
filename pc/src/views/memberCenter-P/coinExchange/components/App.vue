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
          <p style="text-align: left;padding-left: 20px;margin-bottom: 30px;">
            <a href="./memberCoin.html">< 返回</a>
          </p>
          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">我的兑换</li>
            <li class="line"><span></span></li>
          </ul>

          <!--兑换列表-->
          <div class="exchange">
            <ul>
              <li>
                <span class="excImg"><a href="#"> <img src="../img/我的兑换.png" alt="物品图"></a></span>
                <span class="excDes">河北纺织品有限公司四件套检测报告</span>
                <span class="price">200金币</span>
                <a class="exchangeButton" href="#">立即兑换</a>
              </li>
              <li>
                <span class="excImg"><a href="#"> <img src="../img/我的兑换.png" alt="物品图"></a></span>
                <span class="excDes">河北纺织品有限公司四件套检测报告</span>
                <span class="price">200金币</span>
                <a class="exchangeButton" href="#">立即兑换</a>
              </li>
              <li>
                <span class="excImg"><a href="#"> <img src="../img/我的兑换.png" alt="物品图"></a></span>
                <span class="excDes">河北纺织品有限公司四件套检测报告</span>
                <span class="price">200金币</span>
                <a class="exchangeButton" href="#">立即兑换</a>
              </li>
            </ul>
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
      return {}
    },
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
