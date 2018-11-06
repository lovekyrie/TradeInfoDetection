<template>
  <div class="service">
    <swiper></swiper>
      <div class="top-wrap">
        <div class="operate-top">
          <div>
            <div>
              <img :src="talent" alt="">
            </div>
            <div>
              <span>人才入驻</span>
            </div>
          </div>
          <div>
            <div>
              <img :src="partner" alt="">
            </div>
            <div>
              <span>合作伙伴入驻</span>
            </div>
          </div>
          <div>
            <div>
              <img :src="orgnization" alt="">
            </div>
            <div>
              <span>检测机构入驻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import talent from '../images/人才入驻.png'
import partner from '../images/合作伙伴入驻.png'
import orgnization from '../images/检测机构入驻.png'
import swiper from '../components/swiper'

export default {
  data() {
    return {
      talent,
      partner,
      orgnization,
    };
  },
  components:{
    swiper,
  }
};
</script>

<style lang='less' scoped>
.service {
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
}
</style>
