<template>
   <div class="goldexchange">
          <p @click="toMyGold" style="text-align: left;padding-left: 20px;margin-bottom: 30px;">
            <i class="el-icon-arrow-left"></i> 返回
          </p>
          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">我的兑换</li>
            <li class="line"><span></span></li>
          </ul>

          <!--兑换列表-->
          <div class="exchange">
            <ul>
              <li>
                <span class="excImg"><a href="#"> <img :src="goldExchange" alt="物品图"></a></span>
                <span class="excDes">河北纺织品有限公司四件套检测报告</span>
                <span class="price">200金币</span>
                <a class="exchangeButton" href="#">立即兑换</a>
              </li>
              <li>
                <span class="excImg"><a href="#"> <img :src="goldExchange" alt="物品图"></a></span>
                <span class="excDes">河北纺织品有限公司四件套检测报告</span>
                <span class="price">200金币</span>
                <a class="exchangeButton" href="#">立即兑换</a>
              </li>
              <li>
                <span class="excImg"><a href="#"> <img :src="goldExchange" alt="物品图"></a></span>
                <span class="excDes">河北纺织品有限公司四件套检测报告</span>
                <span class="price">200金币</span>
                <a class="exchangeButton" href="#">立即兑换</a>
              </li>
            </ul>
          </div>


        </div>
</template>

<script>
import goldExchange from '../images/我的兑换.png'
export default {
  data(){
    return {
      goldExchange,
    }
  },
  methods:{
    toMyGold(){
      this.$router.back(-1)
    }
  }
};
</script>

<style lang='less' scoped>
.goldexchange {
  flex: 5.5;
  background-color: white;
  padding: 20px 20px 50px 20px;
  text-align: center;

  .mainTitle {
    li {
      display: inline-block;
      height: 20px;

      span {
        display: block;
        width: 130px;
        height: 1px;
        background-color: rgb(204, 204, 204);
      }
    }
    .line {
      padding-top: 10px;
    }
    //标题字体
    .title {
      font-size: 20px;
      font-weight: 400;
      margin-left: 40px;
      margin-right: 40px;
    }
  }

  //  兑换列表
  .exchange {
    text-align: center;
    ul {
      margin-top: 20px;

      //列样式
      li {
        display: inline-block;
        text-align: left;
        margin-right: 5%;
        margin-bottom: 10px;

        //兑换按钮
        .exchangeButton {
          display: inline-block;
          padding: 5px 12px;
          margin-top: 10px;
          border-radius: 4px;
          border: 1px solid red;
          color: red;
          font-size: 18px;
          text-align: center;
          text-decoration: none;
        }

        //兑换品描述
        .excDes {
          display: block;
          padding-top: 10px;
          text-align: left;
          font-size: 16px;
        }

        //兑换品图片
        .excImg {
          img {
            width: 270px;
          }
        }

        //  兑换价格
        .price {
          display: block;
          text-align: left;
          padding-top: 10px;
          color: red;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
