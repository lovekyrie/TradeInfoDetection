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
      <ul>
        <li class="line"><span></span></li>
        <li class="title">人才入驻</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="120px">
          <el-form-item id="name" label="真实姓名：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="职称：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="QQ：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="微信：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="技能特长：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="资历证书：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="培训经历：">
            <el-input></el-input>
          </el-form-item>

          <el-form-item label="个人简介：">
            <el-input type="textarea"></el-input>
          </el-form-item>


        </el-form>
      </div>
      <!--底部按钮-->
      <input class="formButton" type="button" value="提交申请">
      <input class="formButton" type="button" value="取消" style="background-color: white;color: rgb(131,131,131)">


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
