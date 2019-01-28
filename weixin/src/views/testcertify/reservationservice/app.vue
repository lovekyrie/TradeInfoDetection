<template>
  <div id="app">
    <!--地址列表-->
    <div class="addrList" v-if="addrShow">
      <div class="addr" v-for="item in addrList">
        <div>
          <p :class="{select:item.sysAddrPk==addrPk}" @click="addrPk=item.sysAddrPk"></p>
        </div>
        <div>
          <p>
            <span>收货人：</span>
            {{item.receNm}}
          </p>
          <p>
            <span>手机号码：</span>
            {{item.receMob}}
          </p>
          <p>
            <span>详细地址：</span>
            {{item.addrDtl}}
          </p>
        </div>
      </div>
      <div class="button">
        <button @click="save">确定</button>
        <button @click="cancel">取消</button>
      </div>

    </div>

    <div class="main">
      <div class="header">
        <div><span></span><span>检测服务订单信息</span></div>
        <div class="header-title">
          <span>服务照片</span>
          <span>服务名称</span>
        </div>
        <div>
          <div class="img"><img :src="img" alt=""></div>
          <div>
            <span>{{info.mxPubCheckNm}}</span>
          </div>
        </div>
      </div>
      <div class="content">
        <div><span></span><span>联系方式</span></div>
        <div class="concept">
          <div>
            <span>供应商名称：</span>
            <div><input type="text" v-model="info.supply"></div>
          </div>
          <div>
            <span>质检产品名称：</span>
            <div><input type="text" v-model="info.prodNm"></div>
          </div>
          <div>
            <span>数量：</span>
            <div><input type="text" v-model="info.qty"></div>
          </div>
          <div>
            <span>联系人：</span>
            <div><input type="text" v-model="info.contNm"></div>
          </div>
          <div>
            <span>联系电话：</span>
            <div><input type="text" v-model="info.contMob"></div>
          </div>
          <div>
            <span>备注：</span>
            <div>
              <textarea v-model="info.rmks"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div><span></span><span>我的地址</span></div>
        <div class="addr" @click="addrShows()" v-if="addrList.length>0">
          <p>
            <span>收货人：</span>
            {{addr.receNm}}
          </p>
          <p>
            <span>手机号码：</span>
            {{addr.receMob}}
          </p>
          <p>
            <span>详细地址：</span>
            {{addr.addrDtl}}
          </p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
        <p v-else @click="toAddr">添加地址 +</p>
      </div>
    </div>

    <div class="footer" @click="submitOrder">
      <foot-button :btnObj="btnObj"></foot-button>
    </div>
    <upload-success v-show="showUpload" :code="codeUrl"></upload-success>

  </div>
</template>

<script>
import footButton from "components/footButton";
import uploadSuccess from "components/uploadSuccess";
import prosmall from "./images/prosmall.png";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      prosmall,
        img:'',
        addrPk:'',
        addr:{}, //选中的地址
        addrList:[],  //地址列表
        addrShow:false,
        codeUrl:'', //二维码文本
        info:{
            mxOrdDetePk:'',
            sysUserPk:'',//用户主键
            mxPubCheckNm:'', //服务名称
            mxPubCheckPk:'', //服务主键
            sysAddrPk:'', //收货地址主键
            price:'', //价格
            qty:'', //数量
            catCd:'',//支付分类编码
            statCd:'80020.001',//订单状态编码
            rcdTm:'',//下单时间
            supply:'',
            prodNm:'',
            contNm:'',
            contMob:'',
            rmks:''
        },

      detectionName: "CFDA食堂餐厅饭店酒店自制餐饮食品检测",
      btnObj: {
        btnName: "提交订单",
        src: ""
      },
      showUpload:false,
    };
  },
  mounted(){
      this.info.mxPubCheckPk = this.until.getQueryString('pk')
      this.info.mxPubCheckNm = this.until.getQueryString('nm')
      this.info.sysUserPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
      this.img = this.until.getQueryString('img')
      this.getAddr()
  },
  methods: {
      getAddr(){
        this.until.get('/sys/addr/listSelf')
            .then(res=>{
                if(res.status=='200'){
                    this.addrList = res.data.items
                    if(this.addrList.length>0){
                        this.addr = this.addrList[0]
                        this.addrPk = this.addr.sysAddrPk
                    }else {
                        this.$hero.msg.show({
                            text:'请添加收货地址',
                            times:1500
                        });
                    }

                }else {
                    this.$hero.msg.show({
                        text:res.message,
                        times:1500
                    });
                }

            })
      },
      addrShows(){
          this.addrShow = true
      },
      toAddr(){
        window.location.href = '../address/addresslist.html'
      },
      cancel(){
        this.addrPk = this.addr.sysAddrPk
        this.addrShow = false
      },
      save(){
          this.addrList.forEach(item=>{
              if(item.sysAddrPk==this.addrPk){
                  this.addr = item
                  return
              }
          })
          this.addrShow = false
      },
      verification(){
          if(this.info.supply==''){
              console.log(1)
              return false
          }
          if(this.info.prodNm==''){
              console.log(2)
              return false
          }
          if(this.info.qty==''){
              console.log(3)
              return false
          }
          if(this.info.contNm==''){
              console.log(4)
              return false
          }
          if(this.info.contMob==''){
              console.log(5)
              return false
          }
          return true
      },
    submitOrder(){
          if(this.verification()){
              this.$dialog.loading.open()
              this.info.sysAddrPk = this.addrPk
              this.until.postData('/prod/mxordete/edit',JSON.stringify(this.info))
                  .then(res=>{
                      this.$dialog.loading.close()
                      if(res.status=='200'){
                          this.showUpload=true
                          this.codeUrl = this.hostUrl+'/views/code/order.html?code='+res.data
                          setTimeout(()=>{
                              this.showUpload=false
                              window.location.href = '../membercenter/myorder.html'
                          },3000)
                      }else {
                          this.$hero.msg.show({
                              text:res.message,
                              times:1500
                          });
                      }
                  })
          }else {
              this.$hero.msg.show({
                  text:'请补全信息！',
                  times:1500
              });
          }


    }
  },

  components: {
    footButton,
    uploadSuccess,
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
    .addrList{
      position: fixed;
      width:100%;
      height: 100%;
      overflow: auto;
      background: #ffffff;
      z-index: 99;
      .button{
        text-align: center;
        padding:.4rem 0;
        button{
          width: 2rem;
          padding: .2rem 0;
          background: #f6f6f6;
          border-radius: 4px;
          margin: 0 .2rem;
          &:first-child{
            background: #004899;
            color: #fff;
          }
        }
      }
      .addr{
        border-bottom: 1px solid #d2d2d2;
        display: flex;
        display: -webkit-flex;
        padding: .2rem 0;
        div{
          &:first-child{
            padding-right: .2rem;
            padding-left: .2rem;
            padding-top: 5px;
            p{
              width: .2rem;
              height: .2rem;
              border-radius: 100%;
              border: 1px solid #d2d2d2;
            }
            p.select{
              border: 3px solid #004899;
            }
          }
          &:last-child{
            flex: 1;

          }
        }

      }

    }
    .header {
      background-color: #fff;
      margin-bottom: 0.3rem;
      > div {
        padding: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        &:nth-of-type(1) {
          border-bottom: 1px solid #dedede;
          > span:nth-of-type(1) {
            height: 0.3rem;
            width: 2%;
            background-color: #54a6ff;
          }
          > span:nth-of-type(2) {
            font-size: 16px;
            width: 95%;
          }
        }
        &:nth-of-type(2) {
          background: #2A8AF2;
          color: #fff;
          /*color: #9e9e9e;*/
          border-bottom: 1px solid #e9e9e9;
          > span:nth-of-type(1) {
            width: 30%;
          }
          > span:nth-of-type(2) {
            width: 70%;
          }
        }
        &:nth-last-of-type(1) {
          > div:nth-of-type(1) {
            width: 30%;
            height: 2rem;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
            img{
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
            }
          }
          > div:nth-of-type(2) {
            width: 70%;
          }
        }
      }
    }
    .main{
      flex: 1;
      overflow: auto;
    }
    .content {
      background-color: #fff;
      margin-bottom: .3rem;
      >p{
        line-height: 30px;
        border: 1px solid #d2d2d2;
        border-radius: 3px;
        width: 2rem;
        text-align: center;
        margin: 0.2rem;
      }
      .addr{
        position: relative;
        p{
          width: 100%;
        }

        svg{
          position: absolute;
          right: .5rem;
          top:46%
        }
      }
      > div {
        padding: .3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          border-bottom: 1px solid #dedede;
          > span:nth-of-type(1) {
            height: 0.3rem;
            width: 2%;
            background-color: #54a6ff;
          }
          > span:nth-of-type(2) {
            font-size: 16px;
            width: 95%;
          }
        }
        &:nth-of-type(2){
          padding: .3rem;
          >div{
            margin-bottom: .3rem;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            width: 100%;
            >span{
              color: #828282;
              width: 30%;
            }
            >div{
              padding: .2rem 0;
              width: 70%;
              border:  1px solid #E5E5E5;
              >input{
                border: 0;
                width: 100%;
                height: 100%;
              }
            }
            &:nth-last-of-type(1){
              margin-bottom: 0;
              >span{
                margin-top: -.5rem;
              }
              >div{
                height: 1.5rem;
                >textarea{
                  border: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
