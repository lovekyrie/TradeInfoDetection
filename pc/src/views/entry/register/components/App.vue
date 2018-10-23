<template>
  <div id="container">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="./login.html">登录</a></li>
        <li><a href="./register.html">注册</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../login/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">
      <!--表单-->
      <form id="outForm">
        <input type="button" @click="change()" value="企业注册" :class="{formButton_a:seen.seen1,formButton_b:seen.seen2}">
        <input type="button" @click="change()" value="个人注册" :class="{formButton_a:seen.seen2,formButton_b:seen.seen1}">
        <!--企业注册表单-->
        <div class="inForm" v-if="seen.seen1">
          <el-form label-position="left" label-width="120px" :model="ruleForm" :rules="rule"
                   ref="ruleForm">
            <el-form-item label="企业名称：" prop="enterpriseName">
              <el-input placeholder="请输入企业名称" v-model="ruleForm.enterpriseName"></el-input>
            </el-form-item>
            <el-form-item label="账号名称：" prop="enterpriseAccount">
              <el-input placeholder="请输入账号名称" v-model="ruleForm.enterpriseAccount"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" prop="enterprisePhone">
              <el-input placeholder="请输入手机号码" v-model="ruleForm.enterprisePhone"></el-input>
            </el-form-item>

            <el-form-item id="modified" label="手机验证码：" prop="enterpriseCode">
              <el-input placeholder="请输入验证码" v-model="ruleForm.enterpriseCode"></el-input>
              <button class="formButton_c" :disabled="disabled">{{btntext}}</button>
            </el-form-item>

            <el-form-item label="邮箱地址：" prop="enterpriseEmail">
              <el-input placeholder="请输入常用邮箱" v-model="ruleForm.enterpriseEmail"></el-input>
            </el-form-item>
            <el-form-item label="登录密码：" prop="enterprisePwd1">
              <el-input type="password" placeholder="请输入登录密码" v-model="ruleForm.enterprisePwd1"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="enterprisePwd2">
              <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.enterprisePwd2"></el-input>
            </el-form-item>
          </el-form>

        </div>

        <!--个人注册表单-->
        <div class="inForm" v-if="seen.seen2">
          <el-form label-position="left" label-width="120px" :model="ruleForm" :rules="rule">
            <el-form-item label="账号名称：" prop="personalAccount">
              <el-input placeholder="请输入账号名称" v-model="ruleForm.personalAccount"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" prop="personalPhone">
              <el-input placeholder="请输入手机号码" v-model="ruleForm.personalPhone"></el-input>
            </el-form-item>

            <el-form-item id="modified" label="手机验证码：" prop="personalCode">
              <el-input placeholder="请输入验证码" v-model="ruleForm.personalCode"></el-input>
              <button class="formButton_c">获取验证码</button>
            </el-form-item>

            <el-form-item label="邮箱地址：" prop="personalEmail">
              <el-input placeholder="请输入常用邮箱" v-model="ruleForm.personalEmail"></el-input>
            </el-form-item>
            <el-form-item label="登录密码：" prop="personalPwd1">
              <el-input type="password" placeholder="请输入登录密码" v-model="ruleForm.personalPwd1"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="personalPwd2">
              <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.personalPwd2"></el-input>
            </el-form-item>
          </el-form>

        </div>
      </form>

      <!--底部确认-->
      <el-checkbox>我已阅读并同意接收<a href="#">《服务协议》</a></el-checkbox>
      <br/>
      <input @click="checkAll('ruleForm')" value="确定" type="button" class="confirm" style="background-color: rgb(13,85,210);color: white">
      <input value="取消" type="button" class="confirm">
    </div>
    <!--页脚-->
    <div id="footer">
      <p>版权所有：宁波贸信检测技术有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</p>
      <p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>
      <p>传真：+86-574-89017298&nbsp;&nbsp;&nbsp;&nbsp;E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com
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
          return callback(new Error('请输入正确的手机号格式'));
        }
        else{
          callback();
        }
      };

      var checkEmail=(rule,value,callback)=>{
        let reg=/^[\w,\d]+[_|\.]?[\w,\d]*@[\w,\d]+[\.]{1}[\w]{1,3}$/;
        if(!reg.test(value)){
          return callback(new Error('请输入正确的邮箱格式'));
        }else {
          callback();
        }
      };

      var checkPwd1=(rule,value,callback)=>{
        if(value==''){
          callback(new Error('请再次输入密码'));
        }else if(value!=this.ruleForm.enterprisePwd1){
          callback(new Error('两次密码不一致'));
        }else{
          callback();
        }
      };

      var checkPwd2=(rule,value,callback)=>{
        if(value==''){
          callback(new Error('请再次输入密码'));
        }else if(value!=this.ruleForm.personalPwd1){
          callback(new Error('两次密码不一致'));
        }else{
          callback();
        }
      };

      return {
        //60s获取验证码
        disabled:false,
        time:0,
        btntext:'获取验证码',

        //个人、企业注册切换
        seen: {
          seen1: true,
          seen2: false,
        },
        //企业表单数据
        ruleForm: {
          enterpriseName: '',
          enterpriseAccount: '',
          enterprisePhone: '',
          enterpriseCode: '',
          enterpriseEmail: '',
          enterprisePwd1: '',
          enterprisePwd2: '',
          personalAccount:'',
          personalPhone:'',
          personalCode:'',
          personalEmail:'',
          personalPwd1:'',
          personalPwd2:''
        },
        //表单验证
        rule: {
          enterpriseName: [
            {required: true, message: '请输入企业名称', trigger: 'blur'}
          ],

          enterpriseAccount: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 6, message: '请输入6位以上中英文数字结合的账号', trigger: 'blur'}
          ],
          personalAccount:[
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 6, message: '请输入6位以上中英文数字结合的账号', trigger: 'blur'}
          ],

          enterprisePhone: [
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {validator:checkPhone,trigger:'blur'}
          ],
          personalPhone:[
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {validator:checkPhone,trigger:'blur'}
          ],

          enterpriseCode: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
          ],
          personalCode: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
          ],

          enterpriseEmail:[
            {required: true, message: '请输入常用邮箱', trigger: 'blur'},
            {validator:checkEmail,trigger:'blur'}
          ],
          personalEmail:[
            {required: true, message: '请输入常用邮箱', trigger: 'blur'},
            {validator:checkEmail,trigger:'blur'}
          ],

          enterprisePwd1:[
            {required:true,message:'请输入密码',trigger:'blur'},
          ],
          personalPwd1:[
            {required:true,message:'请输入密码',trigger:'blur'},
          ],

          enterprisePwd2:[
            {required:true,validator:checkPwd1,trigger:'blur'}
          ],
          personalPwd2:[
            {required:true,validator:checkPwd2,trigger:'blur'}
          ]

        },


      }


    },
    methods: {
      change() {
        if (this.seen.seen1) {
          this.seen.seen1 = false;
          this.seen.seen2 = true;

        }
        else {
          this.seen.seen1 = true;
          this.seen.seen2 = false;
        }
      },
      checkAll(formName){
        this.$refs[formName].validate((valid)=>{
          //全部表单验证完毕
          if(valid){
            alert('submit')
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
