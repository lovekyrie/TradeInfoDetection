<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <key-search></key-search>
    <require-publish :releaseList="releaseList"></require-publish>
    <div class="load-more">
      <span>加载更多</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
    </div>
    <foot-button :btnObj="btnObj"></foot-button>
  </div>  
</template>

<script>
import headerTitle from 'components/headerTitle'
import keySearch from "components/keySearch";
import requirePublish from "components/requirePublish";
import footButton from "components/footButton";

export default {
  data() {
    return {
      title:'需求发布',
      btnObj:{
        btnName:'发布需求',
        src:'',
      },
      releaseList: [
        {
          name: "服装服饰男装女装类目质检报告",
          type: "检测需求",
          linked: "张先生",
          phone: "15990110000",
          date: "2018年6月26日",
          state: true
        },
        {
          name: "服装服饰男装女装类目质检报告",
          type: "认证需求",
          linked: "张先生",
          phone: "15990110000",
          date: "2018年6月26日",
          state: true
        },
        {
          name: "服装服饰男装女装类目质检报告",
          type: "验货需求",
          linked: "张先生",
          phone: "15990110000",
          date: "2018年6月26日",
          state: false
        },
        {
          name: "服装服饰男装女装类目质检报告",
          type: "验货需求",
          linked: "张先生",
          phone: "15990110000",
          date: "2018年6月26日",
          state: true
        }
      ]
    };
  },
  methods: {},
  components: {
    keySearch,
    requirePublish,
    footButton,
    headerTitle,
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
    .load-more {
      margin-top: 0.2rem;
      text-align: center;
    }
  }
}
</style>
