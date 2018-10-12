<template>
  <div id="app">
    <div class="header">
      <img :src="productInfo" alt="">
    </div>
    <div class="content">
      <div class="detection-name">
        <span>{{detectionName}}</span>
      </div>
      <div class="detection-info">
        <div><span></span><span>服务内容</span></div>
        <div>
          <p>{{serviceContent}}</p>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="organization">
        <div><span></span><span>检测机构介绍</span></div>
        <div>
          <div><img :src="productLog" alt=""></div>
          <div>
            <div>检测机构名称：</div>
            <div>{{organizationName}}</div>
          </div>
        </div>
        <div>
          <p>{{orgIntroduce}}</p>
        </div>
        <div><span>联系人：{{linkedMan}}</span></div>
        <div><span>联系电话：{{linkedPhone}}</span></div>
        <div><span>联系邮箱：{{linkedEmail}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import productLog from "./images/product-log.png";
import productInfo from "./images/productinfo.png";

export default {
  data() {
    return {
      productLog,
      productInfo,
      detectionName: "儿童家具质量评审儿童家具质检",
      serviceContent: `最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、
      乙烯等有害物质，严格按照国家标准。最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、
      乙烯等有害物质，严格按照国家标准。最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、
      乙烯等有害物质，严格按照国家标准。`,
      organizationName: "宁波华信检测有限公司",
      orgIntroduce: `宁波华信检测有限公司是一家专注检测并有十年以上行业检测经验的公司，
      曾服务过各大制造厂商。宁波华信检测有限公司是一家专注检测并有十年以上行业检测经验的公司，
      曾服务过各大制造厂商。`,
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
      img {
        vertical-align: middle;
      }
    }
    .content {
      margin-bottom: 0.2rem;
      background-color: #fff;
      .detection-name {
        padding: 0.2rem 0.4rem;
        font-size: 16px;
        border-bottom: 1px solid #e8e8e8;
      }
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
          margin-top: .2rem;
          width: 100%;
          color: #A3A3A3;
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
          &:nth-of-type(2){
            >div:nth-of-type(1){
              width: 30%;
            }
            >div:nth-of-type(2){
              width: 70%;
              display: -webkit-flex;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-content: center;
              >div{
                width: 100%;
                &:nth-of-type(2){
                  font-size: 16px;
                  color: #000;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
