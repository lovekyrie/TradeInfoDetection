<template>

        <!--中间右侧内容栏-->
        <div class="mainRight" v-loading="loading">
          <div class="inForm">
            <el-form label-position="left" label-width="100px"  ref="form" :model="form" :rules="rules">

              <el-form-item label="职位意向：" prop="post">
                <el-input v-model="form.post" ></el-input>
              </el-form-item>

              <el-form-item label="联系电话：" prop="mob">
                <el-input v-model="form.mob" ></el-input>
              </el-form-item>

              <el-form-item label="邮箱地址：">
                <el-input v-model="form.email" ></el-input>
              </el-form-item>


              <el-form-item label="个人简介：" prop="intro">
                <el-input type="textarea" v-model="form.intro" ></el-input>
              </el-form-item>

              <h2>技能特长</h2>

              <el-form-item label="资历证书：" >
                <el-input type="textarea" v-model="form.qualCert" ></el-input>
              </el-form-item>

              <el-form-item label="培训经历：">
                <el-input type="textarea" v-model="form.trainExpes" ></el-input>
              </el-form-item>

              <el-form-item label="是否发布：">
                <template>
                  <el-radio v-model="form.statCd" :label="item.cd" v-for="(item,index) in statList" :key="index">{{item.nm}}</el-radio>
                </template>
              </el-form-item>

            </el-form>
          </div>
          <input class="formButton" type="button" value="确定"  @click="submit('form')">
          <input class="formButton" type="button" value="取消"  @click="cancel('form')" style="background-color: white;color: rgb(131,131,131)">

        </div>


</template>

<script>
  import headerMenu from 'components/headerMenu';
  import tradeFooter from 'components/tradeFooterl';

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
            { required: true, message: '请输入职位意向', trigger: 'blur' },
          ],
          mob: [
            { required: true, message: '请输入联系电话', trigger: 'blur' }
          ],
          intro: [
            {  required: true, message: '请输入个人简介', trigger: 'blur'}
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
    margin: 20px 0;
    text-align: left;
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
