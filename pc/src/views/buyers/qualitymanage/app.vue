<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="search">
        <el-form>
            <el-form-item label="质检产品名称：">
              <el-input v-model="search.productName" placeholder="产品名称"></el-input>
            </el-form-item>
            <el-form-item label="供应商名称：">
              <el-input v-model="search.vendor" placeholder="供应商名称"></el-input>
            </el-form-item>
            <el-form-item label="质检产品地域：">
              <el-input v-model="search.address" placeholder="省、市"></el-input>
            </el-form-item>
            <el-form-item label="序列号：">
              <el-input v-model="search.serialNo" placeholder="序列号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSearch">查询</el-button>
              <el-button>报告上传</el-button>
            </el-form-item>
            <!-- 布局用 -->
            <div></div>
        </el-form>
      </div>
      <div class="list">
        <div>
          <span>序列号</span>
          <span>质检产品名称</span>
          <span>供应商名称</span>
          <span>质检产品地域</span>
        </div>
        <div v-for="(item, index) in detectionList" :key="index">
          <span>{{item.serialNo}}</span>
          <span>{{item.productName}}</span>
          <span>{{item.vendor}}</span>
          <span>{{item.address}}</span>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";

export default {
  data() {
    return {
      search: {
        productName: "",
        vendor: "",
        address: "",
        serialNo: ""
      },
      detectionList:[
        {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
      ]
    };
  },
  methods: {
    onSearch() {}
  },
  components: {
    tradeHeader,
    tradeFooter
  }
};
</script>

<style lang='less'>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 70px auto 0px;
      .search {
        margin-bottom: 20px ;
        padding: 0 25px;
        .el-form {
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          > div {
            width: 30%;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            &:nth-last-of-type(2) {
              > div {
                width: 100%;
                button {
                  font-size: 16px;
                  width: 150px;
                  padding: 15px 0;
                  &:nth-of-type(1) {
                    background-color: #0d55d2;
                  }
                  &:nth-of-type(2) {
                    border: 1px solid #0d55d2;
                  }
                }
              }
            }
            > label {
              text-align: left;
              width: 35%;
            }
            > div {
              width: 60%;
              input{
                padding: 23px 0 23px 10px;
              }
            }
          }
        }
      }
      .list{
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        >div{
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-around;
          &:nth-of-type(1){
            padding: 15px 0;
            background-color: #f1f1f1;
          }
          &:not(:nth-of-type(1)){
            padding: 25px 0;
            border-bottom: 1px solid #ddd;
          }
          >span{
            width:20%;
          }
        }
      }
    }
  }
}
</style>
