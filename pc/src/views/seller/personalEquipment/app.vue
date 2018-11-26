<template>
  <div id="app">
    <trade-header :showSearch="showSearch"></trade-header>
    <div class="content">
      <el-row>
        <el-button @click="toEnterprise">企业发布</el-button>
        <el-button>个人发布</el-button>
      </el-row>
      <div class="equipment-list">
        <div v-for="(item, index) in equipmentList" :key="index">
          <span>{{item.content}}</span>
          <span>{{item.linkedMan}}&nbsp;&nbsp;{{item.phoneNum}}</span>
          <span>{{item.time}}</span>
        </div>
      </div>
    </div>
    <trade-footer></trade-footer>
  </div>
</template>

<script>
import tradeHeader from 'components/tradeHeader'
import tradeFooter from 'components/tradeFooter'

export default {
  data(){
    return{
      showSearch:false,
      equipmentList:[
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        },
        {
          content:'【转租】高价租最新服装衬衫全效检测设备一台',
          linkedMan:'张先生',
          phoneNum:'15900110011',
          time:'2018年6月17日'
        }
      ]
    }
  },
  components:{
    tradeHeader,
    tradeFooter
  }
}
</script>

<style lang="less">
html,body{
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app{
    width: 100%;
    .content{
      width: 1200px;
      margin: 50px auto 0px;
      .equipment-list{
        display: -webkit-flex;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        >div{
          padding: 30px 0;
          width: 100%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e1e1e1;
          >span{
            &:nth-of-type(1){
              width: 45%;
              color: #0d55d2;
              display: flex;
              align-items: center;
              &::before{
                display: inline-block;
                content: '.';
                height: 5px;
                width: 5px;
                background-color: #0d55d2;
                color: #fff;
              }
            }
            &:nth-of-type(2){
              width: 20%;
            }
            &:nth-of-type(3){
              width: 15%;
            }
          }
        }
      }
    }
  }
}
</style>

