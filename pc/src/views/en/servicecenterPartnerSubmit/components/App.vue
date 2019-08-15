<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <trade-header></trade-header>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">Publishing resources</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="100px" :model="ruleForm" :rules="rule" ref="ruleForm">
          <el-form-item label="Resource type：">
            <el-select v-model="ruleForm.catCd" placeholder="">
              <el-option :label="item.nm" :value="item.cd" v-for="(item,index) in catCdList" :key="index"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Resource name：">
            <el-input v-model="ruleForm.nm"></el-input>
          </el-form-item>

          <!--<el-form-item label="发布时间：">-->
              <!--<el-date-picker :readonly="ruleForm.readonly" type="date" placeholder="当前日期" v-model="ruleForm.date1"></el-date-picker>-->
          <!--</el-form-item>-->
          <el-form-item label="Effective time：">
              <el-date-picker type="date" end-placeholder="Selection time" v-model="ruleForm.rcdTm" :picker-options="pickerOptions1" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>

          <el-form-item label="Resource description：">
            <el-input type="textarea" placeholder="" v-model="ruleForm.rmks"></el-input>
          </el-form-item>


          <el-form-item label="Contact：">
            <el-input placeholder="Please enter the name of the contact person." v-model="ruleForm.contNm"></el-input>
          </el-form-item>
          <el-form-item label="Tel:" prop="contMob">
            <el-input placeholder="Please enter a contact number." v-model="ruleForm.contMob"></el-input>
          </el-form-item>

          <el-form-item label="Email：" prop="email">
            <el-input placeholder="Please enter the contact mailbox" v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit('ruleForm')">Confirm</el-button>
            <el-button @click="resetForm('ruleForm')">Cancel</el-button>
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
  import tradeFooter from '@/componentsEn/tradeFooterl'
  import tradeHeader from "@/componentsEn/tradeHeader";
  export default {
    data() {
      var checkPhone=(rule,value,callback)=>{
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(!reg.test(value)&&value!=''){
          return callback(new Error('Please enter correct telephone number'));
        }
        else{
          callback();
        }
      };

      var checkEmail=(rule,value,callback)=>{
        let reg=/^[\w,\d]+[_|\.]?[\w,\d]*@[\w,\d]+[\.]{1}[\w]{1,3}$/;
        if(!reg.test(value)&&value!=''){
          return callback(new Error('Please enter correct email'));
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
            this.until.postData('/prod/mxpubreq/edit',JSON.stringify(this.ruleForm))
              .then(res=>{
                this.loading = false
                if(res.status=='200'){
                  this.$message({
                    message:'Successful submission!',
                    type:'success'
                  });
                  setTimeout(()=>{
                    window.location.href = '../en/servicecenterPartner.html'
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
