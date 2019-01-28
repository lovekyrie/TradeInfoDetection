<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}
/*canvas{*/
    /*width: 20%!important;*/
/*}*/
#container {
  display: flex;
    display: -webkit-flex;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    .main{
        flex: 1;
        overflow: auto;
    }
  .swipper {
    width: 100%;
    height: 25%;
    .van-swipe {
      background-color: #fff;
      .van-swipe-item {
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
  .top-operate {
    padding: 0.4rem 0;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    background-color: #fff;
    > div {
      width: 20%;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        width: 100%;
          text-align: center;
        > img {
          width: auto;
          height: auto;
          max-width: 80%;
          max-height: 100%;
        }
      }
      > span {
        /*font-size: 16px;*/
        width: 100%;
        text-align: center;
      }
    }
  }
  .mid-operate {
    margin-top: 0.3rem;
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;
    background-color: #fff;
    .mid-wrap {
      margin-left: 0.4rem;
      display: -webkit-flex;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      > div {
        padding: 0.2rem 0;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          border-bottom: 1px solid #dddddd;
        }
        > div:nth-of-type(1) {
          height: 1rem;
          width: 15%;
            align-items: center;
            justify-content: center;
            display: flex;
            display: -webkit-flex;
          > img {
            width: 0.7rem;
            /*height: auto;*/
            /*max-width: 100%;*/
            /*max-height: 100%;*/
          }
        }
        > div:nth-of-type(2) {
          width: 50%;
        }
        > svg {
          width: 20%;
        }
      }
    }
  }
  .person-info{
    padding: .4rem .6rem;
    display: -webkit-flex;
    display: flex;
    flex-wrap:nowrap;
    align-items: center;
    >div{
      &:nth-of-type(1){
        width: 70%;
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
        >div{
          width: 100%;
          &:nth-of-type(1){
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            >div{
              &:nth-of-type(1){
                width: 30%;
                height: 1.4rem;
                background: url("./img/头像.png") no-repeat;
                background-size: cover;
               input{
                 border: 0;
                 width: 100%;
                 height: 100%;
                 opacity: 0;
               }
              }
              &:nth-of-type(2){
                width: 60%;
                h3{
                  font-weight: 400;
                  font-size: 16px;
                }
                span{
                  color: #54a6ff;
                }
              }
            }
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .2rem;
          }
        }
      }
      &:nth-of-type(2){
        width: 30%;
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
        >div{
          width: 100%;
          text-align: center;
          &:nth-of-type(1){
            margin-bottom: .2rem;
            >img{
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }
    }
  }
   .center-operate {
    margin-top: 0.3rem;
    border-top: 1px solid #f6f6f6;
    border-bottom: 1px solid #f6f6f6;
    background-color: #fff;
    .mid-wrap {
      margin-left: 0.4rem;
      display: -webkit-flex;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      > div {
        padding: 0.3rem 0;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &:not(:nth-last-of-type(1)) {
          border-bottom: 1px solid #dddddd;
        }
        > div:nth-of-type(1) {
          height: 20px;
          width: 20px;
          text-align: center;
          > img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
          }
        }
        > div:nth-of-type(2) {
          width: 50%;
        }
        > svg {
          width: 20%;
        }
      }
    }
  }
    .commu{
      margin-top: 0.2rem;
        border-top: 1px solid #F0F0F0;
        border-bottom: 1px solid #F0F0F0;
        height: 1.6rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        background: #ffffff;
        img{
            width: 0.6rem;
            margin-right: .3rem;
            margin-left: 0.5rem;
        }
        div:nth-child(2){
            flex: 1;
        }
        svg{
            margin-right: 0.5rem;
            width: 0.4rem!important;
            height: 0.4rem !important;
        }
    }
  .seller-content,
  .service-content{
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    >div{
      padding: .4rem 0;
      width: 50%;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #F0F0F0;
      border-right: 1px solid #F0F0F0;
      &:nth-of-type(2),
      &:nth-of-type(4){
        border-right: 0;
      }
      >div{
        width: 30%;
        margin-left: .3rem;
        >img{
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
        }
      }
      >span{
        width: 50%;
      }
    }
  }
  .footer {
    width: 100%;
    padding: 0.2rem 0;
    background-color: #fff;
    border-top:1px solid #d4d4d4;
    > ul {
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      > li {
        width: 20%;
        > div {
          text-align: center;
            img{
                width: 0.4rem;
            }
          >.active{
            color: #54A6FF;
          }
        }
      }
    }
  }
}
</style>

<template>
    <div id="container">

        <div class="main">
            <!-- head -->
            <div class="header" v-if="state!='会员中心'">
                <div class="swipper">
                    <van-swipe :autoplay="3000">
                        <van-swipe-item v-for="(image, index) in images" :key="index">
                            <img v-lazy="image.srcUrl+'?imageView2/q/<Quality>'" />
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div class="content">
                <div class="buy" v-if="state==='买家中心'">
                    <div class="top-operate">
                        <!-- 质控管理 -->
                        <div class="quality" @click="toQuanlity">
                            <div class="img_icon">
                                <img :src="qualityimg" alt="">
                            </div>
                            <span>质控管理</span>
                        </div>
                        <!-- 采购查询 -->
                        <div class="purchase" @click="toPurchase">
                            <div class="img-icon">
                                <img :src="purchaseimg" alt="">
                            </div>
                            <span>采购查询</span>
                        </div>
                        <!-- 需求发布 -->
                        <div class="publish" @click="toRequireRelease">
                            <div class="img-icon">
                                <img :src="publishimg" alt="">
                            </div>
                            <span>需求发布</span>
                        </div>
                    </div>
                    <div class="mid-operate">
                        <div class="mid-wrap">
                            <div @click="toDetectionAndService">
                                <div>
                                    <img :src="guideimg">
                                </div>
                                <div>检测认证及服务指引</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toHumanResource">
                                <div>
                                    <img :src="hrimg">
                                </div>
                                <div>人力资源</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="seller" v-if="state==='卖家中心'">
                    <div class="seller-content">
                        <div @click="toSellerQuality">
                            <div><img :src="productquality" alt=""></div>
                            <span>产品质控</span>
                        </div>
                        <div @click="toSellerRelease">
                            <div><img :src="requirerelease" alt=""></div>
                            <span>需求发布</span>
                        </div>
                        <div @click="toQualityTalent">
                            <div><img :src="qualitytalent" alt=""></div>
                            <span>质控人才</span>
                        </div>
                        <div @click="toEquipmentShare">
                            <div><img :src="equimentshare" alt=""></div>
                            <span>设备分享</span>
                        </div>
                    </div>
                    <div class="mid-operate">
                        <div class="mid-wrap">
                            <div @click="toNewProduct">
                                <div>
                                    <img :src="newproductdevelop">
                                </div>
                                <div>新产品研发人才</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toDetectionAndService">
                                <div>
                                    <img :src="guideimg">
                                </div>
                                <div>检测认证及服务指引</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service" v-if="state==='服务中心'">
                    <div class="service-content">
                        <div @click.stop="toTalent">
                            <div><img :src="talentimg" alt=""></div>
                            <span>人才入驻</span>
                        </div>
                        <div @click="toPartner">
                            <div><img :src="partnerimg" alt=""></div>
                            <span>合作伙伴入驻</span>
                        </div>
                        <div @click="toDetectionEnter">
                            <div><img :src="detectionimg" alt=""></div>
                            <span>检测机构入驻</span>
                        </div>
                        <div @click="toPlatform">
                            <div><img :src="platformimg" alt=""></div>
                            <span>平台指引</span>
                        </div>
                    </div>
                    <div @click="toCom" class="commu">
                        <div>
                            <img :src="comImg">
                        </div>
                        <div>交流讨论区</div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo"></use>
                        </svg>
                    </div>
                </div>
                <div class="center" v-if="state==='会员中心'">
                    <div class="person-info">
                        <div>
                            <div>
                                <div>
                                    <input type="file">
                                </div>
                                <div>
                                    <h3>{{myInfo.usNm}}</h3>
                                    <span @click="countManger">账号管理></span>
                                </div>
                            </div>
                            <div><span>手机号：{{myInfo.mob}}</span></div>
                            <div><span>邮箱：{{myInfo.email}}</span></div>
                        </div>
                        <div>
                            <!--<div id="qrcode" ref="qrcode"></div>-->
                            <vue-qr
                                    :text="url"
                                    :margin="0"
                                    :size="232"></vue-qr>
                            <div><span>我的推荐码</span></div>
                        </div>
                    </div>
                    <div class="top-operate">
                        <!-- 我的金币 -->
                        <div class="quality" @click="toGoldIcon">
                            <div class="img_icon">
                                <img :src="goldicon" alt="">
                            </div>
                            <span>我的金币</span>
                        </div>
                        <!-- 我的订单 -->
                        <div class="purchase" @click="toOrder">
                            <div class="img-icon">
                                <img :src="order" alt="">
                            </div>
                            <span>我的订单</span>
                        </div>
                        <!-- 我的报告 -->
                        <div class="publish" @click="toReport">
                            <div class="img-icon">
                                <img :src="report" alt="">
                            </div>
                            <span>我的报告</span>
                        </div>
                    </div>
                    <div class="center-operate">
                        <div class="mid-wrap">
                            <div @click="toRecommended">
                                <div>
                                    <img :src="recommended">
                                </div>
                                <div>我的推荐</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toExchange">
                                <div>
                                    <img :src="exchange">
                                </div>
                                <div>我的兑换</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toCollect">
                                <div>
                                    <img :src="collect">
                                </div>
                                <div>我的收藏</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toEntry">
                                <div>
                                    <img :src="entry">
                                </div>
                                <div>我的入驻</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toMyJob" v-if="type==1">
                                <div>
                                    <img :src="talent">
                                </div>
                                <div>人才信息</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toTalentInformation" v-if="type==2">
                                <div>
                                    <img src="./img/我的发布.png">
                                </div>
                                <div>我的发布</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toJob" v-if="type==2">
                                <div>
                                    <img :src="talent">
                                </div>
                                <div>招聘信息</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toEquipment">
                                <div>
                                    <img :src="equipment">
                                </div>
                                <div>设备信息</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toAddress">
                                <div>
                                    <img :src="address">
                                </div>
                                <div>收货地址管理</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toChangepwd">
                                <div>
                                    <img :src="changepwd">
                                </div>
                                <div>修改密码</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                            <div @click="toLoginout">
                                <div>
                                    <img :src="loginout">
                                </div>
                                <div>注销</div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-gengduo"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <ul>
                <li v-for="(item, index) in footItems" :key="index" @click="chooseType(item)">  
                  <div class="img_icon">
                      <img :src="item.selectedSrc" v-if="state==item.name">
                      <img :src="item.pick" alt="" v-else>
                    </div>
                    <div>
                      <span :class="{active:state==item.name}">{{item.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import swiper1 from "./img/swiper1.png";
import swiper2 from "./img/swiper2.png";
import swiper3 from "./img/swiper3.png";
import swiper4 from "./img/swiper4.png";
import qualityimg from "./img/质控管理.png";
import purchaseimg from "./img/采购查询.png";
import publishimg from "./img/需求发布-买家.png";
import guideimg from "./img/检测认证.png";
import hrimg from "./img/人力资源.png";
import buygray from "./img/买家中心-灰.png";
import buyimg from "./img/买家中心.png";
import sellgray from "./img/卖家中心-灰.png";
import sellimg from "./img/卖家中心.png";
import servicegray from "./img/服务中心-灰.png";
import serviceimg from "./img/服务中心.png";
import vipgray from "./img/会员中心-灰.png";
import vipimg from "./img/会员中心.png";
import talentimg from './img/人才入驻.png'
import partnerimg from './img/合作伙伴入驻.png'
import detectionimg from './img/检测机构入驻.png'
import platformimg from './img/平台指引.png'
import productquality from './img/产品质控.png'
import requirerelease from './img/需求发布.png'
import qualitytalent from './img/质控人才.png'
import equimentshare from './img/设备分享.png'
import newproductdevelop from './img/新产品研发.png'
import goldicon from './img/我的金币.png'
import order from './img/我的订单.png'
import report from './img/我的报告.png'
import recommended from './img/我的推荐.png'
import exchange from './img/我的兑换.png'
import collect from './img/我的收藏.png'
import entry from './img/我的入驻.png'
import talent from './img/人才信息.png'
import equipment from './img/设备信息.png'
import address from './img/收货地址.png'
import changepwd from './img/修改密码.png'
import loginout from './img/注销.png'
import centercode from './img/会员中心二维码_03.png'
import headerimg from './img/头像.png'
import comImg from './img/交流讨论区.png'
// import QRCode from 'qrcodejs2'
import VueQr from 'vue-qr'
export default {
  data() {
    return {
        comImg,
        url: '',
      state:"买家中心",
        userPk:'',
        type:'', //个人还是企业 1是个人 2是企业
        type2:'', //入驻分类 40000.150合作伙伴 40000.160检测机构  40000.170个人  主要用于分别企业身份是合作伙伴是检测机构  0还没有入驻
        myState:'',//企业入驻状态 50000.100通过 50000.200未通过 50000.300拒绝
        myInfo:{},
      qualityimg,
      purchaseimg,
      publishimg,
      guideimg,
      hrimg,
      buygray,
      buyimg,
      sellgray,
      sellimg,
      servicegray,
      serviceimg,
      vipgray,
      vipimg,
      talentimg,
      partnerimg,
      detectionimg,
      platformimg,
      productquality,
      requirerelease,
      qualitytalent,
      equimentshare,
      newproductdevelop,
      goldicon,
      order,
      report,
      recommended,
      exchange,
      collect,
      entry,
      talent,
      equipment,
      address,
      changepwd,
      loginout,
      centercode,
      headerimg,
      images: [swiper1, swiper2, swiper3, swiper4],
      footItems: [
        {
          name: "买家中心",
          src: buygray,
          selectedSrc:buyimg,
          pick:buygray,
        },
        {
          name: "卖家中心",
          src: sellgray,
          selectedSrc:sellimg,
          pick:sellgray,
        },
        {
          name: "服务中心",
          src: servicegray,
          selectedSrc:serviceimg,
          pick:servicegray,
        },
        {
          name: "会员中心",
          src: vipgray,
          selectedSrc:vipimg,
          pick:vipgray
        }
      ]
    };
  },
  components:{
      // QRCode
      VueQr
  },
  created(){
      this.getImg()
  },
  mounted() {

      let wxCode = this.until.getQueryString('code')

      if(wxCode){
          this.until.seSave('wxCode',wxCode)
          // localStorage.removeItem('user')
      }
      // console.log(this.until.seGet('wxCode'))
      this.state = this.until.loGet('state')?this.until.loGet('state'):'买家中心'
      let info=JSON.parse(this.until.loGet('user'))
      console.log(info)
      if(info){
          this.userPk = info.sysUserPk
          this.url = this.hostUrl+'/views/system/register.html?recomCode='+this.userPk
           this.getInfo()
      }else {
          this.state = '买家中心'
      }

  },
  methods: {
      //获取轮播图
      getImg(){
          this.$dialog.loading.open()
        this.until.get('/sys/ad/list?catCd=30040.150')
            .then(res=>{
                this.$dialog.loading.close()
                this.images = res.data.items
            })

      },
      //获取个人信息
      getInfo(){
          this.$dialog.loading.open()
          this.until.get('/sys/user/info/'+this.userPk)
              .then(res=>{
                  this.$dialog.loading.close()
                  if(res.status == '200'){
                      this.myInfo = res.data
                      this.type = this.myInfo.arg1
                      // console.log(this.type)
                      if(this.type==2){
                          this.getType()
                      }else {
                          this.until.loSave('userInfo',JSON.stringify(this.myInfo));
                      }
                  }else {  //个人信息获取失败，则判断为登录失效，界面返回为买家中心（防止退出前是个人中心页面），移除保存的个人信息
                      this.state = '买家中心'
                      localStorage.removeItem('user')
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              })
      },
      //企业身份判断
      getType(){
        this.until.get('/prodx/mxentp/info/'+this.userPk)
            .then(res=>{
                if(res.status=='200'){
                    this.myState = res.data.statCd
                    this.type2 = res.data.catCd
                    this.myInfo.type2 = res.data.catCd
                    this.myInfo.entpPk = res.data.mxEntpPk
                    this.myInfo.entpNm = res.data.nm
                    this.until.loSave('userInfo',JSON.stringify(this.myInfo));
                }else {
                    this.type2 = 0
                    this.until.loSave('userInfo',JSON.stringify(this.myInfo));
                }
            })
      },
    chooseType(item){
      if(item.name=='会员中心'){
            if(!this.until.ifLogin()){
                return  false
            }

          // this.until.ifLogin()
      }
      this.until.loSave('state',item.name)
      this.state=item.name;
      item.pick=item.selectedSrc

      this.footItems.filter(itemImg=>itemImg!==item).forEach(itemI=>{
        itemI.pick=itemI.src;
      })
    },
      countManger(){
          window.location.href = '../system/accountmanage.html'
      },
    toQuanlity(){
      window.location.href='../quality/quality.html'
    },
      //人才信息
      toMyJob(){
            window.location.href = '../hr/myJob.html'
      },
      //交流讨论区
      toCom(){
          window.location.href = '../servicecenter/communication.html'
      },
      //我的入驻
      toEntry(){
          if(this.type==1){  //个人入驻
              this.until.get('/prodx/mxpers/infosize/'+this.userPk)
                  .then(res=>{
                      let myData = res.data.items[0]
                      if(myData.statCd=='50000.100'){  //审核通过
                          window.location.href = '../servicecenter/talententersuc.html'
                      }else {  //待审核及审核未通过，未入驻
                          window.location.href='../servicecenter/talententer.html?type=edit'
                      }
                  })
          }else {
              if(this.type2==0){
                  this.$hero.msg.show({
                      text:'您还提交未入驻，请先入驻！',
                      times:1500
                  });
              }else if(this.type2=='40000.150'){
                  if(this.myState=='50000.100'){
                      window.location.href='../servicecenter/partnerentersuc.html'
                  }else {
                      window.location.href='../servicecenter/partnerenter.html?type=edit'
                  }
              }else {
                  if(this.myState=='50000.100'){
                      window.location.href='../servicecenter/detectionentersuc.html'
                  }else {
                      window.location.href='../servicecenter/detectionenter.html?type=edit'
                  }
              }
          }
      },
    toPurchase(){
      window.location.href='../purchase/purchase.html'
    },
    toRequireRelease(){
        //买家需求报告
       window.location.href='../buyrequire/requirerelease.html?type=1'

    },
    //平台检测
    toDetectionAndService(){
      window.location.href='../testcertify/platformdetection.html'
    },
      //招聘
      toJob(){
          window.location.href = '../membercenter/recruitmentinfo.html'
      },
    toHumanResource(){
      window.location.href='../hr/humanresource.html'
    },
      //个人入驻
    toTalent(){
        if(!this.until.ifLogin()){
            return false
        }
        if(this.type==1){
            this.until.get('/prodx/mxpers/infosize/'+this.userPk)
                .then(res=>{
                    let myData = res.data.items[0]

                    if(myData.statCd=='50000.100'){  //审核通过
                        window.location.href = '../servicecenter/talententersuc.html'
                    }else {  //待审核及审核未通过,未入驻
                        window.location.href='../servicecenter/talententer.html?type=edit'
                    }

                })
        }else {
            this.$hero.msg.show({
                text:'请选择企业入驻！',
                times:1500
            });
        }
    },
      //合作伙伴入驻
    toPartner(){
        if(!this.until.ifLogin()){
            return false
        }
        if(this.type==2){
            if(this.type2==0){  //未入驻时
                window.location.href='../servicecenter/partnerenter.html'
            }else if(this.type2=='40000.150'){
                if(this.myState=='50000.100'){
                    window.location.href='../servicecenter/partnerentersuc.html'
                }else {
                    window.location.href='../servicecenter/partnerenter.html?type=edit'
                }
            }else {
                this.$hero.msg.show({
                    text:'您已入驻检测机构！',
                    times:1500
                });
            }
        }else {
            this.$hero.msg.show({
                text:'请选择个人入驻！',
                times:1500
            });
        }
    },
      //检测机构入驻
    toDetectionEnter(){
        if(!this.until.ifLogin()){
            return false
        }
        if(this.type==2){
            if(this.type2==0){
                window.location.href='../servicecenter/detectionenter.html'
            }else if(this.type2=='40000.160'){
                if(this.myState=='50000.100'){
                    window.location.href='../servicecenter/detectionentersuc.html'
                }else {
                    window.location.href='../servicecenter/detectionenter.html?type=edit'
                }
            }else {
                this.$hero.msg.show({
                    text:'您已入驻合伙伙伴！',
                    times:1500
                });
            }
        }else {
            this.$hero.msg.show({
                text:'请选择个人入驻！',
                times:1500
            });
        }


    },
    toPlatform(){
      window.location.href='../servicecenter/platformguide.html'
    },
    toSellerQuality(){
      window.location.href='../seller/quality.html'
    },
    toSellerRelease(){
        //卖家需求
        window.location.href='../buyrequire/requirerelease.html?type=2'
    },
    toQualityTalent(){
      window.location.href='../seller/humanresource.html'
    },
    toEquipmentShare(){
        window.location.href='../seller/equipmentshare.html'
    },
    toNewProduct(){
      window.location.href='../seller/newproductdevelop.html'
    },
    toGoldIcon(){
      window.location.href='../membercenter/mygoldcoin.html'
    },
    toOrder(){
      window.location.href='../membercenter/myorder.html'
    },
    toReport(){
      window.location.href='../membercenter/myreport.html'
    },
    toRecommended(){
      window.location.href='../membercenter/myrecommended.html'
    },
    toExchange(){
      window.location.href='../membercenter/myexchange.html'
    },
    toCollect(){
      window.location.href='../membercenter/mycollect.html'
    },
    toEquipment(){
        if(this.type==1){
            window.location.href='../membercenter/equipmentper.html'
        }else {
            window.location.href='../membercenter/equipmentinfo.html'
        }
    },
    toAddress(){
      window.location.href='../address/addresslist.html'
    },
    toChangepwd(){
      window.location.href='../system/changepwd.html'
    },
    toLoginout(){
        this.until.loRemove('user')
        this.until.get('/wxMp/access/logout')
            .then(res=>{
                if(res.status=='200'){
                    this.until.loRemove('userInfo')
                    this.until.loRemove('user')
                    // this.until.seRemove('wxCode')
                    this.$hero.msg.show({
                        text:'注销成功！',
                        times:1500
                    });
                    WeixinJSBridge.call('closeWindow')
                    // window.location.href='../system/login.html'
                }else {
                    this.$hero.msg.show({
                        text:res.msg,
                        times:1500
                    });
                }

            })
    },
      toTalentInformation(){
          if(this.type2 == '40000.150'){
              window.location.href='../servicecenter/partnerList.html'
          }else {
              window.location.href = '../servicecenter/detectionorglist.html'
          }
    }
  }
};
</script>

