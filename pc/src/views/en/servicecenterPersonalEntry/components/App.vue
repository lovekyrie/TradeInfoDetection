<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <trade-header></trade-header>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">Talents  located</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="inForm">
        <el-form label-position="left" label-width="120px" :rules="rule" ref="ruleForm" :model="ruleForm">
          <el-form-item id="name" label="Real Name：" prop="nm">
            <el-input type="text" v-model="ruleForm.nm"></el-input>
          </el-form-item>
          <el-form-item label="Telephone Number：" prop="mob">
            <el-input v-model="ruleForm.mob"></el-input>
          </el-form-item>
          <el-form-item label="Job Title：" prop="prof">
            <el-input v-model="ruleForm.prof"></el-input>
          </el-form-item>
          <el-form-item label="QQ：" prop="qq">
            <el-input v-model="ruleForm.qq"></el-input>
          </el-form-item>
          <el-form-item label="WeChat：" prop="vx">
            <el-input v-model="ruleForm.wx"></el-input>
          </el-form-item>
          <el-form-item label="Email：" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Special Skill：" prop="specSkill">
            <el-input v-model="ruleForm.specSkill"></el-input>
          </el-form-item>
          <el-form-item label="Qualification Certificate：" prop="certificate">
              <div class="i-item" v-if="upList.length>0" v-for="(up,i) in upList">
                <svg class="icon" aria-hidden="true" @click="deletImg(i,1)">
                  <use xlink:href="#icon-guanbi"></use>
                </svg>
                <img :src="up">
              </div>

            <div class="upload">
              <i class="el-icon-plus"></i>
              <input type="file" @change="upImg($event,1)">
            </div>
          </el-form-item>
          <el-form-item label="Training Experience：" prop="experience">
            <div>
                <div class="i-item" v-if="upList2.length>0" v-for="(up,i) in upList2">
                  <svg class="icon" aria-hidden="true" @click="deletImg(i,2)">
                    <use xlink:href="#icon-guanbi"></use>
                  </svg>
                  <img :src="up">
                </div>

              <div class="upload">
                <i class="el-icon-plus"></i>
                <input type="file" @change="upImg($event,2)">
              </div>
            </div>
          </el-form-item>

          <el-form-item label="Personal Profile：" prop="resume">
            <el-input type="textarea" v-model="ruleForm.resume"></el-input>
          </el-form-item>


        </el-form>
      </div>
      <!--底部按钮-->
      <input class="formButton" type="button" value="Apply"  @click="submit('ruleForm')">
      <input class="formButton" type="button" value="Cancel" @click="resetForm('ruleForm')" style="background-color: white;color: rgb(131,131,131);border:1px solid #d2d2d2">


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
    data(){
      var checkPhone=(rule,value,callback)=>{
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(value==''){
          return callback(new Error('Please enter your cell phone number.'))
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
      };

      return{
        loading:false,
        upList:[],
        upList2:[],
        ruleForm:{

          mxperspk:'',
          dialogVisible: false,
          userPk:'',
          nm:'',
          mob:'',
          prof:'',
          qq:'',
          wx:'',
          email:'',
          specSkill:'',
          qualCertUrl:'',
          trainExpe:'',
          resume:'',
          catCd:'40000.170',
          statCd:'50000.200',
        },
        rule:{
          nm:[
            {required:true,message:'Please enter your real name.',trigger:'blur'}
          ],
          mob:[
            {required: true, message: 'Please enter your cell phone number.',validator:checkPhone,trigger:'blur'}
          ],
          email:[
            {validator:checkEmail,trigger:'blur'}
          ],
        }
      }
    },
    mounted(){
      let info=JSON.parse(this.until.loGet('userInfo'))
      if(info){
        this.ruleForm.userPk = info.sysUserPk
      }
      this.getInfo()

    },
    methods: {
      getInfo(){
        this.until.get('/prodx/mxpers/infosize/'+this.ruleForm.userPk)
          .then(res=>{
            if(res!=0){
              let myData = res.data.items[0]
              this.ruleForm.mxperspk=myData.mxPersPk
              this.ruleForm.nm=myData.nm
              this.ruleForm.mob=myData.mob
              this.ruleForm.prof=myData.prof
              this.ruleForm.qq=myData.qq,
                this.ruleForm.wx=myData.wx,
                this.ruleForm.email=myData.email,
                this.ruleForm.specSkill=myData.specSkill,
                this.ruleForm.qualCertUrl=myData.qualCertUrl,
                this.ruleForm.trainExpe=myData.trainExpe,
                this.ruleForm.resume=myData.resume
              this.upList = this.ruleForm.qualCertUrl ? this.ruleForm.qualCertUrl.split(',') : []
              this.upList2 = this.ruleForm.trainExpe ? this.ruleForm.trainExpe.split(',') : []
                // this.ruleForm.catCd=myData.catCd,
                // this.ruleForm.statCd=myData.statCd
              if(myData.statCd=='50000.200'){
                this.$message({
                  message:'In review...',
                  type:'warning'
                });
              }else if(myData.statCd=='50000.300'){
                this.$message({
                  message:'Audit failed, please resubmit!',
                  type:'warning'
                });
              }
            }

          })
      },
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.ruleForm.qualCertUrl = this.upList ? this.upList.join(',') : ''
            this.ruleForm.trainExpe = this.upList2 ? this.upList2.join(',') : ''
            let param = {
              mxperspk:this.ruleForm.mxperspk,
              sysUserPk:this.ruleForm.userPk,
              nm:this.ruleForm.nm,
              mob:this.ruleForm.mob,
              prof:this.ruleForm.prof,
              qq:this.ruleForm.qq,
              wx:this.ruleForm.wx,
              email:this.ruleForm.email,
              specSkill:this.ruleForm.specSkill,
              qualCertUrl:this.ruleForm.qualCertUrl,
              trainExpe:this.ruleForm.trainExpe,
              resume:this.ruleForm.resume,
              catCd:this.ruleForm.catCd,
              statCd:this.ruleForm.statCd
            }
            this.until.postData('/prod/mxpers/edit',JSON.stringify(param))
              .then(res=>{
                this.loading = false
                if(res.status=='200'){
                  window.location.href = 'servicecenterSettleInsuccess.html'
                }else {
                  this.$message({
                    message:res,
                    type: 'warning'
                  });
                }
              })
          }
        })

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      upImg(e,type){
        this.loading = true
        this.until.upImg(e)
          .then(res=>{
            this.loading = false
            let str = res;
            console.log(res)
            if(type==1){
              this.upList.push(str);
            }else {
              this.upList2.push(str);
            }
          },err=>{ this.Toast(err) });
      },
      deletImg(index,type){
        if(type==1){
          this.upList.splice(index,1)
        }else {
          this.upList2.splice(index,1)
        }
      }
    },
    components:{
      tradeFooter,
      tradeHeader
    }
  }
</script>

<style>
  .el-form-item__error {
    left: 25%;
    top: 35px;
  }

</style>
