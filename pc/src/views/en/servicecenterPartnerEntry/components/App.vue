<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <trade-header></trade-header>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">Partner located</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="120px" :model="ruleForm" :rules="rule" ref="ruleForm">
          <el-form-item id="name" label="Company Name：" prop="nm">
            <el-input v-model="ruleForm.nm"></el-input>
          </el-form-item>
          <el-form-item label="Legal Person：" prop="legal">
            <el-input v-model="ruleForm.legal"></el-input>
          </el-form-item>
          <el-form-item label="Email：" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Contact Person：" prop="contNm">
            <el-input v-model="ruleForm.contNm"></el-input>
          </el-form-item>
          <el-form-item label="Contact Phone：" prop="contMob">
            <el-input v-model="ruleForm.contMob"></el-input>
          </el-form-item>
          <el-form-item label="Contact Address：" prop="contAddr">
            <el-input v-model="ruleForm.contAddr"></el-input>
          </el-form-item>

          <!--上传图片表单-->
          <el-form-item label="Business License：">
            <div class="i-item" v-if="upList.length>0" v-for="(up,i) in upList">
              <svg class="icon" aria-hidden="true" @click="deletImg(i,1)">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
              <img :src="up"/>
            </div>
            <div class="upload">
              <i class="el-icon-plus"></i>
              <input type="file" @change="upImg($event,1)">
            </div>
          </el-form-item>

          <el-form-item label="CMA Certificate：">
            <div class="i-item" v-if="upList2.length>0" v-for="(up,i) in upList2">
              <svg class="icon" aria-hidden="true" @click="deletImg(i,2)">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
              <img :src="up"/>
            </div>
            <div class="upload">
              <i class="el-icon-plus"></i>
              <input type="file" @change="upImg($event,2)">
            </div>
          </el-form-item>

          <el-form-item label="CNAS Certificate：">
            <div class="i-item" v-if="upList3.length>0" v-for="(up,i) in upList3">
              <svg class="icon" aria-hidden="true" @click="deletImg(i,3)">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
              <img :src="up"/>
            </div>
            <div class="upload">
              <i class="el-icon-plus"></i>
              <input type="file" @change="upImg($event,3)">
            </div>
          </el-form-item>

          <el-form-item label="Other Qualification Certificate：">
            <div class="i-item" v-if="upList4.length>0" v-for="(up,i) in upList4">
              <svg class="icon" aria-hidden="true" @click="deletImg(i,4)">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
              <img :src="up"/>
            </div>
            <div class="upload">
              <i class="el-icon-plus"></i>
              <input type="file" @change="upImg($event,4)">
            </div>
          </el-form-item>

          <el-form-item label="Company　Profile：" prop="intro">
            <el-input type="textarea" v-model="ruleForm.intro"></el-input>
          </el-form-item>


        </el-form>
      </div>
      <!--底部按钮-->
      <input class="formButton" type="button" value="Apply" @click="submit('ruleForm')">
      <input class="formButton" type="button" value="Cancel"  @click="resetForm('ruleForm')" style="background-color: white;color: rgb(131,131,131)">


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
  import tradeFooter from '@/componentsEn/tradeFooterl'
  import tradeHeader from "@/componentsEn/tradeHeader";
  export default {
    data() {
      var checkPhone=(rule,value,callback)=>{
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(value==''){
          return callback(new Error('Please enter your cell phone number.'));
        }
        else if(!reg.test(value)){
          return callback(new Error('Please enter the correct mobile phone number format'));
        }
        else{
          callback();
        }
      };

      var checkEmail=(rule,value,callback)=>{
        let reg=/^[\w,\d]+[_|\.]?[\w,\d]*@[\w,\d]+[\.]{1}[\w]{1,3}$/;
        if(!reg.test(value)&&value!=''){
          return callback(new Error('Please enter the correct mailbox format'));
        }else {
          callback();
        }
      }

      return {
        loading:false,
        upList:[],
        upList2:[],
        upList3:[],
        upList4:[],
        //表单逻辑验证
        ruleForm:{
          userPk: "",
          mxEntpPk: "",
          sysUserPk: "",
          nm: "",
          legal: "",  //法人
          email: "",
          contNm: "",
          contMob: "",
          contAddr: "",
          busLicUrl: "",  //营业执照
          cmaQualUrl: "",  //CMA
          cnasQualUrl: "",  //CNAS
          otherQualUrl: "",  //其他
          intro: "",
          catCd: "40000.150",
          statCd: "50000.200"
        },
        rule: {
          contMob: [
            { required: true, message: 'Please enter your cell phone number.', trigger: 'blur' },
            {validator: checkPhone, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ],
          nm: [
            { required: true, message: 'Please enter the name of the enterprise.', trigger: 'blur' },
          ],
          legal: [
            { required: true, message: 'Please enter the legal person\'s name.', trigger: 'blur' }
          ],
        }

      }
    },
    components: {
      tradeFooter,
      tradeHeader
    },
    mounted(){
      let info=JSON.parse(this.until.loGet('userInfo'))
      if(info){
        this.ruleForm.userPk = info.sysUserPk
      }
      if(this.until.getQueryString('type')=='edit'){
        this.getInfo()
      }
    },
    methods: {
      getInfo(){
        this.until.get('/prodx/mxentp/info/'+this.ruleForm.userPk)
          .then(res=>{
            if(res.status=='200'){
              let myData = res.data
              this.ruleForm.mxEntpPk = myData.mxEntpPk
              this.ruleForm.nm = myData.nm
              this.ruleForm.legal = myData.legal
              this.ruleForm.email = myData.email
              this.ruleForm.contNm = myData.contNm,
                this.ruleForm.contMob = myData.contMob,
                this.ruleForm.contAddr = myData.contAddr,
                this.ruleForm.busLicUrl = myData.busLicUrl,
                this.ruleForm.cmaQualUrl = myData.cmaQualUrl,
                this.ruleForm.cnasQualUrl = myData.cnasQualUrl,
                this.ruleForm.otherQualUrl = myData.otherQualUrl,
                this.ruleForm.intro = myData.intro,
                this.ruleForm.logoUrl = myData.logoUrl

              this.upList = this.ruleForm.busLicUrl ? this.ruleForm.busLicUrl.split(',') : []
              this.upList2 = this.ruleForm.cmaQualUrl ? this.ruleForm.cmaQualUrl.split(',') : []
              this.upList3 = this.ruleForm.cnasQualUrl ? this.ruleForm.cnasQualUrl.split(',') : []
              this.upList4 = this.ruleForm.otherQualUrl ? this.ruleForm.otherQualUrl.split(',') : []
              if(myData.statCd=='50000.200'){
                this.$message({
                  message:'In review...',
                  type: 'warning'
                });
              }else if(myData.statCd=='50000.300'){
                this.$message({
                  message:'Audit failed, please resubmit!',
                  type:'warning'
                });
              }
            }else {
              this.$message({
                message:res.message,
                type:'warning'
              });
            }

          })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.ruleForm.busLicUrl=this.upList.join(',')
            this.ruleForm.cmaQualUrl=this.upList2.join(',')
            this.ruleForm.cnasQualUrl=this.upList3.join(',')
            this.ruleForm.otherQualUrl=this.upList4.join(',')
            // console.log(this.ruleForm)
            let param = {
              mxEntpPk:this.ruleForm.mxEntpPk,
              sysUserPk: this.ruleForm.userPk,
              nm: this.ruleForm.nm,
              legal: this.ruleForm.legal,
              email: this.ruleForm.email,
              contNm: this.ruleForm.contNm,
              contMob: this.ruleForm.contMob,
              contAddr: this.ruleForm.contAddr,
              busLicUrl: this.ruleForm.busLicUrl,
              cmaQualUrl: this.ruleForm.cmaQualUrl,
              cnasQualUrl: this.ruleForm.cnasQualUrl,
              otherQualUrl: this.ruleForm.otherQualUrl,
              intro: this.ruleForm.intro,
              catCd: "40000.150",
              statCd: "50000.200"
            }
            // console.log(param)
            this.until.postData('/prod/mxentp/edit',JSON.stringify(param))
              .then(res=>{
                this.loading = false
                if(res.status=='200'){
                  this.$message({
                    message:'Submit successfully',
                    type:'success'
                  });
                  setTimeout(()=>{
                    window.location.href = 'servicecenterPsettlelnSucess.html'
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
      upImg(e,type){
        this.loading = true
        this.until.upImg(e)
          .then(res=>{
            this.loading = false
            var str = res;
            var str1 = str.replace('http://127.0.0.1', this.hostUrl);
            if(type==1){
              this.upList.push(str1);
            }else if(type==2) {
              this.upList2.push(str1);
            }else if(type==3) {
              this.upList3.push(str1);
            }else {
              this.upList4.push(str1)
            }
          },err=>{ this.Toast(err) });
      },
      deletImg(index,type){
        if(type==1){
          this.upList.splice(index,1)
        }else if(type==2) {
          this.upList2.splice(index,1)
        }else if(type==3) {
          this.upList3.splice(index,1)
        }else {
          this.upList4.splice(index,1)
        }
      }
    }
  }
</script>

<style>
  .el-form-item__error {
    left: 28%;
    top: 35px;
  }

</style>
