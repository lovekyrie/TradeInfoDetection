<template>
  <div id="container">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="./login.html">登录</a> </li>
        <li><a href="./register.html">注册</a> </li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../login/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">忘记密码</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <form>
        <div><img src="../img/账号.png"><input type="text" placeholder="请输入账号"> </div>
        <div><img src="../img/手机.png"><input type="text" placeholder="请输入注册手机号码"> </div>
        <div><img src="../img/邮箱.png"><input type="text" placeholder="请输入注册邮箱地址">
        </div>
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
