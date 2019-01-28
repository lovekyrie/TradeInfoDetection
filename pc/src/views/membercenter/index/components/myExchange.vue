<template>
    <div class="mainRight">

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">我的兑换</li>
            <li class="line"><span></span></li>
          </ul>

          <!--兑换列表-->
          <div class="exchange">
            <ul>
              <!--<li>-->
                <!--<span class="excImg"><a href="#"> <img :src="myexchange" alt="物品图"></a></span>-->
                <!--<span class="excDes">河北纺织品有限公司四件套检测报告</span>-->
                <!--<span class="price">200金币</span>-->
              <!--</li>-->
              <!--<li>-->
                <!--<span class="excImg"><a href="#"> <img :src="myexchange" alt="物品图"></a></span>-->
                <!--<span class="excDes">河北纺织品有限公司四件套检测报告</span>-->
                <!--<span class="price">200金币</span>-->
              <!--</li>-->
              <!--<li>-->
                <!--<span class="excImg"><a href="#"> <img :src="myexchange" alt="物品图"></a></span>-->
                <!--<span class="excDes">河北纺织品有限公司四件套检测报告</span>-->
                <!--<span class="price">200金币</span>-->
              <!--</li>-->


            </ul>
          </div>


        </div>

</template>

<script>
import myexchange from '../images/我的兑换.png'

export default {
  data(){
    return {
      myexchange,
    }
  }
};
</script>

<style lang='less'>
.mainRight {
  flex: 5.5;
  background-color: white;
  padding: 50px 20px;
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
        width: 290px;
        display: inline-block;
        text-align: left;
        margin-right: 15px;
        margin-bottom: 10px;

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
            width: 100%;
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
