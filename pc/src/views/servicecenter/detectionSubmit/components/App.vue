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
        <li class="title">发布检测服务</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="128px" :model="ruleForm" :rules="rule" ref="ruleForm">


          <el-form-item label="检测服务标题：">
            <el-input placeholder="单行输入"></el-input>
          </el-form-item>

          <el-form-item label="服务图片：">
            <el-upload list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog>
              <img width="100%" src="" alt="">
            </el-dialog>
          </el-form-item>


          <el-form-item label="服务内容：">
            <el-input type="textarea" placeholder="多行输入"></el-input>
          </el-form-item>

          <el-form-item label="检测服务分类：">
            <el-select v-model="ruleForm.region1" placeholder="请选择">
              <el-option label="资源1" value="test1"></el-option>
              <el-option label="资源2" value="test2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="二级类别：">
            <el-select v-model="ruleForm.region2" placeholder="请选择">
              <el-option label="资源1.1" value="test3"></el-option>
              <el-option label="资源2.1" value="test4"></el-option>
            </el-select>
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
          region1:'',
          region2:'',
        },
        rule: {
          contactPhone: [
            {validator: checkPhone, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ],
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
