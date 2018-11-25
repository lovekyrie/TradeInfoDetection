<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="content-title"> 
        <span>{{detail.job}}</span>
        <span>{{detail.salary}}</span>
        <span>{{detail.company}}</span>
        <span>联系电话：{{detail.linkedPhone}}</span>
        <span>邮箱地址：{{detail.email}}</span>
      </div>
      <div>
        <div>
          <span></span>
          <span>职位描述</span>
        </div>
        <div><span>1、{{detail.first}}</span></div>
        <div><span>2、{{detail.second}}</span></div>
        <div><span>3、{{detail.third}}</span></div>
        <div><span>4、{{detail.fourth}}</span></div>
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
      detail: {
        job: "实验室经理助理",
        salary: "4000-5000元/月",
        company: "浙江宁波华信质检",
        linkedPhone:'0574-88889999',
        email:'2738237829@qq.com',
        first:'化学专业大学以上学历；',
        second:'操作过ICP，GC-MS等分析仪器；',
        third:'英语CET4及以上',
        fourth:'能熟练的操作办公软件',
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
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
         >span{
           width: 50%;
           margin-bottom: 25px;
           font-size: 16px;
           &:nth-of-type(1),
           &:nth-of-type(2){
             font-size: 22px;
           }
           &:nth-of-type(2n){
             text-align: right;
           }
         }
        }
        &:nth-last-of-type(1){
          flex-wrap: wrap;
          >div{
            width: 100%;
            margin-bottom: 25px;
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
            &:not(:nth-of-type(1)){
              font-size: 16px;
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
