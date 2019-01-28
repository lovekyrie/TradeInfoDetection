<template>
  <div id="app">
    <trade-header></trade-header>
    <div class="content">
      <div class="pro-info">
        <span>{{info.nm}}</span>
        <span>发布日期：{{info.crtTm}}</span>
      </div>
      <div class="pro-desc">
        <div class="title">
          <span></span>
          <span>产品描述</span>
        </div>
        <p>{{info.intro}}</p>
      </div>
      <div class="linked">
        <div class="title">
          <span></span>
          <span>联系方式</span>
        </div>
        <p>联系人：{{info.contNm}}</p>
        <p>联系方式：{{info.contMob}}</p>
        <p>邮箱地址：{{info.contEmail}}</p>
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
    return {
      pk:'',
      info:{
        nm:'【转租】高价租最新服装衬衫全特效检测设备一台',
        date:'2018-06-01',
        desc:`最新水质检测设备，九成新，可检测水的PH值，水的酸碱度。最新水质检测设备，九成新，可检测水的PH值，水的酸碱度。最新水质检测设备，九成新，可检测水的PH值，水的酸碱度。
        最新水质检测设备，九成新，可检测水的PH值，水的酸碱度。最新水质检测设备，九成新，可检测水的PH值，水的酸碱度。`,
        linked:"张三",
        linkedPhone:'13599990000',
        eamil:'239j2392j93@qq.com'
      }
    }
  },
  mounted(){
    this.pk = this.until.getQueryString('pk')
    this.getInfo()
  },
  methods:{
    getInfo(){
      this.until.get('/prod/mxpubdev/info/'+this.pk)
        .then(res=>{
          if(res.status=='200'){
            this.info = res.data
          }else {

          }
        })
    }
  },
  components:{
    tradeHeader,
    tradeFooter,
  }
}
</script>

<style lang='less' >
html,body{
  height: 100%;
  width: 100%;
  .content{
  width: 1200px;
  margin: 0px auto 170px;
  .pro-info{
    padding: 40px 0;
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid #ddd;
    span{
      flex:  1 0 50%;
      &:nth-of-type(1){
        font-size: 24px;
      }
      &:nth-last-of-type(1){
        font-size: 16px;
        flex: 0 0 auto;
      }
    }
  }
  .pro-desc,
   .linked{
    padding: 40px 30px;
    border-bottom: 1px solid #ddd;
    .title{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-bottom: 30px;
      span{
        font-size: 20px;
        &:nth-of-type(1){
          margin-right: 2%;
          width: 10px;
          height: 20px;
          background-color: #0d55d2;
        }
      }
    }
    p{
      font-size: 16px;
    }
  }
  .linked{
    border-bottom:0;
    p{
      &:not(:nth-last-of-type(1)){
        margin-bottom: 25px;
      }
    }
  }
}
}

</style>
