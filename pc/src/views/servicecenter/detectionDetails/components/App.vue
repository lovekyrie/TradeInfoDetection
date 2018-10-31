<template>
  <div id="container">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="../entry/login.html">登录</a></li>
        <li><a href="../entry/register.html">注册</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../../entry/login/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">
      <div class="inMain">
        <!--左边图片-->
        <div class="inmainLeft"><img src="../img/detectionDetails.png"></div>
        <!--右边简介-->
        <div class="inmainRight">
          <div class="rightTitile">儿童家具质量评审儿童家具质检</div>
          <div class="inmainDescription">
            <h2>服务内容</h2>
            <span>{{inmainDescription}}
            </span>
          </div>
        </div>
      </div>

    </div>
    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
    </div>
    <!--<div id="footer">-->
    <!--<p>版权所有：宁波贸信检测技术有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</p>-->
    <!--<p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>-->
    <!--<p>传真：+86-574-89017298&nbsp;&nbsp;&nbsp;&nbsp;E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com</p>-->
    <!--</div>-->

  </div>
</template>

<script>
  import tradeFooter from 'components/tradeFooterl'

  export default {
    data(){
      return{
        inmainDescription:'最全面儿童家具质检，最全面儿童家具质检最全面儿童家具质检最全面儿童家具质检最全面儿童家具质检最全面儿童家具质检，最全面儿童家具质检。'

      }
    },
    components:{
      tradeFooter,
    },
    methods:{

    }
  }
</script>

<style>


</style>
