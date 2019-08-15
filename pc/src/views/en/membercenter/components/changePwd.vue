<template>
   <!--中间右侧内容栏-->
        <div class="changepwd" v-loading="loading">
          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">Change password</li>
            <li class="line"><span></span></li>
          </ul>

          <!--修改密码表单-->
          <div class="changeForm">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="200px"
                     class="demo-ruleForm">
              <el-form-item label="Original Password：" prop="oldPwd">
                <el-input v-model="ruleForm.oldPwd"></el-input>
              </el-form-item>

              <el-form-item label="New Password：" prop="newPwd">
                <el-input type="password" v-model="ruleForm.newPwd"></el-input>
              </el-form-item>

              <el-form-item label="Confirm Password：" prop="confirmPwd">
                <el-input type="password" v-model="ruleForm.confirmPwd"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Confirm</el-button>
                <el-button @click="resetForm('ruleForm')">Cancel</el-button>
              </el-form-item>

            </el-form>
          </div>

        </div>
</template>

<script>
export default {
 data() {
      //密码验证
      var validateoldPwd = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('Please enter your original password'));
        } else {
          callback();
        }
      };

      var validatenewPwd = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('Please enter your new password'))
        }
        else if (value == this.ruleForm.oldPwd) {
          callback(new Error('Please enter a new password different from the original password.'))
        }
        else {
          callback();
        }
      };

      var validateconfirm = (rule, value, callback) => {
        if(value==''){
          callback(new Error('Please confirm password'))
        }
        else if (value != this.ruleForm.newPwd) {
          callback(new Error('Two inconsistent passwords'))
        } else {
          callback();
        }
      };

      return {
        loading:false,
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
            this.loading = true
            let param={
              oldPwd:this.ruleForm.oldPwd,
              newPwd:this.ruleForm.newPwd
            }
            this.until.post('/general/auth/updPwd',param)
              .then(res=>{
                this.loading = false
                if(res.status=='200'){
                  this.$message({
                    message:'Password modification is successful, please login again!',
                    type:'success'
                  });
                  setTimeout(()=>{
                    window.location.href = '../en/entryLogin.html'
                  },1500)
                }else {
                  this.$message({
                    message:res.message,
                    type:'warning'
                  });
                }
              })
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
}
</script>

<style lang='less'>
   //右边信息
      .changepwd {
        flex: 5.5;
        background-color: white;
        padding: 50px 20px;
        text-align: center;

        .mainTitle {
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

        //  修改密码表单
        .changeForm {
          width: 540px;
          margin: 0 auto;
          margin-top: 30px;
          margin-bottom: 80px;
          text-align: left;

          .el-form-item {
            margin-bottom: 20px;
            height: 50px;

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
            .el-button{
              width: 120px;
              height: 40px;
              margin-top: 30px;
            }
            .el-button--primary{
              background-color: rgb(13,85,210);
            }

          }


        }

      }
</style>
