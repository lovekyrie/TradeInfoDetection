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
            <li><a href="./deviceMsg.html" style="color: white;background-color: rgb(13,85,210);">设备信息</a></li>
            <li><a href="./addressManager.html">收货地址管理</a></li>
            <li><a href="./changePwd.html">修改密码</a></li>

          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">
          <p style="text-align: left;"><a href="./deviceMsg.html">< 返回</a></p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">发布设备需求</li>
            <li class="line"><span></span></li>
          </ul>

          <!--发布设备内容表单-->
          <div class="deviceSub">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="设备标题：" prop="dTitle">
                <el-input v-model="ruleForm.dTitle"></el-input>
              </el-form-item>

              <el-form-item label="产品描述：" prop="dDes">
                <el-input type="textarea" v-model="ruleForm.dDes"></el-input>
              </el-form-item>

              <el-form-item label="联系人：" prop="dContacts">
                <el-input v-model="ruleForm.dContacts"></el-input>
              </el-form-item>

              <el-form-item label="联系电话：" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>

              <el-form-item label="邮箱地址：" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>

              <el-form-item label="联系方式：" prop="contactWay">
                <el-input v-model="ruleForm.contactWay" placeholder="请输入其他联系方式"></el-input>
              </el-form-item>



              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
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
  import tradeFooter from 'components/tradeFooter';

  export default {
    data() {

      return {
        ruleForm: {
          dTitle:'',
          dDes:'',
          dContacts:'',
          phone:'',
          email:'',
          contactWay:''

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
