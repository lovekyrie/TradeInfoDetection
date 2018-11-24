<template>
    <div class="order-del">
          <p  @click="toOrder" style="text-align: left;padding-left: 20px"><i class="el-icon-arrow-left"></i> 返回</p>

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
</template>

<script>
import code from "../images/订单二维码.png";

export default {
  data() {
    return {
      tableData: [
        {
          orderNum: "12349099",
          serviceName: "CFDA食堂餐厅饭店酒店自制餐饮食品检测",
          reportAddress: "./orderDetail.html",
          number: "1",
          orderTime: "2018-06-06 12:00:00",
          status: "已完成",
          price: "¥" + "500.00",
          repStatus: "已上传",
          orderCodes: code
        }
      ]
    };
  },
  methods:{
    toOrder(){
      this.$router.back(-1)
    }
  }
};
</script>

<style lang='less'>
.order-del {
  flex: 5.5;
  background-color: white;
  padding: 20px 0px;
  text-align: center;

  .mainTitle {
    margin: 20px 0;
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

  //  订单详情
  //表格
  .el-table {
    margin: 0 auto;
    border: none;
    font-size: 14px;
    color: rgb(144, 144, 144);

    //表头背景颜色
    .el-table__footer-wrapper thead div,
    .el-table__header-wrapper thead div {
      background-color: rgb(241, 241, 241);
    }

    //表头行高
    th {
      background-color: rgb(241, 241, 241);
      height: 48px;
    }

    //字体颜色
    tr .cell {
      color: rgb(134, 134, 134);
      word-break: break-all;
    }

    //表格底边框
    td,
    th.is-leaf {
      border-bottom: 2px solid rgb(241, 241, 241);
    }
    //除表头外行高
    td {
      height: 62px;

      .el-table_1_column_1 .cell {
        color: rgb(13, 85, 210);
      }
    }
  }
  //elui表格后的细线消除
  .el-table::after {
    width: 0;
  }
  //表格内颜色消除
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: white;
  }

  //  联系方式,收货地址
  .contactWay,
  .receiveAdd,
  .exaRep {
    padding: 20px 20px;
    text-align: left;
    border-bottom: 1px solid rgb(231, 231, 231);

    p {
      color: rgb(99, 99, 99);
      line-height: 3em;
    }
  }

  .exaRep {
    //pdf位置
    .pdf {
      width: 100%;
      height: 500px;
      text-align: center;
      line-height: 500px;
      font-size: 28px;
      background-color: rgb(211, 211, 211);
    }

    //  下载报告按钮
    .dowButton {
      display: inline;
      float: right;
      padding-right: 10px;
      a {
        display: inline-block;
        float: right;
        border: 2px solid rgb(211, 211, 211);
        border-radius: 4px;
        font-size: 16px;
        color: rgb(181, 181, 181);
        padding: 8px 16px;
        text-align: center;
      }
    }
  }

  //  蓝色小块
  .dIcon {
    display: inline-block;
    content: "";
    height: 22px;
    width: 8px;
    position: relative;
    top: 4px;
    background-color: rgb(13, 85, 210);
  }

  //子标题
  .dTitle_b {
    display: inline-block;
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 20px;
    height: 23px;
  }
}
</style>
