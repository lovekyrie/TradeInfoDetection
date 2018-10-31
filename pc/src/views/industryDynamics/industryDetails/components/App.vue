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

      <!--搜索框-->
      <div class="searchInput">
        <el-input v-model="search" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="找服务">
            <el-option label="test1" value="1"></el-option>
            <el-option label="test2" value="2"></el-option>
            <el-option label="test3" value="3"></el-option>
          </el-select>
          <el-button slot="append">搜索</el-button>
        </el-input>
      </div>
    </div>
    <!--中间主体-->
    <div id="main">
      <span><a href="#">< 返回</a> </span>
      <!--标题-->
      <div class="mainTitile">检测行业最新标准今早公布</div>
      <!--日期-->
      <div class="mainDate">发布日期：2018-06-04</div>
      <!--文章第一段-->
      <div class="mainDec1">国务院标准化执行，国务院标准化执行国务院标准化执行国务院标准化执行国务院标准化执行国务院标准化执行国务院
        标准化执行，国务院标准化执行国务院标准化执行国务院标准化执行。
      </div>
      <!--图片-->
      <div class="mainImg"><img src="../img/industryDynamics.png"></div>
      <!--文章第二段-->
      <div class="mainDec2">对保障人身健康和生命财产安全，对保障人身健康和生命财产安全对保障人身健康和生命财产安全对保障人身健康和生命财产安全。
        对保障人身健康和生命财产安全对保障人身健康和生命财产安全对保障人身健康和生命财产安全对保障人身健康和生命财产安全，对保障人身健康和生命财产安全，
        对保障人身健康和生命财产安全。
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
    data() {
      return {
        search: '',
        select: '',
      }

    },
    components: {
      tradeFooter,
    }
  }
</script>

<style>


</style>
