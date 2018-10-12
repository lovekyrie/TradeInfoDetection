<template>
  <div id="app">
    <div class="header">
      <div>
      <img :src="productInfo" alt="">
      </div>
       <div class="detection-name">
       <div>
         <span>{{detectionName}}</span><span>{{equipmentState}}</span>
       </div>
       <div>
         <span>价格：
           <i>{{price}}</i>
         </span>
         <span>发布日期：{{releaseDate}}</span>
       </div>
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
import productInfo from "./images/productinfo.png";

export default {
  data() {
    return {
      productInfo,
      detectionName: "【转卖】转卖水质检测设备",
      equipmentState:'设备出售',
      price:'¥5000.00',
      releaseDate:'2018-06-01',
      serviceContent: `最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、
      乙烯等有害物质，严格按照国家标准。最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、
      乙烯等有害物质，严格按照国家标准。最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、
      乙烯等有害物质，严格按照国家标准。`,
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
      img {
        vertical-align: middle;
      }
      .detection-name {
        padding: 0.2rem 0.4rem;
        font-size: 16px;
        border-bottom: 1px solid #e8e8e8;
       background-color: #fff;
       >div{
         display: -webkit-flex;
         display: flex;
         flex-direction: row;
         flex-wrap: nowrap;
         justify-content: space-between;
         &:nth-of-type(1){
           margin-bottom: .2rem;
           >span:nth-of-type(1){
             font-size: 16px;
             width: 80%;
           }
           >span:nth-of-type(2){
             color: #999;
             width: 20%;
           }
         }
         &:nth-of-type(2){
           >span:nth-of-type(1){
             color: #999;
             width:40%;
             >i{
               font-style: normal;
               color:#f00;
             }
           }
           >span:nth-of-type(2){
             color: #999;
             width:60%;
             text-align: right;
           }
         }
       }
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
