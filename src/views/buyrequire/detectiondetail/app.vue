<template>
  <div id="app">
    <div class="content">
      <div class="report-title">
        <h3>{{title}}</h3>
        <div>发布日期：{{releaseDate}}</div>
      </div>
      <div class="require-des">
        <div>
          <span></span>
          <span>需求描述</span>
        </div>
        <div>
          {{description}}
        </div>
      </div>
      <div class="linked">
        <div>
          <span></span>
          <span>联系方式</span>
        </div>
        <div>
          联系人：{{linkedMan}}
        </div>
        <div>
          联系电话：{{linkedPhone}}
        </div>
        <div>
          邮箱地址：{{email}}
        </div>
        <div>
          联系方式：{{linked}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "服装服饰男装女装类目质检报告",
      releaseDate: "2018-06-26",
      description: "服装服饰男装女装类目质检报告。",
      linkedMan: "张三",
      linkedPhone: "13599990000",
      email: "34723847923@qq.com",
      linked: "13599990000"
    };
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
      background-color: #fff;
      > div {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 1px solid #e3e3e3;
        > div {
          width: 100%;
        }
      }
    }
    .report-title {
      > h3 {
        margin-bottom: 0.2rem;
        font-size: 16px;
        font-weight: 400;
      }
      > div {
        color: #9b9b9b;
      }
    }
    .require-des,
    .linked {
      > div {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          margin-bottom: .2rem;
          > span:nth-of-type(1) {
            width: 2%;
            height: 0.3rem;
            background-color: #54a6ff;
          }
          > span:nth-of-type(2) {
            width: 95%;
          }
        }
        &:nth-of-type(2) {
          font-size: 12px;
          color: #bcbcbc;
        }
      }
    }
    .linked{
      >div{
        &:not(:nth-of-type(1)){
          font-size: 12px;
          color: #bcbcbc;
        }
        &:not(:nth-last-of-type(1)){
          margin-bottom: .2rem;
        }
      }
    }
  }
}
</style>
