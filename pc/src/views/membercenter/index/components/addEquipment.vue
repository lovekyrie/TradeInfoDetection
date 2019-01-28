<template>
   <div class="add-equip" v-loading="loading">
          <p @click="toEquipment" style="text-align: left;" class="cursor"><i class="el-icon-arrow-left"></i> 返回</p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">发布设备需求</li>
            <li class="line"><span></span></li>
          </ul>

          <!--发布设备内容表单-->
          <div class="deviceSub">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="设备标题：" prop="nm">
                <el-input v-model="ruleForm.nm"></el-input>
              </el-form-item>
              <el-form-item label="性质：" v-if="type==2">
                <el-select v-model="ruleForm.catCd" placeholder="">
                  <el-option :label="item.nm" :value="item.cd" v-for="(item,index) in catCdList" :key="index"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="价格：" prop="dContacts" v-if="type==2">
                <el-input v-model="ruleForm.price"></el-input>
              </el-form-item>
              <el-form-item label="设备图片：" v-if="type==2">
                <div class="i-item" v-if="upList.length>0" v-for="(up,i) in upList">
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
              <el-form-item label="产品描述：">
                <el-input type="textarea" v-model="ruleForm.intro"></el-input>
              </el-form-item>

              <el-form-item label="联系人：" prop="contNm">
                <el-input v-model="ruleForm.contNm"></el-input>
              </el-form-item>

              <el-form-item label="联系电话：" prop="contMob">
                <el-input v-model="ruleForm.contMob"></el-input>
              </el-form-item>

              <el-form-item label="邮箱地址：" prop="email">
                <el-input v-model="ruleForm.contEmail"></el-input>
              </el-form-item>

              <!--<el-form-item label="联系方式：" prop="contactWay">-->
                <!--<el-input v-model="ruleForm.contactWay" placeholder="请输入其他联系方式"></el-input>-->
              <!--</el-form-item>-->

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
              </el-form-item>

            </el-form>
          </div>

        </div>
</template>

<script>
export default {
    data() {

      return {
        loading:false,
        catCdList:[],
        upList:[],
        type:'', // 1是个人 2企业
        ruleForm: {
          mxPubDevPk:'',
          sysUserPk:'',
          nm:'',
          price:'',
          imgUrl:'',
          contNm:'',
          contMob:'',
          contEmail:'',
          catCd:'',
          statCd:'',
          intro:'',
        },
        rules:{
          nm: [
            { required: true, message: '请输入设备名称', trigger: 'blur' },
          ],
          contNm: [
            { required: true, message: '请输入联系人', trigger: 'blur' }
          ],
          contMob: [
            {  required: true, message: '请输入联系电话', trigger: 'blur'}
          ],
        }
      }
    },
  mounted(){
    let info=JSON.parse(this.until.loGet('userInfo'))
    this.type = info.arg1
    this.ruleForm.statCd = this.type==1 ? '':'50000.200'
    this.ruleForm.sysUserPk = info.sysUserPk
    this.getCatCd()
  },
    methods: {
      // submitForm(formName){
      //   this.$refs[formName].validate((valid)=>{
      //     if(valid){
      //       alert('submit');
      //     }else {
      //       console.log('error submit');
      //       return false;
      //     }
      //   });
      // },
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
      upImg(e){
        this.loading = true
        this.until.upImg(e)
          .then(res=>{
            this.loading = false
            var str = res;
            var str1 = str.replace('http://127.0.0.1', this.hostUrl);
            this.upList.push(str1);
          },err=>{ this.Toast(err) });
      },
      deletImg(index){
          this.upList.splice(index,1)
      },
      //获取性质
      getCatCd(){
        this.until.get('/general/cat/listByPrntCd?prntCd=60010')
          .then(res=>{
            this.catCdList = res.data.items
            this.ruleForm.catCd = this.catCdList[0].cd
          })
      },

      submitForm(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            this.loading = true
            this.ruleForm.imgUrl = this.upList.join(',')
            this.until.postData('/prod/mxpubdev/edit',JSON.stringify(this.ruleForm))
              .then(res=>{
                this.loading = false
                if(res.status='200'){
                  this.$message({
                    message:'提交成功！',
                    type:'success'
                  });
                  setTimeout(()=>{
                    this.show = false
                    this.$router.back(-1)
                    // this.$router.push({
                    //   path:'/equipment'
                    // })
                  },1500)
                }else {
                  this.$message({
                    message:res.message,
                    type:'warning'
                  });
                }
              })
          }else {
            console.log('error submit');
            return false;
          }
        });
      },

      toEquipment(){
        this.$router.back(-1)
      }
    },
};
</script>

<style lang='less'>
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
.add-equip {
  flex: 5.5;
  background-color: white;
  padding: 20px 20px;
  text-align: center;
  .mainTitle {
    margin-top: 20px;
    li {
      display: inline-block;
      height: 20px;
      span {
        display: block;
        width: 130px;
        height: 1px;
        background-color: rgb(204, 204, 204);
      }
    }
    .line {
      padding-top: 10px;
    }
    //标题字体
    .title {
      font-size: 20px;
      font-weight: 400;
      margin-left: 40px;
      margin-right: 40px;
      width: auto;
    }
  }

  //  发布设备内容表单
  .deviceSub {
    width: 440px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 80px;
    text-align: left;

    .el-form-item {
      margin-bottom: 20px;

      //表单样式
      .el-input {
        height: 45px;
      }

      .el-input__inner {
        height: 45px;
        border-radius: 0;
        border: 2px solid rgb(234, 234, 234);
      }

      label {
        font-weight: 300;
        color: rgb(121, 121, 121);
        line-height: unset;
      }

      //  按钮样式
      .el-button {
        width: 120px;
        height: 40px;
        margin-top: 30px;
      }
      .el-button--primary {
        background-color: rgb(13, 85, 210);
      }
    }

    .el-textarea {
      .el-textarea__inner {
        border-radius: 0;
        height: 88px;
      }
    }
  }
}
</style>
