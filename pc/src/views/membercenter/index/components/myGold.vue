<template>
   <div class="mygold">

          <!--金币信息-->
          <div class="coinMsg">
            <div>我的金币：<span style="color: red;font-size: 28px">16</span>
              <span class="coinMsg_b">
                <button class="button1" @click="recharge()">充值</button>
                <button class="button2" @click="exchange()">兑换</button>
                <span>兑换说明</span>
              </span>
            </div>
            <span class="coinTitle">金币交易记录</span>
          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="tradingWays"
              label="交易方式"
              align="center"
              :filters="tFilter"
              :filter-method="tFilterMethod"
            >
            </el-table-column>
            <el-table-column
              prop="coinNum"
              label="金币数"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="tradingTime"
              label="交易时间"
              align="center"
            >
            </el-table-column>
          </el-table>


        </div>
</template>

<script>
export default {
   data() {
      return {
        search: {
          stitle: '',
        },
        tFilter:[
          {text:'下载报告',value:'下载报告'},
          {text:'充值',value:'充值'},
          {text:'在线阅读',value:'在线阅读报告'},
          ],
        tableData: [{
          tradingWays: '下载报告',
          coinNum: '消耗2金币',
          tradingTime: '2018-06-06 13:00:16',
        },{
          tradingWays: '在线阅读报告',
          coinNum: '消耗2金币',
          tradingTime: '2018-06-06 13:00:16',
        },{
          tradingWays: '充值',
          coinNum: '充值20金币',
          tradingTime: '2018-06-06 13:00:16',
        },
        ]
      }
    },
     methods: {
      recharge(){
        this.$router.push({
          path:'/goldrecharge'
        })
      }
      ,
      exchange(){
        this.$router.push({
          path:'/goldexchange'
        })
      },
      tFilterMethod(value,row){
        return row.tradingWays == value;
      }
    }
};
</script>

<style lang='less' scoped>
.mygold {
  flex: 5.5;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 50px;

  //金币信息
  .coinMsg {
    padding: 10px 20px;

    .coinMsg_b {
      float: right;
      padding-right: 20px;

      //  兑换按钮
      .button1,
      .button2 {
        margin-right: 20px;
        border-radius: 4px;
        padding: 5px 30px;
      }

      .button1 {
        background-color: rgb(13, 85, 210);
        color: white;
      }
    }

    //标题
    .coinTitle {
      display: inline-block;
      margin: 40px 0 15px 0;
      font-size: 20px;
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
