<template>
  <div id="app">
      <trade-header :showSearch="showSearch"></trade-header>
    <div class="content">
      <new-product :recruitList="newProductRecruitList"></new-product>
      <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from 'components/tradeHeader'
import tradeFooter from 'components/tradeFooter'
import newProduct from 'components/newProduct'

export default {
  data(){
    return {
      showSearch:true,
      newProductRecruitList:[
        {
          job:'无机分析工程师',
          name:'张三',
          phoneNum:'13599990000',
        },
          {
          job:'无机分析工程师',
          name:'张三',
          phoneNum:'13599990000',
        },
          {
          job:'无机分析工程师',
          name:'张三',
          phoneNum:'13599990000',
        },
          {
          job:'无机分析工程师',
          name:'张三',
          phoneNum:'13599990000',
        },
          {
          job:'无机分析工程师',
          name:'张三',
          phoneNum:'13599990000',
        },
          {
          job:'无机分析工程师',
          name:'张三',
          phoneNum:'13599990000',
        },
          {
          job:'无机分析工程师',
          name:'张三',
          phoneNum:'13599990000',
        },
          {
          job:'无机分析工程师',
          name:'张三',
          phoneNum:'13599990000',
        },
      ]
    }
  },
  components:{
    tradeHeader,
    tradeFooter,
    newProduct,
  }
}
</script>

<style lang='less'>
html,body{
  width: 100%;
  background-color: #fff;
  #app{
    width: 100%;
    .content{
      width: 1200px;
      margin: 110px auto 130px;
        .block {
        margin-top: 20px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
      }
    }
  }
}
</style>
