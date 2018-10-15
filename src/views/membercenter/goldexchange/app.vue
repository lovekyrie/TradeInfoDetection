<template>
  <div id="app">
    <div class="content">
      <detection-product :productList="productList" :pageName="pageName"></detection-product>
    </div>
  </div>
</template>

<script>
import detectionProduct from 'components/detectionProduct'
import product from './images/product.png'

export default {
  data(){
    return {
      pageName:'金币兑换',
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
  methods:{

  },
  components:{
    detectionProduct,
  }
}
</script>

<style lang='less'>

</style>
