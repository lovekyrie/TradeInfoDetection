<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="introduce">
        <div><img :src="log" alt=""></div>
        <div>
          <div>
            <p>{{companyName}}</p>
            <span>{{name}}</span>
          </div>
          <div>
            <p>公司简介：</p>
            <span>{{introduce}}</span>
          </div>
        </div>
      </div>
      <div class="linked">
        <div>
          <span></span><span>联系方式</span>
        </div>
        <div>
          <span>上传者：{{name}}</span>
          <span>联系方式：{{phone}}</span>
          <span>联系传真：{{tax}}</span>
        </div>
        <div>
          <span>联系邮箱：{{email}}</span>
          <span>详细地址：{{address}}</span>
        </div>
      </div>
      <div class="propaganda">
        <div>
          <span></span><span>生产工艺宣传</span>
        </div>
        <div>
          <div v-for="(item, index) in processArr" :key="index">
            <img :src="item" alt="">
        </div>
        </div>
        <div>
          <span>{{desc}}</span>
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
import log from "./images/log_03.png";
import process1 from "./images/process1_10.png";
import process2 from "./images/process2_10.png";
import process3 from "./images/process3_10.png";

export default {
  data() {
    return {
      log,
      process1,
      process2,
      process3,
      companyName: "宁波太平鸟服饰",
      name: "张三",
      introduce: `质检服饰佩饰_CTTC中纺标_认证需求。如果你无法简洁的表达你的想法，那只说明你还不够了解它`,
      phone: "13599990000",
      tax: "0574-8889999",
      email: "239934203@163.com",
      address: "浙江省宁波市鄞州区彩虹南路12号",
      processArr: [process1, process2, process3],
      desc: `最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告
      ，最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告`
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
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 140px auto;
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
