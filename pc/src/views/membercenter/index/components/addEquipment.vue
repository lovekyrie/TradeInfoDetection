<template>
   <div class="add-equip">
          <p @click="toEquipment" style="text-align: left;"><i class="el-icon-arrow-left"></i> 返回</p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">发布设备需求</li>
            <li class="line"><span></span></li>
          </ul>

          <!--发布设备内容表单-->
          <div class="deviceSub">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
</template>

<script>
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
    },  data() {

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
      },
      toEquipment(){
        this.$router.back(-1)
      }
    },
};
</script>

<style lang='less'>
.add-equip {
  flex: 5.5;
  background-color: white;
  padding: 20px 20px;
  text-align: center;
  .mainTitle {
    margin-top: 20px;
    li {
      display: inline-block;
      height: 20px;
      span {
        display: block;
        width: 130px;
        height: 1px;
        background-color: rgb(204, 204, 204);
      }
    }
    .line {
      padding-top: 10px;
    }
    //标题字体
    .title {
      font-size: 20px;
      font-weight: 400;
      margin-left: 40px;
      margin-right: 40px;
    }
  }

  //  发布设备内容表单
  .deviceSub {
    width: 440px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 80px;
    text-align: left;

    .el-form-item {
      margin-bottom: 20px;

      //表单样式
      .el-input {
        height: 45px;
      }

      .el-input__inner {
        height: 45px;
        border-radius: 0;
        border: 2px solid rgb(234, 234, 234);
      }

      label {
        font-weight: 300;
        color: rgb(121, 121, 121);
        line-height: unset;
      }

      //  按钮样式
      .el-button {
        width: 120px;
        height: 40px;
        margin-top: 30px;
      }
      .el-button--primary {
        background-color: rgb(13, 85, 210);
      }
    }

    .el-textarea {
      .el-textarea__inner {
        border-radius: 0;
        height: 88px;
      }
    }
  }
}
</style>
