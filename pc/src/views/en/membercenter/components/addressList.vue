<template>
<div class="address-list">

          <!--添加收货地址-->
          <div class="mainHead">
            <span style="font-size: 16px">Shipping address</span>
            <el-button @click="toAddAddr">Add new shipping address</el-button>
          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"

            padding="5px">
            <!--第一列-->
            <el-table-column
              align="left"
              min-width="70%"
            >
              <template slot-scope="scope">
                <span class="tableMsg">Receiver Attention：{{scope.row.receNm}}</span>
                <span>Tel：{{scope.row.receMob}}</span>
                <p>Detailed address：{{scope.row.provNm}}{{scope.row.cityNm}}{{scope.row.distNm}}{{scope.row.streetNm}}{{scope.row.addrDtl}}</p>
              </template>
            </el-table-column>

            <!--第二列-->
            <el-table-column
              align="center"
              min-width="30%"
            >
              <template slot-scope="scope">
                <el-button
                size="small"
                @click="handleEdit(scope.$index,scope.row)"
                >Edit
                </el-button>
                <el-button
                  size="small"
                  @click="handleDelete(scope.$index, scope.row)">Delete
                </el-button>
              </template>
            </el-table-column>
          </el-table>


        </div>
</template>

<script>
export default {
   data() {
      return {
        tableData: []
      }
    },
  mounted(){
    this.getAddr()
  },
     methods: {
       getAddr(){
         this.until.get('/sys/addr/listSelf')
           .then(res=>{
             this.tableData = res.data.items
           })
       },
      //编辑当前行
      handleEdit(index,row){
        // console.log(index, row);
        this.$router.push({
          path:'/addAddress',
          query:{
            info:JSON.stringify(row)
          }
        })
      },

      //删除当前行
      handleDelete(index, row) {
        let r = confirm("Are you sure you want to delete it?")
        if(r == true){
          this.until.get('/sys/addr/del?pks='+row.sysAddrPk)
            .then(res=>{
              if(res.status=='200'){
                this.tableData.splice(index,1)
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
        }else {
          return
        }
      },
      toAddAddr(){
        this.$router.push({
          path:'/addaddress',
        })
      }
    }
};
</script>

<style lang='less'>
  .address-list {
        flex: 5.5;
        background-color: white;
        padding-top: 20px;
        padding-bottom: 50px;
        /*添加收货地址*/
        .mainHead{
          text-align: left;
          padding: 0 15px;
          padding-bottom: 20px;
          border-bottom: 2px solid rgb(241, 241, 241);
          button{
            margin-left: 30px;
            background-color: #0d55d2;
            font-size: 16px;
            color: #fff;
          }
        }
        //表格
        .el-table{
          margin: 0 auto;
          margin-bottom: 100px;
          border: none;
          font-size: 14px;
          color: rgb(144,144,144);


          //表头隐藏
          tr{
            th{
              display: none;
            }
          }

          //表格底边框
          td,th.is-leaf{
            border-bottom: 2px solid rgb(241, 241, 241);
          }

          //除表头外行高
          td {
            height: 90px;
            .el-table_1_column_1 .cell{
              color: rgb(13,85,210);
            }
          }

          //编辑删除按钮样式
          .el-button--small{
            font-size: 14px;
            width: 67px;
            height: 38px;
          }

          //表格内字体
          .tableMsg{
            margin-right: 60px;
          }

          span,p{
            line-height: 2em;
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
