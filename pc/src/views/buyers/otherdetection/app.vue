<template>
  <div id="app">
    <div class="header">
      <trade-header :showSearch="showSearch"></trade-header>
    </div>
    <div class="content">
      <detection-tab></detection-tab>
      <router-view></router-view>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from 'components/tradeHeader'
import tradeFooter from 'components/tradeFooter'
import detectionTab from 'components/detectionTab'

export default {
  data(){
    return {
      showSearch:true,
    }
  },
  methods:{

  },
  components:{
    tradeHeader,
    tradeFooter,
    detectionTab,
  }
}
</script>

<style lang='less'>
html,body{
  width: 100%;
  height: 100%;
  background-color: #fff;
  #app{
    width: 100%;
    .content{
      width: 1200px;
      margin: 130px auto;
    }
  }
}
</style>
