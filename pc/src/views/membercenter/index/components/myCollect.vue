<template>
   <div class="collect" v-loading="loading">

          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.id" placeholder="序列号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.name" placeholder="检测产品名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.supplierName" placeholder="供应商名称"></el-input>
              </el-form-item>
              <el-form-item  class="searchInput_b">
                <addr @setAddr="getAddr" distCd="0"></addr>
                <!--<el-input class="searchInput_b" v-model="search.place" placeholder="质检产品地域省、市"></el-input>-->
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="toSearch">搜索</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!--收藏信息-->
          <el-table  :data="list" style="width: 100%"  align="left" padding="5px" @row-click="toDetail"  class="cursor">
            <el-table-column prop="rpNo" label="序列号" width="200"></el-table-column>
            <el-table-column prop="rpProdNm" label="质检产品名称"></el-table-column>
            <el-table-column prop="rpSupply" label="供应商名称"> </el-table-column>
            <el-table-column prop="rpProdProvNm rpProdCityNm" label="质检产品地域"  align="center" >
              <template slot-scope="scope">
              {{list[scope.$index].rpProdProvNm}}
                {{list[scope.$index].rpProdCityNm}}
              </template>
            </el-table-column>
            <el-table-column align="center"  prop="Toperation" label="操作" width="130" >
              <template slot-scope="scope">
                <el-button
                  size="small"
                  @click.stop="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

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

</template>

<script>
  import addr from 'components/addr';
export default {
  data() {
    return {
      loading:false,
      total:0,
      pageNo:1,
      pageSize:20,
      list:[],
      userPk:'',
      search: {
        prodProvCd:'',
        prodCityCd:'',
        id: "",
        name: "",
        supplierName: "",
        place: ""
      },
      tableData: []
    };
  },
  mounted(){
    this.userPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
    this.getList()
  },
  methods: {
    toSearch(){
      this.pageNo = 1
      this.list = []
      this.getList()
    },
    getAddr:function(val){
      let cd = JSON.parse(val)
      this.search.prodProvCd = cd.cd1
      this.search.prodCityCd = cd.cd2
    },
    //跳转详情页面
    toDetail(row){
      this.$router.push({
        path:'/reportdetail',
        query:{
          id:row.subPk
        }
      })
    },
    handleCurrentChange(val){
      this.pageNo = val
      this.getList()
    },
    getList(){
      this.loading = true;
      let query = new this.Query();
      query.buildWhereClause('no',this.search.id,'LK');
      query.buildWhereClause('prodNm',this.search.name,'LK');
      query.buildWhereClause('supply',this.search.supplierName,'LK');
      query.buildWhereClause('prodProvCd',this.search.prodProvCd,'LK');
      query.buildWhereClause('prodCityCd',this.search.prodCityCd,'LK');
      // query.buildWhereClause('prodCityCd',this.cityCode2,'LK');

      query.buildPageClause(this.pageNo,this.pageSize);
      let param = query.getParam();
      this.until.get('/prod/mxusercoll/pageSelf',param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            this.total = res.page.total
            res.data.items.forEach(item=>{
              item.crtTm = item.crtTm.split(' ')[0]
            })
            this.list = res.data.items
          }else {

          }
        },err=>{});
    },
    //删除当前行
    handleDelete(index, row) {
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.until.get('/prodx/mxusercoll/canselcoll?subPk='+row.subPk+'&sysUserPk='+this.userPk)
          .then(res=>{
            if(res.status=='200'){
              this.list.splice(index,1)
              this.$message({
                message:'删除成功！',
                type:'success'
              })
            }
          })
      }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   });
      });

    }
  },
  components: {
    addr
  }
};
</script>

<style lang='less'>
.collect {
  flex: 5.5;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 50px;
  .block{
    margin-top: 20px;
  }
  //搜索框
  .mainSearch {
    /*text-align: center;*/
    padding-left: 20px;
    .el-input__inner {
      border-radius: 0;
    }

    .searchInput_a {
      width: 120px;
    }
    .searchInput_b {
      width: 180px;
      .el-form-item__content{
        width: 100%;
      }
    }

    .el-button {
      width: 100px;
    }

    .el-button--primary {
      background-color: rgb(13, 85, 210);
    }
  }
  //表格
  .el-table {
    margin: 0 auto;
    margin-bottom: 100px;
    border: none;
    font-size: 14px;
    color: rgb(144, 144, 144);

    //表头背景颜色
    .el-table__footer-wrapper thead div,
    .el-table__header-wrapper thead div {
      background-color: rgb(241, 241, 241);
    }

    //表头行高
    th {
      background-color: rgb(241, 241, 241);
      height: 48px;
    }

    //表头字体颜色
    tr .cell {
      color: rgb(134, 134, 134);
    }

    //表格底边框
    td,
    th.is-leaf {
      border-bottom: 2px solid rgb(241, 241, 241);
    }
    //除表头外行高
    td {
      height: 62px;
      .el-table_1_column_1 .cell {
        color: rgb(13, 85, 210);
      }
    }

    //编辑删除按钮样式
    .el-button--small {
      font-size: 14px;
      width: 60px;
    }
  }
  //elui表格后的细线消除
  .el-table::after {
    width: 0;
  }
  //表格内颜色消除
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: white;
  }
}
</style>
