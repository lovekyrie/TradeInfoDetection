<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#container {
  flex: 1;
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
        > img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      > span {
        font-size: 16px;
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
    position: fixed;
    bottom: 0;
    background-color: #fff;
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
        <!-- head -->
        <div class="header">
            <div class="swipper">
              <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                 <img v-lazy="image" />
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
              <div @click="toTalent">
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
          </div>
        </div>
        <div class="footer">
            <ul>
                <li v-for="(item, index) in footItems" :key="index" @click="chooseType(item)">  
                  <div class="img_icon">
                      <img :src="item.pick" alt="">
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

export default {
  data() {
    return {
      state:"买家中心",
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
  mounted() {},
  methods: {
    chooseType(item){
      this.state=item.name;
      item.pick=item.selectedSrc

      this.footItems.filter(itemImg=>itemImg!==item).forEach(itemI=>{
        itemI.pick=itemI.src;
      })
    },
    toQuanlity(){
      window.location.href='../quality/quality.html'
    },
    toPurchase(){
      window.location.href='../purchase/purchase.html'
    },
    toRequireRelease(){
      window.location.href='../buyrequire/requirerelease.html'
    },
    //平台检测
    toDetectionAndService(){
      window.location.href='../testcertify/platformdetection.html'
    },
    toHumanResource(){
      window.location.href='../hr/humanresource.html'
    },
    toTalent(){
      window.location.href='../servicecenter/talententer.html'
    },
    toPartner(){
      window.location.href='../servicecenter/partnerenter.html'
    },
    toDetectionEnter(){
      window.location.href='../servicecenter/detectionenter.html'
    },
    toPlatform(){
      window.location.href='../servicecenter/platformguide.html'
    },
    toSellerQuality(){
      window.location.href='../seller/quality.html'
    },
    toSellerRelease(){
      window.location.href='../seller/equipmentshare.html'
    },
    toQualityTalent(){
      window.location.href='../seller/humanresource.html'
    },
    toEquipmentShare(){
      window.location.href='../seller/equipmentshare.html'
    },
    toNewProduct(){
      window.location.href='../seller/newproductdevelop.html'
    }
  }
};
</script>

