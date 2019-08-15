<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="introduce">
        <div><img :src="detail.logoUrl" alt=""></div>
        <div>
          <div>
            <p>{{nm}}</p>
            <span>{{detail.legal}}</span>
          </div>
          <div>
            <p>Company profile：</p>
            <span>{{detail.intro}}</span>
          </div>
        </div>
      </div>
      <div class="linked">
        <div>
          <span></span><span>Contact Information</span>
        </div>
        <div>
          <span>Contact：{{detail.contNm}}</span>
          <span>Tel：{{detail.contMob}}</span>
          <!--<span>联系传真：{{tax}}</span>-->
        </div>
        <div>
          <span>Email：{{detail.email}}</span>
          <span>Detailed address：{{detail.contAddr}}</span>
        </div>
      </div>
      <div class="propaganda">
        <div>
          <span></span><span>Propaganda of Production Technology</span>
        </div>
        <div>
          <div v-for="(item, index) in imgList" :key="index">
            <img :src="item" alt="">
        </div>
        </div>
        <div>
          <span>{{detail.descr}}</span>
        </div>
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
import log from "./images/log_03.png";
import process1 from "./images/process1_10.png";
import process2 from "./images/process2_10.png";
import process3 from "./images/process3_10.png";

export default {
  data() {
    return {
      nm:'',
      imgList:[],
      detail:{}
    };
  },
  mounted(){
    this.nm = this.until.getQueryString('nm')
    this.getInfo();
  },
  methods: {
    getInfo(){
      this.until.get('/prod/mxmagent/page?nm='+this.nm)
        .then(res=>{
          if(res.status=='200'){
            this.detail = res.data.items[0]
            this.imgList = this.detail.imgUrl!='' ? this.detail.imgUrl.split(',') : ''
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
      margin:60px auto 10px;
      .introduce {
        padding-bottom: 30px;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        > div {
          &:nth-of-type(1) {
            width: 200px;
          }
          &:nth-of-type(2) {
            width: 980px;
            padding: 30px 0;
            display: -webkit-flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: space-between;
            > div {
              width: 100%;
              p {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 20px;
              }
              span {
                font-size: 16px;
                color: #959595;
              }
            }
          }
        }
      }
      .linked {
        padding: 30px 0;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 1px solid #ddd;
        > div {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          &:nth-of-type(1) {
            align-items: center;
            justify-content: space-between;
            > span {
              &:nth-of-type(1) {
                width: 10px;
                height: 25px;
                background-color: #0d55d2;
              }
              &:nth-of-type(2) {
                width: 98%;
                font-size: 18px;
                font-weight: 700;
              }
            }
          }
          &:not(:nth-of-type(1)) {
            font-size: 16px;
            > span {
              &:nth-of-type(1),
              &:nth-of-type(3) {
                width: 30%;
              }
              &:nth-of-type(2) {
                width: 40%;
              }
            }
          }
          &:not(:nth-last-of-type(1)) {
            margin-bottom: 30px;
          }
        }
      }
      .propaganda {
        padding: 30px 0;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          &:nth-of-type(1) {
            margin-bottom: 20px;
            justify-content: space-between;
            align-items: center;
            > span {
              &:nth-of-type(1) {
                width: 10px;
                height: 25px;
                background-color: #0d55d2;
              }
              &:nth-of-type(2) {
                width: 98%;
                font-size: 18px;
                font-weight: 700;
              }
            }
          }
          &:nth-of-type(2) {
            margin-bottom: 20px;
            flex-wrap: nowrap;
            > div {
              width: 200px;
              &:not(:nth-last-of-type(1)) {
                margin-right: 20px;
              }
              img {
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
                vertical-align: middle;
              }
            }
          }
          &:nth-of-type(3) {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
