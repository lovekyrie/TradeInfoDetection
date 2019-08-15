<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="content-title">
        <span>{{detail.nm}}</span>
        <span>{{detail.frSala}}-{{detail.toSala}} /month</span>
        <span>{{detail.entpNm}}</span>
        <span>Tel：{{detail.mob}}</span>
        <span>Email：{{detail.email}}</span>
      </div>
      <div>
        <div>
          <span></span>
          <span>Job Description</span>
        </div>
        <div v-html="detail.intro"></div>
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
      detail: {
      }
    };
  },
  mounted(){
    this.userPk = this.until.getQueryString('pk')
    this.getInfo()
  },
  methods: {
    getInfo(){
      this.until.get('/prod/mxpubrecr/info/'+this.userPk)
        .then(res=>{
          this.detail = res.data
          this.detail.intro=this.detail.intro.replace(/\n/gm,"<br/>")
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
      margin: 0px auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        padding: 35px 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
         >span{
           width: 50%;
           margin-bottom: 25px;
           font-size: 16px;
           &:nth-of-type(1),
           &:nth-of-type(2){
             font-size: 22px;
           }
           &:nth-of-type(2n){
             text-align: right;
           }
         }
        }
        &:nth-last-of-type(1){
          flex-wrap: wrap;
          >div{
            width: 100%;
            margin-bottom: 25px;
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
            &:not(:nth-of-type(1)){
              font-size: 16px;
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
