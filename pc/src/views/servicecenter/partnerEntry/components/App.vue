<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <trade-header></trade-header>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">合作伙伴入驻</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="120px" :model="ruleForm" :rules="rule" ref="ruleForm">
          <el-form-item id="name" label="企业名称：" prop="nm">
            <el-input v-model="ruleForm.nm"></el-input>
          </el-form-item>
          <el-form-item label="法人姓名：" prop="legal">
            <el-input v-model="ruleForm.legal"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址：" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="联系人：" prop="contNm">
            <el-input v-model="ruleForm.contNm"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="contMob">
            <el-input v-model="ruleForm.contMob"></el-input>
          </el-form-item>
          <el-form-item label="联系地址：" prop="contAddr">
            <el-input v-model="ruleForm.contAddr"></el-input>
          </el-form-item>

          <!--上传图片表单-->
          <el-form-item label="营业执照：">
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

          <el-form-item label="CMA资质证书：">
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

          <el-form-item label="CNAS资质证书：">
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

          <el-form-item label="其他资质证书：">
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

          <el-form-item label="公司简介：" prop="intro">
            <el-input type="textarea" v-model="ruleForm.intro"></el-input>
          </el-form-item>


        </el-form>
      </div>
      <!--底部按钮-->
      <input class="formButton" type="button" value="提交申请" @click="submit('ruleForm')">
      <input class="formButton" type="button" value="取消"  @click="resetForm('ruleForm')" style="background-color: white;color: rgb(131,131,131)">


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
  import tradeFooter from 'components/tradeFooterl'
  import tradeHeader from "components/tradeHeader";
  export default {
    data() {
      var checkPhone=(rule,value,callback)=>{
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(value==''){
          return callback(new Error('请输入手机号码'));
        }
        else if(!reg.test(value)){
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
            { required: true, message: '请输入联系电话', trigger: 'blur' },
            {validator: checkPhone, trigger: 'blur'}
          ],
          email: [
            {validator: checkEmail, trigger: 'blur'}
          ],
          nm: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
          ],
          legal: [
            { required: true, message: '请输入法人姓名', trigger: 'blur' }
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
                  message:'入驻审核中……',
                  type: 'warning'
                });
              }else if(myData.statCd=='50000.300'){
                this.$message({
                  message:'入驻审核未通过，请重新提交！',
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
                    message:'提交成功',
                    type:'success'
                  });
                  setTimeout(()=>{
                    window.location.href = 'PsettlelnSucess.html'
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
