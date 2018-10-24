<template>
  <div id="app">
    <div class="header">
      <trade-header :showSearch="showSearch"></trade-header>
    </div>
    <div class="swipper">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in swipperList" :key="item.ID">
          <div>
            <img :src="item.swipper" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="buyer">
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
              <img :src="purchase" alt="">
            </div>
            <div>
              <span>采购查询</span>
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
                <span>人力资源</span>
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
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from 'components/tradeFooter';
import swipper from "./images/swiper.png";
import quality from "./images/质控管理.png";
import purchase from "./images/采购查询.png";
import requirerelease from "./images/需求发布.png";
import humanresource from "./images/人力资源.png";
import buyerdetection from "./images/检测认证及服务指引.png";

export default {
  data() {
    return {
      showSearch:true,
      swipperList: [
        { ID: 1, swipper },
        { ID: 2, swipper },
        { ID: 3, swipper },
        { ID: 4, swipper }
      ],
      quality,
      purchase,
      requirerelease,
      humanresource,
      buyerdetection
    };
  },
  methods: {},
  components: {
    tradeHeader,
    tradeFooter,
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
  #app {
    width: 100%;
    height: 100%;
    .header {
      margin: 0 auto;
      background-color: #fff;
    }
    .swipper {
      width: 1400px;
      margin: 0 auto;
      .el-carousel__container {
        background-color: #fff;
        .el-carousel__item {
          display: -webkit-flex;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          > div {
            width: 100%;
            img {
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .buyer {
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
          width: 820px;
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
            .item-wrap{
              display: -webkit-flex;
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              >div{
                &:nth-of-type(2){
                  margin-left: 10px;
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
