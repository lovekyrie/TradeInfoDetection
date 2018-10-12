<template>
<div id="report">
  <div class="wrap" v-for="(item, index) in reportList" :key="index">
    <div class="header">
      <span>序列号：{{item.numberID}}</span>
      <div v-if="edit">
        <img :src="edit" alt="">
      </div>
      <div class="time" v-if="!edit">
        <span>上传时间：</span>{{item.release}}
      </div>
    </div>
    <div class="content">
      <div>
        <span>{{item.name}}</span>
      </div>
      <div>
         <span>检测机构：</span>{{item.orgName}}
      </div>
      <div>
         <span>质检产品名称：</span>{{item.productName}}
      </div>
      <div>
         <span>质检产品地域：</span>{{item.address}}
      </div>
    </div>
    <div class="footer" v-if="edit">
      <div class="time">
        <span>发布时间：</span>{{item.release}}
      </div>
      <div class="operate">
        <div @click="gotoDetail">查看详情</div>
        <div @click="delReport(item)">删除</div>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  props: ['reportList','edit'],
  data() {
    return {};
  },
  methods:{
    gotoDetail(){
      window.location.href='../quality/reportdetail.html'
    },
    delReport(item){
      this.$emit('updateReport',item)
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
      width: 63%;
    }
    >div{
      width: 5%;
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
