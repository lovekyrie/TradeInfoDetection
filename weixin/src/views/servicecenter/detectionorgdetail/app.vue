<template>
  <div id="app">
    <div class="header">
      <div>
        <img :src="info.imgUrl" alt="">
      </div>
      <div class="detection-name">
        <span>{{info.nm}}</span>
      </div>
    </div>
    <div class="content">
      <div class="service-content">
        <div>服务内容</div>
        <div>
          <span>{{info.intro}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productInfo from "./images/productinfo.png";

export default {
  data() {
    return {
        pk:'',
        info:{},
      productInfo,
      detectionName: "儿童家具质量评审儿童家具质检",
      serviceContent: `最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、乙烯等有害物质，严格按照国际标准。
      最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、乙烯等有害物质，
      严格按照国际标准。最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、乙烯等有害物质，严格按照国际标准。`
    };
  },
    mounted(){
      this.pk=this.until.getQueryString('id')
        this.getInfo()
    },
    methods:{
      getInfo(){
          this.until.get('/prod/mxpubthrser/info/'+this.pk)
              .then(res=>{
                  this.info=res.data
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
      img {
        vertical-align: middle;
      }
      .detection-name {
        background-color: #fff;
        padding: 0.3rem 0.4rem;
        font-size: 16px;
      }
    }
    .content {
      background-color: #fff;
      padding: 0.3rem 0.4rem;
      .service-content {
        > div:nth-of-type(1) {
          margin-bottom: 0.2rem;
          font-size: 16px;
        }
        > div:nth-of-type(2) {
          color: #9c9c9c;
        }
      }
    }
  }
}
</style>
