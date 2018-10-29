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
            <li><a href="./memberCoin.html">我的金币</a></li>
            <li><a href="./memberOrder.html">我的订单</a></li>
            <li><a href="./memberReport.html">我的报告</a></li>
            <li><a href="./memberRecommend.html">我的推荐</a></li>
            <li><a href="./memberExchange.html">我的兑换</a></li>
            <li><a href="./memberCollect.html">我的收藏</a></li>
            <li><a href="#" style="color: white;background-color: rgb(13,85,210);">人才信息</a></li>
            <li><a href="./deviceMsg.html">设备信息</a></li>
            <li><a href="./addressManager.html">收货地址管理</a></li>
            <li><a href="./changePwd.html">修改密码</a></li>

          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">
          <div class="inForm">
            <el-form label-position="left" label-width="100px">

              <el-form-item label="职位意向：">
                <el-input :placeholder="form.job" readonly="readonly"></el-input>
              </el-form-item>

              <el-form-item label="联系电话：">
                <el-input :placeholder="form.phone" readonly="readonly"></el-input>
              </el-form-item>

              <el-form-item label="邮箱地址：">
                <el-input :placeholder="form.email" readonly="readonly"></el-input>
              </el-form-item>


              <el-form-item label="个人简介：">
                <el-input type="textarea" :placeholder="form.profile" readonly="readonly"></el-input>
              </el-form-item>

              <h2>技能特长</h2>

              <el-form-item label="资历证书：">
                <el-input type="textarea" :placeholder="form.credentials" readonly="readonly"></el-input>
              </el-form-item>

              <el-form-item label="培训经历：">
                <el-input type="textarea" :placeholder="form.experience" readonly="readonly"></el-input>
              </el-form-item>

              <el-form-item label="是否发布：">
                <template>
                  <el-radio v-model="form.radio" label="1">是</el-radio>
                  <el-radio v-model="form.radio" label="2">否</el-radio>
                </template>
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
    data(){
      return{
        form:{
          job:'无机分析工程师工作',
          phone:'13231321321',
          email:'123a@163.com',
          profile:'1、测试',
          credentials:'2',
          experience:'3',
          radio:'1'
        }

      }
    },
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style scoped>

</style>
