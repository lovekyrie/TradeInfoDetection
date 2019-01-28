<template>
  <div class="seller">
    <swiper></swiper>
    <div class="top-wrap">
      <div class="operate-top">
        <div @click="toQuality">
          <div>
            <img :src="quality" alt="">
          </div>
          <div>
            <span>产品质控</span>
          </div>
        </div>
        <div @click="toEnterpriseEquipment">
          <div>
            <img :src="equipment" alt="">
          </div>
          <div>
            <span>设备分享</span>
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
              <span>质控人才</span>
            </div>
          </div>
        </div>
        <div>
          <div class="item-wrap" @click="toNewProduct">
            <div>
              <img :src="newproduct" alt="">
            </div>
            <div>
              <span>新产品研发人才</span>
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
  import quality from "../images/质控管理.png";
  import requirerelease from "../images/需求发布.png";
  import humanresource from "../images/人力资源.png";
  import buyerdetection from "../images/检测认证及服务指引小.png";
  import newproduct from '../images/新产品研发人才.png'
  import equipment from '../images/设备分享.png'
  import swiper from '../components/swiper'

  export default {
    data() {
      return {
        quality,
        requirerelease,
        humanresource,
        buyerdetection,
        newproduct,
        equipment,
      };
    },
    methods: {
      toQuality() {
        window.location.href = '../buyers/qualitymanage.html'
      },
      toRequireRelease() {
        window.location.href = '../buyers/requirelist.html?type=2'
      },
      toHumanResource() {
        window.location.href = '../buyers/recruitlist.html'
      },
      toDetection() {
        window.location.href = '../buyers/platformdetection.html'
      },
      toEnterpriseEquipment(){
        window.location.href='../seller/enterpriseEquipment.html'
      },
      toNewProduct(){
        window.location.href='../seller/newproducttalent.html'
      }
    },
    components: {
      swiper
    }
  };
</script>

<style lang='less'>
  .seller {
    .top-wrap {
      width: 100%;
      /*margin: 0 auto;*/
      background-color: #fff;
      .operate-top {
        width: 820px;
        margin: 0 auto;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        >div {
          cursor: pointer;
         flex: 1;
          display: -webkit-flex;
          display: flex;
          flex-wrap: nowrap;
          /*justify-content: space-between;*/
          align-items: center;
          >div {
            padding: 40px 0;
            &:nth-of-type(1) {
              padding-right: 15px;
              img{
                width: 75px;
              }
            }
            &:nth-of-type(2) {
              font-size: 20px;
              color: #666666;
              font-weight: lighter;
              width: 55%;
            }
          }
        }
      }
    }
    .buttom-wrap {
      border-top: 1px solid #e3e3e3;
      /*border-bottom: 1px solid #e3e3e3;*/
      width: 100%;
      /*margin: 0 auto;*/
      .operate-buttom {
        width: 1200px;
        margin: 40px auto;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        >div {
          border: 1px solid #e3e3e3;
          /*margin: 30px 0;*/
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
            >div {
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
                span{
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
  }
</style>
