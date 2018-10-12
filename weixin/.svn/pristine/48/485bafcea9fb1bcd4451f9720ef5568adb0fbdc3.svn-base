<template>
  <div id="app">
    <div class="header">
      <div>
        <span>{{detectionName}}</span>
      </div>
      <div>
        <span>发布日期：{{releaseDate}}</span>
      </div>
    </div>
    <div class="content">
      <div class="detection-info">
        <div><span></span><span>产品描述</span></div>
        <div>
          <p>{{serviceContent}}</p>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="organization">
        <div><span></span><span>联系方式</span></div>
        <div><span>联系人：{{linkedMan}}</span></div>
        <div><span>联系电话：{{linkedPhone}}</span></div>
        <div><span>联系邮箱：{{linkedEmail}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      detectionName: "【转租】高价租最新服装衬衫全效检测设备一台",
      releaseDate:'2018-06-01',
      serviceContent: `最新水质检测设备，九成新，可检测水的PH值，水的酸碱度。最新水质检测设备，九成新，可检测水的PH值，水的酸碱度。
      最新水质检测设备，九成新，可检测水的PH值，水的酸碱度。最新水质检测设备，
      九成新，可检测水的PH值，水的酸碱度。最新水质检测设备，九成新，可检测水的PH值，
      水的酸碱度。`,
      linkedMan: "张三",
      linkedPhone: "13599990000",
      linkedEmail: "83906@163.com"
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
    .header {
      margin-bottom: 0.2rem;
      padding: .3rem;
      background-color: #fff;    
      >div:nth-of-type(1){
        margin-bottom: .2rem;
        font-size: 16px;
      }
      >div:nth-of-type(2){
        color: #999;
      }
    }
    .content {
      margin-bottom: 0.2rem;
      background-color: #fff;
     
      .detection-info {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 100%;
          &:nth-of-type(1) {
            color: #939393;
            font-size: 16px;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
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
            margin-top: 0.2rem;
            color: #a1a1a1;
          }
        }
      }
    }
    .introduce {
      background-color: #fff;
      .organization {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          margin-top: 0.2rem;
          width: 100%;
          color: #a3a3a3;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          &:nth-of-type(1) {
            margin-top: 0;
            color: #939393;
            font-size: 16px;
            align-items: center;
            > span:nth-of-type(1) {
              width: 2%;
              height: 0.3rem;
              background-color: #54a6ff;
            }
            > span:nth-of-type(2) {
              width: 95%;
            }
          }
        }
      }
    }
  }
}
</style>
