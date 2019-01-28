<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header :showSearch="showSearch" @search="search" :butNm="butNm" searchText="找人才"></trade-header>
    </div>
    <div class="content">
      <talent-recruit :talentList="talentList"></talent-recruit>
       <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pageNo"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total">
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
      butNm:'发布人才需求',
      showSearch: true,
      talentList: [],
      loading:false,
      pageNo:1,
      pageSize:20,
      total:1
    };
  },
  mounted() {
    let info=JSON.parse(this.until.loGet('user'))
    this.userPk = info.sysUserPk
    // this.getInfo()
    if(this.until.getQueryString('val')){
      this.key = this.until.getQueryString('val')
    }
    this.getList()
  },
  methods: {
    //查询
    search(val){
      this.key = val
      this.pageNo = 1
      this.getList()
    },
    getList(){
      this.loading = true;
      // let query = new this.Query();
      // query.buildPageClause(this.pageNo,this.pageSize);
      let page = {
        p:{
          n:this.pageNo,
          s:this.pageSize
        }
      }
      let param = {
        query:JSON.stringify(page),
        value:this.key,
        // query:query.getParam()
      }
      this.until.get('/prod/mxpubrecr/page',param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            this.total = res.page.total
            this.talentList = res.data.items
          }
        },err=>{});
    },
    handleCurrentChange(val){
      this.pageNo = val
      this.getList()
    }
  },
  components: {
    tradeHeader,
    tradeFooter,
    talentRecruit
  }
};
</script>

<style lang='less' scoped>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 0px auto;
      .block {
        padding: 20px 0;
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
