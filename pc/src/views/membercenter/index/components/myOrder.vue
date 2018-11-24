<template>
      <div class="my-order">

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
          <el-table  :data="tableData" style="width: 100%" align="left" padding="5px" 
            @row-click="toOrderDetail()">
            <el-table-column  prop="orderNum" label="订单编号" >
              <template slot-scope="scope">
               <a :href="tableData[scope.$index].reportAddress"  target="_self">
                 {{tableData[scope.$index].orderNum}}
               </a>
              </template>
            </el-table-column>

            <el-table-column  prop="serviceName"  label="服务名称" >
              <template slot-scope="scope">
                <a :href="tableData[scope.$index].reportAddress"
                   target="_self"
                >{{tableData[scope.$index].serviceName}}
                </a>
              </template>

            </el-table-column>
            <el-table-column prop="number"  label="数量" width="80px"  align="center"> </el-table-column>
            <el-table-column prop="orderTime"  label="下单时间" align="center"></el-table-column>
            <el-table-column prop="status" label="订单状态" align="center"> </el-table-column>
            <el-table-column label="价格" align="center">
              <template slot-scope="scope">
                <span style="color: red">{{tableData[scope.$index].price}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="repStatus" label="报告状态" align="center" ></el-table-column>
            <el-table-column label="订单二维码"  align="center" >
              <template slot-scope="scope">
                <img :src="tableData[scope.$index].orderCodes">
              </template>
            </el-table-column>

            <el-table-column  label="操作" align="center">
              <template slot-scope="scope">
                <a class="payA" href="#" v-if="tableData[scope.$index].status=='待付款'?true:false">支付</a>
                <a class="payA" href="#" v-if="tableData[scope.$index].status=='已下单'?true:false">取消订单</a>
              </template>
            </el-table-column>
          </el-table>


        </div>
</template>

<script>
import code from '../images/订单二维码.png'

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
          orderCodes:code,
        },{
          orderNum:'12349099',
          serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          reportAddress:'./memberorderDetail.html',
          number:'1',
          orderTime:'2018-06-06 12:00',
          status:'已下单',
          price:'¥'+'500.00',
          repStatus:'未上传',
          orderCodes:code,
        },{
          orderNum:'12349099',
          serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          reportAddress:'./memberorderDetail.html',
          number:'1',
          orderTime:'2018-06-06 12:00',
          status:'已付款',
          price:'¥'+'500.00',
          repStatus:'未上传',
          orderCodes:code,
        },{
          orderNum:'12349099',
          serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          reportAddress:'./memberorderDetail.html',
          number:'1',
          orderTime:'2018-06-06 12:00',
          status:'已完成',
          price:'¥'+'500.00',
          repStatus:'已上传',
          orderCodes:code,
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
     methods: {
      //编辑当前行
      handleEdit(index, row) {
        console.log(index, row);
      },

      //删除当前行
      handleDelete(index, row) {
        console.log(index, row);
      },
      toOrderDetail(){
        this.$router.push({
          path:'/orderdetail'
        })
      }
    }
};
</script>

<style lang='less' scoped>
.my-order {
  flex: 5.5;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 50px;

  //搜索框
  .mainSearch {
    text-align: left;
    padding: 0 20px;

    .el-input__inner {
      border-radius: 0;
    }

    //表单宽度
    .searchInput_a {
      width: 130px;
    }

    //选择器表单宽度
    .el-select {
      width: 145px;
    }
    label {
      color: rgb(144, 144, 144);
      font-weight: 200;
    }

    .el-button {
      width: 145px;
    }

    .el-button--primary {
      background-color: rgb(13, 85, 210);
    }

    .searchButton {
      float: right;
      position: relative;
      right: 20px;
    }
  }
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

    //支付、取消按钮样式
    .payA {
      display: block;
      text-decoration: none;
      padding: 3px;
      width: 68px;
      border-radius: 2px;
      border: 1px solid rgb(201, 201, 201);
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
}
</style>
