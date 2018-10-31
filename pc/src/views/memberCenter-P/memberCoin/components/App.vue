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

          <!--金币信息-->
          <div class="coinMsg">
            <div>我的金币：<span style="color: red;font-size: 28px">16</span>
              <span class="coinMsg_b">
                <button class="button1" @click="recharge()">充值</button>
                <button class="button2" @click="exchange()">兑换</button>
                <span>兑换说明</span>
              </span>
            </div>
            <span class="coinTitle">金币交易记录</span>
          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="tradingWays"
              label="交易方式"
              align="center"
              :filters="tFilter"
              :filter-method="tFilterMethod"
            >
            </el-table-column>
            <el-table-column
              prop="coinNum"
              label="金币数"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="tradingTime"
              label="交易时间"
              align="center"
            >
            </el-table-column>
          </el-table>


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
        search: {
          stitle: '',
        },
        tFilter:[
          {text:'下载报告',value:'下载报告'},
          {text:'充值',value:'充值'},
          {text:'在线阅读',value:'在线阅读报告'},
          ],
        tableData: [{
          tradingWays: '下载报告',
          coinNum: '消耗2金币',
          tradingTime: '2018-06-06 13:00:16',
        },{
          tradingWays: '在线阅读报告',
          coinNum: '消耗2金币',
          tradingTime: '2018-06-06 13:00:16',
        },{
          tradingWays: '充值',
          coinNum: '充值20金币',
          tradingTime: '2018-06-06 13:00:16',
        },
        ]
      }
    },
    components: {
      headerMenu,
      tradeFooter,
    },
    methods: {
      recharge(){
        window.location.href='./coinRecharge.html';
      }
      ,
      exchange(){
        window.location.href='./coinExchange.html';
      },
      tFilterMethod(value,row){
        return row.tradingWays == value;
      }
    }
  }
</script>

<style scoped>

</style>
