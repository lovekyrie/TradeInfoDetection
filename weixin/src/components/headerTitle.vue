<template>
  <div class="header-title">
    <div @click="back()">
      <van-icon name="arrow-left" />
      <!--<svg class="icon" aria-hidden="true">-->
        <!--<use xlink:href="#icon-gengduo"></use>-->
      <!--</svg>-->
    </div>
    <div class="title-name">{{title}}</div>
    <div class="little-title" @click="linkToSimilar">{{littleTitle}}</div>
  </div>
</template>

<script>
    import Vue from 'vue'
    import { Icon } from 'vant';
    Vue.use(Icon);
export default {
  props: ["title", "littleTitle",'backUrl'],
  data() {
    return {};
  },
  methods: {
    back(){
        if(this.backUrl){
            window.location.href = this.backUrl
        }else {
            window.history.back();
        }
    },
    linkToSimilar() {
      if (this.littleTitle === "平台发布") {
        window.location.href = "../testcertify/platformdetection.html";
      } else {
        window.location.href = "../testcertify/otherdetection.html";
      }
    }
  }
};
</script>

<style lang="less">
.header-title {
  padding: 0.2rem 0.3rem;
  background-color: #54a6ff;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  .van-icon{
    font-size: 16px;
  }
  > div:nth-of-type(1) {
    width: 20%;
    > svg {
      transform: rotate(-180deg);
    }
  }
  > div:nth-of-type(2) {
    text-align: center;
    width: 60%;
    font-size: 16px;
  }
  > div:nth-of-type(3) {
    width: 20%;
  }
}
</style>
