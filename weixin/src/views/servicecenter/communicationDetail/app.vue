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
          <span>简介描述</span>
        </div>
        <div>
          {{info.intro}}
        </div>
      </div>
      <div class="require-des">
          附件：
          <p v-for="item in downUrl" class="urlList" >
            <img :src=image v-if="item.type.toUpperCase()=='JPG' || item.type.toUpperCase()=='PNG' || item.type.toUpperCase()=='GIF' || item.type.toUpperCase()=='JPEG'" />
            <img :src=pdf v-if="item.type.toUpperCase()=='PDF'" />
            <img :src=word v-if="item.type.toUpperCase()=='DOC' || item.type.toUpperCase()=='DOCX'" />
            {{item.name}}
          </p>
      </div>
      <div class="require-des">
          下载金币数：{{info.price}}金币
      </div>
    </div>
    <footer @click="downLoad">
      下载
    </footer>
  </div>
</template>

<script>
  import image from './img/图片.png'
  import pdf from './img/pdf.png'
  import word from './img/word.png'
export default {
  data() {
    return {
        image,
        pdf,
        word,
      pk:'',
      downUrl:[],
      info:{}
    };
  },
    mounted(){
      this.pk = this.until.getQueryString('pk')
      this.getInfo()

        // this.down()
    },
    methods:{
        downLoad() {
            this.$dialog.confirm({
                mes:"下载当前附件需要消耗"+this.info.price+"金币，确定下载吗？",
                title: '提示',
                opts:()=>{
                    this.down()
                }
            })

        },
        down(){
          this.until.get('/prod/wxcomux/down/'+this.pk)
              .then(res=>{
                  if(res.status == '200'){
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                       let downList = res.data
                      window.location.href = '../down/downList.html?urlList='+ downList
                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              })
      },
      getInfo(){
          this.$dialog.loading.open()
          this.until.get('/prod/wxcomux/info/'+this.pk)
              .then(res=>{
                  this.$dialog.loading.close()
                  if(res.status == '200'){
                      this.info = res.data
                      this.downUrl = JSON.parse(this.info.pdfUrl)

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
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    footer{
      height: 0.8rem;
      line-height: 0.8rem;
      background: #0d55d2;
      color: #ffffff;
      text-align: center;
    }
    .content {
      flex: 1;
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
      .urlList{
        float: left;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        padding-right: 15px;
        img{
          width: 0.5rem;
          margin-right: 5px;
        }
      }
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
