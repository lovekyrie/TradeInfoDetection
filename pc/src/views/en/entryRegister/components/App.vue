<template>
  <div id="container">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="./entryLogin.html">Log in</a></li>
        <li><a href="./entryRegister.html">Register</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../entryLogin/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">
      <!--表单-->
      <form id="outForm">
        <input type="button" @click="change()" value="Business registration" :class="{formButton_a:seen.seen1,formButton_b:seen.seen2}">
        <input type="button" @click="change()" value="Personal registration" :class="{formButton_a:seen.seen2,formButton_b:seen.seen1}">
        <!--企业注册表单-->
        <div class="inForm">
          <el-form label-position="left" label-width="120px" :model="ruleForm" :rules="rule"
                   ref="ruleForm" >
            <el-form-item label="Company Name：" prop="nkNm" v-if="seen.seen1">
              <el-input placeholder="Please enter the name of the enterprise." v-model="ruleForm.nkNm"></el-input>
            </el-form-item>
            <el-form-item label="Account：" prop="usNm">
              <el-input placeholder="Please enter the account name." v-model="ruleForm.usNm"></el-input>
            </el-form-item>
            <el-form-item label="Tel：" prop="mob">
              <el-input placeholder="Please enter correct telephone number" v-model="ruleForm.mob"></el-input>
            </el-form-item>

            <el-form-item id="modified" label="Telephone verification code：" prop="rmks">
              <el-input placeholder="Please enter correct verification code" v-model="ruleForm.rmks"></el-input>
              <button class="formButton_c" type="button" @click="getCode" v-if="getCodeShow">Get the authentication code</button>
              <button class="formButton_num" v-else>Regain({{num}}S)</button>
            </el-form-item>

            <el-form-item label="Email：" prop="email">
              <el-input placeholder="Please enter correct email" v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Login password：" prop="pwd">
              <el-input type="password" placeholder="Please enter your login password" v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item label="Confirm password：" prop="pwd2">
              <el-input type="password" placeholder="Please enter your password again." v-model="ruleForm.pwd2"></el-input>
            </el-form-item>
          </el-form>

        </div>

      </form>

      <!--底部确认-->
      <el-checkbox checked>I have read and agree to the agreement</el-checkbox>
      <br/>
      <input @click="checkAll('ruleForm')" value="OK" type="button" class="confirm" style="background-color: rgb(13,85,210);color: white">
      <input value="Cancel" type="button" class="confirm" @click="resetForm('ruleForm')">
    </div>
    <!--页脚-->
    <div id="footer">
      <p>Copyright:   MaoXin Technology Limited Company   Record / License No.: 浙ICP备16007937号 </p>
      <!--<p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>-->
      <p>E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      var checkPhone=(rule,value,callback)=>{
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(!reg.test(value)){
          return callback(new Error('Please enter correct telephone number'));
        }
        else{
          callback();
        }
      };

      var checkEmail=(rule,value,callback)=>{
        let reg=/^[\w,\d]+[_|\.]?[\w,\d]*@[\w,\d]+[\.]{1}[\w]{1,3}$/;
        if(!reg.test(value)){
          return callback(new Error('Please enter correct email'));
        }else {
          callback();
        }
      };

      var checkPwd1=(rule,value,callback)=>{
        if(value==''){
          callback(new Error('Please enter your password again'));
        }else if(value!=this.ruleForm.pwd2){
          callback(new Error('The passwords do not match'));
        }else{
          callback();
        }
      };

      var checkPwd2=(rule,value,callback)=>{
        if(value==''){
          callback(new Error('Please enter your password again'));
        }else if(value!=this.ruleForm.pwd){
          callback(new Error('The passwords do not match'));
        }else{
          callback();
        }
      };

      return {
        getCodeShow:true,
        num:0,
        disabled:false,
        time:300,//60s获取验证码
        btntext:'获取验证码',

        //个人、企业注册切换
        seen: {
          seen1: true, //企业
          seen2: false, //个人
        },
        //表单数据
        ruleForm: {
          rmks:'',
          usNm:'',//账号名称
          nkNm:'',//企业名称
          pwd:'',//密码
          pwd2:'',
          mob:'',//手机
          email:'',//邮件
          arg1:'2',//1/2；个人/企业
          catCd:'20000.170',//20000.160/20000.170
          arg9:'',//推荐码
        },
        //表单验证
        rule: {
          nkNm: [
            {required: true, message: 'Please enter the name of the enterprise.', trigger: 'blur'}
          ],

          usNm: [
            {required: true, message: 'Please enter your account number.', trigger: 'blur'},
            {min: 6, message: 'Please enter your account with minimum 6 characters in length, contains letters and numbers', trigger: 'blur'}
          ],

          mob: [
            {required: true, message: 'Please enter your cell phone number.', trigger: 'blur'},
            {validator:checkPhone,trigger:'blur'}
          ],

          rmks: [
            {required: true, message: 'Please enter correct verification code', trigger: 'blur'},
          ],

          email:[
            {required: true, message: 'Please enter your usual mailbox', trigger: 'blur'},
            {validator:checkEmail,trigger:'blur'}
          ],
          pwd:[
            {required:true,validator:checkPwd1,message:'Please enter password',trigger:'blur'},
          ],

          pwd2:[
            {required:true,validator:checkPwd2,trigger:'blur'}
          ],

        },


      }


    },
    mounted(){
      this.ruleForm.arg9 = this.until.getQueryString('recomCode')
    },
    methods: {
      getCode(){

        let param={
          phone:this.ruleForm.mob
        }
        this.until.post('/general/sms/sendCode',param)
          .then(res=>{
            if(res.status=='200'){
              this.getCodeShow=false
              this.num = this.time
              this.countDown()
            }
            this.$message({
              message:res.message,
            });
          })
      },
      //倒计时
      countDown(){
        let timePick=setInterval(()=>{
          this.num--
          if(this.num==0){
            this.getCodeShow = true
            clearInterval(timePick)
          }
        },1000)
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      change() {
        if (this.seen.seen1) {
          this.ruleForm.arg1 = 1
          this.seen.seen1 = false;
          this.seen.seen2 = true;
          this.ruleForm.catCd = '20000.160'
        }
        else {
          this.ruleForm.arg1 = 2
          this.seen.seen1 = true;
          this.seen.seen2 = false;
          this.ruleForm.catCd = '20000.170'
        }
      },
      login(){
        let param = {
          username:this.ruleForm.usNm,
          password:this.ruleForm.pwd,
          remberMe:true
        }
        this.until.post('/general/access/appLogin',param)
          .then(res=>{
            this.loading = false
            if(res.status == 200){
              let myInfo = res.data.userInfo
              this.until.loSave('user',JSON.stringify(myInfo));
              window.location.href='../en/index.html'
              // this.$message({
              //   message: '登录成功！',
              //   type: 'success'
              // });
              // setTimeout(()=>{
              //
              // },1500)

            }else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          },err=>{});
      },
      checkAll(formName){
        this.$refs[formName].validate((valid)=>{
          //全部表单验证完毕
          if(valid){
            this.until.postData('/prodx/adduser/edit',JSON.stringify(this.ruleForm))
              .then(res=>{
                if(res.status=='200'){
                  this.$message({
                    message: 'Successful registration, login soon!',
                    type: 'success'
                  });
                  this.login()
                  // setTimeout(()=>{
                  //   window.location.href = 'login.html'
                  // },1500)

                }else {
                  this.$message({
                    message: res.message,
                    type: 'warning'
                  });
                }
              })
          }else{
            return false;
          }
        });
      }
    }
  }
</script>

<style>
  .el-form-item__error {
    left: 22%;
  }

</style>
