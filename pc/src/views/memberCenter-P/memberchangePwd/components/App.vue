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
            <li><a href="./changePwd.html" style="color: white;background-color: rgb(13,85,210);">修改密码</a></li>

          </ul>
        </div>

        <!--中间右侧内容栏-->
        <div class="mainRight">

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">修改密码</li>
            <li class="line"><span></span></li>
          </ul>

          <!--修改密码表单-->
          <div class="changeForm">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="原密码：" prop="oldPwd">
                <el-input v-model="ruleForm.oldPwd"></el-input>
              </el-form-item>

              <el-form-item label="新密码：" prop="newPwd">
                <el-input type="password" v-model="ruleForm.newPwd"></el-input>
              </el-form-item>

              <el-form-item label="确认密码：" prop="confirmPwd">
                <el-input type="password" v-model="ruleForm.confirmPwd"></el-input>
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
  import tradeFooter from 'components/tradeFooter';

  export default {
    data() {
      //密码验证
      var validateoldPwd = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请先输入原密码'));
        } else {
          callback();
        }
      };

      var validatenewPwd = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请输入新密码'))
        }
        else if (value == this.ruleForm.oldPwd) {
          callback(new Error('请输入与原密码不同的新密码'))
        }
        else {
          callback();
        }
      };

      var validateconfirm = (rule, value, callback) => {
        if(value==''){
          callback(new Error('请确认密码'))
        }
        else if (value != this.ruleForm.newPwd) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback();
        }
      };

      return {
        ruleForm: {
          oldPwd: '',
          newPwd: '',
          confirmPwd: ''
        },
        rules: {
          oldPwd: [
            {validator: validateoldPwd, trigger: 'blur'}
          ],
          newPwd: [
            {validator: validatenewPwd, trigger: 'blur'}
          ],
          confirmPwd: [
            {validator: validateconfirm, trigger: 'blur'}
          ]
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
