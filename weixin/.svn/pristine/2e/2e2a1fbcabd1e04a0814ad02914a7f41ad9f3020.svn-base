<template>
  <div id="app">
    <div class="header">
      <div><span></span><span>检测服务订单信息</span></div>
      <div class="header-title">
        <span>服务照片</span>
        <span>服务名称</span>
      </div>
      <div>
        <div><img :src="prosmall" alt=""></div>
        <div>
          <span>{{detectionName}}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div><span></span><span>联系方式</span></div>
      <div class="concept">
        <div>
          <span>供应商名称：</span>
          <div><input type="text"></div>
        </div>
        <div>
          <span>质检产品名称：</span>
          <div><input type="text"></div>
        </div>
        <div>
          <span>联系人：</span>
          <div><input type="text"></div>
        </div>
        <div>
          <span>联系电话：</span>
          <div><input type="text"></div>
        </div>
        <div>
          <span>备注：</span>
          <div>
            <textarea></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" @click="submitOrder">
      <foot-button :btnObj="btnObj"></foot-button>
    </div>
    <upload-success v-show="showUpload"></upload-success>
  </div>
</template>

<script>
import footButton from "components/footButton";
import uploadSuccess from "components/uploadSuccess";
import prosmall from "./images/prosmall.png";
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      prosmall,
      detectionName: "CFDA食堂餐厅饭店酒店自制餐饮食品检测",
      btnObj: {
        btnName: "提交订单",
        src: ""
      },
      showUpload:false,
    };
  },
  mounted(){
    
  },
  methods: {
    submitOrder(){
      this.showUpload=true
      setTimeout(()=>{
        this.showUpload=false
      },2000)
    }
  },
  components: {
    footButton,
    uploadSuccess,
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
    .header {
      background-color: #fff;
      margin-bottom: 0.3rem;
      > div {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          border-bottom: 1px solid #dedede;
          > span:nth-of-type(1) {
            height: 0.3rem;
            width: 2%;
            background-color: #54a6ff;
          }
          > span:nth-of-type(2) {
            font-size: 16px;
            width: 95%;
          }
        }
        &:nth-of-type(2) {
          color: #9e9e9e;
          border-bottom: 1px solid #e9e9e9;
          > span:nth-of-type(1) {
            width: 30%;
          }
          > span:nth-of-type(2) {
            width: 70%;
          }
        }
        &:nth-last-of-type(1) {
          > div:nth-of-type(1) {
            width: 30%;
          }
          > div:nth-of-type(2) {
            width: 70%;
          }
        }
      }
    }
    .content {
      background-color: #fff;
      > div {
        padding: .3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          border-bottom: 1px solid #dedede;
          > span:nth-of-type(1) {
            height: 0.3rem;
            width: 2%;
            background-color: #54a6ff;
          }
          > span:nth-of-type(2) {
            font-size: 16px;
            width: 95%;
          }
        }
        &:nth-of-type(2){
          padding: .3rem;
          >div{
            margin-bottom: .3rem;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            width: 100%;
            >span{
              color: #828282;
              width: 30%;
            }
            >div{
              padding: .2rem 0;
              width: 70%;
              border:  1px solid #E5E5E5;
              >input{
                border: 0;
                width: 100%;
                height: 100%;
              }
            }
            &:nth-last-of-type(1){
              margin-bottom: 0;
              >span{
                margin-top: -.5rem;
              }
              >div{
                height: 1.5rem;
                >textarea{
                  border: 0;
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
