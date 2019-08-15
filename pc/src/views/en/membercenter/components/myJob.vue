<template>

        <!--中间右侧内容栏-->
        <div class="mainRight" v-loading="loading">
          <div class="inForm">
            <el-form label-position="left" label-width="100px"  ref="form" :model="form" :rules="rules">

              <el-form-item label="Job intention：" prop="post">
                <el-input v-model="form.post" ></el-input>
              </el-form-item>

              <el-form-item label="Tel：" prop="mob">
                <el-input v-model="form.mob" ></el-input>
              </el-form-item>

              <el-form-item label="Email：">
                <el-input v-model="form.email" ></el-input>
              </el-form-item>


              <el-form-item label="Personal profile：" prop="intro">
                <el-input type="textarea" v-model="form.intro" ></el-input>
              </el-form-item>

              <h2>Skill specialty</h2>

              <el-form-item label="Qualification certificate：" >
                <el-input type="textarea" v-model="form.qualCert" ></el-input>
              </el-form-item>

              <el-form-item label="Training experience：">
                <el-input type="textarea" v-model="form.trainExpes" ></el-input>
              </el-form-item>

              <el-form-item label="Whether to issue：">
                <template>
                  <el-radio v-model="form.statCd" :label="item.cd" v-for="(item,index) in statList" :key="index">{{item.nm}}</el-radio>
                </template>
              </el-form-item>

            </el-form>
          </div>
          <input class="formButton" type="button" value="Confirm"  @click="submit('form')">
          <input class="formButton" type="button" value="Cancel"  @click="cancel('form')" style="background-color: white;color: rgb(131,131,131)">

        </div>


</template>

<script>
  import headerMenu from '@/componentsEn/headerMenu';
  import tradeFooter from '@/componentsEn/tradeFooterl';

  export default {
    data(){
      return{
        loading:false,
        form:{
          post:'',
          mob:'',
          email:'',
          intro:'',
          sysUserPk:'',//用户主键
          qualCert:'',//证书
          trainExpes:'',//培训经历
          statCd:''
        },
        statList:[],
        rules: {
          post: [
            { required: true, message: 'Please enter job intention', trigger: 'blur' },
          ],
          mob: [
            { required: true, message: 'Please enter a contact number.', trigger: 'blur' }
          ],
          intro: [
            {  required: true, message: 'Please enter a personal profile', trigger: 'blur'}
          ],
        }

      }
    },
    mounted(){
      let info=JSON.parse(this.until.loGet('userInfo'))
      if(info){
        this.form.sysUserPk = info.sysUserPk
        this.getStatCd()
        this.getInfo()
      }
    },
    methods:{
      cancel(formName){
        this.$refs[formName].resetFields();
      },
      //获取状态
      getStatCd(){
        this.until.get('/general/cat/listByPrntCd?prntCd=60000')
          .then(res=>{
            this.statList = res.data.items
          })
      },
      getInfo(){
        this.until.get('/prod/mxpubtale/listSelf')
          .then(res=>{
            if(res.status=='200'){
              let myData = res.data.items[0]
              if(myData.mxPubTalePk){
                this.form.mxPubTalePk = myData.mxPubTalePk
              }
              this.form.post = myData.post
              this.form.mob = myData.mob
              this.form.email = myData.email
              this.form.intro = myData.intro!=''?myData.intro.replace(/\n/gm,"<br/>"):''
              this.form.qualCert = myData.qualCert!=''? myData.qualCert.replace(/\n/gm,"<br/>"):''

              this.form.trainExpes = myData.trainExpes!='' ? myData.trainExpes.replace(/\n/gm,"<br/>"):''
              this.form.statCd = myData.statCd ? myData.statCd:this.statList[0].cd
            }else {
              this.$message({
                message:res.message,
                type:'warning'
              });
            }
            // console.log(this.info)
          })
      },
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.until.postData('/prod/mxpubtale/edit',JSON.stringify(this.form))
              .then(res=>{
                this.loading = false
                if(res.status=='200'){
                  this.$message({
                    message:res.message,
                    type:'success'
                  });
                  setTimeout(()=>{
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

      },
    },
    components: {
      headerMenu,
      tradeFooter,
    }
  }
</script>

<style>
  h2{
    font-size: 18px;
    margin-top: 50px;
    margin-bottom: 20px;
    text-align: left;
  }
  .inForm{
    width: 50%;
    margin: 20px auto;
  }
  .formButton {
    width: 110px;
    height: 36px;
    font-size: 14px;
    background-color: rgb(13, 85, 210);
    color: white;
    position: relative;
    top: -1px;
    margin-right: 20px;
    border-width: 1px;
  }
  .el-form-item__content{
    text-align: left !important;
  }
</style>
