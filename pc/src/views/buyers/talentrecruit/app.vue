<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <el-form>
        <trade-title :title="title"></trade-title>
          <el-form-item label="职位名称：">
            <el-input v-model="form.jobName" placeholder="无机分析工程师"></el-input>
          </el-form-item>
          <el-form-item label="薪资：">
            <el-input v-model="form.salaryG" placeholder="4000"></el-input><span>~</span>
            <el-input v-model="form.salaryL" placeholder="5000"></el-input><span>元/月</span>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.phone" placeholder="13599990000"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址：">
            <el-input v-model="form.address" placeholder="2378273829@qq.com"></el-input>
          </el-form-item>
            <el-form-item label="职位描述：">
            <el-input type="textarea" v-model="form.desc" :placeholder="jobdesc"></el-input>
          </el-form-item>
           <el-form-item>
            <div class="btn-wrap">
              <el-button type="primary" @click="onSubmit">确认</el-button>
              <el-button>取消</el-button>
            </div>
            </el-form-item>
      </el-form>
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

export default {
  data() {
    return {
      title: "发布人才需求",
      jobdesc:
        "1、操作过ICP，GC-MS等分析仪器；2、英语CET4及以上；3、能熟练的操作办公软件。",
      form: {
        jobName: "",
        salaryG: "",
        salaryL: "",
        phone: "",
        address: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit(){
      
    }
  },
  components: {
    tradeHeader,
    tradeFooter,
    tradeTitle
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
    .content {
      width: 765px;
      margin: 65px auto 0px;
      .el-form {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .el-form-item {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
           &:nth-last-of-type(1){
            >div{
              margin-left: 20%;
              button{
                width: 150px;
                &:nth-of-type(1){
                  border-color: #0d55d2;
                  background-color: #0d55d2;
                }
              }
            }
          }
          > label {
            width: 15%;
            text-align: left;
          }
          > div {
            width: 80%;
          }
          textarea {
            height: 80px;
          }
        }
        > div {
          &:nth-of-type(3) {
            > div {
              display: -webkit-flex;
              display: flex;
              flex-wrap: nowrap;
              justify-content: flex-start;
              align-items: center;
              > div {
                width: 40%;
              }
              > span {
                width:10%;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
