<template>
  <div id="container">
    <!--页头-->
    <headerMenu></headerMenu>


    <!--中间内容-->
    <div id="main">
      <!--中间左侧单边栏-->
      <div class="mainLeft">
        <ul>
          <li>会员中心</li>
          <li>会员中心</li>
          <li>会员中心</li>
          <li>会员中心</li>
          <li>会员中心</li>
          <li>会员中心</li>
          <li>会员中心</li>
        </ul>
      </div>
      <!--中间右侧内容栏-->
      <div class="mainRight"></div>
    </div>

    <!--页脚-->
    <tradeFooter></tradeFooter>

  </div>

</template>

<script>
  import headerMenu from 'components/headerMenu';
  import tradeFooter from 'components/tradeFooter';

  export default {
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
