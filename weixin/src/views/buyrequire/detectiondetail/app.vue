<template>
  <div id="app">
    <div class="content">
      <div class="report-title">
        <h3>{{info.nm}}</h3>
        <div>发布日期：{{info.crtTm}}</div>
      </div>
      <div class="require-des">
        <div>
          <span></span>
          <span>需求描述</span>
        </div>
        <div>
          {{info.rmks}}
        </div>
      </div>
      <div class="linked">
        <div>
          <span></span>
          <span>联系方式</span>
        </div>
        <div>
          联系人：{{info.contNm}}
        </div>
        <div>
          联系电话：{{info.contMob}}
        </div>
        <div>
          邮箱地址：{{info.email}}
        </div>
        <div>
          <!--联系方式：{{info.contOther}}-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pk:'',
      info:{}
    };
  },
    mounted(){
      this.pk = this.until.getQueryString('pk')
        this.getInfo()
    },
    methods:{
      getInfo(){
          this.until.get('/prod/mxpubres/info/'+this.pk)
              .then(res=>{
                  if(res.status == '200'){
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
    .content {
      background-color: #fff;
      > div {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 1px solid #e3e3e3;
        > div {
          width: 100%;
        }
      }
    }
    .report-title {
      > h3 {
        margin-bottom: 0.2rem;
        font-size: 16px;
        font-weight: 400;
      }
      > div {
        color: #9b9b9b;
      }
    }
    .require-des,
    .linked {
      > div {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          margin-bottom: .2rem;
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
          font-size: 12px;
          color: #bcbcbc;
        }
      }
    }
    .linked{
      >div{
        &:not(:nth-of-type(1)){
          font-size: 12px;
          color: #bcbcbc;
        }
        &:not(:nth-last-of-type(1)){
          margin-bottom: .2rem;
        }
      }
    }
  }
}
</style>
