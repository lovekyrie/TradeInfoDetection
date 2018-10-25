<template>
  <div id="app">
    <div class="header">
      <trade-header :showSearch="showSearch"></trade-header>
    </div>
    <div class="content">
      <require-list :requireList="requireList"></require-list>
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
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import requireList from "components/requireList";

export default {
  data() {
    return {
      showSearch: true,
      requireList: [
        {
          reportName: "服装服饰男装女装类目质检报告",
          requireStyle: "检测需求",
          requireName: "张先生",
          linkedPhone: "15990110000",
          releaseTime: "2018年6月26日",
          valid: true
        },
        {
          reportName: "服装服饰男装女装类目质检报告",
          requireStyle: "检测需求",
          requireName: "张先生",
          linkedPhone: "15990110000",
          releaseTime: "2018年6月26日",
          valid: true
        },
        {
          reportName: "服装服饰男装女装类目质检报告",
          requireStyle: "检测需求",
          requireName: "张先生",
          linkedPhone: "15990110000",
          releaseTime: "2018年6月26日",
          valid: true
        },
        {
          reportName: "服装服饰男装女装类目质检报告",
          requireStyle: "检测需求",
          requireName: "张先生",
          linkedPhone: "15990110000",
          releaseTime: "2018年6月26日",
          valid: true
        },
        {
          reportName: "服装服饰男装女装类目质检报告",
          requireStyle: "检测需求",
          requireName: "张先生",
          linkedPhone: "15990110000",
          releaseTime: "2018年6月26日",
          valid: true
        },
        {
          reportName: "服装服饰男装女装类目质检报告",
          requireStyle: "检测需求",
          requireName: "张先生",
          linkedPhone: "15990110000",
          releaseTime: "2018年6月26日",
          valid: false
        },
        {
          reportName: "服装服饰男装女装类目质检报告",
          requireStyle: "检测需求",
          requireName: "张先生",
          linkedPhone: "15990110000",
          releaseTime: "2018年6月26日",
          valid: true
        },
        {
          reportName: "服装服饰男装女装类目质检报告",
          requireStyle: "检测需求",
          requireName: "张先生",
          linkedPhone: "15990110000",
          releaseTime: "2018年6月26日",
          valid: true
        }
      ]
    };
  },
  methods: {},
  components: {
    tradeHeader,
    tradeFooter,
    requireList
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 0 auto;
      margin-top: 125px;
      margin-bottom: 130px;
      .block {
        margin-top: 20px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
      }
    }
  }
}
</style>
