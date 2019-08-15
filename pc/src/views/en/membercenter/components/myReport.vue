<template>
   <div class="myreport" v-loading="loading">

          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">

              <el-form-item>
                <el-input class="searchInput_a" v-model="search.reportTitle" placeholder="Report Title"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.id" placeholder="Serial number"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.testingAgency" placeholder="Test Organization"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.testingName" placeholder="Product Name"></el-input>
              </el-form-item>
              <br/>
              <el-form-item label="Attribute：">
                <el-select v-model="value">
                  <el-option
                    v-for="item in options"
                    :key="item.cd"
                    :label="item.nm"
                    :value="item.cd">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="toSearch">Search</el-button>
              </el-form-item>
              <a class="upReport" href="../en/buyersUploadreport.html">Upload report</a>
            </el-form>

          </div>
          <!--收藏信息-->
          <el-table
            :data="list"
            style="width: 100%"
            align="left"
            padding="5px"
            @row-click="toReportDetail"  class="cursor">
            <template slot="empty">
              No information available
            </template>
            <el-table-column prop="nm" label="Report Title" >
              <!--<template slot-scope="scope">-->
               <!--<a :href="tableData[scope.$index].mxRepoPk" target="_self">{{tableData[scope.$index].nm}}-->
               <!--</a>-->
              <!--</template>-->
            </el-table-column>

            <el-table-column prop="no" label="Serial number"> </el-table-column>
            <el-table-column prop="deteOrg" label="Test Organization" width="160px"> </el-table-column>
            <el-table-column prop="prodNm" label="Product Name" align="center"> </el-table-column>
            <el-table-column prop="statNm" label="Attribute" width="70" align="center" ></el-table-column>
            <el-table-column prop="crtTm" label="Upload time" align="center"></el-table-column>
            <el-table-column align="center" prop="Toperation" label="Operate" >

              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click.stop="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                <el-button
                  size="mini"
                  @click.stop="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
              </template>
            </el-table-column>
          </el-table>
         <div class="block">
           <el-pagination
             @current-change="handleCurrentChange"
             :current-page="pageNo"
             :page-size="pageSize"
             layout="prev, pager, next"
             :total="total">
           </el-pagination>
         </div>

        </div>

</template>

<script>
export default {
   data() {
      return {
        loading:false,
        pageNo:1,
        pageSize:20,
        total:0,
        search: {
          reportTitle:'',
          id:'',
          testingAgency:'',
          testingName:'',
        },
        list:[],
        tableData: [],
        options:[
          {cd:'',
          nm:'All'},
        ],
        value:''
      }
    },
  mounted(){
    this.getList()
    this.getOrdType()
  },
     methods: {
       toSearch(){
         this.pageNo=1
         this.getList()
       },
       handleCurrentChange(val){
         this.pageNo = val
         this.getList()
       },
       getList(){
         this.loading = true;
         let query = new this.Query();
         // console.log(this.search.orderNum)
         query.buildWhereClause('nm',this.search.reportTitle,'LK');
         query.buildWhereClause('no',this.search.id,'LK');
         query.buildWhereClause('deteOrg',this.search.testingAgency,'LK');
         query.buildWhereClause('prodNm',this.search.testingName,'LK');
         query.buildWhereClause('statCd',this.value,'LK');
         // query.buildWhereClause('prodCityCd',this.cityCode2,'LK');

         query.buildPageClause(this.pageNo,this.pageSize);
         let param = query.getParam();
         this.until.get('/prod/mxrepo/pageSelf',param)
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
       getOrdType(){
         this.until.get('/general/cat/listByPrntCd?prntCd=60000')
           .then(res=>{
             if(res.status=='200'){
               this.options.push(...res.data.items)
             }
           })
       },
      //编辑当前行
      handleEdit(index, row) {
        // console.log(index, row);
        window.location.href = '../en/buyersUploadreport.html?info='+JSON.stringify(row)
      },

      //删除当前行
      handleDelete(index, row) {
        // console.log(index, row);
        this.$confirm('Determine to delete the report?', 'Tips', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.until.get('/prod/mxrepo/del?pks='+row.mxRepoPk)
            .then(res=>{
              if(res.status=='200'){
                this.list.splice(index,1)
                this.$message({
                  message:'Delete successfully!',
                  type:'success'
                });
              }else {
                this.$message({
                  message:res.message,
                  type:'warning'
                });
              }
            })
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });

      },
      //跳转详情页面
      toReportDetail(row){
        this.$router.push({
          path:'/reportdetail',
          query:{
            id:row.mxRepoPk
          }
        })
      }
    }
};
</script>

<style lang='less'>
.myreport {
  flex: 5.5;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 50px;
  .block{
    margin-top: 20px;
  }
  //搜索框
  .mainSearch {
    text-align: left;
    padding: 0 20px;

    .el-input__inner {
      border-radius: 0;
    }

    //表单宽度
    .searchInput_a {
      width: 180px;
    }

    //选择器表单宽度
    .el-select {
      width: 140px;
    }
    label {
      color: rgb(144, 144, 144);
      font-weight: 200;
    }

    .el-button {
      width: 100px;
    }

    .el-button--primary {
      background-color: rgb(13, 85, 210);
    }

    //上传报告按钮
    .upReport {
      display: inline-block;
      float: right;
      text-align: center;
      width: 120px;
      height: 36px;
      line-height: 36px;
      border: 1px solid rgb(201, 201, 201);
      border-radius: 4px;
      position: relative;
      right: 20px;
    }
  }
  //表格
  .el-table {
    margin: 0 auto;
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

    //字体颜色
    tr .cell {
      color: rgb(134, 134, 134);
      word-break: break-all;
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
    .el-button--mini {
      border: none;
      font-size: 14px;
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
