<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <div class="notify">
      <div>
        <div>
          <img :src="successlog" >
        </div>
        <div><span>提交成功，请等待审核。</span></div>
      </div>
    </div>
     <div class="content">
      <div>
        <span>企业名称：</span>
        <div>
          <span>{{enterpriseName}}</span>
        </div>
      </div>
       <div>
        <span>法人姓名：</span>
        <div>
          <span>{{legalName}}</span>
        </div>
      </div>
       <div>
        <span>邮箱地址：</span>
        <div>
          <span>{{eamil}}</span>
        </div>
      </div>
      <div>
        <span>联系人：</span>
        <div>
          <span>{{linked}}</span>
        </div>
      </div>
      <div>
        <span>联系电话：</span>
        <div>
          <span>{{linkedPhone}}</span>
        </div>
      </div>
      <div>
        <span>联系地址：</span>
        <div>
          <span>{{linkedAddress}}</span>
        </div>
      </div>
      <div class="file-type">
        <span>营业执照：</span>
        <div>
         <img :src="businessLicense">
        </div>
      </div>
       <div class="file-type">
        <span>CMA资质证书：</span>
        <div>
         <img :src="CMACertificate">
        </div>
      </div>
       <div class="file-type">
        <span>CNAS资质证书：</span>
        <div>
         <img :src="CNASCertificate">
        </div>
      </div>
      <div class="file-type">
        <span>其他资质证书：</span>
        <div>
         <img :src="otherCertificate">
        </div>
      </div>
      <div>
        <span>公司简介：</span>
        <div>
          <span>{{companyIntroduce}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import successlog from './images/提交成功.png'
import headerTitle from 'components/headerTitle'
import businessLicense from './images/businessLicense.png'

export default {
  data(){
    return {
      successlog,
      title:'合作伙伴入驻',
      enterpriseName:'宁波玩家制作有限公司',
      legalName:'孙华',
      eamil:'13566667777@qq.com',
      linked:'沈军',
      linkedPhone:'13566667777',
      linkedAddress:'浙江省宁波市镇海区329创业社区212室',
      businessLicense,
      CMACertificate:businessLicense,
      CNASCertificate:businessLicense,
      otherCertificate:businessLicense,
      companyIntroduce:'',
    }
  },
  methods:{

  },
  components:{
    headerTitle,
  }
}
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .notify{
      background-color: #fff;
      >div{
        margin: 0 auto;
        padding: .4rem 0;
        width: 60%;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        >div:nth-of-type(1){
          width: 10%;
          >img{
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            vertical-align: middle;
          }
        }
        >div:nth-of-type(2){
          margin-left: .3rem;
          width: 90%;
        }
      }
    }
    .content {
      padding: 0 0.4rem .3rem;
      background-color: #fff;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      color: #868686;
      > div {
        font-size: 12px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        > span {
          width: 25%;
        }
        > div {
          width: 75%;
        }
        
        &:nth-last-of-type(1){
          >div{
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
          margin-top: -1.2rem;
          width: 35%;
        }
        > div {
          padding: 0;
          margin-right: 30%;
          width: 2rem;
          height: 2rem;
          border: 1px solid #efefef;
          background-size: 0.6rem 0.6rem;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
