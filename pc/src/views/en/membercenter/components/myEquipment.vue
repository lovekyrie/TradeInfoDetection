<template>
     <div class="equipment" v-loading="loading">

          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.stitle" placeholder="Equipment  Name"></el-input>
              </el-form-item>

              <el-form-item >
                <el-button type="primary" @click="toSearch">Search</el-button>
              </el-form-item>
              <el-form-item>
                <el-button @click="toAddEquipment" class="release">Equipment Requirement Published</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!--收藏信息-->
          <el-table :data="list" style="width: 100%" align="left" padding="5px" @row-click="toEquipmentDetail"  class="cursor">
            <el-table-column prop="title" label="Equipment  Name"  align="center">
              <!--插入第一列标题链接,scope相当于table，可以访问表内数据-->
              <template slot-scope="scope">
                <a
                   target="_self"
                   class="buttonText">{{list[scope.$index].nm}}</a>
              </template>
            </el-table-column>
            <el-table-column  prop="contNm" label="Contact"  align="center"> </el-table-column>
            <el-table-column prop="contMob" label="Tel" align="center"> </el-table-column>
            <el-table-column  align="center"  label="Operate"  width="130" >
              <template slot-scope="scope">
                <el-button
                  size="small"
                  @click.stop="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
         <div class="block">
           <el-pagination
             @current-change="handleCurrentChange"
             :current-page=pageNo
             :page-size=pageSize
             layout=" prev, pager, next"
             :total=total>
           </el-pagination>
         </div>

        </div>
</template>

<script>
export default {
  data() {
      return {
        list:[],
        loading:false,
        pageNo:1,
        pageSize:20,
        total:0,
        search: {
          stitle: '',
        },
        tableData: [{
          Ttitle: '转卖水质检测设备1',
          address:'./deviceDetails.html',
          contacts: '张三',
          contactWay:'13551555777',
        },{
          Ttitle: '转卖水质检测设备2',
          address:'./deviceDetails.html',
          contacts: '张三',
          contactWay:'13551555777',
        },{
          Ttitle: '转卖水质检测设备3',
          address:'./deviceDetails.html',
          contacts: '张三',
          contactWay:'13551555777',
        },
        ]
      }
    },
  mounted(){
    this.getList()
  },
     methods: {
       toSearch(){
         // console.log('111111')
         this.pageNo = 1
         this.list = []
         this.getList()
       },
       getList(){
         this.loading = true;
         let query = new this.Query();
         // query.buildWhereClause('nm',this.search.stitle,'LK');
         query.buildPageClause(this.pageNo,this.pageSize);
         let param = {
           nm:this.search.stitle,
           query:query.getParam().query
         }
         this.until.get('/prod/mxpubdev/pageSelf',param)
           .then(res=>{
             this.loading = false;
             if(res.status == 200){
               this.total = res.page.total
               res.data.items.forEach(item=>{
                 item.crtTm = item.crtTm.split(' ')[0]
               })
               this.list = res.data.items


             }else {
               this.$message({
                 message:res.message,
                 type:'warning'
               });
             }
           },err=>{
             this.loading = false;
           });
       },
       handleCurrentChange(val){
         this.pageNo=val
         this.getList()
       },
      //删除当前行
      handleDelete(index, row) {
        this.$confirm('Determine to delete?', 'Tips', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.until.get('/prod/mxpubdev/del?pks='+row.mxPubDevPk)
            .then(res=>{
              if(res.status=='200'){
                this.$message({
                  message:'Delete successfully!',
                  type:'success'
                })
                this.list.splice(index,1)
              }
            })
        }).catch(() => {

        });

        // console.log(index, row);
      },
      toAddEquipment(){
        this.$router.push({
          path:'/addequipment'
        })
      },
      toEquipmentDetail(row){
         // window.location.href = '../seller/enterpriseEquipmentd.html?pk='+row.mxPubDevPk
        this.$router.push({
          path:'/equipmentdetail',
          query:{
            id:row.mxPubDevPk
          }
        })
      }
    }
}
</script>

<style lang='less'>
 .equipment {
        flex: 5.5;
        background-color: white;
        padding-top: 30px;
        padding-bottom: 50px;

        //搜索框
        .mainSearch{
          text-align: left;
          padding: 0 15px;

          .el-input__inner{
            border-radius: 0;
          }

          .searchInput_a{
            width: 150px;

          }

          //搜索按钮

          .el-button{
            width: 100px;
          }

          .release{
            width: 130px;
          }

          .searchButton{
            width: 120px;
          }

          .el-button--primary{
            background-color: rgb(13,85,210);
          }

        }
        //表格
        .el-table{
          margin: 0 auto;
          margin-bottom: 100px;
          border: none;
          font-size: 14px;
          color: rgb(144,144,144);

          //表头背景颜色
          .el-table__footer-wrapper thead div, .el-table__header-wrapper thead div{
            background-color: rgb(241,241,241);
          }

          //表头行高
          th{
            background-color: rgb(241,241,241);
            height: 48px;
          }

          //表头字体颜色
          tr .cell{
            color: rgb(134,134,134);
          }

          //表格底边框
          td,th.is-leaf{
            border-bottom: 2px solid rgb(241, 241, 241);
          }
          //除表头外行高
          td {
            height: 62px;
            .el-table_1_column_1 .cell{
              color: rgb(13,85,210);
            }
          }

          //编辑删除按钮样式
          .el-button--small{
            font-size: 14px;
            width: 60px;
          }

        }
        //elui表格后的细线消除
        .el-table::after{
          width: 0;
        }
        //表格内颜色消除
        .el-table--enable-row-hover .el-table__body tr:hover>td{
          background-color: white;
        }



      }
</style>
