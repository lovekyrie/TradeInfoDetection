<template>
  <div id="app">
    <trade-header :showSearch="showSearch" :showNav="showNav"></trade-header>
    <router-view></router-view>
    <trade-footer></trade-footer>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";

export default {
  data() {
    return {
      showSearch: true,
      showNav: true,
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
  background-color: #f4f4f4;
  #app {
    width: 100%;
    height: 100%;
    .header {
      margin: 0 auto;
      background-color: #fff;
    }
    
  }
}
</style>
