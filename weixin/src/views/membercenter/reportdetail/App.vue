<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#container {
  height: 100%;
  display: flex;
  display: -webkit-flex;
  overflow: hidden;
  flex-direction: column;
}

.detailinfo {
  flex: 1;
  overflow: auto;

  .detail-wrap {
    padding: .25rem;
    background-color: #fff;
    button{
      background: #f9f9f9;
      border: 1px solid #d4d4d4;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      margin: 0.2rem 0;
    }
    img{
      max-width: 100%;
    }
    h3 {
      padding: 0.1rem 0;
      font-size: 16px;
      font-weight: 400;
    }
    p {
      margin: 0.15rem 0;
      font-size: 14px;
      color: #666;
      span {
        i {
          font-style: normal;
          padding-left: 0.01rem;
          padding-right: 0.1rem;
        }
      }
    }
  }

}
footer{
  padding: .2rem 0;
  width: 100%;
  font-size: 16px;
  background-color: #2A8AF2;
  color: #fff;
  text-align: center;
}
.collectFooter{
  background-color: #d4d4d4;
  color: #666666;
}
.img{
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.2rem;
  margin: 0.1rem 0;
  p{
    padding: 0.2rem 0;
  }
  img{
    width: auto;
    max-width: 100%;
  }
}
.imginfo {
  margin: 0.6rem 0 0.6rem;
}
</style>

<template>
    <div id="container">
        <div class="detailinfo">
          <div class="detail-wrap">
            <h3>
              {{detail.nm}}
            </h3>
            <p>
              <span>上传者
                <i>:</i>
              </span>{{detail.crtBy}}
            </p>
            <p>
              <span>序列号
                <i>:</i>    
              </span>{{detail.no}}
            </p>
            <p>
              <span>报告类别
                <i>:</i>
              </span>{{detail.catNm}}
            </p>
            <p>
              <span>检测机构
                <i>:</i>    
              </span>{{detail.deteOrg}}
            </p>
            <p>
              <span>供应商名称
                <i>:</i>    
              </span>{{detail.supply}}
            </p>
            <p>
              <span>质检产品名称
                <i>:</i>
              </span>{{detail.prodNm}}
            </p>
            <p>
              <span>质检产品地域
                <i>:</i>    
              </span>{{detail.prodProvNm}} {{detail.prodCityNm}}
            </p>
            <p>
              <span>检测项目
                <i>:</i>
              </span>{{detail.rmks}}
            </p>
            <button @click="down">下载报告</button>
            <vue-qr
                    :logoSrc="logo"
                    :text="url"
                    :margin="0"
                    >

            </vue-qr>
            </div>
          <div class="img" v-if="downList.length>0" v-for="item in downList">
              <p>报告类别：{{item.catCd}}</p>
              <iframe :src="'/wechat/static/pdf/web/viewer.html?file=' + item.url" height="560" :key="index"
                      width="100%" v-if="item.type.toUpperCase()=='PDF'" >
              </iframe>
              <!--<img :src="item.url" v-if="item.type.toUpperCase()=='PDF'" />-->
              <img :src="item.url" v-else />
          </div>

          <!--<div v-if="pdfList.length>0">-->

            <!--<iframe :src="'/wechat/static/pdf/web/viewer.html?file=' + item.url" height="560" v-for="(item,index) in pdfList" :key="index"-->
                    <!--width="100%">-->
            <!--</iframe>-->
          <!--</div>-->
        </div>
        <footer @click="collect" :class="{collectFooter:state}">
          {{state | ifState}}
        </footer>

        <!-- <div class="imginfo">
            <img src="" alt="1">
        </div> -->
    </div>
</template>

<script>
import tempApp from "components/tempApp";
import pdf from "components/contract.md";
import VueQr from 'vue-qr'
export default {
  data() {
    return {
        no:'',
        url:'',
        logo:'',
      obj: {
        src: "./orderQueryDetail.html?"
      },
        downList:[],
        imgList:[],
        pdfList:[],
        pdfUrl:'http://image.cache.timepack.cn/nodejs.pdf',
        pk:'',
        state:'',
        userPk:'',
      detail: {
        title: "",
        uploader: "",
        numberid: "",
        organization: "",
        vendorname: "",
        productname: "",
        address: "",
        description: ``
      }
    };
  },
  mounted() {
    this.pk = this.until.getQueryString('pk')
      this.no = this.until.getQueryString('no')?this.until.getQueryString('no'):''
      this.userPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
    this.getInfo();
      this.ifCollect()
  },
  methods: {
      down(){
          window.location.href = '../down/downList.html?urlList='+JSON.stringify(this.downList)
      },
      getInfo(){
          let param={
              pk:this.pk,
              no:this.no,
          }
          this.until.get('/prodx/mxrepo/infox',param)
              .then(res=>{
                  this.detail = res.data
                  this.downList = JSON.parse(this.detail.pdfUrl)
                  // let down = JSON.parse(this.downList)
                  this.downList.forEach(item=>{
                      if(item.type.toUpperCase()=='PDF'){
                          this.pdfList.push(item)
                      }else {
                          this.imgList.push(item)
                      }
                  })
                  this.url = this.hostUrl+'/views/code/index.html?code='+this.detail.no
                  this.getLogo()
              })
      },
      getLogo(){
          this.until.getText('/prodx/mxrepo/infoByNo/'+this.detail.no)
              .then(res=>{
                  let myData = JSON.parse(res)
                  this.logo = myData.logo
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
          if(this.until.ifLogin()){
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
      }
  },
    filters:{
        ifState:function (val) {
            if(val){
                return '已收藏'
            }else {
                return '未收藏'
            }
        }
    },
  components: {
    tempApp,
      pdf,
      VueQr
  }
};
</script>

