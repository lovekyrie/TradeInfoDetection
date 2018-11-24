<template>
  <div id="app">
    <div class="header">
      <div>
        <span>{{info.nm}}</span>
      </div>
      <div>
        <span>发布日期：{{info.rcdTm}}</span>
      </div>
    </div>
    <div class="content">
      <div class="detection-info">
        <div><span></span><span>产品描述</span></div>
        <div>
          <p>{{info.intro}}</p>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="organization">
        <div><span></span><span>联系方式</span></div>
        <div><span>联系人：{{info.contNm}}</span></div>
        <div><span>联系电话：{{info.contMob}}</span></div>
        <div><span>联系邮箱：{{info.contEmail}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      info:{},
        pk:''
    };
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
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .header {
      margin-bottom: 0.2rem;
      padding: .3rem;
      background-color: #fff;    
      >div:nth-of-type(1){
        margin-bottom: .2rem;
        font-size: 16px;
      }
      >div:nth-of-type(2){
        color: #999;
      }
    }
    .content {
      margin-bottom: 0.2rem;
      background-color: #fff;
     
      .detection-info {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 100%;
          &:nth-of-type(1) {
            color: #939393;
            font-size: 16px;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            > span:nth-of-type(1) {
              width: 2%;
              height: 0.3rem;
              background-color: #54a6ff;
            }
            > span:nth-of-type(2) {
              width: 95%;
            }
          }
          &:nth-of-type(2) {
            margin-top: 0.2rem;
            color: #a1a1a1;
          }
        }
      }
    }
    .introduce {
      background-color: #fff;
      .organization {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          margin-top: 0.2rem;
          width: 100%;
          color: #a3a3a3;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          &:nth-of-type(1) {
            margin-top: 0;
            color: #939393;
            font-size: 16px;
            align-items: center;
            > span:nth-of-type(1) {
              width: 2%;
              height: 0.3rem;
              background-color: #54a6ff;
            }
            > span:nth-of-type(2) {
              width: 95%;
            }
          }
        }
      }
    }
  }
}
</style>
