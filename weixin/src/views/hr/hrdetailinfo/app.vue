<template>
  <div id="app">
    <div class="header">
      <div class="hr-info">
        <div class="hr-theme">
          <div>{{info.nm}}</div>
          <div>{{info.entpNm}}</div>
        </div>
        <div class="hr-linked">
          <div>{{info.frSala}}-{{info.toSala}}元/月</div>
          <div>联系电话：{{info.mob}}</div>
        </div>
        <div class="email">
          邮箱地址：{{info.email}}
        </div>
      </div>
    </div>
    <div class="content">
      <div class="wrap">
        <div class="title">
          <span></span>
          <span>职位描述</span>
        </div>
        <div class="require-item" v-html="info.intro">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        info:{},
      title: "实验室经理助理1名",
      company: "浙江宁波华信质检",
      salary: "4000-5000元／月",
      phone: "0574-88889999",
      email:"545577543453@qq.com"
    };
  },
    mounted(){
      this.userPk = this.until.getQueryString('pk')
      this.getInfo()
    },
    methods:{
      getInfo(){
          this.until.get('/prod/mxpubrecr/info/'+this.userPk)
              .then(res=>{
                  this.info = res.data
                  this.info.intro=this.info.intro.replace(/\n/gm,"<br/>")
              })
      }
    }
};
</script>

<style lang="less">

html,body{
  height: 100%;
  background-color: #F7F7F7;
  #app{
    height: 100%;
    .hr-info{
      padding: .3rem;
      background-color: #fff;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border: 1px solid #EFEFEF;
      >div{
        margin-bottom: .2rem;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        >div{
          width: 50%;
        }
      }
      >div:not(:nth-of-type(1)){
        font-size: 12px;
      }
    }
    .content{
      background-color: #fff;
      padding:.2rem .3rem;
      .title{
       display: -webkit-flex;
       display: flex;
       flex-wrap: nowrap;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       >span:nth-of-type(1){
         width: 2%;
         height: .3rem;
         background-color: #54A6FF;
       }
       >span:nth-of-type(2){
         width: 95%;
       }
      }
      .require-item{
        font-size: 12px;
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        >div{
          padding: .1rem 0;
          width: 100%;
        }
      }
    }
  }
}
</style>
