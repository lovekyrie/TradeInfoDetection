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
            <li><a href="./addressManager.html" style="color: white;background-color: rgb(13,85,210);">收货地址管理</a></li>
            <li><a href="./changePwd.html">修改密码</a></li>
          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">

          <!--添加收货地址-->
          <div class="mainHead">
            <span style="font-size: 16px">收货地址</span><a href="./addAddress.html">添加收货地址</a>
          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"

            padding="5px">
            <!--第一列-->
            <el-table-column
              align="left"
              min-width="70%"
            >
              <template slot-scope="scope">
                <span class="tableMsg">收&nbsp;货&nbsp;人：{{scope.row.name}}</span>
                <span>手机号码：{{scope.row.phone}}</span>
                <p>详细地址：{{scope.row.address}}</p>
              </template>
            </el-table-column>

            <!--第二列-->
            <el-table-column
              align="center"
              min-width="30%"
            >
              <template slot-scope="scope">
                <el-button
                size="small"
                @click="handleEdit(scope.$index,scope.row)"
                >编辑
                </el-button>
                <el-button
                  size="small"
                  @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
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
        tableData: [{
          name:'张三',
          phone:'15123123132',
          address:'浙江省宁波市高新区福民路618号 516室'
        },
          {
          name:'张四',
          phone:'15123123132',
          address:'浙江省宁波市高新区福民路618号 516室'
        },
          {
          name:'张五',
          phone:'15123123132',
          address:'浙江省宁波市高新区福民路618号 516室'
        },
        ]
      }
    },
    components: {
      headerMenu,
      tradeFooter,
    },
    methods: {
      //编辑当前行
      handleEdit(index,row){
        console.log(index, row);
      },

      //删除当前行
      handleDelete(index, row) {
        let r = confirm("确定删除吗?")
        if(r == true){
          alert('已删除')
        }else {
          return
        }

      },
    }
  }
</script>

<style scoped>

</style>
