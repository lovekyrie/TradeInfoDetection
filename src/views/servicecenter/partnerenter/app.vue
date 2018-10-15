<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <div class="content">
      <div>
        <span>企业名称：</span>
        <div>
          <input type="text">
        </div>
      </div>
       <div>
        <span>法人姓名：</span>
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
        <span>联系人：</span>
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
        <span>联系地址：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="file-type">
        <span>营业执照：</span>
        <div>
          <input type="file">
        </div>
      </div>
       <div class="file-type">
        <span>CMA资质证书：</span>
        <div>
          <input type="file">
        </div>
      </div>
       <div class="file-type">
        <span>CNAS资质证书：</span>
        <div>
          <input type="file">
        </div>
      </div>
      <div class="file-type">
        <span>其他资质证书：</span>
        <div>
          <input type="file">
        </div>
      </div>
      <div>
        <span>公司简介：</span>
        <div>
          <textarea name="" id="" ></textarea>
        </div>
      </div>
      <div>
        <div>
          <button>
            提交申请
          </button>
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
      currentTime: "",
      validTime: "",
      title: "合作伙伴入驻"
    };
  },
  mounted() {
    let time = this.until.formatDate();
    let month = time.month;
    let year = time.year;

    if (month <= 6) {
      month += 6;
    } else {
      year++;
      month = month - 6;
    }

    month = month + 1 < 10 ? "0" + month : month;
    this.currentTime = time.year + "-" + time.month + "-" + time.day;
    this.validTime = year + "-" + month + "-" + time.day;
  },
  methods: {},
  components: {
    headerTitle
  }
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .content {
      padding: 0.3rem;
      background-color: #fff;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        position: relative;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
          padding: 0.2rem 0 0.2rem 0.3rem;
          border: 1px solid #dadada;
          > input,
          select,
          textarea {
            border: 0;
            width: 100%;
            height: 100%;
          }
          textarea {
            height: 2rem;
          }
        }
        &:nth-last-of-type(2) {
          > span {
            margin-top: -1.2rem;
          }
        }
        &:nth-last-of-type(1){
          >div{
            width: 100%;
            background-color: #2A8AF2;
            text-align: center;
            border-radius: 5px;
            >button{
              font-size: 16px;
              color: #fff;
              background-color: #2A8AF2;
            }
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
        }
      }
      > .file-type {
        > span {
          width: 35%;
        }
        > div {
          padding: 0;
          margin-right: 20%;
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
