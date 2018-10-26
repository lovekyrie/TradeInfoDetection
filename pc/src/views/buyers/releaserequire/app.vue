<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <el-form>
        <trade-title :title="title"></trade-title>
         <el-form-item label="需求类型：">
            <el-select v-model="form.requireStyle" placeholder="检测需求">
              <el-option label="检测需求" value="shanghai"></el-option>
              <el-option label="检测需求" value="beijing"></el-option>
            </el-select>
          </el-form-item>
            <el-form-item label="需求名称：">
              <el-input v-model="form.name" placeholder="需求名称"></el-input>
            </el-form-item>
            <el-form-item label="发布日期：">
              <el-input v-model="form.datetime" placeholder="2018-06-0"></el-input>
            </el-form-item>
            <el-form-item label="有效日期：">
              <el-select v-model="form.validTime" placeholder="2018-06-06">
                <el-option label="2018-06-06" value="shanghai"></el-option>
              </el-select>
            </el-form-item>
             <el-form-item label="需求描述：">
              <el-input type="textarea" v-model="form.desc" placeholder="多行输入"></el-input>
            </el-form-item>
            <el-form-item label="联系人：">
              <el-input v-model="form.linkedMan" placeholder="请输入联系人姓名"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：">
              <el-input v-model="form.linkedPhone" placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item label="邮箱地址：">
              <el-input v-model="form.email" placeholder="请输入联系邮箱"></el-input>
            </el-form-item>
            <el-form-item label="联系方式：">
              <el-input v-model="form.linkedStyle" placeholder="请输入其他联系方式"></el-input>
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
      title: "发布需求",
      form: {
        requireStyle: "",
        name: "",
        datetime: "",
        validTime: "",
        desc: "",
        linkedMan: "",
        linkedPhone: "",
        email: "",
        linkedSytle: ""
      }
    };
  },
  methods: {
    onSubmit() {}
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
  height: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      margin-bottom: 130px;
      .el-form {
        width: 800px;
        margin: 0 auto;
        .el-form-item {
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
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
          textarea {
            height: 80px;
          }
          .el-select {
            width: 100%;
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
