<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="content-title">
        <span>{{requireDetail.nm}}</span>
        <span>{{requireDetail.crtTm}}</span>
      </div>
      <div>
        <div>
          <span></span>
          <span>Demand Description</span>
        </div>
        <div>
          <span>{{requireDetail.rmks}}</span>
        </div>
      </div>
      <div>
        <div>
          <span></span>
          <span>Contact Information</span>
        </div>
        <div><span>Name：{{requireDetail.contNm}}</span></div>
        <div><span>Telephone：{{requireDetail.contMob}}</span></div>
        <div><span>Email：{{requireDetail.email}}</span></div>
        <div><span> Other contact information：{{requireDetail.contOther}}</span></div>
      </div>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "@/componentsEn/tradeHeader";
import tradeFooter from "@/componentsEn/tradeFooter";

export default {
  data() {
    return {
      pk:'',
      info:{},
      requireDetail: {
        reportName: "服装服饰男装女装类目质检报告",
        reportTime: "2018年6月26日",
        desc: "服装服饰男装女装类目质检报告",
        linkedMan: "张收纳",
        phone: "13599990000",
        email: "25235594@qq.com",
        linked: ""
      }
    };
  },
  mounted(){
    this.pk = this.until.getQueryString('pk')
    this.getInfo()
  },
  methods:{
    getInfo(){
      this.until.get('/prod/mxpubres/info/'+this.pk)
        .then(res=>{
          if(res.status == '200'){
            this.requireDetail = res.data
          }else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
        })
    }
  },
  components: {
    tradeHeader,
    tradeFooter
  }
};
</script>

<style lang='less' scoped>
html,
body {
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 55px auto 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        padding: 35px 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          span{
            &:nth-of-type(1){
              width: 50%;
              font-size: 22px;
            }
            &:nth-of-type(2){
              text-align: right;
              width: 40%;
              font-size: 16px;
              color: #999;
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(3){
          flex-wrap: wrap;
          >div{
            width: 100%;
            &:nth-of-type(1){
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              margin-bottom: 25px;
              >span{
               &:nth-of-type(1){
                 width: 8px;
                 height: 20px;
                 background-color: #0d55d2;
               }
               &:nth-of-type(2){
                 font-size: 22px;
                 margin-left: 15px;
               }
              }
            }
            &:nth-of-type(2){
              font-size: 16px;
            }
          }
        }
        &:nth-of-type(3){
          >div{
            &:not(:nth-of-type(1)){
              font-size: 16px;
              margin-bottom: 10px;
            }
          }
        }
        &:not(:nth-last-of-type(1)){
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
}
</style>
