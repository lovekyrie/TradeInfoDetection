<template>
  <div class="footer-wrap">
    <div>
      <span>Copyright:   MaoXin Technology Limited Company   Record / License No.: 浙ICP备16007937号 </span>
    </div>
    <!--<div>-->
      <!--<span>浙江贸信科技有限公司</span>-->
      <!--<span>地址：宁波市鄞州区富强路555号四楼</span>-->
      <!--<span>电话：+86-574-83025100</span>-->
    <!--</div>-->
    <div>
      <!--<span>传真：+86-574-89017298</span>-->
      <span>E-mail:info@mdxd.com</span>
      <span>National Hotline:400-826-1805</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
  .footer-wrap{
    padding: 35px 0;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #EEEEEE;
    background-color: #fff;
    >div{
      width: 100%;
      text-align: center;
      &:not(:nth-last-of-type(1)){
        margin-bottom: 20px;
      }
    }
  }
</style>
