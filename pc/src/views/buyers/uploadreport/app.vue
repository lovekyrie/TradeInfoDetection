<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="content-concept">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <div >
            <img :src="uploadlog" alt="">
            <span>上传报告</span>
          </div>
          <div class="el-upload__text">每成功上传一份文档，可获取金币奖励</div>
          <div>注意事项：您可以上传≤10MB的PDF报告。</div>
        </el-upload>
        <div class="content">
          <el-form>
            <trade-title :title="title"></trade-title>
            <el-form-item label="报告标题：">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="序列号：">
              <el-input v-model="form.serialNo"></el-input>
            </el-form-item>
            <el-form-item label="检测机构：">
              <el-input v-model="form.detectionOrg"></el-input>
            </el-form-item>
            <el-form-item label="供应商名称：">
              <el-input v-model="form.vendor"></el-input>
            </el-form-item>
            <el-form-item label="质量产品名称：">
              <el-input v-model="form.productName"></el-input>
            </el-form-item>
            <el-form-item label="质量产品地域：">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="报告性质：">
              <el-radio-group v-model="form.reportNature">
                <el-radio label="公开"></el-radio>
                <el-radio label="私密"></el-radio>
              </el-radio-group>
            </el-form-item>
             <el-form-item label="报告简介：">
              <el-input type="textarea" v-model="form.desc"></el-input>
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
import tradeTitle from 'components/tradeTitle';
import uploadlog from "./images/上传.png";

export default {
  data() {
    return {
      title:'完善信息',
      uploadlog,
      showSearch: false,
      form: {
        title: "",
        serialNo: "",
        detectionOrg: "",
        vendor: "",
        productName: "",
        address: "",
        reportNature: "",
        desc: ""
      }
    };
  },
  methods: {
    triggerUpload() {
      this.$refs.upload.click();
    }
  },
  components: {
    tradeHeader,
    tradeFooter,
    tradeTitle,
  }
};
</script>

<style lang='less'>
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
        margin-top: 135px;
        .el-upload {
          margin-left: 50%;
          transform: translateX(-50%);
          .el-upload-dragger {
            width: 1200px;
            height: 310px;
            margin: 0 auto;
            > div {
              &:nth-of-type(1) {
                margin: 60px auto 40px;
                padding:30px 0;
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
              }
              &:nth-last-of-type(1){
                font-size: 16px;
                color: #b0b0b0;
              }
            }
            .el-upload__text{
              font-size: 18px;
              color: #000;
              margin-bottom: 30px;
            }
          }
          input {
            display: none;
          }
        }
      }
      .el-form {
        width: 800px;
        margin: 0 auto;
        .el-form-item {
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          &:nth-last-of-type(1) {
            textarea {
              height: 80px;
            }
          }
          > label {
            text-align: left;
            width: 15%;
          }
          > div {
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
