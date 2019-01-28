<template>
   <div class="add-addr" v-loading="loading">
          <p @click="toAddressList" style="text-align: left;" class="cursor"><i class="el-icon-arrow-left"></i> 返回</p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">编辑收货地址</li>
            <li class="line"><span></span></li>
          </ul>

          <!--编辑收货地址表单-->
          <div class="editAddress">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
              <el-form-item label="收货人：" prop="receiver">
                <el-input v-model="ruleForm.receNm"></el-input>
              </el-form-item>

              <el-form-item label="手机号：" prop="phone">
                <el-input v-model="ruleForm.receMob"></el-input>
              </el-form-item>

              <el-form-item label="省市区：" prop="place">
                <addr @setAddr="getAddr" :provCd="ruleForm.provCd" :city="ruleForm.cityCd" :distCd="ruleForm.distCd"></addr>
              </el-form-item>

              <el-form-item label="详细地址：" prop="fullAddress">
                <el-input type="textarea" v-model="ruleForm.addrDtl"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
              </el-form-item>

            </el-form>
          </div>

        </div>
</template>

<script>
  import addr from '../../../../components/addr.vue'
export default {
  data() {
    return {
      loading:false,
      getInfo:{},
      ruleForm: {
        sysAddrPk: "",
        sysUserPk: "",
        sysUserNm: "",
        receNm: "",
        receMob:'',
        receMob:'',
        provCd:'',
        cityCd:'',
        distCd:'',
        addrDtl:''
      },
      rules: {}
    };
  },
  components:{
    addr
  },
  created(){
    if(this.$route.query.info){
      this.getInfo = JSON.parse(this.$route.query.info)
      this.ruleForm.sysAddrPk = this.getInfo.sysAddrPk  //地址主键
      this.ruleForm.sysUserPk = this.getInfo.sysUserPk  //用户主键
      this.ruleForm.sysUserNm = this.getInfo.sysUserNm  //登录名

      this.ruleForm.receNm = this.getInfo.receNm  //联系人
      this.ruleForm.receMob = this.getInfo.receMob  //电话
      this.ruleForm.provCd = this.getInfo.provCd  //省编码
      this.ruleForm.provNm = this.getInfo.provNm  //省份
      this.ruleForm.cityCd = this.getInfo.cityCd  //市编码
      this.ruleForm.cityNm = this.getInfo.cityNm  //市
      this.ruleForm.distCd = this.getInfo.distCd  //区编码
      this.ruleForm.distNm = this.getInfo.distNm  //区
      this.ruleForm.addrDtl = this.getInfo.addrDtl  //详细地址
    }else {
      this.getInfo = JSON.parse(this.until.loGet('userInfo'))
      this.ruleForm.sysUserPk = this.getInfo.sysUserPk  //用户主键
      this.ruleForm.sysUserNm = this.getInfo.nkNm  //登录名
    }
  },
  methods: {
    getAddr:function(val){
      let cd = JSON.parse(val)
      // console.log(cd)
      this.ruleForm.provCd = cd.cd1
      this.ruleForm.cityCd = cd.cd2
      this.ruleForm.distCd = cd.cd3
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          // console.log(this.ruleForm)
          this.until.postData('/sys/addr/edit',JSON.stringify(this.ruleForm))
            .then(res=>{
              this.loading = false
              if(res.status='200'){
                this.$message({
                  message:'提交成功！',
                  type:'success'
                });
                setTimeout(()=>{
                  this.$router.back(-1);
                },1500)
              }else {
                this.$message({
                  message:res.message,
                  type:'warning'
                });
              }
            })
        } else {
          console.log("error submit");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      history.go(-1);
    },
    toAddressList() {
      this.$router.back(-1);
    }
  }
};
</script>

<style lang='less' >
.add-addr {
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

  //  编辑收货地址表单
  .editAddress {
    width: 440px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 80px;
    text-align: left;

    .el-form-item {
      margin-bottom: 25px;

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

      //详细地址框样式
      .el-textarea {
        height: 80px;
      }

      .el-textarea__inner {
        border-radius: 0;
        border: 2px solid #eaeaea;
        height: 80px;
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
  }
}
</style>
