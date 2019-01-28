<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="product">
        <div class="proinfo">
          <div>
            <div class="img">
              <img :src="bigImg" alt="">
            </div>
            <p>
              <img :src="item" v-for="item in images" :class="{active:bigImg==item}" @click="bigImg = item"/>
            </p>
          </div>
          <div>
            <div>
              <h3>{{info.nm}}</h3>
              <span>联系方式：{{info.mob}}</span>
            </div>
            <div>
                <span>数量：</span>
                <el-input-number v-model="qty" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
                件
              <el-row>
                <el-button @click="submit">立即购买</el-button>
              </el-row>
            </div>
          </div>
        </div>
        <!--<div class="thumbnail">-->
          <!--<div v-for="(item, index) in images" :key="index">-->
            <!--<img :src="item" alt="" @click="changeImg(item)">-->
          <!--</div>-->
        <!--</div>-->
      </div>
      <div class="detailinfo">
        <h4>商品详情</h4>
        <p>产品参数：{{info.rmks}}</p>
        <p>
          <span>联系人：{{info.cont}}</span>
          <span>联系电话：{{info.mob}}</span>
        </p>
        <div v-html="info.intro">

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
import tradeFooter from "components/tradeFooter";
import detailpro from "./images/detailpro_03.png";
import small1 from "./images/imgS1_03.png";
import small2 from "./images/imgS2_03.png";
import small3 from "./images/imgS3_03.png";

export default {
  data() {
    return {
      pk:'',
      qty: 1,
      images:[],
      bigImg:'',
      info:{}
    };
  },
  mounted(){
    this.pk = this.until.getQueryString('pk')
    this.getInfo()
  },
  methods: {
    submit(){
      if(!this.until.ifLogin()){
        return false
      }
      window.location.href = '../buyers/reservationservice.html?qty='+this.qty+'&nm='+this.info.nm+'&img='+this.bigImg+'&pk='+this.pk
    },
    handleChange(value) {
      // console.log(value);
    },
    getInfo(){
      this.until.get('/prodx/mxpubcheck/info/'+this.pk)
        .then(res=>{
          this.info = res.data
          this.images = this.info.imgUrl.split(',')
          this.bigImg = this.images[0]
        })
    },
    changeImg(val){
      this.bigImg = val
    }
  },
  components: {
    tradeHeader,
    tradeFooter
  }
};
</script>

<style lang='less' scoped>
html,
body {
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 65px auto 0px;
      .product {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          width: 100%;
        }
        .proinfo {
          display: -webkit-flex;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          > div {
            &:nth-of-type(1) {
              width: 420px;
              .img{
                width: 420px;
                height: 420px;
                display: flex;
                display: -webkit-flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 15px;
                img{
                  max-height: 100%;
                  max-width: 100%;
                  height: auto;
                  width: auto;
                }
              }
              p{
                img{
                  width: 90px;
                  height: 90px;
                  border: 1px solid #d2d2d2;
                }
                .active{
                  border: 1px solid #0d55d2;
                }
              }
            }
            &:nth-of-type(2) {
              margin: 30px 0;
              width: 755px;
              height: 400px;
              display: -webkit-flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-content: space-between;
              > div {
                width: 100%;
                &:nth-of-type(1) {
                  h3 {
                    font-size: 24px;
                    margin-bottom: 10px;
                  }
                  span {
                    /*font-size: 16px;*/
                    color: #737373;
                  }
                }
                &:nth-of-type(2){
                  button{
                    padding: 15px 80px;
                    margin-top: 25px;
                    background-color: #0d55d2;
                    font-size: 18px;
                    color: #fff;
                  }
                }
              }
            }
          }
        }
        .thumbnail{
          margin: 20px 0 50px;
          display: -webkit-flex;
          display: flex;
          border: 0;
          >div{
            width: 88px;
            height: 88px;
            &:not(:nth-last-of-type(1)){
              margin-right: 20px;
            }
            img{
              max-width:100%;
              max-height: 100%;
              width: auto;
              height: auto;
              vertical-align: middle;
            }
          }
        }
      }
      .detailinfo{
        margin-top: 40px;
        color: #999999;
        margin-bottom: 20px;
        h4{
          color: #333333;
          font-size: 18px;
          padding-bottom: 15px;
          border-bottom: 1px solid #ddd;
        }
        p{
          margin-top: 20px;
          span{
            &:nth-of-type(2){
              margin-left: 10%;
            }
          }
        }
        >div{
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
