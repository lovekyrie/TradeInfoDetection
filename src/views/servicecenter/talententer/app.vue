<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <div class="content">
      <div>
        <span>真实姓名：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div>
        <span>联系电话：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div>
        <span>职称：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div>
        <span>QQ：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div>
        <span>微信：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div>
        <span>技能特长：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="file-type">
        <span>资历证书：</span>
        <div>
          <input type="file">
        </div>
      </div>
      <div class="file-type">
        <span>培训经历：</span>
        <div>
          <input type="file">
        </div>
      </div>
      <div>
        <span>个人简介：</span>
        <div>
          <textarea></textarea>
        </div>
      </div>
      <div>
        <div>
          <button>提交申请</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerTitle from "components/headerTitle";

export default {
  data() {
    return {
      title: "人才入驻"
    };
  },
  methods: {},
  components: {
    headerTitle
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .content {
      padding: 0.3rem 0.4rem;
      background-color: #fff;
      > div {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        &:nth-last-of-type(2) {
          > span {
            margin-top: -1.2rem;
          }
          > div {
            textarea {
              padding: 0.2rem 0;
              border: 0;
              width: 100%;
              height: 2rem;
            }
          }
        }
        &:nth-last-of-type(1) {
          margin-top: 0.6rem;
          margin-bottom: 0.3rem;
          > div {
            width: 100%;
            padding: 0.2rem 0;
            background-color: #2a8af2;
            text-align: center;
            > button {
              font-size: 16px;
              background-color: #2a8af2;
              color: #fff;
            }
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
        }
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
          border: 1px solid #f4f4f4;
          > input {
            padding: 0.2rem 0;
            border: 0;
            width: 100%;
          }
        }
      }
      > .file-type {
        > span {
          width: 30%;
        }
        > div {
          padding: 0;
          margin-left: 20%;
          width: 2rem;
          height: 2rem;
          border: 1px solid #efefef;
          background: url("./images/up.png") 50% 50% no-repeat;
          background-size: 0.6rem 0.6rem;
          overflow: hidden;
          > input {
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>
