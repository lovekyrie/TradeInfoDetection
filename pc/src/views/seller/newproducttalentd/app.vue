<template>
  <div id="app">
      <trade-header></trade-header>
      <div class="content">

        <div class="job-info">
          <div>
            <span>
            {{info.talePost}}
            </span>
          </div>
          <div>
            <span>{{info.persNm}}</span>
            <span>联系电话：{{info.taleMob}}</span>
          </div>
          <div><span>邮箱地址：{{info.taleEmail}}</span></div>
        </div>
        <div class="personal">
          <div>
            <span></span><span>个人简介</span>
          </div>
          <div v-html="info.taleIntro">
          </div>
        </div>
        <div class="skills">
          <div>
            <span></span><span>技能特长</span>
          </div>
          <div v-html="info.taleSpecSkill">
          </div>
          <div id="certificate"><span>资历证书：</span></div>
          <div v-html="info.taleQualCert">
          </div>
          <div id="train"><span>培训经历：</span></div>
          <div v-html="info.taleTrainExpes"></div>
        </div>
      </div>
      <trade-footer></trade-footer>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";

export default {
  data() {
    return {
      userPk:'',
      info:{},
    };
  },
  mounted(){
    this.userPk = this.until.getQueryString('pk')
    this.getInfo()
  },
  methods:{

    getInfo(){
      this.until.get('/prodx/mxpubtale/info/'+this.userPk)
        .then(res=>{
          this.info = res.data
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
      margin: 20px auto 130px;

      > div {
        margin: 40px 0;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .job-info {
        > div {
          width: 100%;
          &:nth-of-type(1) {
            font-size: 20px;
          }
          &:nth-of-type(2) {
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            span {
              width: 50%;
              &:nth-of-type(2) {
                text-align: right;
              }
            }
          }
          &:not(:nth-of-type(1)) {
            font-size: 16px;
          }
          &:not(:nth-last-of-type(1)) {
            margin-bottom: 25px;
          }
        }
      }
      .personal,
      .skills{
        border-top: 1px solid #F1F1F1;
        padding-top: 40px;
        >div{
          width: 100%;
          &:nth-of-type(1){
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            span{
              &:nth-of-type(1){
                width: 10px;
                height: 25px;
                background-color: #0d55d2;
              }
              &:nth-of-type(2){
                width: 98%;
                font-size: 20px;
                font-weight: 700;
              }
            }
          }
          &:not(:nth-of-type(1)){
            font-size: 16px;
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: 25px;
          }
        }
      }
      .skills{
        #certificate,
        #train{
          font-size: 18px;
        }
      }
    }
  }
}
</style>
