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

          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">

              <el-form-item>
                <el-input class="searchInput_a" v-model="search.orderNum" placeholder="订单编号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.serviceName" placeholder="服务名称"></el-input>
              </el-form-item>
              <el-form-item label="订单状态：">
                <el-select v-model="value1">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="报告状态：">

                <el-select v-model="value2">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <br/>
              <el-form-item label="性质：">
                <el-select v-model="value3">
                  <el-option
                    v-for="item in options3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="searchButton">
                <el-button type="primary">搜索</el-button>
              </el-form-item>

            </el-form>

          </div>
          <!--订单信息-->
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

            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                <a class="payA" href="#" v-if="tableData[scope.$index].status=='待付款'?true:false">支付</a>
                <a class="payA" href="#" v-if="tableData[scope.$index].status=='已下单'?true:false">取消订单</a>
              </template>
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
          orderNum:'',
          serviceName:'',
          testingAgency:'',
          testingName:'',

        },
        tableData: [{
          orderNum:'12349099',
          serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          reportAddress:'./memberorderDetail.html',
          number:'1',
          orderTime:'2018-06-06 12:00',
          status:'待付款',
          price:'¥'+'500.00',
          repStatus:'未上传',
          orderCodes:require('../img/订单二维码.png'),
        },{
          orderNum:'12349099',
          serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          reportAddress:'./memberorderDetail.html',
          number:'1',
          orderTime:'2018-06-06 12:00',
          status:'已下单',
          price:'¥'+'500.00',
          repStatus:'未上传',
          orderCodes:require('../img/订单二维码.png'),
        },{
          orderNum:'12349099',
          serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          reportAddress:'./memberorderDetail.html',
          number:'1',
          orderTime:'2018-06-06 12:00',
          status:'已付款',
          price:'¥'+'500.00',
          repStatus:'未上传',
          orderCodes:require('../img/订单二维码.png'),
        },{
          orderNum:'12349099',
          serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          reportAddress:'./memberorderDetail.html',
          number:'1',
          orderTime:'2018-06-06 12:00',
          status:'已完成',
          price:'¥'+'500.00',
          repStatus:'已上传',
          orderCodes:require('../img/订单二维码.png'),
        },

        ],
        options1:[
          {
            value:0,
            label:'全部'
          },
          {
            value:1,
            label:'已下单'
          },
          {
            value:2,
            label:'待付款'
          },{
            value:3,
            label:'已付款'
          },{
            value:4,
            label:'已完成'
          },
        ],
        options2:[
          {value:0,
            label:'全部'},
          {value:1,
            label:'已上传'},
          {value:2,
            label:'未上传'},
        ],
        options3:[
          {
            value:0,
            label:'最近一个月'
          },
          {
            value:1,
            label:'最近两个月'
          },
          {
            value:2,
            label:'最近三个月'
          },
        ],
        value1:0,
        value2:0,
        value3:0
      }
    },
    components: {
      headerMenu,
      tradeFooter,
    },
    methods: {
      //编辑当前行
      handleEdit(index, row) {
        console.log(index, row);
      },

      //删除当前行
      handleDelete(index, row) {
        console.log(index, row);
      },
    }
  }
</script>

<style scoped>

</style>
