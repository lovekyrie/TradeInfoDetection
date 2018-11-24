<template>
<div class="address-list">

          <!--添加收货地址-->
          <div class="mainHead">
            <span style="font-size: 16px">收货地址</span>
            <el-button @click="toAddAddr">添加收货地址</el-button>
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
                <span class="tableMsg">收&nbsp;货&nbsp;人：{{scope.row.name}}</span>
                <span>手机号码：{{scope.row.phone}}</span>
                <p>详细地址：{{scope.row.address}}</p>
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
                >编辑
                </el-button>
                <el-button
                  size="small"
                  @click="handleDelete(scope.$index, scope.row)">删除
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
        tableData: [{
          name:'张三',
          phone:'15123123132',
          address:'浙江省宁波市高新区福民路618号 516室'
        },
          {
          name:'张四',
          phone:'15123123132',
          address:'浙江省宁波市高新区福民路618号 516室'
        },
          {
          name:'张五',
          phone:'15123123132',
          address:'浙江省宁波市高新区福民路618号 516室'
        },
        ]
      }
    },
     methods: {
      //编辑当前行
      handleEdit(index,row){
        console.log(index, row);
      },

      //删除当前行
      handleDelete(index, row) {
        let r = confirm("确定删除吗?")
        if(r == true){
          alert('已删除')
        }else {
          return
        }
      },
      toAddAddr(){
        this.$router.push({
          path:'/addaddress'
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
