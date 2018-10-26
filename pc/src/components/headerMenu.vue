<template>
  <!--顶部-->
  <div id="head">
    <div id="header">
      <ul>
        <li><a class="login" href="../entry/login.html">登录</a></li>
        <li><a href="../entry/register.html">注册</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../views/entry/login/img/logo.png">

      <ul>
        <li><a href="#">买家中心</a></li>
        <li><a href="#">卖家中心</a></li>
        <li><a href="#">服务中心</a></li>
        <li><a href="#">行业动态</a></li>
        <li><a href="#">平台指引</a></li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="less" type="text/less">
  #header {

    height: 30px;
    min-width: 1199px;
    background-color: rgb(241, 241, 241);

    /*登录注册样式*/
    ul {
      display: block;
      float: right;
      margin-right: 20%;

      li {
        display: inline-block;
        padding: 6px 0;

        a {
          display: block;
          font-size: 14px;
          margin-right: 20px;
        }

        /*登录注册中间的竖线*/
        .login {
          border-right: 1px solid rgb(204, 204, 204);
          padding-right: 20px;
        }

      }
    }
  }

  /*图标行*/
  #icon {
    border-top: 1px solid rgb(204, 204, 204);
    border-bottom: 2px solid rgb(241, 241, 241);
    height: 120px;

    min-width: 900px;
    background-color: white;

    /*头部菜单样式*/
    img {
      width: 90px;
      margin-top: 25px;
      margin-left: 20%;
    }

    ul {
      margin-top: 30px;
      margin-left: 18%;

      li {
        display: inline-block;
        margin: 0 5%;

        /*菜单字体*/
        a{
          font-size: 14px;
          color: rgb(141,141,141);
        }
      }
    }

  }

</style>
