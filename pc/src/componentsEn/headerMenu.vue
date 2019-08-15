<template>
  <!--顶部-->
  <div id="head">
    <div id="header">
      <ul>
        <li><a class="login" href="../entry/login.html">Login</a></li>
        <li><a href="../entry/register.html">Register</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../views/entry/login/img/logo.png">

      <ul>
        <li><a href="#">Buyer center</a></li>
        <li><a href="#">Seller center</a></li>
        <li><a href="#">Service center</a></li>
        <li><a href="#">Industry news</a></li>
        <li><a href="#">Site guide</a></li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="less" type="text/less" scoped>
  #header {

    height: 30px;
    min-width: 800px;
    background-color: rgb(241, 241, 241);

    /*登录注册样式*/
    ul {
      display: block;
      float: right;
      margin-right: 15%;


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
    min-width: 800px;
    background-color: white;

    /*头部菜单样式*/
    img {
      width: 90px;
      margin-top: 25px;
      margin-left: 15%;
    }

    ul {
      margin-top: 30px;
      padding-left:9%;


      li {
        display: inline-block;
        margin-left: 10%;

        /*菜单字体*/
        a{
          font-size: 14px;
          color: rgb(141,141,141);
        }
      }
    }

  }

</style>
