<template>
  <div class="footer-wrap">
    <div>
      <span>版权所有：宁波贸信检测技术服务有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</span>
    </div>
    <div>
      <span>宁波贸信检测技术服务有限公司</span>
      <span>地址：宁波市鄞州区富强路555号三、四楼</span>
      <span>电话：+86-574-89201299</span>
    </div>
    <div>
      <span>传真：+86-574-89017298</span>
      <span>E-mail:info@gig-lab.com</span>
      <span>http://www.gig-lab.com</span>
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
