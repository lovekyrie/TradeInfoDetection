<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header :showSearch="showSearch"  @search="search" :upload="true" :myType="type" :butNm="butNm" searchText="找需求"></trade-header>
    </div>
    <div class="content">
      <require-list :requireList="requireList"></require-list>
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
  import requireList from "components/requireList";

  export default {
    data() {
      return {
        butNm:'发布需求',
        showSearch: true,
        type:'',
        url:'',
        requireList: [],
        loading:false,
        pageNo:1,
        pageSize:20,
        total:1
      };
    },
    created(){
      this.type = this.until.getQueryString('type')
    },
    mounted() {
      this.url = this.type==1?'/prodx/mxpubres/page':'/prodx/mxpubres/pageSela'
      this.getList()
    },
    methods: {
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
          // type:this.type,
          value:this.key,
          // query:query.getParam()
        }
        this.until.get(this.url,param)
          .then(res=>{
            this.loading = false;
            if(res.status == 200){
              this.total = res.page.total
              res.data.items.forEach(item=>{
                item.rcdTm=item.rcdTm?item.rcdTm.split(' ')[0]:''
                item.state = new Date(item.rcdTm) > new Date ? true: false
                if(!item.state){
                  item.contMob = item.contMob.slice(0,3)+'********'
                }
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
