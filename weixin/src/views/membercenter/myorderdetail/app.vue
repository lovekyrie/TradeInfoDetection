<template>
  <div id="app">
    <div class="content">
      <div class="order-info">
        <div><span>订单编号：{{info.mxOrdDetePk}}</span></div>
        <div><span>服务名称：{{info.mxPubCheckNm}}</span></div>
        <div><span>数量：{{info.qty}}</span></div>
        <div><span>联系电话：{{info.checkMob}}</span></div>
        <div><span>下单时间：{{info.crtTm}}</span></div>
        <div><span>订单状态：{{info.statNm}}</span></div>
        <div><span>价格：￥{{info.price}}</span></div>
        <div><span>报告状态：{{info.repoStatNm}}</span></div>
        <div>
          <span>订单二维码</span>
          <div>
            <vue-qr
                    :logoSrc="logo"
                    :text="url"
                    :margin="0"
            >

            </vue-qr>
          </div>
        </div>
      </div>
      <div class="linked">
        <div><span></span><span>联系方式</span></div>
        <div><span>供应商名称：{{info.supply}}</span></div>
        <div><span>样品名称：{{info.prodNm}}</span></div>
        <div><span>联系人：{{info.contNm}}</span></div>
        <div><span>联系电话：{{info.contMob}}</span></div>
        <div><span>备注：{{info.rmks}}</span></div>
      </div>
      <div class="address">
        <div><span></span><span>收货地址</span></div>
        <div><span>收货人：{{info.addresReceNm}}</span><span>手机号码：{{info.addresReceMob}}</span></div>
        <div><span>详细地址：{{info.addresAddrDtl}}</span></div>
      </div>
      <div class="report">
        <div><span></span><span>检测报告</span></div>
        <div><span>序列号：{{info.checkMxPubCheckPk}}</span></div>
        <div><span>检测机构：宁波贸信检测</span></div>
        <div><span>供应商名称：{{info.supply}}</span></div>
        <div><span>质检产品名称：{{info.prodNm}}</span></div>
      </div>
    </div>
    <div class="img" v-if="imgList.length>0">
      <img :src="item" v-for="item in imgList"/>
    </div>
    <div v-if="pdfList.length>0">
      <iframe :src="'/wechat/static/pdf/web/viewer.html?file=' + item" height="560" v-for="(item,index) in pdfList" :key="index"
              width="100%">
      </iframe>
    </div>
    <div class="footer" @click="down">
      <div>下载报告</div>
    </div>
  </div>
</template>

<script>
import twoCode from './images/twocode.png'
import pdf from "components/contract.md";
import VueQr from 'vue-qr'
export default {
  data(){
    return {
      twoCode,
        pk:'',
        imgList:[],
        pdfList:[],
        downList:[],
        logo:'',
        url:'',
        info:{},
    }
  },
  mounted(){
      this.pk = this.until.getQueryString('pk')
      this.getInfo()
  },
    methods:{
      down(){
          window.location.href = '../down/downList.html?urlList='+JSON.stringify(this.downList)
      },
      getInfo(){
          this.until.get('/prod/mxordete/info/'+this.pk)
              .then(res=>{
                this.info = res.data
                  this.url = this.hostUrl+'/views/code/order.html?code='+ this.info.repoQrCd

                  if(this.info.repoNo){
                      let down = this.info.repoNo.split(',')
                      down.forEach(item=>{
                          let file = item.split('/')[item.split('/').length-1]
                          this.downList.push({
                              name:file.split('.')[0],
                              url:item,
                              type:file.split('.')[1]
                          })
                          if(item.indexOf('.pdf')>-1 || item.indexOf('.PDF')>-1){
                              this.pdfList.push(item)
                          }else {
                              this.imgList.push(item)
                          }
                      })
                      console.log(this.downList)
                  }

              })
      }
    },
    components: {
        pdf,
        VueQr
    }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
    .content{
      >div{
        &:not(:nth-last-of-type(1)){
          margin-bottom: .2rem;
        }
      }
      .order-info{
        padding: .3rem .4rem;
        background-color: #fff;
        >div{
          &:nth-last-of-type(1){
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            >div{
              margin-left: .4rem;
            }
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .3rem;
          }
        }
      }
      .linked,
      .address,
      .report{
          padding: .3rem .4rem;
        background-color: #fff;
        >div{
          &:nth-of-type(1){
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            >span:nth-of-type(1){
              width: 2%;
              height: .3rem;
              background-color: #54A6FF;
            }
            >span:nth-of-type(2){
              font-size: 16px;
              width: 95%;
            }
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .3rem;
          }
        }
      }
      .address{
        >div{
          &:nth-of-type(2){
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            >span{
              width: 55%;
              &:nth-of-type(1){
                width: 45%;
              }
            }
          }
        }
      }
    }
    .pdf-content{
      text-align: center;
      padding: 3rem 0;
    }
    .footer{
      >div{
        padding: .2rem;
        width: 100%;
        text-align: center;
        background-color: #2A8AF2;
        color: #fff;
      }
    }
  }
}
</style>
