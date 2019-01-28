<template>
  <div class="report-detail">
          <p @click="toReport" style="text-align: left;" class="cursor"><i class="el-icon-arrow-left"></i> 返回</p>

          <!--报告详情-->
          <div class="repDetail">
            <span class="dIcon"></span><span class="dTitle">报告详情</span>
            <!--标题-->
            <h1>{{info.nm}}</h1>
            <div class="repDetail_p1">
              <p>序列号：{{info.no}}</p>
              <p>供应商名称：{{info.supply}}</p>
              <p>质检产品地域：{{info.prodProvNm}} {{info.prodCityNm}}</p>
              <p>检测项目：{{info.rmks}}</p>
            </div>
            <div class="repDetail_p2">
              <p>检测机构：{{info.deteOrg}}</p>
              <p>质检产品名称：{{info.prodNm}}</p>
            </div>
            <div class="repDetail_p3">
              <vue-qr
                :logoSrc="logo"
                :text="url"
              >

              </vue-qr>
            </div>
          </div>
          <div class="img" v-if="imgList.length>0">
            <img :src="item.url" v-for="item in imgList"/>
          </div>
          <div v-if="pdfList.length>0">

            <iframe :src="'/shop/static/pdf/web/viewer.html?file=' + item.url" height="560" v-for="(item,index) in pdfList" :key="index"
                    width="100%">
            </iframe>
          </div>


        </div>
</template>

<script>
  import pdf from "components/contract.md";
  import VueQr from 'vue-qr'
export default {
  data(){
    return {
      id:'',
      info:{},
      imgList:[],
      pdfList:[],
      logo:'',
      url:''
    }
  },

  mounted(){
    this.id = this.$route.query.id
    this.getInfo()
  },
  methods:{
    getInfo(){
      this.until.get('/prodx/mxrepo/info/'+this.id)
        .then(res=>{
          this.info = res.data
          let urlList = JSON.parse(this.info.pdfUrl)
          urlList.forEach(item=>{
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
