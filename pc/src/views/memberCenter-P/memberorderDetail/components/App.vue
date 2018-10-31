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
            <li><a href="./memberOrder.html" style="color: white;background-color: rgb(13,85,210);">我的订单</a></li>
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
          <p style="text-align: left;padding-left: 20px"><a href="./deviceMsg.html">< 返回</a></p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">订单详情</li>
            <li class="line"><span></span></li>
          </ul>

          <!--设备详情-->
          <!--订单表-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="orderNum"
              label="订单编号"
            >
              <template slot-scope="scope">
                <a :href="tableData[scope.$index].reportAddress"
                   target="_self"
                >{{tableData[scope.$index].orderNum}}
                </a>
              </template>
            </el-table-column>

            <el-table-column
              prop="serviceName"
              label="服务名称"
            >
              <template slot-scope="scope">
                <a :href="tableData[scope.$index].reportAddress"
                   target="_self"
                >{{tableData[scope.$index].serviceName}}
                </a>
              </template>

            </el-table-column>
            <el-table-column
              prop="number"
              label="数量"
              width="80px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="orderTime"
              label="下单时间"
              align="center"

            >
            </el-table-column>
            <el-table-column
              prop="status"
              label="订单状态"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="价格"
              align="center"
            >
              <template slot-scope="scope">
                <span style="color: red">{{tableData[scope.$index].price}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="repStatus"
              label="报告状态"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="订单二维码"
              align="center"
            >
              <template slot-scope="scope">
                <img :src="tableData[scope.$index].orderCodes">
              </template>
            </el-table-column>

          </el-table>

          <!--联系方式-->
          <div class="contactWay">
            <span class="dIcon"></span><span class="dTitle_b">联系方式</span>
            <p><span style="display: inline-block;width: 35%">供应商名称：宁波食品公司</span><span>质检产品名称：餐盒</span></p>
            <p><span style="display: inline-block;width: 35%">联系人：张三</span><span>联系电话：13989898989</span></p>
            <p>备注：全部都要检测全部都要检测全部都要检测全部都要检测全部都要检测全部都要检测全部都要检测</p>
          </div>

          <!--收货地址-->
          <div class="receiveAdd">
            <span class="dIcon"></span><span class="dTitle_b">收货地址</span>
            <p><span style="display: inline-block;width: 35%">联系人：张三</span><span>手机号码：13989898989</span></p>
            <p>详细地址：浙江省宁波市高新区福明路618号 516室</p>
          </div>

          <!--检测报告-->
          <div class="exaRep">
            <span class="dIcon"></span><span class="dTitle_b">检测报告</span>
            <span class="dowButton"><a href="#">下载报告</a></span>
            <p><span style="display: inline-block;width: 35%">报告编号：MT0980809</span><span>检测机构：宁波贸信检测</span></p>
            <p><span style="display: inline-block;width: 35%">供应商名称：宁波食品公司</span><span>质检产品名称：餐盒</span></p>
            <div class="pdf">pdf</div>
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
        tableData: [{
          orderNum: '12349099',
          serviceName: 'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          reportAddress: './orderDetail.html',
          number: '1',
          orderTime: '2018-06-06 12:00:00',
          status: '已完成',
          price: '¥' + '500.00',
          repStatus: '已上传',
          orderCodes: require('../img/订单二维码.png'),
        },]

      }
    },
    methods: {},
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
