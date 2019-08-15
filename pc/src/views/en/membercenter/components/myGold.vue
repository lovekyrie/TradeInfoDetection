<template>
   <div class="mygold">

          <!--金币信息-->
          <div class="coinMsg">
            <div>My Gold Coins：<span style="color: red;font-size: 28px">{{gold}}</span>
              <span class="coinMsg_b">
                <button class="button1" @click="recharge()">Add credit</button>
                <button class="button2" @click="exchange()">Exchange</button>
                <span>Exchange Instruction</span>
              </span>
            </div>
            <span class="coinTitle">Transaction History</span>
          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            @filter-change="tFilterMethod"
            style="width: 100%"
            align="left"
            padding="5px">
            <template slot="empty">
              No information available
            </template>

            <el-table-column
              prop="catNm"
              label="Transaction Way"
              align="center"
              column-key="status"
              :filter-multiple="false"
              :filters="tFilter"
            >
            </el-table-column>
            <el-table-column
              prop="qty"
              label="Gold Coins Redeemed"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="crtTm"
              label="Transaction Time"
              align="center"
            >
            </el-table-column>
          </el-table>

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
</template>

<script>
export default {
   data() {
      return {
        type:'',
        gold:0,
        total:0,
        pageNo:1,
        pageSize:20,
        search: {
          stitle: '',
        },
        tFilter:[
          {text:'下载报告',value:'下载报告'},
          {text:'Add credit',value:'Add credit'},
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
          tradingWays: 'Add credit',
          coinNum: '充值20金币',
          tradingTime: '2018-06-06 13:00:16',
        },
        ]
      }
    },
  mounted(){
     this.getGold()
     this.getType()
    this.getList()
  },
     methods: {
       handleCurrentChange(val){
         this.pageNo = val
         this.getList()
       },
       getType(){
         this.until.get('/general/cat/listByPrntCd?prntCd=81020')
           .then(res=>{
             if(res.status == 200){
               this.tFilter = []
                res.data.items.forEach(item=>{
                 this.tFilter.push({
                   text:item.nm,
                   value:item.cd
                 })
               })
               // console.log(this.tFilter)
             }else {
               this.$message({
                 message:res.message,
                 type:'warning'
               });
             }
           })
       },
       getGold(){

         this.until.get('/prod/mxpers/listSelf')
           .then(res=>{
             if(res.status == 200){
               this.gold = res.data.items[0].goldQty

             }else {
               this.$message({
                 message:res.message,
                 type:'warning'
               });
             }
           })
       },
       getList(){

         let query = new this.Query();
         query.buildWhereClause('catCd',this.type,'LK');
         query.buildPageClause(this.pageNo,this.pageSize);
         let param = query.getParam();
         this.until.get('/prod/log/pageSelf',param)
           .then(res=>{
             if(res.status == 200){
               this.total = res.page.total

                // res.data.items.forEach(item=>{
                //    item.crtTm = item.crtTm ? item.crtTm.split(' ')[0] : ' '
                //  })
                 this.tableData=res.data.items


             }else {
               this.$message({
                 message:res.message,
                 type:'warning'
               });
             }
           })
       },
      recharge(){
        this.$router.push({
          path:'/goldrecharge'
        })
      }
      ,
      exchange(){
        // this.$router.push({
        //   path:'/goldexchange'
        // })
      },
      tFilterMethod(filters){
         this.type = filters.status[0]
        this.getList()
         // console.log(filters)
      }
    }
};
</script>

<style lang='less'>

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
    margin-bottom: 20px;
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
