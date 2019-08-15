<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="content-concept">

        <div class="content">
          <el-form label-width="180px" ref="info" :model="info" :rules="rules">
            <trade-title :title="title"></trade-title>
            <el-form-item label="Report Title：" prop="nm">
              <el-input v-model="info.nm"></el-input>
            </el-form-item>

            <!--<el-form-item label="序列号：">-->
            <!--<el-input v-model="form.serialNo"></el-input>-->
            <!--</el-form-item>-->
            <el-form-item label="Testing agency：" prop="deteOrg">
              <el-input v-model="info.deteOrg"></el-input>
            </el-form-item>
            <el-form-item label="Supplier：" prop="supply">
              <el-input v-model="info.supply"></el-input>
            </el-form-item>
            <el-form-item label="Product：" prop="prodNm">
              <el-input v-model="info.prodNm"></el-input>
            </el-form-item>
            <el-form-item label="District：">
              <addr
                @setAddr="getAddr"
                :provCd="info.prodProvCd"
                :city="info.prodCityCd"
                :distCd="0"
              ></addr>
            </el-form-item>
            <el-form-item label="Report Type:" prop="statCd">
              <el-radio-group v-model="info.statCd">
                <el-radio :label="item.cd" v-for="item in statList" :key="item.cd">{{item.nm}}</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Testing items：" prop="rmks">
              <el-input type="textarea" v-model="info.rmks"></el-input>
            </el-form-item>

        <div class="upload-demo">

          <div class="catCdSelect">
            Report category：
            <el-select v-model="catCd" placeholder="Report Type">
              <el-option
                v-for="(item,index) in catCdList"
                :key="item.cd"
                :label="item.nm"
                :value="item.cd">
              </el-option>
            </el-select>
          </div>
          <div class="upload">
            <img :src="uploadlog" alt>
            <input ref="upload" type="file" name="file" value="Upload Report" id @change="upImg($event)">
            <span>Upload Report</span>
          </div>
          <div class="el-upload__text">Each successfully uploaded document will be rewarded with gold coins </div>
          <div>Note: you can upload report(PDF) up to 10MB</div>
        </div>
        <div class="imgList">
          <div class="i-item" v-if="imgUrl.length>0" v-for="(up,i) in imgUrl">
            <div class="catCdSelect">
              Report category：
              <el-select v-model="up.catCd" placeholder="Report Type">
                <el-option
                  v-for="item in catCdList"
                  :key="item.cd"
                  :label="item.nm"
                  :value="item.cd">
                </el-option>
              </el-select>
            </div>
            <svg class="icon" aria-hidden="true" @click="deletImg(i)">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
            <iframe :src="up.url" height="560" v-if="up.type.toLowerCase()=='pdf'" width="100%">  </iframe>
            <img :src="up.url" v-else />
          </div>
        </div>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('info')">Confirm</el-button>
              <el-button @click="cancel('info')">Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "@/componentsEn/tradeHeader";
import tradeFooter from "@/componentsEn/tradeFooter";
import tradeTitle from "@/componentsEn/tradeTitle";
import addr from "@/componentsEn/addr";
import uploadlog from "./images/上传.png";
import pdf from "@/components/images/pdf.png";
export default {
  data() {
    return {
      catCd:'',//上传时所选的分类
      loading: false, //加载中
      title: "Complete Information",
      uploadlog,
      sysUserPk: "",
      imgUrl: [],
      pdf,
      showSearch: false,
      info: {
        mxRepoPk: "",
        statCd: "",
        sysUserPk: "",
        nm: "",
        imgUrl: "",
        no: "",
        deteOrg: "",
        pdfUrl: "",
        supply: "",
        prodNm: "",
        prodProvCd: "",
        prodCityCd: "",
        rmks: "",
        catCd: ""
      },
      statList: [],
      catCdList: [],
      rules: {
        nm: [{ required: true, message: "Please enter the title of the report.", trigger: "blur" }],
        // catCd: [
        //   { required: true, message: "请选择报告分类", trigger: "change" }
        // ],
        deteOrg: [
          { required: true, message: "Please enter the testing mechanism.", trigger: "blur" }
        ],
        supply: [{ required: true, message: "Please enter supplier", trigger: "blur" }],
        prodNm: [
          { required: true, message: "Please enter the name of the quality inspection product.", trigger: "blur" }
        ],
        statCd: [
          { required: true, message: "Please choose the nature of the report.", trigger: "change" }
        ],
        rmks: [{ required: true, message: "Please fill in the test items", trigger: "blur" }]
      }
    };
  },
  created() {
    if (this.until.getQueryString("info")) {
      let myInfo = JSON.parse(this.until.getQueryString("info"));
      // console.log(myInfo)
      this.info.mxRepoPk = myInfo.mxRepoPk;
      this.imgUrl = myInfo.pdfUrl ? JSON.parse(myInfo.pdfUrl) : "";
      this.info.statCd = myInfo.statCd;
      this.info.nm = myInfo.nm;
      // this.info.catCd = myInfo.catCd;
      this.info.no = myInfo.no;
      this.info.deteOrg = myInfo.deteOrg;
      this.info.pdfUrl = myInfo.pdfUrl;
      this.info.supply = myInfo.supply;
      this.info.prodNm = myInfo.prodNm;
      this.info.prodProvCd = myInfo.prodProvCd;
      this.info.prodCityCd = myInfo.prodCityCd;
      this.info.intro = myInfo.intro;
      this.info.rmks = myInfo.rmks;
    }
  },
  mounted() {
    this.info.sysUserPk = JSON.parse(this.until.loGet("userInfo")).sysUserPk;
    this.getStatCd();
    this.getCatCd();

  },
  methods: {
    getAddr: function(val) {
      let cd = JSON.parse(val);
      this.info.prodProvCd = cd.cd1;
      this.info.prodCityCd = cd.cd2;
    },
    //获取状态
    getStatCd() {
      this.until.get("/general/cat/listByPrntCd?prntCd=60000").then(res => {
        this.statList = res.data.items;
      });
    },
    //获取分类
    getCatCd() {
      this.until.get("/general/cat/listByPrntCd?prntCd=60005").then(res => {
        this.catCdList = res.data.items;
        if(this.imgUrl.length>0){
          this.imgUrl.forEach(item=>{
            console.log(item.catCd)
            for( let val of this.catCdList){
              if(item.catCd==val.nm){
                item.catCd = val.cd
              }
            }
          })
        }
      });
    },
    cancel(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.imgUrl.length == 0) {
            this.$message({
              message: "ou haven't uploaded the file yet!",
              type: "warning"
            });
            return;
          }
          this.loading = true;
          this.info.pdfUrl = JSON.stringify(this.imgUrl);
          this.until
            .postData("/prod/mxrepo/edit", JSON.stringify(this.info))
            .then(res => {
              this.loading = false;
              if ((res.status = "200")) {
                this.$message({
                  message: "Upload success!",
                  type: "success"
                });
                setTimeout(() => {
                  window.location.href = '../en/buyersQualitymanage.html'
                  window.history.go(-1);
                }, 1500);
              } else {
                this.$message({
                  message: res.message,
                  type: "warning"
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deletImg(index) {
      this.imgUrl.splice(index, 1);
    },
    upImg(e) {
      console.log(this.catCd)
      if(this.catCd==''){
        this.$message({
          message: 'Please select report categories',
          type: "warning"
        });
        this.$refs.upload.value = ''
        return false
      }
      let blob = e.target.files[0];
      // console.log(blob)
      this.loading = true;

      this.until.upImg(e).then(
        res => {
          this.loading = false;
          var str = res;
          // this.name = blob.name
          // var str1 = str.replace('http://127.0.0.1', this.hostUrl);
          let newImg={
            name: blob.name.split(".")[0],
            url: str,
            type: blob.name.split(".")[1],
            catCd:this.catCd
          }
          console.log(newImg)
          this.catCd = ''
          console.log(this.imgUrl)
          console.log(newImg.catCd)
          let myIndex = this.imgUrl.findIndex(item=>{
            return item.catCd===newImg.catCd
          })
          console.log(myIndex)
          if(myIndex!='-1'){
            this.imgUrl.splice(myIndex,0,newImg)
          }else {
            this.imgUrl.push(newImg)
          }
        },
        err => {
          this.loading = false;
          this.$message({
            message: err,
            type: "warning"
          });
        }
      );
    }
  },
  components: {
    tradeHeader,
    tradeFooter,
    tradeTitle,
    addr
  }
};
</script>

<style lang='less' scoped>
html,
body {
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .header {
      margin: 0 auto;
    }
    .content {
      // margin-bottom: 130px;
      .imgList {
        width: 100%;
        padding-top: 15px;
        .i-item {
          width: 100%;
          text-align: center;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid #f4f4f4;
          align-items: center;
          /*justify-content: center;*/
          position: relative;
          .catCdSelect{
            margin-bottom: 40px;
            text-align: left;
          }
          img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
          }
          svg {
            cursor: pointer;
            position: absolute;
            width: 30px;
            height: 30px;
            top: -10px;
            right: -10px;
            color: #f00;
          }
        }
      }
      .upload-demo {
        /*width: 1200px;*/
        width: 100%;
        max-width: 1200px;
        min-width: 1000px;
        padding: 30px 0;
        margin: 35px auto;
        border: 1px solid #d9d9d9;
        /*border-radius: 5px;*/
        text-align: center;
        .catCdSelect{
          display: flex;
          display: -webkit-flex;
          height: 50px;
          align-items: center;
          float: left;
          margin-left: 180px;
          margin-right: 100px;
          /deep/ .el-select{
            width: 326px;
          }
        }

        .upload {
          float: left;
          position: relative;
          /*margin: 0 auto;*/
          border-radius: 3px;
          height: 50px;
          background-color: #2a8af2;
          width: 240px;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          img{
            width: 20px;
          }
          > span {
            margin-left: 20px;
            font-size: 18px;
            color: #fff;
          }
          /*&:nth-last-of-type(1){*/
          /*font-size: 16px;*/
          /*color: #b0b0b0;*/
          /*}*/
        }
        .el-upload__text {
          padding-top: 40px;
          clear: both;
          font-size: 18px;
          color: #000;
          margin-bottom: 30px;
        }
        input {
          cursor: pointer;
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          /*display: none;*/
        }
      }
      .el-form {
        width: 1200px;
        margin: 0 auto;
        .el-form-item {
          width: 600px;
          margin: 0 auto;
          margin-bottom: 22px;
          &:nth-last-of-type(1) {
            textarea {
              height: 80px;
            }
          }
          /*> label {*/
          /*text-align: left;*/
          /*width: 15%;*/
          /*}*/
          /*> div {*/
          /*width: 80%;*/
          /*}*/
        }
      }
    }
  }
}
</style>
