<template>
  <div class="buyer">
    <swiper></swiper>
      <div class="top-wrap">
        <div class="operate-top">
          <div @click="toQuality">
            <div>
              <img :src="quality" alt="">
            </div>
            <div>
              <span>质控管理</span>
            </div>
          </div>
          <div @click="toPurchase">
            <div>
              <img :src="purchase" alt="">
            </div>
            <div>
              <span>采购查询</span>
            </div>
          </div>
          <div @click="toRequireRelease">
            <div>
              <img :src="requirerelease" alt="">
            </div>
            <div>
              <span>需求发布</span>
            </div>
          </div>
        </div>
      </div>
      <div class="buttom-wrap">
        <div class="operate-buttom">
          <div>
            <div class="item-wrap" @click="toHumanResource">
              <div>
                <img :src="humanresource" alt="">
              </div>
              <div>
                <span>人力资源</span>
              </div>
            </div>
          </div>
          <div>
            <div class="item-wrap" @click="toDetection">
              <div>
                <img :src="buyerdetection" alt="">
              </div>
              <div><span>检测认证及服务指引</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import swiper from "../components/swiper";
import quality from "../images/质控管理.png";
import purchase from "../images/采购查询.png";
import requirerelease from "../images/需求发布.png";
import humanresource from "../images/人力资源.png";
import buyerdetection from "../images/检测认证及服务指引小.png";

export default {
  data() {
    return {
      quality,
      purchase,
      requirerelease,
      humanresource,
      buyerdetection
    };
  },
  mounted(){
    // console.log(localStorage.getItem('user'))
  },
  methods:{
    toQuality(){
      window.location.href='../buyers/qualitymanage.html'
    },
    toPurchase(){
      window.location.href='../buyers/purchasequery.html'
    },
    toRequireRelease(){
      window.location.href='../buyers/requirelist.html?type=1'
    },
    toHumanResource(){
      window.location.href='../buyers/recruitlist.html'
    },
    toDetection(){
      window.location.href='../buyers/platformdetection.html'
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang='less'>
.buyer {
  .top-wrap {
    width: 100%;
    padding: 20px 0;
    background-color: #fff;
    .operate-top {
      width: 820px;
      margin: 0 auto;
      display: -webkit-flex;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      > div {
        cursor: pointer;
        width: 30%;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        > div {
          padding: 20px 0;
          &:nth-of-type(1) {
            padding-right: 15px;
            img{
              width: 75px;
            }
            font-size: 24px;
          }
          &:nth-of-type(2) {
            font-size: 20px;
            font-weight: lighter;
            color: #666666;
            /*width: 55%;*/
          }
        }
      }
    }
  }
  .buttom-wrap {
    width: 100%;
    border-top: 1px solid #e3e3e3;
    .operate-buttom {
      width:1200px;
      margin: 0 auto;
      display: -webkit-flex;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      > div {
        border: 1px solid #e3e3e3;
        margin: 40px 20px;
        height: 125px;
        width: 350px;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        cursor: pointer;

        .item-wrap {
          display: -webkit-flex;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          > div {
            &:nth-of-type(1) {
              width: 48px;
              height: 48px;
              img {
                max-width: 100%;
                max-width: 100%;
                width: auto;
                height: auto;
                vertical-align: middle;
              }
            }
            &:nth-of-type(2) {
              margin-left: 10px;
              font-size: 20px;
              font-weight: lighter;
              color: #666666;
            }
          }
        }
      }
    }
  }
}
</style>
