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
      <!--标题-->

      <!--入驻成功提示-->
      <div id="successLogo">
        <img src="../img/settleInSuccess.png">提交成功 ，请等待审核
      </div>

      <ul>
        <li class="line"><span></span></li>
        <!--入驻成功的标题-->
        <li class="title">{{settleInTitle}}</li>
        <li class="line"><span></span></li>
      </ul>
      <!--信息表格-->
      <div class="infoTable">
        <table>
          <tr>
            <td>企业名称：</td>
            <td>宁波玩家制作有限公司</td>
          </tr>
          <tr>
            <td>法人姓名：</td>
            <td>孙华</td>
          </tr>
          <tr>
            <td>邮箱地址：</td>
            <td>13000000000@qq.com</td>
          </tr>
          <tr>
            <td>联系人：</td>
            <td>沈军</td>
          </tr>
          <tr>
            <td>联系电话：</td>
            <td>13200000000</td>
          </tr>
          <tr>
            <td>联系地址：</td>
            <td>浙江省宁波市镇海区创业社区</td>
          </tr>
          <tr>
            <td>邮箱地址：</td>
            <td>xxx@163.com</td>
          </tr>
          <tr>
            <td>技能特长：</td>
            <td>技能质检一级</td>
          </tr>
          <tr>
            <td>营业执照：</td>
            <td> </td>
          </tr>
          <tr>
            <td>CMA资质证书：</td>
            <td></td>
          </tr>
          <tr>
            <td>CNAS资质证书：</td>
            <td></td>
          </tr>
          <tr>
            <td>公司简介：</td>
            <td>公司简介公司简介公司简介公司简介</td>
          </tr>

        </table>
      </div>


      <!--底部按钮-->


    </div>
    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
      <!--<p>版权所有：宁波贸信检测技术有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</p>-->
      <!--<p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>-->
      <!--<p>传真：+86-574-89017298&nbsp;&nbsp;&nbsp;&nbsp;E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com</p>-->
    </div>

  </div>
</template>

<script>
  import tradeFooter from 'components/tradeFooterl'

  export default {
    data(){
      return{
        settleInTitle:'检测机构入驻'
      }
    },
    components:{
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
