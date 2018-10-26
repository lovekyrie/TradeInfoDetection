<template>
  <div id="app">
    <div class="header">
      <trade-header :showSearch="showSearch"></trade-header>
    </div>
    <div class="content">
      <talent-recruit :talentList="talentList"></talent-recruit>
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
import talentRecruit from "components/talentRecruit";

export default {
  data() {
    return {
      showSearch: true,
      talentList: [
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元/月",
          linkedPhone: "0574-88889999"
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元/月",
          linkedPhone: "0574-88889999"
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元/月",
          linkedPhone: "0574-88889999"
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元/月",
          linkedPhone: "0574-88889999"
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元/月",
          linkedPhone: "0574-88889999"
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元/月",
          linkedPhone: "0574-88889999"
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元/月",
          linkedPhone: "0574-88889999"
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元/月",
          linkedPhone: "0574-88889999"
        }
      ]
    };
  },
  mounted() {},
  methods: {},
  components: {
    tradeHeader,
    tradeFooter,
    talentRecruit
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
      margin: 130px auto 130px;
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
