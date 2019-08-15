<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="title">
        <div>{{reportDetail.nm}}</div>
        <div class="button">
          <div @click="down()">
            <img :src="download" alt="">
            <span>下载报告</span>
          </div>
          <div v-if="state==0" @click="collect">
            <img :src="collectNo" alt="">
            <span>收藏</span>
          </div>
          <div v-if="state==1" @click="collect">
            <img :src="hasCollect" alt="">
            <span>已收藏</span>
          </div>
        </div>
      </div>
      <div>
        <span>上传者：{{reportDetail.crtBy}}</span>
      </div>
      <div>
        <span>序列号：{{reportDetail.no}}</span>
        <span>检测机构：{{reportDetail.deteOrg}}</span>
        <span>报告类别：{{reportDetail.catNm}}</span>
      </div>
      <div>
        <span>供应商名称：{{reportDetail.supply}}</span>
        <span>质检产品名称：{{reportDetail.prodNm}}</span>
        <span>质检产品地域：{{reportDetail.prodProvNm}} {{reportDetail.prodCityNm}}</span>
      </div>
      <div>
        <span>检测项目：{{reportDetail.rmks}}</span>
      </div>
      <vue-qr
        :logoSrc="logo"
        :text="url"
        :size="220"
        :margin="0"
      ></vue-qr>
    </div>
    <div class="pdf-reader" v-if="urlList.length>0" v-for="(item,index) in urlList" :key="index"  width="100%">
      <p>报告分类：{{item.catCd}}</p>
      <iframe :src="item.url" height="560" v-if="item.type.toLowerCase()=='pdf'" width="100%">  </iframe>
      <img :src="item.url" v-else />
    </div>
    <!--<div v-if="pdfList.length>0">-->
      <!--<iframe :src="item.url" height="560" v-for="(item,index) in pdfList" :key="index"  width="100%">  </iframe>-->
    <!--</div>-->
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import collectNo from "./images/收藏.png";
import hasCollect from "./images/已收藏.png";
import download from "./images/下载小.png";
import VueQr from 'vue-qr'
import pdf from "components/contract.md";
export default {
  data() {
    return {
      logo:'',//二维码上的logo
      state:0,
      userPk:'',

      collectNo:'',
      hasCollect:"",
      download:"",
      // downList:[], //下载列表，包含文件Url及文件名称
      urlList:[], //附件列表
      imgList:[],
      pdfList:[],
      url:'',//二维码信息
      reportDetail: {
        title: "福州福州服饰有限公司防晒衣检测报告",
        uploader: "张三",
        serialNo: "1100000911000009",
        organization: "宁波贸信检测",
        vendor: "宁波太平鸟服饰",
        productName: "防晒衣",
        address: "浙江 - 宁波",
        project: "填写关键词"
      }
    };
  },
  mounted(){
    this.pk = this.until.getQueryString('pk')
    this.no = this.until.getQueryString('no')?this.until.getQueryString('no'):''
    this.userPk = this.until.loGet('userInfo')? JSON.parse(this.until.loGet('userInfo')).sysUserPk:''
    this.getInfo();
    this.ifCollect();
    this.getLogo();
  },
  methods: {
    getLogo(){
      let query = new this.Query();
      query.buildWhereClause("sysUserPk",this.userPk,"EQ");
      this.until.get('/prod/mxentp/list',{query:query.toString()})
        .then(res=>{
         this.logo = res.data.items[0].logoUrl;
        })
    },

    getInfo(){
      let param={
        pk:this.pk,
        no:this.no,
      }
      this.until.get('/prodx/mxrepo/infox',param)
        .then(res=>{
          this.reportDetail = res.data
          // this.reportDetail.catNm = this.reportDetail.catNm.indexOf('、')>=0 ? this.reportDetail.catNm.substring(0,this.reportDetail.catNm.length-1) : this.reportDetail.catNm
          this.urlList = JSON.parse(this.reportDetail.pdfUrl)
          this.urlList.forEach(item=>{
            if(item.type.toLowerCase()=='pdf'){
              this.pdfList.push(item)
            }else {
              this.imgList.push(item)
            }
          })
          this.url = this.hostUrl+'/views/code/index.html?code='+this.reportDetail.no
        })
    },
    down(){
      this.urlList.forEach(item=>{
        this.FileSaver.saveAs(item.url,item.name)
      })
    },
    //判断收藏状态
    ifCollect(){
      this.until.get('/prodx/mxusercoll/collnum?subPk='+this.pk+'&sysUserPk='+this.userPk)
        .then(res=>{
          this.state = res
        })

    },
    //取消或加入收藏
    collect(){
      if(!this.until.ifLogin()){
        return false
      }
      if(this.state){  //已经收藏了，要取消
        this.until.get('/prodx/mxusercoll/canselcoll?subPk='+this.pk+'&sysUserPk='+this.userPk)
          .then(res=>{
            this.state = res.status=='200' ? 0: 1
          })
      }else {
        let params = {
          subPk:this.pk,
          sysUserPk:this.userPk
        }
        this.until.postData('/prod/mxusercoll/edit',JSON.stringify(params))
          .then(res=>{
            this.state = res.status=='200' ? 1: 0
          })
      }
    }
  },
  components: {
    tradeHeader,
    tradeFooter,
    VueQr,
    pdf
  }
};
</script>

<style lang='less' scoped>
html,
body {
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app {
    height: 100%;
    width: 100%;
    .content {
      width: 1200px;
      margin: 25px auto 0;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .button{
        cursor: pointer;
      }
      > div {
        margin-bottom: 25px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          > div {
            &:nth-of-type(1) {
              width: 410px;
              font-size: 22px;
            }
            &:nth-of-type(2) {
              width: 310px;
              display: -webkit-flex;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              font-size: 16px;
              > div {
                width: 50%;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                img{
                  max-width: 100%;
                  max-height: 100%;
                  width: auto;
                  height: auto;
                  vertical-align: middle;
                }
                span{
                  margin-left: 15px;
                }
              }
            }
          }
        }
        &:not(:nth-of-type(1)){
          font-size: 16px;
        }
        &:nth-of-type(3){
          >span{
            flex: 1;
          }
        }
        &:nth-of-type(4){
          >span{
            flex: 1;

            /*&:nth-of-type(1){*/
            /*}*/
            /*&:nth-of-type(2){*/
              /*flex:2;*/
            /*}*/
          }
        }
      }
    }
    .pdf-reader{
      width: 1200px;
      height: auto;
      padding: 15px;
      margin: 0 auto 20px;
      text-align: center;
      background-color: #f2f2f2;
      p{
        width: 100%;
        text-align: left;
        padding-bottom: 40px;
      }
      img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
      }
    }
  }
}
</style>
