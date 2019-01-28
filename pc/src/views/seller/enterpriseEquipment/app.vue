<template>
  <div id="app" v-loading="loading">
    <trade-header :showSearch="showSearch"></trade-header>
    <div class="content">
      <div class="el-row">
        <button class="active">企业发布</button>
        <button @click="toPersonal">个人发布</button>
      </div>
      <div class="equipment-list">
        <div v-for="(item, index) in equipmentList" :key="index" @click="toDetail(item.mxPubDevPk)">
          <div :style="'background-image:url('+item.imgUrl+')'">
            <!--<img :src="item.imgUrl" alt="">-->
          </div>
          <span>{{item.nm}}</span>
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
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import equipmentImg from "./images/quipmentImg_03.png";

export default {
  data() {
    return {
      loading:false,
      showSearch: true,
      equipmentImg,
      equipmentList: [],
      total:0,
      pageSize:20,
      pageNo:1,
      equipment: {
        src: equipmentImg,
        equipmentName: "【转租】转租水质检测设备一台"
      }
    };
  },
  mounted() {
    this.key = this.until.getQueryString('val') ? this.until.getQueryString('val') : ''
    this.getEnterpriseEquipementList();
  },
  components: {
    tradeHeader,
    tradeFooter
  },

  methods: {
    toDetail(val){
      window.location.href = 'enterpriseEquipmentd.html?pk='+val
    },
    handleCurrentChange(val){
        this.pageNo = val
        this.getEnterpriseEquipementList()
    },
    getEnterpriseEquipementList() {
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
      let url = '/prodx/mxpubdev/pageentp'
      this.until.get(url,param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            this.total = res.page.total
            this.equipmentList=res.data.items
          }else {
            this.$message({
              message:res.message,
            });
          }
        },err=>{});
    },
    toPersonal(){
      window.location.href='../seller/personalEquipment.html'
    }
  }
};
</script>

<style lang='less'scoped>
html,body{
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app{
    width: 100%;
    .content{
      width: 1200px;
      margin: 20px auto 50px;
      .el-row{
        border-bottom: 1px solid #dddddd;
        margin-bottom: 20px;
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
      .equipment-list{
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*flex-direction: row;*/
        /*flex-wrap: wrap;*/
        /*justify-content: space-between;*/
        width: 100%;
        overflow: hidden;

        >div{
          cursor: pointer;
          margin: 0 1%;
          float: left;
          width: 23%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          div{
            height: 200px;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-position:center;
            background-size:cover;
            background-repeat:no-repeat;
            img{
              width: auto;
              height: auto;
              max-height: 100%;
              max-width: 100%;
            }
          }
          div,span{
            width: 100%;
            margin-bottom: 20px;
          }
          span{
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
