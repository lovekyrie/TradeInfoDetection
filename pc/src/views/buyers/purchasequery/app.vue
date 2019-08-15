<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="search">
        <el-form>
            <el-form-item label="质检产品名称：">
              <el-input  v-model="searchGdno" placeholder="产品名称"></el-input>
            </el-form-item>
            <el-form-item label="供应商名称：">
              <el-input v-model="searchCustName" placeholder="供应商名称"></el-input>
            </el-form-item>
            <el-form-item label="质检产品地域：">
              <addr @setAddr="getAddr" distCd="0"></addr>
            </el-form-item>
            <el-form-item label="序列号：">
              <el-input v-model="searchSn" placeholder="序列号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
            <!-- 布局用 -->
            <div></div>
        </el-form>
      </div>
      <div class="list">
        <div>
          <span>序列号</span>
          <span>质检产品名称</span>
          <span>报告类别</span>
          <span>供应商名称</span>
          <span>质检产品地域</span>
        </div>
        <div v-for="(item, index) in searchBot" :key="index" @click="toDetail(item.mxRepoPk)" class="cursor">
          <span>{{item.no}}</span>
          <span>{{item.prodNm}}</span>
          <span>{{item.catNm}}</span>
          <span>{{item.supply}}</span>
          <span>{{item.prodProvNm}} {{item.prodCityNm}}</span>
        </div>
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
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import addr from "components/addr";
export default {
  data() {
    return {
      loading:false,
      cityCode1:'',
      cityCode2:'',
      searchBot: [],
      searchGdno: "",
      searchSn: "",
      searchCustName: "",
      pageNo: 1,
      pageSize: 10,
      total:0,
    };
  },
  mounted(){
    this.getList()
  },
  methods: {
    //详情
    toDetail(val){
      // window.location.href = '../buyers/purchaseDetail.html?pk='+val
      if(this.searchSn){
        window.location.href = '../buyers/purchaseDetail.html?pk='+val+'&no='+this.searchSn

      }else {
        window.location.href = '../buyers/purchaseDetail.html?pk='+val

      }
    },
    getAddr:function(val){
      let cd = JSON.parse(val)
      this.cityCode1 = cd.cd1
      this.cityCode2 = cd.cd2
    },
    handleCurrentChange(val) {
      this.pageNo = val
      this.getList()
    },
    getList(){
      this.loading = true;
      let query = new this.Query();
      // query.buildWhereClause('no',this.searchSn,'LK');
      query.buildWhereClause('prodNm',this.searchGdno,'LK');
      query.buildWhereClause('supply',this.searchCustName,'LK');
      query.buildWhereClause('prodProvCd',this.cityCode1,'LK');
      query.buildWhereClause('prodCityCd',this.cityCode2,'LK');
      query.buildWhereClause('prodCityCd',this.cityCode2,'LK');

      query.buildPageClause(this.pageNo,this.pageSize);
      let myParam = query.getParam();
      // console.log(myParam)
      let param = {
        type:2,
        no:this.searchSn,
        query:myParam.query
      }
      this.until.get('/prodx/mxrepo/page',param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            this.total = res.page.total
              this.searchBot=res.data.items


          }else {
            this.$message({
              message:res.message,
            });
          }
        },err=>{});
    },
    //查询
    search(){
      this.searchBot = []
      this.pageNo = 1
      this.getList()
    },
  },
  components: {
    tradeHeader,
    tradeFooter,
    addr
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
      margin: 20px auto 0px;
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
              padding: 0;
              width: 100px;
            }
            > div {
              flex: 1;
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
            text-indent: 25px;
            &:nth-of-type(3){
              width: 25%;
            }
            &:last-of-type{
              width: 15%;
            }
          }
        }
      }
    }
  }
}
</style>
