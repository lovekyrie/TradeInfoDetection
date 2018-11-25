<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="content-title"> 
        <span>{{requireDetail.reportName}}</span>
        <span>{{requireDetail.reportTime}}</span>
      </div>
      <div>
        <div>
          <span></span>
          <span>需求描述</span>
        </div>
        <div>
          <span>{{requireDetail.desc}}</span>
        </div>
      </div>
      <div>
        <div>
          <span></span>
          <span>联系方式</span>
        </div>
        <div><span>联系人：{{requireDetail.linkedMan}}</span></div>
        <div><span>联系电话：{{requireDetail.phone}}</span></div>
        <div><span>邮箱地址：{{requireDetail.email}}</span></div>
        <div><span>联系方式：{{requireDetail.linked}}</span></div>
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

export default {
  data() {
    return {
      requireDetail: {
        reportName: "服装服饰男装女装类目质检报告",
        reportTime: "2018年6月26日",
        desc: "服装服饰男装女装类目质检报告",
        linkedMan: "张收纳",
        phone: "13599990000",
        email: "25235594@qq.com",
        linked: ""
      }
    };
  },
  methods: {},
  components: {
    tradeHeader,
    tradeFooter
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
      width: 1200px;
      margin: 55px auto 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        padding: 35px 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          span{
            &:nth-of-type(1){
              width: 50%;
              font-size: 22px;
            }
            &:nth-of-type(2){
              text-align: right;
              width: 40%;
              font-size: 16px;
              color: #999;
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(3){
          flex-wrap: wrap;
          >div{
            width: 100%;
            &:nth-of-type(1){
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              margin-bottom: 25px;
              >span{
               &:nth-of-type(1){
                 width: 8px;
                 height: 20px;
                 background-color: #0d55d2;
               } 
               &:nth-of-type(2){
                 font-size: 22px;
                 margin-left: 15px;
               }  
              }
            }
            &:nth-of-type(2){
              font-size: 16px;
            }
          }
        }
        &:nth-of-type(3){
          >div{
            &:not(:nth-of-type(1)){
              font-size: 16px;
              margin-bottom: 10px;
            }
          }
        }
        &:not(:nth-last-of-type(1)){
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
}
</style>
