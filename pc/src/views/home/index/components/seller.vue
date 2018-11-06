<template>
  <div class="seller">
    <swiper></swiper>
      <div class="top-wrap">
        <div class="operate-top">
          <div>
            <div>
              <img :src="quality" alt="">
            </div>
            <div>
              <span>质控管理</span>
            </div>
          </div>
          <div>
            <div>
              <img :src="equipment" alt="">
            </div>
            <div>
              <span>设备分享</span>
            </div>
          </div>
          <div>
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
            <div class="item-wrap">
              <div>
                <img :src="humanresource" alt="">
              </div>
              <div>
                <span>质控人才</span>
              </div>
            </div>
          </div>
          <div>
            <div class="item-wrap">
              <div>
                <img :src="newproduct" alt="">
              </div>
              <div>
                <span>新产品研发人才</span>
              </div>
            </div>
          </div>
          <div>
            <div class="item-wrap">
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
  components:{
    swiper
  }
};
</script>

<style lang='less' scoped>
.seller {
  .top-wrap {
    width: 1400px;
    margin: 0 auto;
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
        width: 30%;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        > div {
          padding: 20px 0;
          &:nth-of-type(1) {
            width: 40%;
          }
          &:nth-of-type(2) {
            font-size: 20px;
            width: 55%;
          }
        }
      }
    }
  }
  .buttom-wrap {
    width: 1400px;
    margin: 0 auto;
    .operate-buttom {
      width: 1200px;
      margin: 0 auto;
      display: -webkit-flex;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      > div {
        margin: 30px 0;
        padding: 15px 0;
        width: 290px;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        .item-wrap {
          display: -webkit-flex;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          > div {
            &:nth-of-type(1){
              width: 48px;
              height: 48px;
              img{
                max-width: 100%;
                max-width: 100%;
                width: auto;
                height: auto;
                vertical-align: middle;
              }
            }
            &:nth-of-type(2) {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
