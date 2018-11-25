<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="product">
        <div class="proinfo">
          <div>
            <img :src="detailpro" alt="">
          </div>
          <div>
            <div>
              <h3>{{title}}</h3>
              <span>联系方式：{{phone}}</span>
            </div>
            <div>
              <template>
                <span>数量：</span>
                <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
              </template>
              <el-row>
                <el-button>立即购买</el-button>
              </el-row>
            </div>
          </div>
        </div>
        <div class="thumbnail">
          <div v-for="(item, index) in samllArr" :key="index">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
      <div class="detailinfo">
        <h4>商品详情</h4>
        <p>产品参数：{{proParam}}</p> 
        <p>
          <span>联系人：{{linkedMan}}</span>
          <span>联系电话：{{linkedPhone}}</span>
        </p>
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
      small1,
      small2,
      small3,
      detailpro,
      title: "儿童家具质量评审儿童家具质检",
      phone: "0574-88889999",
      proParam: "CFDA食堂餐厅饭店自制饮食产品检测",
      linkedMan: "张三",
      linkedPhone: "13599990000",
      samllArr: [small1, small2, small3],
      num8: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  },
  components: {
    tradeHeader,
    tradeFooter
  }
};
</script>

<style lang='less'>
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
              img {
                max-height: 100%;
                max-width: 100%;
                height: auto;
                width: auto;
                vertical-align: middle;
              }
            }
            &:nth-of-type(2) {
              margin: 30px 0;
              width: 755px;
              display: -webkit-flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-content: space-between;
              > div {
                width: 100%;
                &:nth-of-type(1) {
                  h3 {
                    font-size: 20px;
                    margin-bottom: 10px;
                  }
                  span {
                    font-size: 16px;
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
        font-size: 16px;
        h4{
          padding-bottom: 10px;
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
      
      }
    }
  }
}
</style>
