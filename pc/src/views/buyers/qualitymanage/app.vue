<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="search">
        <el-form>
            <el-form-item label="质检产品名称：">
              <el-input placeholder="产品名称" v-model="searchGdno"></el-input>
            </el-form-item>
            <el-form-item label="供应商名称：">
              <el-input placeholder="供应商名称" v-model="searchCustName"></el-input>
            </el-form-item>
            <el-form-item label="质检产品地域：">
              <addr @setAddr="getAddr"></addr>
            </el-form-item>
            <el-form-item label="序列号：">
              <el-input placeholder="序列号" v-model="searchSn"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">查询</el-button>
              <el-button @click="toUpload">报告上传</el-button>
            </el-form-item>
            <!-- 布局用 -->
            <div></div>
        </el-form>
      </div>
      <div class="list">
        <div>
          <span>序列号</span>
          <span>质检产品名称</span>
          <span>供应商名称</span>
          <span>质检产品地域</span>
        </div>
        <div v-for="(item, index) in searchBot" :key="index" @click="toDetail(item.mxRepoPk)" class="myList">
          <span>{{item.no}}</span>
          <span>{{item.prodNm}}</span>
          <span>{{item.supply}}</span>
          <span>{{item.prodProvNm}} {{item.prodCityNm}}</span>
        </div>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page=pageNo
            :page-size=pageSize
            layout="total, sizes, prev, pager, next, jumper"
            :total=total>
          </el-pagination>
        </div>
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
import addr from "components/addr";
export default {
  data() {
    return {
      loading:false,
      pageNo:1,
      pageSize:30,
      total:0,
      cityCode1:'',
      cityCode2:'',
      searchGdno: "",
      searchSn: "",
      searchCustName: "",
      searchBot:[
        {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
         {
          serialNo:'110000919282392312',
          productName:'防晒衣',
          vendor:'宁波太平鸟服饰',
          address:'浙江-宁波'
        },
      ]
    };
  },
  mounted(){
    this.getList()
  },
  methods: {
    toUpload(){
      window.location.href = '../buyers/uploadreport.html'
    },
    //详情
    toDetail(val){
      window.location.href = '../buyers/reportdetail.html?pk='+val
    },
    getAddr:function(val){
      let cd = JSON.parse(val)
      this.cityCode1 = cd.cd1
      this.cityCode2 = cd.cd2
    },
    getList(){
      this.loading = true;
      let query = new this.Query();
      query.buildPageClause(this.pageNo,this.pageSize);
      let param = {
        city:this.cityCode2,
        type:1,
        nm:this.searchGdno,
        no:this.searchSn,
        prov:this.cityCode1,
        deteOrg:this.searchCustName,
        query:query.getParam()
      }
      this.until.get('/prodx/mxrepo/page',param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            this.total = res.page.total
            this.searchBot=res.data.items

          }else {
            this.$hero.msg.show({
              text:res.message,
              times:1500
            });
          }
        },err=>{});
    },
    //查询
    search(){
      this.searchBot = []
      this.pageNo = 1
      this.getList()
    },
    handleCurrentChange(val){
      this.pageNo = val
      this.getList()
    }
  },
  components: {
    tradeHeader,
    tradeFooter,
    addr
  }
};
</script>

<style lang='less'>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 70px auto 0px;
      .search {
        margin-bottom: 20px ;
        padding: 0 25px;
        .el-form {
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          > div {
            width: 30%;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            &:nth-last-of-type(2) {
              > div {
                width: 100%;
                button {
                  font-size: 16px;
                  width: 150px;
                  padding: 15px 0;
                  &:nth-of-type(1) {
                    background-color: #0d55d2;
                  }
                  &:nth-of-type(2) {
                    border: 1px solid #0d55d2;
                  }
                }
              }
            }
            > label {
              text-align: left;
              width: 35%;
            }
            > div {
              width: 60%;
              input{
                padding: 23px 0 23px 10px;
              }
            }
          }
        }
      }
      .list{
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .myList{
          cursor: pointer;
        }
        >div{
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-around;
          &:nth-of-type(1){
            padding: 15px 0;
            background-color: #f1f1f1;
          }
          &:not(:nth-of-type(1)){
            padding: 25px 0;
            border-bottom: 1px solid #ddd;
          }
          >span{
            width:20%;
          }
        }
      }
    }
  }
}
</style>
