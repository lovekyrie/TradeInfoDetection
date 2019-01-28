<template>
  <div id="app">
    <div class="header">
      <img :src="info.imgUrl" alt="">
    </div>
    <div class="content">
      <div class="detection-name">
        <span>{{info.nm}}</span>
      </div>
      <div class="detection-info">
        <div><span></span><span>服务内容</span></div>
        <div>
          <p>{{info.intro}}</p>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="organization">
        <div><span></span><span>检测机构介绍</span></div>
        <div>
          <div class="img"><img :src="info.entpLogoUrl" alt=""></div>
          <div>
            <div>检测机构名称：</div>
            <div>{{info.entpNm}}</div>
          </div>
        </div>
        <div>
          <p>{{info.entpIntro}}</p>
        </div>
        <div><span>联系人：{{info.entpContNm}}</span></div>
        <div><span>联系电话：{{info.entpContMob}}</span></div>
        <div><span>联系邮箱：{{info.entpEmail}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import productLog from "./images/product-log.png";
import productInfo from "./images/productinfo.png";

export default {
  data() {
    return {
        pk:'',
        info:''
    };
  },
    mounted(){
        this.pk = this.until.getQueryString('pk')
        this.getInfo()
    },
    methods: {
        getInfo() {
            this.until.get('/prod/mxpubthrser/info/' + this.pk)
                .then(res => {
                    this.info = res.data
                })
        },
    }
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .header {
      img {
        vertical-align: middle;
        max-width: 100%;
      }
    }
    .content {
      margin-bottom: 0.2rem;
      background-color: #fff;
      .detection-name {
        padding: 0.2rem 0.4rem;
        font-size: 16px;
        border-bottom: 1px solid #e8e8e8;
      }
      .detection-info {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 100%;
          &:nth-of-type(1) {
            color: #939393;
            font-size: 16px;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            > span:nth-of-type(1) {
              width: 2%;
              height: 0.3rem;
              background-color: #54a6ff;
            }
            > span:nth-of-type(2) {
              width: 95%;
            }
          }
          &:nth-of-type(2) {
            margin-top: 0.2rem;
            color: #a1a1a1;
          }
        }
      }
    }
    .introduce {
      background-color: #fff;
      .organization {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .img{
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          height: 1.5rem;
          img{
            width: auto;
            height: auto;
            max-height: 100%;
            max-width: 100%;
          }
        }
        > div {
          margin-top: .2rem;
          width: 100%;
          color: #A3A3A3;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          &:nth-of-type(1) {
            margin-top: 0;
            color: #939393;
            font-size: 16px;
            align-items: center;
            > span:nth-of-type(1) {
              width: 2%;
              height: 0.3rem;
              background-color: #54a6ff;
            }
            > span:nth-of-type(2) {
              width: 95%;
            }
          }
          &:nth-of-type(2){
            >div:nth-of-type(1){
              width: 30%;
            }
            >div:nth-of-type(2){
              width: 70%;
              display: -webkit-flex;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-content: center;
              >div{
                width: 100%;
                &:nth-of-type(2){
                  font-size: 16px;
                  color: #000;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
