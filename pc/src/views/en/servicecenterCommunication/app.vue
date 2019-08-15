<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header :showSearch="showSearch"  @search="search" :upload="true" :myType="type" :butNm="butNm"></trade-header>
    </div>
    <div class="content">
      <require-list :requireList="requireList"></require-list>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pageNo"
          :page-size="pageSize"
          layout=" prev, pager, next"
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
  import tradeHeader from "@/componentsEn/tradeHeader";
  import tradeFooter from "@/componentsEn/tradeFooter";
  import requireList from "@/componentsEn/commuList";

  export default {
    data() {
      return {
        butNm:'Publish',
        showSearch: true,
        type:'3',
        url:'',
        requireList: [],
        loading:false,
        pageNo:1,
        pageSize:20,
        total:1
      };
    },
    created(){
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList(){
        this.loading = true;
        let query = new this.Query();
        query.buildPageClause(this.pageNo,this.pageSize);
        let param = {
          value:this.key,
          query:query.getParam()
        }
        this.until.get('/prod/wxcomux/wxPage',param)
          .then(res=>{
            this.loading = false;
            if(res.status == 200){
              this.total = res.page.total
              res.data.items.forEach(item=>{
                item.crtTm=item.crtTm?item.crtTm.split(' ')[0]:''
              })
              this.requireList = res.data.items

            }else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          },err=>{});
      },
      //查询
      search(val){
        this.key = val
        this.pageNo = 1
        this.getList()
      },
      handleCurrentChange(val) {
        this.pageNo = val
        this.getList()
      },
    },
    components: {
      tradeHeader,
      tradeFooter,
      requireList
    }
  };
</script>

<style lang='less' scoped>
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #fff;
    #app {
      width: 100%;
      .content {
        width: 1200px;
        margin: 0px auto ;
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
