<template>
  <div id="app">
      <trade-header></trade-header>
      <div class="content">
        <div class="job-info">
          <div>
            <span>
            {{jobInfo.jobname}}
            </span>
          </div>
          <div>
            <span>{{jobInfo.name}}</span>
            <span>{{jobInfo.linkedPhone}}</span>
          </div>
          <div><span>{{jobInfo.email}}</span></div>
        </div>
        <div class="personal">
          <div>
            <span></span><span>个人简介</span>
          </div>
          <div v-for="(item, index) in introduceArr" :key="index">
            <span>{{item}}</span>
          </div>
        </div>
        <div class="skills">
          <div>
            <span></span><span>技能特长</span>
          </div>
          <div id="certificate"><span>资历证书：</span></div>
          <div v-for="(item, index) in certificateArr" :key="index"><span>{{item}}</span></div>
          <div id="train"><span>培训经历：</span></div>
          <div v-for="(item, index) in trainArr" :key="index">
            <span>{{item}}</span>
          </div>
        </div>
      </div>
      <trade-footer></trade-footer>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";

export default {
  data() {
    return {
      jobInfo: {
        jobname: "无机分析工程师工作",
        name: "张三",
        linkedPhone: "13599990000",
        email: "239243349@qq.com",
      },
       introduceArr:[
          '1、操作ICP，GC-MS等分析仪器；','2、英语CET4及以上；',
          '3、能熟练的操作办公软件',
        ],
        certificateArr:[
          '2018年获得特级无机分析工程师证书',
          '2016年获得无机分析工程师证书'
        ],
        trainArr:[
          '2015年于宁波检测机构培训并获得结业证书'
        ]
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
      margin: 150px auto 130px;
      > div {
        margin: 40px 0;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .job-info {
        > div {
          width: 100%;
          &:nth-of-type(1) {
            font-size: 20px;
          }
          &:nth-of-type(2) {
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            span {
              width: 50%;
              &:nth-of-type(2) {
                text-align: right;
              }
            }
          }
          &:not(:nth-of-type(1)) {
            font-size: 16px;
          }
          &:not(:nth-last-of-type(1)) {
            margin-bottom: 25px;
          }
        }
      }
      .personal,
      .skills{
        >div{
          width: 100%;
          &:nth-of-type(1){
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            span{
              &:nth-of-type(1){
                width: 10px;
                height: 25px;
                background-color: #0d55d2;
              }
              &:nth-of-type(2){
                width: 98%;
                font-size: 20px;
                font-weight: 700;
              }
            }
          }
          &:not(:nth-of-type(1)){
            font-size: 16px;
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: 25px;
          }
        }
      }
      .skills{
        #certificate,
        #train{
          font-size: 18px;
        }
      }
    }
  }
}
</style>
