<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <trade-title :title="title"></trade-title>
         <el-form-item label="需求类型：" prop="catCd">
            <el-select v-model="form.catCd" placeholder="检测需求">
              <el-option :label="item.nm" :value="item.cd"  v-for="item in catList" :key="item.cd"></el-option>
            </el-select>
          </el-form-item>
            <el-form-item label="需求名称：" prop="nm">
              <el-input v-model="form.nm" placeholder="需求名称"></el-input>
            </el-form-item>
            <el-form-item label="发布日期：">
              <el-input v-model="datetime" placeholder="" disabled=""></el-input>
            </el-form-item>
            <el-form-item label="有效日期：" prop="rcdTm">
              <el-date-picker type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd" v-model="form.rcdTm" style="width: 100%;"></el-date-picker>
            </el-form-item>
             <el-form-item label="需求描述：" prop="rmks">
              <el-input type="textarea" v-model="form.rmks" placeholder="多行输入"></el-input>
            </el-form-item>
            <el-form-item label="联系人：" prop="contNm">
              <el-input v-model="form.contNm" placeholder="请输入联系人姓名"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：" prop="contMob">
              <el-input v-model="form.contMob" placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item label="邮箱地址：" prop="email">
              <el-input v-model="form.email" placeholder="请输入联系邮箱"></el-input>
            </el-form-item>
            <el-form-item label="联系方式：" prop="contOther">
              <el-input v-model="form.contOther" placeholder="请输入其他联系方式"></el-input>
            </el-form-item>
             <el-form-item>
               <div class="btn-wrap">
                <el-button type="primary" @click="onSubmit('form')">确认</el-button>
                <el-button  @click="cancel('form')">取消</el-button>
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
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import tradeTitle from "components/tradeTitle";

export default {
  data() {
    return {
      loading:false,
      title: "发布需求",
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
          { required: true, message: '请选择需求类型', trigger: 'change' },
        ],
        nm: [
          { required: true, message: '请输入需求名称', trigger: 'blur' }
        ],
        rcdTm: [
          {  type: 'date', required: true, message: '请选择有效日期', trigger: 'change'}
        ],
        rmks: [
          { required: true, message: '请输入需求描述', trigger: 'blur'}
        ],
        contNm: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        contMob: [
          { required: true, message: '请输入联系电话', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' }
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
                  message: '提交成功！',
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
