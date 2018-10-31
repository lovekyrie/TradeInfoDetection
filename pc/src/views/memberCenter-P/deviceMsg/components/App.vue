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

          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.stitle" placeholder="设备标题"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">搜索</el-button>
              </el-form-item>

              <a href="./deviceSubmit.html">发布设备需求</a>

            </el-form>
          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="title"
              label="设备标题"
              align="center"
            >
              <!--插入第一列标题链接,scope相当于table，可以访问表内数据-->
              <template slot-scope="scope">
                <a :href="tableData[scope.$index].address"
                   target="_self"
                   class="buttonText">{{tableData[scope.$index].Ttitle}}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="contacts"
              label="联系人"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="contactWay"
              label="联系方式"
              align="center"
            >
            </el-table-column>
            <el-table-column
              align="center"
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
          stitle: '',
        },
        tableData: [{
          Ttitle: '转卖水质检测设备1',
          address:'./deviceDetails.html',
          contacts: '张三',
          contactWay:'13551555777',
        },{
          Ttitle: '转卖水质检测设备2',
          address:'./deviceDetails.html',
          contacts: '张三',
          contactWay:'13551555777',
        },{
          Ttitle: '转卖水质检测设备3',
          address:'./deviceDetails.html',
          contacts: '张三',
          contactWay:'13551555777',
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
