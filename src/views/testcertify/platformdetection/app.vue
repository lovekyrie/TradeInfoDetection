<template>
  <div id="app">
    <header-title :title="title" :littleTitle="littleTitle"></header-title>
    <div class="detection-wrap">
      <div class="detection">
        检测认证指引
      </div>
    </div>
    <div class="detection-bar">
      <span>综合</span>
      <span>销量</span>
      <div>
        <img :src="sellCount" alt="">
      </div>
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
import sellCount from "./images/销量.png";
import detectionProduct from "components/detectionProduct";

export default {
  data() {
    return {
      title: "检测认证及服务指引",
      littleTitle: "三方检测",
      sellCount,
      productList: [
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          price: 10
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
      padding: 0.2rem 0.4rem;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      color: #afafaf;
      > span:nth-of-type(1) {
        text-align: center;
        width: 20%;
      }
      > span:nth-of-type(2) {
         text-align: center;
        width: 25%;
      }
      > div {
        position: relative;
        width: 55%;
        height: 14px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          height: auto;
          width: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .load-more {
      margin-top: 0.2rem;
      text-align: center;
    }
  }
}
</style>

