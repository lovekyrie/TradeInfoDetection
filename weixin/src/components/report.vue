<template>
<div id="report">
  <div class="wrap" v-for="(item, index) in reportList" :key="index">
    <div class="header" @click="gotoDetail(item.mxRepoPk)">
      <span>序列号：{{item.no}}</span>
      <div v-if="code">
        <img :src="code" alt="" >
      </div>
      <div v-if="edit"  @click.stop="toEdit(item)">
        <img :src="edit" alt=""/>
      </div>
      <div class="time" v-if="!edit">
        <span>上传时间：</span>{{item.crtTm}}
      </div>
    </div>
    <div class="content" @click="gotoDetail(item.mxRepoPk)">
      <div>
        <span>{{item.nm}}</span>
      </div>
      <div>
         <span>检测机构：</span>{{item.deteOrg}}
      </div>
      <div>
         <span>质检产品名称：</span>{{item.prodNm}}
      </div>
      <div>
         <span>质检产品地域：</span>{{item.prodProvNm}}{{item.prodCityNm}}
      </div>
    </div>
    <div class="footer" v-if="edit">
      <div class="time">
        <span>发布时间：</span>{{item.crtTm}}
      </div>
      <div class="operate">
        <div @click="gotoDetail(item.mxRepoPk)">查看详情</div>
        <div @click="delReport(item.mxRepoPk,index)">删除</div>
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
      toEdit(info){
          window.location.href = '../quality/reportupload.html?info='+JSON.stringify(info)
      },
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
