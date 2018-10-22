<template>
  <div id="container">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="./login.html">登录</a></li>
        <li><a href="./register.html">注册</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../login/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">

      <!--表单-->
      <form id="outForm">
        <input type="button" value="企业注册" class="formButton_a">
        <input type="button" value="个人注册" class="formButton_b">

        <div class="inForm">
          <el-form label-position="left" label-width="120px">
            <el-form-item id="enterprise" label="企业名称：">
              <el-input placeholder="请输入企业名称"></el-input>
            </el-form-item>
            <el-form-item label="账号名称：">
              <el-input placeholder="请输入注册手机号码"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：">
              <el-input placeholder="请输入手机号码"></el-input>
            </el-form-item>

            <el-form-item id="modified" label="手机验证码：">
              <el-input placeholder="请输入验证码"></el-input>
              <button class="formButton_c">获取验证码</button>
            </el-form-item>

            <el-form-item label="邮箱地址：">
              <el-input placeholder="请输入常用邮箱"></el-input>
            </el-form-item>
            <el-form-item label="登录密码：">
              <el-input type="password" placeholder="请输入登录密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：">
              <el-input type="password" placeholder="请再次输入密码"></el-input>
            </el-form-item>
          </el-form>

        </div>
      </form>

      <!--底部确认-->
      <el-checkbox>我已阅读并同意接收<a href="#">《服务协议》</a></el-checkbox>
      <br/>
      <input value="确定" type="button" class="confirm" style="background-color: rgb(13,85,210);color: white">
      <input value="取消" type="button" class="confirm">
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


  }
</script>

<style scoped>

</style>
