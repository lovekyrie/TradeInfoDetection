<template>
  <div id="app">
    <div class="content">
      <div class="exchange">
        <span></span><span>兑换记录</span>
      </div>
      <detection-product :productList="productList"></detection-product>
    </div>
  </div>
</template>

<script>
import detectionProduct from 'components/detectionProduct'
import product from './images/product.png'

export default {
  data(){
    return {
       productList:[
         {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          gold:200,
        },
        {
          src: product,
          content: "河北纺织品制造有限公司四件套检测报告",
          gold:200,
        },
      ]
    }
  },
  components:{
    detectionProduct,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
    .content{
      background-color: #fff;
      .exchange{
        padding: 0.3rem 0.4rem .1rem;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
          > span {
            &:nth-of-type(1) {
              width: 2%;
              height: 0.3rem;
              background-color: #54a6ff;
            }
            &:nth-of-type(2) {
              width: 95%;
              font-size: 16px;
            }
          }
      }
    }
  }
}
</style>
