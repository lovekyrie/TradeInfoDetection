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
            <li><a href="./memberReport.html">我的报告</a></li>
            <li><a href="./memberRecommend.html">我的推荐</a></li>
            <li><a href="./memberExchange.html">我的兑换</a></li>
            <li><a href="./memberCollect.html">我的收藏</a></li>
            <li><a href="./memberInfo.html">人才信息</a></li>
            <li><a href="./deviceMsg.html" style="color: white;background-color: rgb(13,85,210);">设备信息</a></li>
            <li><a href="./addressManager.html">收货地址管理</a></li>
            <li><a href="./changePwd.html">修改密码</a></li>

          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">
          <p style="text-align: left;"><a href="./deviceMsg.html">< 返回</a></p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">设备详情</li>
            <li class="line"><span></span></li>
          </ul>

          <!--设备详情-->
          <!--标题-->
          <div class="dTitle">
            <span style="text-align: left">【转租】</span> 高价租最新服装衬衫全效检测设备一台
            <span class="titleTime">发布日期：2018-06-01</span>
          </div>

          <!--描述-->
          <div class="dDes">
            <span class="dIcon"></span><span class="dTitle_b">产品描述</span>
            <p>最新水质检测机最新水质检测机，最新水质检测机最新水质检测机最新水质检测机最新水质检测机。最新水质检测机最新水质检测机最新水质检测机
              最新水质检测机最新水质检测机最新水质检测机最新水质检测机。最新水质检测机最新水质检测机，最新水质检测机。</p>
          </div>

          <!--联系方式-->
          <div class="contactWay">
            <span class="dIcon"></span><span class="dTitle_b">联系方式</span>
            <p>联系人：张三</p>
            <p>联系方式：13999943921</p>
            <p>邮箱地址：1353@13.com</p>
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
  import tradeFooter from 'components/tradeFooter';

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
