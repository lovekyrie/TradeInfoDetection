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
        <li class="title">发布资源</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="120px" :model="ruleForm" :rules="rule" ref="ruleForm">
          <el-form-item label="资源类型">
            <el-select v-model="ruleForm.region" placeholder="请选择业务资源">
              <el-option label="资源一" value="test1"></el-option>
              <el-option label="资源二" value="test2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="资源名称：">
            <el-input placeholder="单行输入"></el-input>
          </el-form-item>

          <el-form-item label="发布时间：">
              <el-date-picker :readonly="ruleForm.readonly" type="date" placeholder="当前日期" v-model="ruleForm.date1"></el-date-picker>
          </el-form-item>
          <el-form-item label="有效时间：">
              <el-date-picker type="date" end-placeholder="选择时间" v-model="ruleForm.date2" :picker-options="pickerOptions1"></el-date-picker>
          </el-form-item>

          <el-form-item label="资源描述：">
            <el-input type="textarea" placeholder="多行输入"></el-input>
          </el-form-item>


          <el-form-item label="联系人：">
            <el-input placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="contactPhone">
            <el-input placeholder="请输入联系电话" v-model="ruleForm.contactPhone"></el-input>
          </el-form-item>

          <el-form-item label="邮箱地址：" prop="email">
            <el-input placeholder="请输入联系邮箱" v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input placeholder="请输入其他联系方式"></el-input>
          </el-form-item>



        </el-form>
      </div>
      <!--底部按钮-->
      <input class="formButton" type="button" value="确认">
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
    data() {
      var checkPhone=(rule,value,callback)=>{
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(!reg.test(value)&&value!=''){
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
      }

      return {
        //表单逻辑验证
        ruleForm:{
          contactPhone:'',
          email:'',
          region:'',
          date1:'',
          date2:'',
          readonly:true
        },
        rule: {
          contactPhone: [
            {validator: checkPhone, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ],
        },
      //  设置日期选择
        pickerOptions1:{
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },

      }
    },
    components: {
      tradeFooter,
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },

      //设置默认日期为当前日期
      getTime () {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let time = y + '-' + m + '-' + d;
        this.ruleForm.date1 = this.ruleForm.date2 = time;
      }
    },
    created(){
      this.getTime()
    }
  }
</script>

<style>
  .el-form-item__error {
    left: 24%;
    top: 35px;
  }

</style>
