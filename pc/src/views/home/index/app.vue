<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="swipper">
    </div>
  </div>
</template>

<script>
import tradeHeader from 'components/tradeHeader'

export default {
  data(){
    return {

    }
  },
  methods:{

  },
  components:{
    tradeHeader,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #F4F4F4;
  #app{
    height: 100%;
  
  }
}
</style>
