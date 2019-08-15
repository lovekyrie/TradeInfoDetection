<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <trade-title :title="title"></trade-title>
         <el-form-item label="Request Type:" prop="catCd">
            <el-select v-model="form.catCd" placeholder="Request Type">
              <el-option :label="item.nm" :value="item.cd"  v-for="item in catList" :key="item.cd"></el-option>
            </el-select>
          </el-form-item>
            <el-form-item label="Name:" prop="nm">
              <el-input v-model="form.nm" placeholder="Name"></el-input>
            </el-form-item>
            <el-form-item label="Release Date:">
              <el-input v-model="datetime" placeholder="" disabled=""></el-input>
            </el-form-item>
            <el-form-item label="Validate Date:" prop="rcdTm">
              <el-date-picker type="date" placeholder="" format="yyyy - MM - dd "
                              value-format="yyyy-MM-dd" v-model="form.rcdTm" style="width: 100%;"></el-date-picker>
            </el-form-item>
             <el-form-item label="Description:" prop="rmks">
              <el-input type="textarea" v-model="form.rmks" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="Contact:" prop="contNm">
              <el-input v-model="form.contNm" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="Tel:" prop="contMob">
              <el-input v-model="form.contMob" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="Email：" prop="email">
              <el-input v-model="form.email" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="Contact Information:" prop="contOther">
              <el-input v-model="form.contOther" placeholder=""></el-input>
            </el-form-item>
             <el-form-item>
               <div class="btn-wrap">
                <el-button type="primary" @click="onSubmit('form')">OK</el-button>
                <el-button  @click="cancel('form')">Cancel</el-button>
               </div>
            </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "@/componentsEn/tradeHeader";
import tradeFooter from "@/componentsEn/tradeFooter";
import tradeTitle from "@/componentsEn/tradeTitle";

export default {
  data() {
    return {
      loading:false,
      title: "Release demand",
      type:'',//1买家 2卖家
      datetime:'',
      form: {
        sysUserPk:'',
        nm:'',
        contNm:'',//联系人
        contOther:'',//其他联系方式
        contMob:'',//联系电话
        email:'',//邮箱
        rcdTm:'',//有效时间
        rmks:'',//描述
        catCd:'',
        statCd:''//1买家 2卖家
      },
      catList:[],
      rules: {
        catCd: [
          { required: true, message: 'Please select the type of requirement', trigger: 'change' },
        ],
        nm: [
          { required: true, message: 'Please enter the requirement name', trigger: 'blur' }
        ],
        rcdTm: [
          {  type: 'date', required: true, message: 'Please select a valid date', trigger: 'change'}
        ],
        rmks: [
          { required: true, message: 'Please enter the requirement description.', trigger: 'blur'}
        ],
        contNm: [
          { required: true, message: 'Please enter a contact', trigger: 'blur' }
        ],
        contMob: [
          { required: true, message: 'Please enter a contact number.', trigger: 'change' }
        ],
        email: [
          { required: true, message: 'Please enter your email address', trigger: 'blur' }
        ]
      }
    };
  },
  mounted(){
    let myTime = this.until.formatDate()
    this.datetime = myTime.year +'-' + myTime.month +'-' +myTime.day
    this.form.sysUserPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
    this.type = this.until.getQueryString('type')
    this.form.statCd = this.type
    this.getCatList()
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid){
          let myTime = this.until.formatDate(this.form.rcdTm)
          let myDate = myTime.year+'-'+myTime.month+'-'+myTime.day+' 00:00:00'
          this.form.rcdTm = myDate
          this.loading = true
          this.until.postData('/prod/mxpubres/edit',JSON.stringify(this.form))
            .then(res=>{
              this.loading = false
              if(res.status=='200'){
                this.$message({
                  message: 'Successful submission!',
                  type: 'success'
                });
                setTimeout(()=>{
                  window.history.go(-1)
                },1500)
              }
            })
        }
      })

    },
    cancel(formName){
      this.$refs[formName].resetFields();
    },
    getCatList(){
      this.until.get('/general/cat/listByPrntCd?prntCd=60020')
        .then(res=>{
          if(res.status=='200'){
            this.catList = res.data.items
            this.form.catCd = this.catList[0].cd
          }
        })
    },
  },
  components: {
    tradeHeader,
    tradeFooter,
    tradeTitle
  }
};
</script>

<style lang='less'>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      margin-bottom: 130px;
      .el-form {
        width: 600px;
        margin: 0 auto;

        .el-form-item {

          textarea {
            height: 80px;
          }
          .el-select {
            width: 100%;
          }

        }
      }
    }
  }
}
</style>
