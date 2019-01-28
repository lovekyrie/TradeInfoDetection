<template>
  <div id="app" v-loading="loading">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="content-title">
        <span>{{requireDetail.nm}}</span>
        <span>{{requireDetail.crtTm}}</span>
      </div>
      <div>
        <div>
          <span></span>
          <span>需求描述</span>
        </div>
        <div>
          <span>{{requireDetail.intro}}</span>
        </div>
      </div>
      <div>
        <div>
          附件：
          <p v-for="item in downUrl" class="urlList" >
          <img :src=image v-if="item.type.toUpperCase()=='JPG' || item.type.toUpperCase()=='PNG' || item.type.toUpperCase()=='GIF' || item.type.toUpperCase()=='JPEG'" />
          <img :src=pdf v-if="item.type.toUpperCase()=='PDF'" />
          <img :src=word v-if="item.type.toUpperCase()=='DOC' || item.type.toUpperCase()=='DOCX'" />
          {{item.name}}
        </p>
        </div>
        <button @click="downLoad">附件下载</button>
      </div>
      <div>
        <div>
          下载金币数：<span>{{requireDetail.price}}金币</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>

import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import image from './img/图片.png'
import pdf from './img/pdf.png'
import word from './img/word.png'
export default {
  data() {
    return {
      loading:false,
      image,
      pdf,
      word,
      downUrl:[],
      pk:'',
      info:{},
      requireDetail:{}
    };
  },
  mounted(){
    this.pk = this.until.getQueryString('pk')
    // console.log(this.requireDetail)
    this.getInfo()
  },
  methods:{
    downLoad(){
      if(!this.until.ifLogin()){
        return false
      }
      this.$confirm("下载当前附件需要消耗"+this.requireDetail.price+"金币，确定下载吗？", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.down()
      }).catch(() => {

      });

    },
    down(){
      this.loading = true;
      let downList = []
      this.until.get('/prod/wxcomux/down/'+this.pk)
        .then(res=>{
          this.loading = false;
          if(res.status == '200'){
            this.$message({
              message:res.message,
              type: 'success'
            });
            downList = JSON.parse(res.data)
            downList.forEach(item=>{
              this.FileSaver.saveAs(item.url,item.name)
            })
          }else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
        })
    },
    getInfo(){
      this.until.get('/prod/wxcomux/info/'+this.pk)
        .then(res=>{
          if(res.status == '200'){
            this.requireDetail = res.data
            // console.log(this.requireDetail)
            this.downUrl = JSON.parse(this.requireDetail.pdfUrl)

          }else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
        })
    }
  },
  components: {
    tradeHeader,
    tradeFooter
  }
};
</script>

<style lang='less' scoped>
html,
body {
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 15px auto 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      button{
        background: #0d55d2;
        border-radius: 3px;
        line-height: 35px;
        padding: 0 25px;
        color: #ffffff;
      }
      .urlList{
        float: left;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        padding-right: 15px;
        img{
          width: 30px;
          margin-right: 5px;
        }
      }
      > div {
        padding: 35px 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          span{
            &:nth-of-type(1){
              width: 50%;
              font-size: 22px;
            }
            &:nth-of-type(2){
              text-align: right;
              width: 40%;
              font-size: 16px;
              color: #999;
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(3){
          flex-wrap: wrap;
          >div{
            width: 100%;
            &:nth-of-type(1){
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              margin-bottom: 25px;
              >span{
               &:nth-of-type(1){
                 width: 8px;
                 height: 20px;
                 background-color: #0d55d2;
               }
               &:nth-of-type(2){
                 font-size: 22px;
                 margin-left: 15px;
               }
              }
            }
            &:nth-of-type(2){
              font-size: 16px;
            }
          }
        }
        &:nth-of-type(3){
          >div{
            &:not(:nth-of-type(1)){
              font-size: 16px;
              margin-bottom: 10px;
            }
          }
        }
        &:not(:nth-last-of-type(1)){
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
}
</style>
