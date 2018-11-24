<template>
   <div class="add-addr">
          <p @click="toAddressList" style="text-align: left;"><i class="el-icon-arrow-left"></i> 返回</p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">编辑收货地址</li>
            <li class="line"><span></span></li>
          </ul>

          <!--编辑收货地址表单-->
          <div class="editAddress">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="收货人：" prop="receiver">
                <el-input v-model="ruleForm.receiver"></el-input>
              </el-form-item>

              <el-form-item label="手机号：" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>

              <el-form-item label="省市区：" prop="place">
                <el-input v-model="ruleForm.email" placeholder="省、市、区"></el-input>
              </el-form-item>

              <el-form-item label="详细地址：" prop="fullAddress">
                <el-input type="textarea" v-model="ruleForm.fullAddress"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
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
        receiver: "",
        phone: "",
        place: "",
        fullAddress: ""
      },
      rules: {}
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit");
        } else {
          console.log("error submit");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      history.go(-1);
    },
    toAddressList() {
      this.$router.back(-1);
    }
  }
};
</script>

<style lang='less' scoped >
.add-addr {
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

  //  编辑收货地址表单
  .editAddress {
    width: 440px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 80px;
    text-align: left;

    .el-form-item {
      margin-bottom: 25px;

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

      //详细地址框样式
      .el-textarea {
        height: 80px;
      }

      .el-textarea__inner {
        border-radius: 0;
        border: 2px solid #eaeaea;
        height: 80px;
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
  }
}
</style>
