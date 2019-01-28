<template>
  <div id="app">
    <trade-header :showSearch="showSearch"></trade-header>
    <div class="content">
      <div class="el-row">
        <button @click="toEnterprise">企业发布</button>
        <button class="active">个人发布</button>
      </div>
      <div class="equipment-list">
        <div v-for="(item, index) in equipmentList" :key="index" @click="toDetail(item.mxPubDevPk)">
          <span>{{item.nm}}</span>
          <span>{{item.contNm}}&nbsp;&nbsp;{{item.contMob}}</span>
          <span>{{item.rcdTm}}</span>
        </div>
      </div>
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
    <trade-footer></trade-footer>
  </div>
</template>

<script>
import tradeHeader from 'components/tradeHeader'
import tradeFooter from 'components/tradeFooter'

export default {
  data(){
    return{
      showSearch:false,
      total:0,
      pageNo:1,
      pageSize:20,
      equipmentList:[]
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
    toDetail(val){
      window.location.href = 'personalEquipmentd.html?pk='+val
    },
    handleCurrentChange(val){
      this.pageNo = val
      this.getList()
    },
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
        value:this.key,
        // query:query.getParam()
      }
      let url = '/prodx/mxpubdev/page'
      this.until.get(url,param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            this.total = res.page.total
                this.equipmentList=res.data.items
          }else {

          }
        },err=>{});
    },
    toEnterprise(){
      window.location.href = '../seller/enterpriseEquipment.html'
    }
  },
  components:{
    tradeHeader,
    tradeFooter
  }
}
</script>

<style lang="less" scoped>
html,body{
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app{
    width: 100%;
    .content{
      width: 1200px;
      margin: 20px auto 0px;
      .el-row{
        border-bottom: 1px solid #dddddd;
        button{
          width: 100px;
          text-align: center;
          line-height: 40px;
          height: 40px;
          border-radius: 3px 3px 0 0;
          background: #dddddd;
          margin-right: 15px;
        }
        button.active{
          background: #0d55d2;
          color: #fff;
        }
      }
      .block{
        margin: 20px 0;
      }
      .equipment-list{
        display: -webkit-flex;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        >div{
          cursor: pointer;
          padding: 30px 0;
          width: 100%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e1e1e1;
          >span{
            &:nth-of-type(1){
              width: 45%;
              color: #0d55d2;
              display: flex;
              align-items: center;
              &::before{
                margin-right: 10px;
                display: inline-block;
                content: '.';
                height: 5px;
                width: 5px;
                background-color: #0d55d2;
                color: #fff;
              }
            }
            &:nth-of-type(2){
              width: 20%;
            }
            &:nth-of-type(3){
              width: 15%;
            }
          }
        }
      }
    }
  }
}
</style>

