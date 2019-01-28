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
            <li><a href="#" style="color: white;background-color: rgb(13,85,210);">我的收藏</a></li>
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
                <el-input class="searchInput_a" v-model="search.id" placeholder="序列号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.name" placeholder="检测产品名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.supplierName" placeholder="供应商名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_b" v-model="search.place" placeholder="质检产品地域省、市"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="id"
              label="序列号"
              width="200"
              >
            </el-table-column>
            <el-table-column
              prop="name"
              label="质检产品名称">
            </el-table-column>
            <el-table-column
              prop="supplierName"
              label="供应商名称">
            </el-table-column>
            <el-table-column
              prop="place"
              label="质检产品地域"
              align="center"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="Toperation"
              label="操作"
              width="130"
            >
              <template slot-scope="scope">
                <el-button
                  size="small"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
          id: '',
          name: '',
          supplierName: '',
          place: ''
        },
        tableData: [{
          id: '1100023232142311',
          name: '防晒衣',
          supplierName: '宁波贸信检测',
          place: '浙江 - 宁波'
        },{
          id: '1100023232142311',
          name: '防晒衣',
          supplierName: '宁波贸信检测',
          place: '浙江 - 宁波'
        },{
          id: '1100023232142311',
          name: '防晒衣',
          supplierName: '宁波贸信检测',
          place: '浙江 - 宁波'
        },
        ]
      }
    },
    components: {
      headerMenu,
      tradeFooter,
    },
    methods: {
      //删除当前行
      handleDelete(index, row) {
        // console.log(index, row);
      },
    }
  }
</script>

<style scoped>

</style>
