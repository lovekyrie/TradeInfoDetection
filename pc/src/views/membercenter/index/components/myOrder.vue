<template>
      <div class="my-order" v-loading="loading">
        <el-dialog
          title="请用微信扫描二维码支付"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <vue-qr
            :text="wxCode"
            :size="size"
            :margin="0"
          ></vue-qr>
        </el-dialog>
          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">

              <el-form-item>
                <el-input class="searchInput_a" v-model="search.orderNum" placeholder="订单编号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.serviceName" placeholder="服务名称"></el-input>
              </el-form-item>
              <el-form-item label="订单状态：">
                <el-select v-model="value1">
                  <el-option
                    v-for="item in options1"
                    :key="item.cd"
                    :label="item.nm"
                    :value="item.cd">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="报告状态：">

                <el-select v-model="value2">
                  <el-option
                    v-for="item in options2"
                    :key="item.cd"
                    :label="item.nm"
                    :value="item.cd">
                  </el-option>
                </el-select>
              </el-form-item>
              <br/>
              <el-form-item label="时间：">
                <el-date-picker
                  v-model="time"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2">
                </el-date-picker>
              </el-form-item>

              <el-form-item class="searchButton">
                <el-button type="primary"  @click="toSearch">搜索</el-button>
              </el-form-item>

            </el-form>

          </div>
          <!--订单信息-->
          <el-table  :data="tableData" style="width: 100%" align="left" padding="5px"
            @row-click="">
            <el-table-column  prop="mxOrdDetePk" label="订单编号" >
              <template slot-scope="scope">
               <a  @click="toOrderDetail(tableData[scope.$index].mxOrdDetePk)"  target="_self"  class="cursor">
                 {{tableData[scope.$index].mxOrdDetePk}}
               </a>
              </template>
            </el-table-column>

            <el-table-column  prop="serviceName"  label="服务名称" >
              <template slot-scope="scope">
                <a  @click="toOrderDetail(tableData[scope.$index].mxOrdDetePk)"
                   target="_self"
                >{{tableData[scope.$index].mxPubCheckNm}}
                </a>
              </template>

            </el-table-column>
            <el-table-column prop="qty"  label="数量" width="80px"  align="center"> </el-table-column>
            <el-table-column prop="crtTm"  label="下单时间" align="center" width="160px" ></el-table-column>
            <el-table-column prop="statNm" label="订单状态" align="center"> </el-table-column>
            <el-table-column label="价格" align="center">
              <template slot-scope="scope">
                <span style="color: red">{{tableData[scope.$index].price}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="repoStatNm" label="报告状态" align="center" ></el-table-column>
            <el-table-column label="订单二维码"  align="center" >
              <template slot-scope="scope">
                <img :src="orderCodes">
              </template>
            </el-table-column>

            <el-table-column  label="操作" align="center">
              <template slot-scope="scope">
                <a class="payA" @click.stop="pay(tableData[scope.$index].mxOrdDetePk)" v-if="tableData[scope.$index].statCd==='80020.002'?true:false">支付</a>
                <div class="payA" @click.stop="cancel(tableData[scope.$index])" v-if="tableData[scope.$index].statCd==='80020.001'?true:false">取消订单</div>
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
import code from '../images/订单二维码.png'
import VueQr from 'vue-qr'
export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        time:'',
        dialogVisible:false, //二维码弹窗
        size:200,
        wxCode:'',
        timer:null, //定时器
        myTime:'',
        time:60,  //多久不再支付,秒钟
        times:2000,  //间隔多久获取一次支付状态
        logPk:'', //获取支付状态的pk
        rcdTmBeg:'',
        rcdTmEnd:'',
        orderCodes:code,
        loading:false,
        pageNo:1,
        pageSize:20,
        total:0,
        search: {
          orderNum:'',
          serviceName:'',
          testingAgency:'',
          testingName:'',

        },
        tableData: [],
        options1:[
          {
            cd:'',
            nm:'全部'
          },

        ],
        options2:[
          {cd:'',
            nm:'全部'},

        ],

        value1:'',
        value2:'',
        value3:0
      }
    },
  mounted(){
    this.getList()
    this.getOrdType()  //订单状态列表
    this.getRepType() //报告状态列表
  },
  watch:{
    time:function (val) {
      let begTime = val[0] ? this.until.formatDate(val[0]) : ''
      let endTime = val[1] ? this.until.formatDate(val[1]) : ''
      this.rcdTmBeg = begTime ? begTime.year+'-'+begTime.month+'-'+begTime.day + ' 00:00:00' : ''
      this.rcdTmEnd = endTime ? endTime.year+'-'+endTime.month+'-'+endTime.day + ' 23:59:59': ''
    }
  },
     methods: {
       pay(id){
         let param = {
           // productId:'',
           cd:1,
           outTradeNo:id,
           // productId:id,
           catCd:'21010.150',  //订单支付
           tradeType:'NATIVE'
         }

         this.until.postData('/pay/weixin/createOrder',JSON.stringify(param))
           .then(data=>{
             console.log('支付提交')
             console.log(data)
             if(data.status!=='200'){
               this.$message({
                 message:data.message,
                 type:'warning'
               });
               return
             }
             this.dialogVisible = true
             this.wxCode = data.data.url
             this.logPk = data.data.logPk
             this.myTime = this.time
              this.timer = setInterval(this.count,this.times)
           })
       },
       count(){
         this.myTime = (this.myTime*1000 - this.times)/1000
         if(this.myTime>0){
           this.until.get('/prod/log/ordLog?pk='+this.logPk)
             .then(res=>{
               if(res.status == 200){
                 this.dialogVisible = false
                 this.toSearch()
                 clearInterval(this.timer);
                 this.$message({
                   message:'支付成功！',
                   type:'success'
                 });
               }
             })
         }else {
           this.dialogVisible = false
           this.myTime = this.time
           clearInterval(this.timer);
           this.$confirm('支付超时，请重新点击支付')
             .then(_ => {
               done();
             })
             .catch(_ => {});

         }

       },
       handleClose(done) {
         this.$confirm('确认关闭？')
           .then(_ => {
             done();
           })
           .catch(_ => {});
       },
       handleCurrentChange(val){
         this.pageNo = val
         this.getList()
       },
       getOrdType(){
         this.until.get('/general/cat/listByPrntCd?prntCd=80020')
           .then(res=>{
             if(res.status=='200'){
               this.options1.push(...res.data.items)
             }
           })
       },
       getRepType(){
         this.until.get('/general/cat/listByPrntCd?prntCd=80010')
           .then(res=>{
             if(res.status=='200'){
               this.options2.push(...res.data.items)
             }
           })
       },
       toSearch(){
         this.pageNo = 1

         this.getList()
       },
       getList(){
         this.loading = true;

         let query = new this.Query();
         // console.log
         if(this.search.orderNum){
           query.buildWhereClause('mxOrdDetePk',this.search.orderNum,'LK');
         }
         if(this.search.serviceName){
           query.buildWhereClause('mxPubCheckNm',this.search.serviceName,'LK');
         }
         if(this.value1){
           query.buildWhereClause('statCd',this.value1,'LK');
         }
         if(this.value2){
           query.buildWhereClause('repoStatCd',this.value2,'LK');
         }

         if(this.rcdTmBeg){
           query.buildWhereClause('crtTm',this.rcdTmBeg,'GE');
         }
         if(this.rcdTmEnd){
           query.buildWhereClause('crtTm',this.rcdTmEnd,'LE');
         }

         query.buildPageClause(this.pageNo,this.pageSize);
         let param = query.getParam();
         // console.log(myParam)
         let url = '/prod/mxordete/pageSelf'
         this.until.get(url,param)
           .then(res=>{
             this.loading = false;
             if(res.status == 200){
               this.total = res.page.total

                 res.data.items.forEach(item=>{
                   item.crtTm = item.crtTm ? item.crtTm.split(' ')[0] : ''
                 })
                 this.tableData = res.data.items



             }else {

             }
           },err=>{});
       },
       cancel(info){
         // console.log(info)
         this.$confirm('确定取消该订单?', '提示', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
         }).then(() => {
           info.statCd = '80020.005'
           info.statNm = '已取消'
           this.until.postData('/prod/mxordete/edit',JSON.stringify(info))
             .then(res=>{
               if(res.status=='200'){
                 this.$message({
                   message:'取消成功',
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
      //编辑当前行
      handleEdit(index, row) {
        // console.log(index, row);
      },

      //删除当前行
      handleDelete(index, row) {
        // console.log(index, row);
      },
      toOrderDetail(val){

        this.$router.push({
          path:'/orderdetail',
          query:{
            ipPk:val
          }
        })
      }
    },
  components:{
    VueQr
  },
};
</script>

<style lang='less'>
.el-dialog--small{
  width: 280px!important;
  text-align: center;
}
.my-order {
  font-size: 12px!important;
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
      width: 130px;
    }

    //选择器表单宽度
    .el-select {
      width: 145px;
    }
    label {
      color: rgb(144, 144, 144);
      font-weight: 200;
    }

    .el-button {
      width: 145px;
    }

    .el-button--primary {
      background-color: rgb(13, 85, 210);
    }

    .searchButton {
      float: right;
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

    //支付、取消按钮样式
    .payA {
      cursor:pointer;
      display: block;
      text-decoration: none;
      padding: 3px;
      width: 68px;
      border-radius: 2px;
      border: 1px solid rgb(201, 201, 201);
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
