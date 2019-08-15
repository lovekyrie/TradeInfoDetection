<template>
  <div class="report-detail">
          <p @click="toReport" style="text-align: left;" class="cursor"><i class="el-icon-arrow-left"></i> Back</p>

          <!--报告详情-->
          <div class="repDetail">
            <span class="dIcon"></span><span class="dTitle">Report details</span>
            <!--标题-->
            <h1>{{info.nm}}</h1>
            <div class="down">
              <p @click="down()">
                <img :src="download" alt="">
                <span>Download Report</span>
              </p>
            </div>
            <div class="repDetail_p1">
              <p>Serial number:{{info.no}}</p>
              <p>Supplier:{{info.supply}}</p>
              <p>District:{{info.prodProvNm}} {{info.prodCityNm}}</p>
              <p>Testing items:{{info.rmks}}</p>
            </div>
            <div class="repDetail_p2">
              <p>Test Organization:{{info.deteOrg}}</p>
              <p>Product Name:{{info.prodNm}}</p>
            </div>
            <div class="repDetail_p3">
              <vue-qr
                :logoSrc="logo"
                :text="url"
              >

              </vue-qr>
            </div>
          </div>
          <div class="img" v-if="urlList.length>0" v-for="(item,index) in urlList" :key="index">
            <p>Report Category：{{item.catCd}}</p>
            <iframe :src="'/shop/static/pdf/web/viewer.html?file=' + item.url" height="560" v-if="item.type.toUpperCase()=='PDF'"
                    width="100%">
            </iframe>
            <img :src="item.url" v-else/>
          </div>
          <!--<div v-if="pdfList.length>0">-->

            <!--<iframe :src="'/shop/static/pdf/web/viewer.html?file=' + item.url" height="560" v-for="(item,index) in pdfList" :key="index"-->
                    <!--width="100%">-->
            <!--</iframe>-->
          <!--</div>-->


        </div>
</template>

<script>
  import pdf from "@/componentsEn/contract.md";
  import download from "../images/下载小.png";
  import VueQr from 'vue-qr'
export default {
  data(){
    return {
      id:'',
      download,
      info:{},
      imgList:[],
      pdfList:[],
      urlList:[], //附件列表
      logo:'',
      url:''
    }
  },

  mounted(){
    this.id = this.$route.query.id
    this.getInfo()
  },
  methods:{
    down(){
      this.urlList.forEach(item=>{
        this.FileSaver.saveAs(item.url,item.name)
      })
    },
    getInfo(){
      this.until.get('/prodx/mxrepo/info/'+this.id)
        .then(res=>{
          this.info = res.data
          this.urlList = JSON.parse(this.info.pdfUrl)
          this.urlList.forEach(item=>{
            if(item.type.toUpperCase()=='PDF'){
              this.pdfList.push(item)
            }else {
              this.imgList.push(item)
            }
          })
          this.url = this.hostUrl+'/views/code/index.html?code='+this.info.no
        })
    },
    toReport(){
      this.$router.back(-1)
    }
  },
  components: {
    pdf,
    VueQr
  },
}
</script>

<style lang='less'>
  .report-detail {
        flex: 5.5;
        background-color: white;
        padding: 20px 20px;
        text-align: center;
        .img{
          width: 100%;
          border: 1px solid #f4f4f4;
          margin: 10px 0;
          padding: 20px;
          text-align: center;
          p{
            padding-bottom: 50px;
            text-align: left;
          }
          img{
            width: auto;
            height: auto;
            max-width: 100%;
          }
        }
        //子标题
        .dTitle {
          display: inline-block;
          font-size: 18px;
          margin-left: 10px;
          margin-bottom: 20px;
          height: 23px;
        }

        //  报告详情
        .repDetail {
          padding: 20px 0;
          text-align: left;
          position: relative;

          .down{
            position: absolute;
            top:50px;
            right:50px;
            cursor: pointer;
            img{
              margin-right: 8px;
            }
          }
          h1 {
            line-height: 2em;
            margin-bottom: 12px;
          }

          .repDetail_p1,.repDetail_p2 {
            color: rgb(99, 99, 99);
            line-height: 2.5em;
            float: left;
          }

          .repDetail_p1{
            width: 280px;
          }
          .repDetail_p3{
            float: right;
          }
        }
        //清除浮动
        .repDetail::after{
          clear: both;
          content: '\200B';
          height: 0;
          display: block;
        }

        //  蓝色小块
        .dIcon {
          display: inline-block;
          content: '';
          height: 20px;
          width: 8px;
          position: relative;
          top: 3px;
          background-color: rgb(13, 85, 210);;

        }

        //pdf位置
        .pdf{
          width: 100%;
          height: 500px;
          line-height: 500px;
          font-size: 28px;
          background-color: rgb(211,211,211);
        }
      }
</style>
