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
            <li><a href="./memberRecommend.html" style="color: white;background-color: rgb(13,85,210);">我的推荐</a></li>
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

          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="name"
              label="一级人员"
              align="center"
              >
            </el-table-column>
            <el-table-column
              prop="number"
              label="二级人数"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="date"
              label="时间">
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
          name:'',
          number:'',
          date:'',
        },
        tableData: [{
          name: '张三',
          number: '5',
          date: '2018-06-06  13:00:12'
        },{
          name: '李四',
          number: '5',
          date: '2018-06-06  13:00:12'
        },{
          name: '王五',
          number: '5',
          date: '2018-06-06  13:00:12'
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
        console.log(index, row);
      },
    }
  }
</script>

<style scoped>

</style>
