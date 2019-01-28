<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <trade-header></trade-header>
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
        <el-form label-position="left" label-width="100px" :model="ruleForm" :rules="rule" ref="ruleForm">
          <el-form-item label="资源类型：">
            <el-select v-model="ruleForm.catCd" placeholder="请选择业务资源">
              <el-option :label="item.nm" :value="item.cd" v-for="(item,index) in catCdList" :key="index"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="资源名称：">
            <el-input placeholder="单行输入" v-model="ruleForm.nm"></el-input>
          </el-form-item>

          <!--<el-form-item label="发布时间：">-->
              <!--<el-date-picker :readonly="ruleForm.readonly" type="date" placeholder="当前日期" v-model="ruleForm.date1"></el-date-picker>-->
          <!--</el-form-item>-->
          <el-form-item label="有效时间：">
              <el-date-picker type="date" end-placeholder="选择时间" v-model="ruleForm.rcdTm" :picker-options="pickerOptions1" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>

          <el-form-item label="资源描述：">
            <el-input type="textarea" placeholder="多行输入" v-model="ruleForm.rmks"></el-input>
          </el-form-item>


          <el-form-item label="联系人：">
            <el-input placeholder="请输入联系人姓名" v-model="ruleForm.contNm"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="contMob">
            <el-input placeholder="请输入联系电话" v-model="ruleForm.contMob"></el-input>
          </el-form-item>

          <el-form-item label="邮箱地址：" prop="email">
            <el-input placeholder="请输入联系邮箱" v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit('ruleForm')">确认</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--底部按钮-->
      <!--<input class="formButton" type="button" value="确认">-->
      <!--<input class="formButton" type="button" value="取消" style="background-color: white;color: rgb(131,131,131)">-->


    </div>
    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
    </div>
  </div>
</template>

<script>
  import tradeFooter from 'components/tradeFooterl'
  import tradeHeader from "components/tradeHeader";
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
        loading:false,
        //表单逻辑验证
        catCdList:[],
        ruleForm:{
          mxPubResPk:'',
          sysUserPk:'',
          nm:'',
          contNm:'',
          contMob:'',
          contOther:'',
          email:'',
          rcdTm:'',
          rmks:'',
          catCd:''
        },
        rule: {
          contMob: [
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
      tradeFooter,tradeHeader
    },
    mounted(){
      this.ruleForm.sysUserPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
      this.getCatCd()
    },
    methods: {
      //获取资源类型
      getCatCd(){
        this.until.get('/general/cat/listByPrntCd?prntCd=60030')
          .then(res=>{
            if(res.status=='200'){
              this.catCdList = res.data.items
            }
          })
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            let myDate = this.until.formatDate(this.ruleForm.rcdTm.getTime())
            this.ruleForm.rcdTm = myDate.year+'-'+myDate.month+'-'+myDate.day+' 00:00:00'
            this.until.postData('/prod/mxpubres/edit',JSON.stringify(this.ruleForm))
              .then(res=>{
                this.loading = false
                if(res.status=='200'){
                  this.$message({
                    message:'提交成功！',
                    type:'success'
                  });
                  setTimeout(()=>{
                    window.location.href = '../servicecenter/partner.html'
                  },1500)
                }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },


    },
    created(){
      // this.getTime()
    }
  }
</script>

<style>
  .el-form-item__error {
    left: 24%;
    top: 35px;
  }

</style>
