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
            <li><a href="./memberInfo.html">人才信息</a></li>
            <li><a href="./deviceMsg.html">设备信息</a></li>
            <li><a href="./addressManager.html">收货地址管理</a></li>
            <li><a href="./changePwd.html">修改密码</a></li>

          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">
          <p style="text-align: left;"><a href="./memberCenter.html">< 返回</a></p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">编辑账号信息</li>
            <li class="line"><span></span></li>
          </ul>

          <!--修改密码表单-->
          <div class="changeForm">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="注册账号：" prop="account">
                <el-input v-model="ruleForm.account" readonly="readonly"></el-input>
              </el-form-item>

              <el-form-item label="手机号：" prop="phone">
                <el-input v-model="ruleForm.phone" readonly="readonly"></el-input>
              </el-form-item>

              <el-form-item label="邮箱：" prop="email">
                <el-input v-model="ruleForm.email" readonly="readonly"></el-input>
              </el-form-item>

              <el-form-item label="企业名称：" prop="enterpriseName">
                <el-input v-model="ruleForm.enterpriseName"></el-input>
              </el-form-item>

              <el-form-item label="企业地址：" prop="enterpriseAddress">
                <el-input v-model="ruleForm.enterpriseAddress"></el-input>
              </el-form-item>


              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
              </el-form-item>

            </el-form>
          </div>

        </div>
      </div>
    </div>

    <!--页脚-->
    <tradeFooter></tradeFooter>

  </div>

</template>

<script>
  import headerMenu from 'components/headerMenu';
  import tradeFooter from 'components/tradeFooterl';

  export default {
    data() {

      return {
        ruleForm: {
          account:'张三',
          phone:'13132132132',
          email:'4622@163.com',
          enterpriseName:'',
          enterpriseAddress:''
        },
        rules: {
        }
      }
    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            alert('submit');
          }else {
            console.log('error submit');
            return false;
          }
        });
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
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
