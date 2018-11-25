<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="title">
        <div>{{reportDetail.title}}</div>
        <div>
          <div>
            <img :src="download" alt="">
            <span>下载报告</span>
          </div>
          <div>
            <img :src="collect" alt="">
            <span>收藏</span>
          </div>
        </div>
      </div>
      <div>
        <span>上传者：{{reportDetail.uploader}}</span>
      </div>
      <div>
        <span>序列号：{{reportDetail.serialNo}}</span>
        <span>检测机构：{{reportDetail.organization}}</span>
        <span>供应商名称：{{reportDetail.vendor}}</span>
      </div>
      <div>
        <span>质检产品名称：{{reportDetail.productName}}</span>
        <span>质检产品地域：{{reportDetail.address}}</span>
      </div>
      <div>
        <span>检测项目：{{reportDetail.project}}</span>
      </div>
    </div>
    <div class="pdf-reader">

    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import collect from "./images/收藏.png";
import hasCollect from "./images/已收藏.png";
import download from "./images/下载小.png";

export default {
  data() {
    return {
      collect,
      hasCollect,
      download,
      reportDetail: {
        title: "福州福州服饰有限公司防晒衣检测报告",
        uploader: "张三",
        serialNo: "1100000911000009",
        organization: "宁波贸信检测",
        vendor: "宁波太平鸟服饰",
        productName: "防晒衣",
        address: "浙江 - 宁波",
        project: "填写关键词"
      }
    };
  },
  methods: {},
  components: {
    tradeHeader,
    tradeFooter
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app {
    height: 100%;
    width: 100%;
    .content {
      width: 1200px;
      margin: 75px auto 0;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        margin-bottom: 25px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          > div {
            &:nth-of-type(1) {
              width: 410px;
              font-size: 22px;
            }
            &:nth-of-type(2) {
              width: 310px;
              display: -webkit-flex;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              font-size: 16px;
              > div {
                width: 50%;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                img{
                  max-width: 100%;
                  max-height: 100%;
                  width: auto;
                  height: auto;
                  vertical-align: middle;
                }
                span{
                  margin-left: 15px;
                }
              }
            }
          }
        }
        &:not(:nth-of-type(1)){
          font-size: 16px;
        }
        &:nth-of-type(3){
          >span{
            flex: 1;
          }
        }
        &:nth-of-type(4){
          >span{
            &:nth-of-type(1){
              flex: 1;
            }
            &:nth-of-type(2){
              flex:2;
            }
          }
        }
      }
    }
    .pdf-reader{
      width: 1200px;
      height: 900px;
      margin: 0 auto 150px;
      background-color: #f2f2f2;
    }
  }
}
</style>
