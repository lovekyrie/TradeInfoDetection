<template>
  <div id="app">
    <header-title :title="title" :littleTitle="littleTitle"></header-title>
    <div class="detection-wrap">
      <div class="detection">
        检测认证指引
      </div>
    </div>
    <div class="detection-bar">
      <span></span>
      <span>第三方检测服务</span>
    </div>
    <detection-product :productList="productList"></detection-product>
    <div class="load-more">
      <span>加载更多</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
    </div>
  </div>  
</template>

<script>
import headerTitle from "components/headerTitle";
import product from "./images/product.png";
import detectionProduct from "components/detectionProduct";

export default {
  data() {
    return {
      title: "检测认证及服务指引",
      littleTitle: "平台发布",
      productList: [
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告"
        }
      ]
    };
  },
  methods: {},
  components: {
    headerTitle,
    detectionProduct
  }
};
</script>

<style lang="less">
html,
body {
  background-color: #f7f7f7;
  height: 100%;
  #app {
    height: 100%;
    .detection-wrap {
      padding: 0.3rem 0.4rem;
      background-color: #fff;
      .detection {
        font-size: 16px;
        text-align: center;
        padding: 0.2rem 0;
        color: #fff;
        background-color: #ff6a21;
        border-radius: 3px;
      }
    }
    .detection-bar {
      background-color: #fff;
      padding: 0 0.4rem;
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
    .load-more {
      margin-top: 0.2rem;
      text-align: center;
    }
  }
}
</style>

