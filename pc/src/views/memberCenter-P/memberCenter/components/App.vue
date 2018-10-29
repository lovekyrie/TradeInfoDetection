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
            <li><a href="./deviceMsg.html">设备信息</a></li>
            <li><a href="./addressManager.html">收货地址管理</a></li>
            <li><a href="./changePwd.html">修改密码</a></li>

          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">

          <!--右边上半部分-->
          <div class="rightTop">
            <div class="right_a">
              <img src="../img/默认头像.png">

            </div>
            <div class="right_b">
              <p>账号：麻花</p>
              <p>手机号：13541231231</p>
              <p>邮箱：424242@163.com&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="./memberaccountManage.html" style="color: rgb(90,127,219);">账号管理 ></a>
              </p>

            </div>

            <div class="right_c">
              <img src="../img/我的推荐码.png">
              <p style="color: rgb(151,151,151)">我的推荐码</p>

            </div>
          </div>

          <!--右边下半部分-->
          <div class="rightBottom">
            <!--右下第一行-->
            <div class="rightBottom_a">

              <div class="rightBottom_a_left"><img src="../img/我的金币.png" alt="我的金币" align="left" style="margin-right: 30px">
                <div style="padding-top: 10px">
                <p style="margin-bottom: 5px;font-size: 16px">我的金币</p>
                <p><a href="#" style="font-size: 14px">查看消费详情 ></a></p>
                </div>
              </div>
              <div class="rightBottom_a_right"><img src="../img/我的订单.png" alt="我的订单" align="left" style="margin-right: 30px">
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的订单</p>
                  <p><a href="#" style="font-size: 14px">查看订单状态 ></a></p>
                </div>
              </div>

            </div>

            <!--右下第二行-->
            <div class="rightBottom_b">
              <div class="rightBottom_b_left"><img src="../img/我的报告.png" alt="我的报告" align="left" style="margin-right: 30px">
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的报告</p>
                  <p><a href="#" style="font-size: 14px">查看报告状态 ></a></p>
                </div>
              </div>

              <div class="rightBottom_b_right"><img src="../img/人才信息.png" alt="人才信息" align="left" style="margin-right: 30px">
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">人才信息</p>
                  <p><a href="#" style="font-size: 14px">查看人才信息 > ></a></p>
                </div>
              </div>
            </div>

            <!--右下第三行-->
            <div class="rightBottom_c">
              <div class="rightBottom_c_left"><img src="../img/我的入驻.png" alt="我的入驻" align="left" style="margin-right: 30px">
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的入驻</p>
                  <p><a href="#" style="font-size: 14px">查看入驻情况 ></a></p>
                </div>
              </div>
              <div class="rightBottom_c_right"></div>
            </div>
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
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
