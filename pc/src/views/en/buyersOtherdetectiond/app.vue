<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="service">
        <div>
          <img :src="info.imgUrl" alt="">
        </div>
        <div>
          <h3>{{info.nm}}</h3>
          <div>
            <h4>Service Content</h4>
            <span>{{info.intro}}</span>
          </div>
        </div>
      </div>
      <div class="introduce">
        <h4>Introduction of Inspection Institutions</h4>
        <div class="info">
          <div>
            <div>
              <img :src="info.entpLogoUrl" alt="">
            </div>
            <div>
              <p>Test Organization：{{info.entpNm}}</p>
              <span>{{info.entpIntro}}</span>
            </div>
          </div>
          <div><span>Contact：{{info.entpContNm}}</span></div>
          <div><span>Tel：{{info.entpContMob}}</span></div>
          <div><span>Email：{{info.entpEmail}}</span></div>
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
import detailpro from "./images/detailpro_03.png";
import peacebird from "./images/peacebird_03.png";

export default {
  data() {
    return {
      pk:'',
      info:{},
    };
  },
  mounted(){
    this.pk = this.until.getQueryString('pk')
    this.getInfo()
  },
  methods: {
    getInfo(){
      this.until.get('/prod/mxpubthrser/info/' + this.pk)
        .then(res => {
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
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 75px auto 0px;
      .service {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        > div {
          &:nth-of-type(1) {
            width: 418px;
            img{
              width: auto;
              max-width: 100%;
            }
          }
          &:nth-of-type(2) {
            width: 755px;
            h3 {
              padding: 30px 0;
              border-bottom: 1px solid #ddd;
              font-weight: 400;
              font-size: 20px;
            }
            div {
              h4 {
                font-size: 18px;
                padding: 30px 0 20px;
              }
              span {
                font-size: 16px;
              }
            }
          }
        }
      }
      .introduce {
        margin-top: 30px;
        h4 {
          padding-bottom: 20px;
          font-size: 18px;
          border-bottom: 1px solid #ddd;
        }
        div {
          width: 100%;
          font-size: 16px;
          &:nth-of-type(1) {

            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            > div {
              &:nth-of-type(1) {
                display: -webkit-flex;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                > div {
                   margin: 20px 0;
                  &:nth-of-type(1) {
                    width: 198px;
                    border-radius: 3px;
                    img {
                      width: auto;
                      height: auto;
                      max-width: 100%;
                      max-height: 100%;
                      vertical-align: middle;
                    }
                  }
                  &:nth-of-type(2) {
                    width: 980px;
                    p {
                      font-weight: 700;
                      font-size: 18px;
                      margin-bottom: 20px;
                    }
                    span {
                      padding-right: 20px;
                      font-size: 16px;
                    }
                  }
                }
              }
            }
          }
          &:not(:nth-of-type(1)){
            margin-bottom: 25px;
          }
        }
      }
    }
  }
}
</style>
