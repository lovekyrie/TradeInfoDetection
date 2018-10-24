<template>
  <div id="container">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="../entry/login.html">登录</a></li>
        <li><a href="../entry/register.html">注册</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../../entry/login/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">人才入驻</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="120px" :rules="rule" ref="ruleForm" :model="ruleForm">
          <el-form-item id="name" label="真实姓名：" prop="realName">
            <el-input type="text" v-model="ruleForm.realName"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="contactPhone">
            <el-input v-model="ruleForm.contactPhone"></el-input>
          </el-form-item>
          <el-form-item label="职称：" prop="job">
            <el-input v-model="ruleForm.job"></el-input>
          </el-form-item>
          <el-form-item label="QQ：" prop="QQ">
            <el-input v-model="ruleForm.QQ"></el-input>
          </el-form-item>
          <el-form-item label="微信：" prop="vx">
            <el-input v-model="ruleForm.vx"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址：" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="技能特长：" prop="technology">
            <el-input v-model="ruleForm.technology"></el-input>
          </el-form-item>
          <el-form-item label="资历证书：" prop="certificate">
            <el-input v-model="ruleForm.certificate"></el-input>
          </el-form-item>
          <el-form-item label="培训经历：" prop="experience">
            <el-input v-model="ruleForm.experience"></el-input>
          </el-form-item>

          <el-form-item label="个人简介：" prop="introduction">
            <el-input type="textarea" v-model="ruleForm.introduction"></el-input>
          </el-form-item>


        </el-form>
      </div>
      <!--底部按钮-->
      <input class="formButton" type="button" value="提交申请">
      <input class="formButton" type="button" value="取消" style="background-color: white;color: rgb(131,131,131)">


    </div>

    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
    </div>
    <!--<div id="footer">-->
      <!--<p>版权所有：宁波贸信检测技术有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</p>-->
      <!--<p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>-->
      <!--<p>传真：+86-574-89017298&nbsp;&nbsp;&nbsp;&nbsp;E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com</p>-->
    <!--</div>-->

  </div>
</template>

<script>
  import tradeFooter from 'components/tradeFooter'


  export default {
    data(){
      var checkPhone=(rule,value,callback)=>{
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(value==''){
          return callback(new Error('请输入手机号码'))
        }
        else if(!reg.test(value)){
          return callback(new Error('请输入正确的手机号格式'));
        }
        else{
          callback();
        }
      };

      var checkEmail=(rule,value,callback)=>{
        let reg=/^[\w,\d]+[_|\.]?[\w,\d]*@[\w,\d]+[\.]{1}[\w]{1,3}$/;
        if(!reg.test(value)&&value!=''){
          return callback(new Error('请输入正确的邮箱格式'));
        }else {
          callback();
        }
      };

      return{
        ruleForm:{
          realName:'',
          contactPhone:'',
          job:'',
          QQ:'',
          vx:'',
          email:'',
          technology:'',
          certificate:'',
          experience:'',
          introduction:'',
        },
        rule:{
          realName:[
            {required:true,message:'请输入真实姓名',trigger:'blur'}
          ],
          contactPhone:[
            {validator:checkPhone,trigger:'blur'}
          ],
          email:[
            {validator:checkEmail,trigger:'blur'}
          ],
        }
      }
    },
    components:{
      tradeFooter,
    }
  }
</script>

<style>
  .el-form-item__error {
    left: 25%;
    top: 35px;
  }

</style>
