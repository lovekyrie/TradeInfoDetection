<style lang="less">
html,
body {
  height: 100%;
  background-color: #f6f6f6;
}

.header {
  background-color: #fff;
  padding: 0.45rem 0.3rem 0.3rem;
  margin-bottom: 0.2rem;
  .upload-file {
    border: 1px solid #e6e6e6;
    > div {
      width: 2.5rem;
      margin: 0.6rem auto 0.2rem;
      height: 1rem;
      background-color: #2a8af2;
      border-radius: 5px;
      text-align: center;
      line-height: 1rem;
      color: #fff;
      font-size: 16px;
      > input {
        display: none;
      }
    }
    > p {
      font-size: 14px;
      color: #101010;
      text-align: center;
      margin: 0.25rem 0;
      &:nth-of-type(2) {
        font-size: 12px;
        color: #777;
      }
    }
  }
}

.content {
  background-color: #fff;
  padding: 0.25rem 0.3rem;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  h3 {
    margin-bottom: 0.2rem;
    font-size: 16px;
    font-weight: 400;
  }
  .opt-one {
    margin-bottom: 0.2rem;
    width: 100%;
    position: relative;
    font-size: 14px;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    &:nth-last-of-type(1){
      border: 1px solid #7EB8F7;
      border-radius: 5px;
      background-color: #2A8AF2;
    }
    .el-select {
      float: right;
      margin-right: -20px;
      margin-top: -8px;
    }
    span {
      width: 30%;
      display: inline-block;
      position: relative;
      i {
        position: absolute;
        left: -0.25rem;
        visibility: hidden;
      }
    }
    input {
      width: 70%;
      padding: 0.2rem 0;
      flex: 1;
      border: 1px solid #e4e4e4;
      text-indent: 0.2rem;
      vertical-align: middle;
    }
    .c-textarea {
      flex: 1;
      background-color: #fff;
      padding: 0 0.35rem;
      border: 1px solid #d9d9d9;
      margin-bottom: 0.2rem;
      textarea {
        font-size: 12px;
        color: #999;
      }
      .textarea-counter {
        font-size: 12px;
      }
    }
    button{
      padding: .2rem 0;
      font-size: 16px;
      background-color: #2A8AF2;
      color: #fff;
    }
  }
}

.opt-radio {
  input {
    flex: 2;
  }
}
</style>

<template>
    <div id="container">
      <div class="header">
        <div class="upload-file">
          <div @click="triggerUpload">
            <span>上传报告</span>
            <input ref="upload" type="file" name="file" id="">
          </div>
          <p>每成功上传一份文档，可获取金币奖励</p>
          <p>注意事项：您可以上传≤10MB的PDF报告。</p>
        </div>
      </div>
        <div class="content">
            <h3>完善信息</h3>          
             <div class="opt-input opt-one border-c">
                <span><i>*</i>报告标题:</span>
                <input type="text"  class="c-ip">
            </div>
            <div class="opt-input opt-one">
                <span><i>*</i>序列号:</span>
                <input type="text"  class="c-ip">
            </div>
            <div class="opt-input opt-one">
                <span><i>*</i>检测机构:</span>
                <input type="text"  class="c-ip">
            </div>
            <div class="opt-input opt-one">
                <span>供应商名称:</span>
                <input type="text"  class="c-ip">
            </div>
            <div class="opt-input opt-one">
                <span><i>*</i>质检产品名称:</span>
                <input type="text"  class="c-ip">
            </div>
            <div class="opt-input opt-one">
                <span><i>*</i>质检产品地域:</span>
                <input type="text"  class="c-ip">
            </div>
            <div class="opt-radio opt-one">
                <span><i>*</i>报告性质:</span>
                <input type="radio" v-model="natrue" value="公开">
                <span>公开</span>
                <input type="radio" v-model="natrue" value="私密">
                <span>私密</span>
            </div>
            <div class="opt-one">
                <span><i>*</i>报告简介:</span>
                <div class="c-textarea">
                    <yd-textarea slot="right" maxlength="200"></yd-textarea>
                </div>
            </div>
           
            <div class="opt-one">
                <button>确认上传</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import tempApp from "components/tempApp";

export default {
  data() {
    return {
      obj: {
        src: "./orderQueryDetail.html?"
      },
      natrue: "私密"
    };
  },
  mounted() {
    var self = this;
  },
  methods: {
    triggerUpload() {
      this.$refs.upload.click();
    }
  },
  components: {
    tempApp
  }
};
</script>

