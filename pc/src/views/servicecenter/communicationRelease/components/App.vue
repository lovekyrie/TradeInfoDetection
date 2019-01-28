<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <trade-header></trade-header>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">我要发布</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="120px" :model="ruleForm" :rules="rule" ref="ruleForm">
          <el-form-item id="name" label="标题：" prop="nm">
            <el-input v-model="ruleForm.nm"></el-input>
          </el-form-item>
          <el-form-item label="发布时间：" prop="legal">
            <el-input v-model="myDate" disabled=""></el-input>
          </el-form-item>
          <el-form-item label="需求描述：" prop="intro">
            <el-input type="textarea" v-model="ruleForm.intro"></el-input>
          </el-form-item>
          <!--上传图片表单-->
          <el-form-item label="附件上传：">
            <div class="i-item" v-if="upList.length>0" v-for="(up,i) in upList">
              <svg class="icon" aria-hidden="true" @click="deletImg(i)">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
              <img :src="up.url"/>
            </div>
            <div class="upload">
              <i class="el-icon-plus"></i>
              <input type="file" @change="upImg($event)">
            </div>
          </el-form-item>
          <el-form-item label="下载金币数：" prop="email">
            <el-input v-model.number.trim="ruleForm.price"></el-input>
          </el-form-item>

        </el-form>
      </div>
      <!--底部按钮-->
      <input class="formButton" type="button" value="发布" @click="submit('ruleForm')">
      <input class="formButton" type="button" value="取消"  @click="resetForm('ruleForm')" style="background-color: white;color: rgb(131,131,131)">


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
      return {
        myDate:'',
        loading:false,
        upList:[],

        //表单逻辑验证
        ruleForm:{
          mxComuPk:'',
          nm: "",
          pdfUrl:'',
          price:'',
          intro:'', //简介描述
          sysUserPk: "",
        },
        rule: {

          nm: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],

        }

      }
    },
    components: {
      tradeFooter,
      tradeHeader
    },
    watch:{
      'ruleForm.price':function () {
        setTimeout(()=>{
          this.ruleForm.price= this.ruleForm.price.toString().indexOf('.') > -1 ? this.ruleForm.price.toString().split('.')[0] : this.ruleForm.price
        },200)
      }
    },
    mounted(){
      let date = this.until.formatDate()
      this.myDate = date.year+'-'+date.month+'-'+date.day
      let info=JSON.parse(this.until.loGet('userInfo'))
      if(info){
        this.ruleForm.sysUserPk = info.sysUserPk
      }
      if(this.until.getQueryString('type')=='edit'){
        this.getInfo()
      }
    },
    methods: {

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.ruleForm.pdfUrl = JSON.stringify(this.upList)
            // console.log(param)
            this.until.postData('/prod/mxcomu/edit',JSON.stringify(this.ruleForm))
              .then(res=>{
                this.loading = false
                if(res.status=='200'){
                  this.$message({
                    message:'提交成功',
                    type:'success'
                  });
                  setTimeout(()=>{
                    window.history.go(-1)
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

      },
      upImg(e){
        let blob = e.target.files[0];
        this.loading = true
        this.until.upImg(e)
          .then(res=>{
            this.loading = false
            var str = res;
            this.upList.push({
              name:blob.name.split('.')[0],
              url:str,
              type:blob.name.split('.')[1]
            });
          },err=>{
            this.loading = false
            this.$message({
              message:err,
              type:'warning'
            });
            // this.Toast(err)
          });
      },
      deletImg(index){
        this.upList.splice(index,1)
      }
    }
  }
</script>

<style>
  .el-form-item__error {
    left: 28%;
    top: 35px;
  }
  .formButton{
    border-width: 1px;
  }

</style>
