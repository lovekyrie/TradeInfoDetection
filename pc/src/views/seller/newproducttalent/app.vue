<template>
  <div id="app" v-loading="loading">
      <trade-header :showSearch="showSearch" @search="search" searchText="找人才"></trade-header>
    <div class="content">
      <new-product :recruitList="newProductRecruitList"></new-product>
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
import tradeHeader from 'components/tradeHeader'
import tradeFooter from 'components/tradeFooter'
import newProduct from 'components/newProduct'

export default {
  data(){
    return {
      loading:false,
      total:0,
      pageNo:1,
      pageSize:20,
      key:'',
      showSearch:true,
      newProductRecruitList:[]
    }
  },
  mounted(){
    this.key = this.until.getQueryString('val') ? this.until.getQueryString('val') : ''
    this.getList()
  },
  methods:{
    handleCurrentChange(val){
      this.pageNo = val
      this.getList()
    },
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
      let url = '/prodx/mxpubtale/page'
      this.until.get(url,param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            this.total = res.page.total
              this.newProductRecruitList = res.data.items

          }else {

          }
        },err=>{});
    },
  },
  components:{
    tradeHeader,
    tradeFooter,
    newProduct,
  }
}
</script>

<style lang='less'scoped>
html,body{
  width: 100%;
  background-color: #fff;
  #app{
    width: 100%;
    .content{
      width: 1200px;
      margin: 20px auto 130px;
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
