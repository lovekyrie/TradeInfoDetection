<template>
<div id="report">
  <div class="wrap" v-for="(item, index) in reportList" :key="index">
    <div class="header" @click="gotoDetail(item.mxUserCollPk)">
      <span>序列号：{{item.rpNo}}</span>
      <div class="time" v-if="!edit">
        <span>上传时间：</span>{{item.crtTm}}
      </div>
    </div>
    <div class="content" @click="gotoDetail(item.subPk)">
      <div>
        <span>{{item.rpNm}}</span>
      </div>
      <div>
         <span>检测机构：</span>{{item.rpDeteOrg}}
      </div>
      <div>
         <span>质检产品名称：</span>{{item.rpProdNm}}
      </div>
      <div>
         <span>质检产品地域：</span>{{item.rpProdProvNm}}{{item.rpProdCityNm}}
      </div>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  props: ['reportList','edit','code'],
  data() {
    return {};
  },
  methods:{

    gotoDetail(pk){
      window.location.href='../membercenter/reportdetail.html?pk='+pk
    },
    delReport(pk,index){
        this.until.get('/prod/mxrepo/del?pks='+pk)
            .then(res=>{
                if(res.status=='200'){
                    this.$emit('updateReport',index)
                    this.$hero.msg.show({
                        text:res.message,
                        times:1500
                    });
                }else {
                    this.$hero.msg.show({
                        text:res.message,
                        times:1500
                    });
                }
            })
    }
  }
};
</script>

<style lang="less">
.wrap {
  margin-bottom: .2rem;
  background-color: #fff;
  .header {
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    padding: 0.2rem 0.3rem;
    border-bottom: 1px solid #F2F2F2;
    >span{
      flex: 1;
    }
    >div{
      width: 5%;
      margin-left: 0.3rem;
      >img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
      }
    }
    .time{
      width: 37%;
      font-size: 12px;
      color: #9F9F9F;
    }
  }
  .content{
    padding: .2rem .3rem;
    border-bottom: 1px solid #E6E6E6;
    >div:nth-of-type(1){
      font-size: 16px;
    }
    >div:not(:nth-last-of-type(1)){
      margin-bottom: .2rem;
    }
    >div:not(:nth-of-type(1)){
      color: #ABABAB;
    }
  }
  .footer{
    color: #ABABAB;
    padding: .2rem 0.3rem;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    >div{
      flex: 2;
    }
    .operate{
      font-size: 16px;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      >div{
        padding: .1rem .3rem;
        border: 1px solid #D4D4D4;
        border-radius: .1rem;
      }
    }
  }
}
</style>
