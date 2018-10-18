<template>
<div id="container">
  <!--顶部-->
  <div id="header">
    <ul>
      <li><a class="login" href="javascript:void(0)">登录</a> </li>
      <li><a href="javascript:void(0)">注册</a> </li>
    </ul>
  </div>
  <!--图标-->
  <div id="icon">
    <img src="../img/logo.png">
  </div>
  <!--中间主体-->
  <div id="main">
    <!--标题-->
    <ul>
      <li class="line"><span></span></li>
      <li class="title">登录</li>
      <li class="line"><span></span></li>
    </ul>
    <!--表单-->
    <form>
      <div><img src="../img/账号.png"><input type="text" placeholder="请输入账号"> </div>
      <div><img src="../img/密码.png"><input type="password" placeholder="请输入密码"> </div>
      <div style="margin-bottom: 10px"><img src="../img/验证码.png"><input style="width: 200px" type="text">
        <span class="modified">
          <p>TESTAA</p>
        </span>
      </div>
      <div style="margin-top: 10px"><a href="javascript:void (0)">忘记密码？</a></div>
      <div style="margin-left: 30px"><button class="loginBtn" type="submit">登录</button>
        <button class="cancelBtn">取消</button>
      </div>
    </form>


  </div>
  <!--页脚-->
  <div id="footer">
    <p>版权所有：宁波贸信检测技术有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</p>
    <p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>
    <p>传真：+86-574-89017298&nbsp;&nbsp;&nbsp;&nbsp;E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com</p>
  </div>

</div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
