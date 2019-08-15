<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <header-top></header-top>
    <!--<div id="header">-->
      <!--<ul>-->
        <!--<li><a class="login" href="../entry/login.html">登录</a></li>-->
        <!--<li><a href="../entry/register.html">注册</a></li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--图标-->
    <div id="icon">
      <a href="../en/index.html">
        <img src="../../entryLogin/img/logo.png">
      </a>
    </div>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">Publish Detection Services</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="128px" :model="ruleForm" :rules="rule" ref="ruleForm">


          <el-form-item label="Detection Service Title：" prop="nm">
            <el-input placeholder="" v-model="ruleForm.nm"></el-input>
          </el-form-item>

          <el-form-item label="Service picture：">
            <div class="i-item" v-if="imgList.length>0" v-for="(up,i) in imgList">
              <svg class="icon" aria-hidden="true" @click="deletImg(i)">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
              <img :src="up"/>
            </div>
            <div class="upload">
              <i class="el-icon-plus"></i>
              <input type="file" @change="upImg($event)">
            </div>
          </el-form-item>


          <el-form-item label="Service content：" prop="intro">
            <el-input type="textarea" placeholder="" v-model="ruleForm.intro"></el-input>
          </el-form-item>

          <el-form-item label="Classification of Detection Services："  v-model="ruleForm.catCd">
            <el-select v-model="ruleForm.catCd" placeholder="">
              <el-option :label="item.nm" :value="item.cd" v-for="(item,index) in catCdList" :key="index"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Class two："  v-model="ruleForm.twoCd">
            <el-select v-model="ruleForm.twoCd" placeholder="">
              <el-option :label="item.nm" :value="item.cd" v-for="(item,index) in twoCdList" :key="index"></el-option>
            </el-select>
          </el-form-item>



        </el-form>
      </div>
      <!--底部按钮-->
      <input class="formButton" type="button" value="Confirm" @click="submit('ruleForm')">
      <input class="formButton" type="button" value="取Cancel消" @click="resetForm('ruleForm')" style="background-color: white;color: rgb(131,131,131)">


    </div>
    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
    </div>


  </div>
</template>

<script>
  import tradeFooter from '@/componentsEn/tradeFooterl'
  import HeaderTop from "@/componentsEn/headerTop";

  export default {
    data() {

      return {
        loading:false,
        catCdList:[],
        twoCdList:[],
        imgList:[],
        //表单逻辑验证
        ruleForm:{
          mxPubThrserPk:'',//主键
          sysUserPk:'',//用户pk
          nm:'',//检测服务标题
          imgUrl:'',//服务图片
          statCd:'50000.200',//是否通过审核  50000.200
          intro:'',// 简介
          catCd:'',//检测服务分类
          twoCd:'',
        },
        rule: {
          nm: [
            { required: true, message: 'Detection Service Title', trigger: 'blur' },
          ],
        },

      }
    },
    mounted(){
      this.ruleForm.sysUserPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
      this.getCatCd()
    },
    components: {
      HeaderTop,
      tradeFooter,
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      upImg(e){
        this.loading = true
        this.until.upImg(e)
          .then(res=>{
            this.loading = false
            var str = res;
            var str1 = str.replace('http://127.0.0.1', this.hostUrl);
            this.imgList.push(str1);

          },err=>{ this.Toast(err) });
      },
      deletImg(index){
        this.imgList.splice(index,1)

      },
      getCatCd(){
        this.until.get('/general/cat/listByPrntCd?prntCd=70000')
          .then(res=>{
            this.catCdList = res.data.items
          })
      },
      getCatCdTwo(){
        this.until.get('/general/cat/listByPrntCd?prntCd='+this.ruleForm.catCd)
          .then(res=>{
            this.twoCdList = res.data.items
          })
      },
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
              this.ruleForm.imgUrl = this.imgList.join(',')
            this.until.postData('/prod/mxpubthrser/edit',JSON.stringify(this.ruleForm))
              .then(res=>{
                this.loading = false
                if(res.status=='200'){
                  this.$message({
                    message:'Successful submission!',
                    type:'success'
                  })
                  setTimeout(()=>{
                    window.location.href = 'servicecenterDetection.html'
                  },1500)
                }
              })
          }
        })

      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },

      //设置默认日期为当前日期
      // getTime () {
      //   let date = new Date();
      //   let y = date.getFullYear();
      //   let m = date.getMonth() + 1;
      //   let d = date.getDate();
      //   let time = y + '-' + m + '-' + d;
      //   this.ruleForm.date1 = this.ruleForm.date2 = time;
      // }
    },
    watch:{
      "ruleForm.catCd":function () {
        this.getCatCdTwo()
      }
    },
    created(){
      if(this.until.getQueryString('info')){
        let info = JSON.parse(this.until.getQueryString('info'))
        this.ruleForm.mxPubThrserPk = info.mxPubThrserPk
        this.ruleForm.nm = info.nm
        this.ruleForm.imgUrl = info.imgUrl
        this.ruleForm.statCd = info.statCd
        this.ruleForm.intro = info.intro
        this.ruleForm.catCd = info.catCd
        this.ruleForm.twoCd = info.twoCd
        this.imgList = this.ruleForm.imgUrl.split(',')
      }
      console.log(this.ruleForm)
    }
  }
</script>

<style lang="less">
  .el-form-item__error {
    left: 24%;
    top: 35px;
  }
  .i-item{
    float: left;
    width: 100px;
    height: 100px;
    border: 1px solid #d8d8d8;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 5px;
    margin-bottom: 5px;
  svg{
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
  }
  img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  }
  .upload{
    float: left;
    width: 100px;
    height: 100px;
    border: 1px solid #d8d8d8;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 5px;
    margin-bottom: 5px;
    position: relative;
  input{
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top:0;
    left:0;
    width: 100px;
    height: 100px;
  }
  }
</style>
