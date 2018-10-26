<template>
  <div id="container">
    <!--页头-->
    <headerMenu></headerMenu>


    <!--中间内容-->
    <div id="main">
      <div class="inMain">
        <!--中间左侧单边栏-->
        <div class="mainLeft">
          <ul>
            <li><a style="font-size: 18px" href="./memberCenter.html">会员中心</a></li>
            <li><a href="#">我的金币</a></li>
            <li><a href="#">我的订单</a></li>
            <li><a href="#">我的报告</a></li>
            <li><a href="#">我的推荐</a></li>
            <li><a href="#">我的兑换</a></li>
            <li><a href="#">我的收藏</a></li>
            <li><a href="#" style="color: white;background-color: rgb(13,85,210);">人才信息</a></li>
            <li><a href="#">设备信息</a></li>
            <li><a href="#">收货地址管理</a></li>
            <li><a href="#">修改密码</a></li>

          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">
          <div class="inForm">
            <el-form label-position="left" label-width="100px">

              <el-form-item label="资源名称：">
                <el-input placeholder="单行输入"></el-input>
              </el-form-item>


              <el-form-item label="资源描述：">
                <el-input type="textarea" placeholder="多行输入"></el-input>
              </el-form-item>


              <el-form-item label="联系人：">
                <el-input placeholder="请输入联系人姓名"></el-input>
              </el-form-item>
              <el-form-item label="联系电话：">
                <el-input placeholder="请输入联系电话"></el-input>
              </el-form-item>

              <el-form-item label="邮箱地址：">
                <el-input placeholder="请输入联系邮箱"></el-input>
              </el-form-item>
              <el-form-item label="联系方式：">
                <el-input placeholder="请输入其他联系方式"></el-input>
              </el-form-item>

            </el-form>
          </div>
          <input class="formButton" type="button" value="确定">
          <input class="formButton" type="button" value="取消" style="background-color: white;color: rgb(131,131,131)">

        </div>



      </div>
    </div>

    <!--页脚-->
    <tradeFooter></tradeFooter>

  </div>

</template>

<script>
  import headerMenu from 'components/headerMenu';
  import tradeFooter from 'components/tradeFooter';

  export default {
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
