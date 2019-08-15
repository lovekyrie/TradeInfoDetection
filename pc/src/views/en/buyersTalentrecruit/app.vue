<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <el-form :model="form" :rules="rules" ref="form" >
        <trade-title :title="title"></trade-title>
        <el-form-item label="Position:" prop="nm">
          <el-input v-model="form.nm" ></el-input>
        </el-form-item>
        <el-form-item label="Salary:">
          <el-input v-model="form.frSala" ></el-input><span>~</span>
          <el-input v-model="form.toSala" ></el-input><span> /month</span>
        </el-form-item>
        <el-form-item label="Tel:" prop="mob">
          <el-input v-model="form.mob" ></el-input>
        </el-form-item>
        <el-form-item label="Email：">
          <el-input v-model="form.email" ></el-input>
        </el-form-item>
        <el-form-item label="Job Description:" prop="intro">
          <el-input type="textarea" v-model="form.intro" ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="btn-wrap">
            <el-button type="primary" @click="onSubmit('form')">Confirm</el-button>
            <el-button @click="cancel('form')">Cancel</el-button>
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
      title: "Release Talents Requirements",
      jobdesc:
        "1、操作过ICP，GC-MS等分析仪器；2、英语CET4及以上；3、能熟练的操作办公软件。",
      form: {
        mxPubRecrPk:'',//主键
        sysUserPk:'',//用户主键
        entpPk:'',//企业主键
        entpNm:'',//企业名称
        nm:'',//名称
        frSala:'',//最少薪资
        toSala:'',//最多薪资
        mob:'',//电话
        email:'',//邮箱
        intro:'',//简介
      },
      rules:{
        nm: [
          { required: true, message: 'Please enter the title of the position.', trigger: 'blur' },
        ],
        mob: [
          { required: true, message: 'Please enter a contact number.', trigger: 'blur' }
        ],
        intro: [
          {  required: true, message: 'Please enter a job description.', trigger: 'blur'}
        ],
      }
    };
  },
  mounted(){
    let info=JSON.parse(this.until.loGet('userInfo'))
    if(info){
      this.form.sysUserPk = info.sysUserPk
      this.form.entpPk = info.entpPk
      this.form.entpNm = info.entpNm
    }
  },
  methods: {
    cancel(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit(formName){
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading=true
          this.until.postData('/prod/mxpubrecr/edit',JSON.stringify(this.form))
            .then(res=>{
              this.loading = false
              if(res.status=='200'){
                this.$message({
                  message:res.message,
                  type:'success'
                });
                setTimeout(()=>{
                  window.history.go(-1)
                  // window.location.href = 'humanresource.html'
                },1500)
              }else {
                this.$message({
                  message:res.message,
                  type:'warning'
                });
              }
            })
        }
      })

    }
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
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 765px;
      margin: 65px auto 0px;
      .el-form {
        padding-bottom: 30px;
        .el-form-item {
          width: 80%;
          margin: 15px auto;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
           &:nth-last-of-type(1){
            >div{
              margin-left: 20%;
              button{
                width: 150px;
                &:nth-of-type(1){
                  border-color: #0d55d2;
                  background-color: #0d55d2;
                }
              }
            }
          }
          > label {
            width: 20%;
            text-align: right;
          }
          > div {
            /*width: 70%;*/
            flex: 1;
          }
          textarea {
            height: 80px;
          }
        }
        > div {
          &:nth-of-type(3) {
            > div {
              display: -webkit-flex;
              display: flex;
              flex-wrap: nowrap;
              justify-content: flex-start;
              align-items: center;
              > div {
                width: 40%;
              }
              > span {
                width:10%;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
