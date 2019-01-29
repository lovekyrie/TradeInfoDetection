<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="content-concept">
        <div class="upload-demo">
          <div class="imgList">
            <div class="i-item" v-if="imgUrl.length>0" v-for="(up,i) in imgUrl">
              <svg class="icon" aria-hidden="true" @click="deletImg(i)">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
              <img :src="pdf" v-if="up.type.toLowerCase()=='pdf'">
              <img :src="up.url" v-else>
            </div>
          </div>
          <div class="upload">
            <img :src="uploadlog" alt>
            <input ref="upload" type="file" name="file" value="上传报告" id @change="upImg($event)">
            <span>上传报告</span>
          </div>
          <div class="el-upload__text">每成功上传一份文档，可获取金币奖励</div>
          <div>注意事项：您可以上传≤10MB的PDF报告。</div>
        </div>
        <div class="content">
          <el-form label-width="180px" ref="info" :model="info" :rules="rules">
            <trade-title :title="title"></trade-title>
            <el-form-item label="报告标题：" prop="nm">
              <el-input v-model="info.nm"></el-input>
            </el-form-item>
            <el-form-item label="报告分类：" prop="catCd">
              <el-select v-model="info.catCd" placeholder="请选择报告分类">
                <el-option
                  :label="item.nm"
                  :value="item.cd"
                  v-for="item in catCdList"
                  :key="item.cd"
                ></el-option>
              </el-select>
            </el-form-item>
            <!--<el-form-item label="序列号：">-->
            <!--<el-input v-model="form.serialNo"></el-input>-->
            <!--</el-form-item>-->
            <el-form-item label="检测机构：" prop="deteOrg">
              <el-input v-model="info.deteOrg"></el-input>
            </el-form-item>
            <el-form-item label="供应商名称：" prop="supply">
              <el-input v-model="info.supply"></el-input>
            </el-form-item>
            <el-form-item label="质检产品名称：" prop="prodNm">
              <el-input v-model="info.prodNm"></el-input>
            </el-form-item>
            <el-form-item label="质检产品地域：">
              <addr
                @setAddr="getAddr"
                :provCd="info.prodProvCd"
                :city="info.prodCityCd"
                :distCd="0"
              ></addr>
            </el-form-item>
            <el-form-item label="报告性质：" prop="statCd">
              <el-radio-group v-model="info.statCd">
                <el-radio :label="item.cd" v-for="item in statList" :key="item.cd">{{item.nm}}</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="检测项目：" prop="rmks">
              <el-input type="textarea" v-model="info.rmks"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('info')">确认上传</el-button>
              <el-button @click="cancel('info')">取消</el-button>
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
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import tradeTitle from "components/tradeTitle";
import addr from "components/addr";
import uploadlog from "./images/上传.png";
import pdf from "components/images/pdf.png";
export default {
  data() {
    return {
      loading: false, //加载中
      title: "完善信息",
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
        nm: [{ required: true, message: "请输入报告标题", trigger: "blur" }],
        catCd: [
          { required: true, message: "请选择报告分类", trigger: "change" }
        ],
        deteOrg: [
          { required: true, message: "请输入检测机构", trigger: "blur" }
        ],
        supply: [{ required: true, message: "请输入供应商", trigger: "blur" }],
        prodNm: [
          { required: true, message: "请输入质检产品名称", trigger: "blur" }
        ],
        statCd: [
          { required: true, message: "请选择报告性质", trigger: "change" }
        ],
        rmks: [{ required: true, message: "请填写检测项目", trigger: "blur" }]
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
      this.info.catCd = myInfo.catCd;
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
              message: "您还没有上传文件！",
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
                  message: "上传成功！",
                  type: "success"
                });
                setTimeout(() => {
                  // window.location.href = '../buyers/qualitymanage.html'
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
      let blob = e.target.files[0];
      // console.log(blob)
      this.loading = true;

      this.until.upImg(e).then(
        res => {
          this.loading = false;
          var str = res;
          // this.name = blob.name
          // var str1 = str.replace('http://127.0.0.1', this.hostUrl);
          this.imgUrl.push({
            name: blob.name.split(".")[0],
            url: str,
            type: blob.name.split(".")[1]
          });
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
      .upload-demo {
        /*width: 1200px;*/
        width: 100%;
        max-width: 1200px;
        min-width: 1000px;
        padding: 30px 0;
        margin: 0 auto;
        margin-top: 35px;
        border: 1px dashed #d9d9d9;
        border-radius: 5px;
        text-align: center;
        .imgList {
          margin-bottom: 30px;
          overflow: hidden;
          width: 100%;
          padding-top: 15px;
          .i-item {
            float: left;
            margin-bottom: 5px;
            margin-left: 5px;
            width: 150px;
            height: 150px;
            border: 1px solid #f4f4f4;
            border-radius: 3px;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            img {
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
            }
            svg {
              cursor: pointer;
              position: absolute;
              width: 15px;
              height: 15px;
              top: -5px;
              right: -5px;
              color: #f00;
            }
          }
        }
        .upload {
          float: none !important;
          position: relative;
          margin: 0 auto;
          margin-bottom: 40px;
          padding: 30px 0;
          background-color: #2a8af2;
          width: 330px;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          > span {
            margin-left: 20px;
            font-size: 22px;
            color: #fff;
          }
          /*&:nth-last-of-type(1){*/
          /*font-size: 16px;*/
          /*color: #b0b0b0;*/
          /*}*/
        }
        .el-upload__text {
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
        width: 600px;
        margin: 0 auto;
        .el-form-item {
          /*display: -webkit-flex;*/
          /*display: flex;*/
          /*flex-direction: row;*/
          /*flex-wrap: nowrap;*/
          /*justify-content: space-between;*/
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
