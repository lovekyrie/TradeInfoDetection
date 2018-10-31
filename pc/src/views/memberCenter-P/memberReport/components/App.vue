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
            <li><a href="./memberReport.html" style="color: white;background-color: rgb(13,85,210);">我的报告</a></li>
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
                <el-input class="searchInput_a" v-model="search.reportTitle" placeholder="报告标题"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.id" placeholder="序列号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.testingAgency" placeholder="检测机构"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.testingName" placeholder="质检产品名称"></el-input>
              </el-form-item>
              <br/>
              <el-form-item label="性质：">
                <el-select v-model="value">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
              <a class="upReport" href="#">报告上传</a>
            </el-form>

          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="reportTitle"
              label="报告标题"
            >
              <template slot-scope="scope">
               <a :href="tableData[scope.$index].reportAddress"
                  target="_self"
               >{{tableData[scope.$index].reportTitle}}
               </a>
              </template>
            </el-table-column>

            <el-table-column
              prop="id"
              label="序列号"
              >
            </el-table-column>
            <el-table-column
              prop="testingAgency"
              label="检测机构"
              width="160px"
            >
            </el-table-column>
            <el-table-column
              prop="testingName"
              label="质检产品名称"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="property"
              label="性质"
              width="70"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="upTime"
              label="上传时间"
              align="center"
            >
            </el-table-column>

            <el-table-column
              align="center"
              prop="Toperation"
              label="操作"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                <el-button
                  size="mini"
                  @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
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
          reportTitle:'',
          id:'',
          testingAgency:'',
          testingName:'',

        },
        tableData: [
          {
            reportTitle:'福州福州服饰有限公司防晒衣检测报告',
            reportAddress:'./reportDetail.html',
            id:'1023240321223102',
            testingAgency:'宁波贸信检测',
            testingName:'防晒衣',
            property:'公开',
            upTime:'2018-06-06 12:00:00',
          },{
            reportTitle:'福州福州服饰有限公司防晒衣检测报告',
            reportAddress:'./reportDetail.html',
            id:'1023240321223102',
            testingAgency:'宁波贸信检测',
            testingName:'防晒衣',
            property:'公开',
            upTime:'2018-06-06 12:00:00',
          },{
            reportTitle:'福州福州服饰有限公司防晒衣检测报告',
            reportAddress:'./reportDetail.html',
            id:'1023240321223102',
            testingAgency:'宁波贸信检测',
            testingName:'防晒衣',
            property:'公开',
            upTime:'2018-06-06 12:00:00',
          },
        ],
        options:[
          {value:0,
          label:'全部'},
          {value:1,
          label:'公开'},
          {value:2,
          label:'私密'},
        ],
        value:0
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
