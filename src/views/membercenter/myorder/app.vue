<template>
  <div id="app">  
    <div class="content">
      <detection-order :myOrderList="myOrderList"></detection-order>
    </div>
  </div>
</template>

<script>
import detectionOrder from 'components/detectionOrder'
import twoCode from './images/twocode.png'
export default {
  data(){
    return {
      
      myOrderList:[
        {
          orderNo:'1234909',
          state:'代付款',
          title:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          uploadState:'未上传',
          twoCode,
          releaseDate:'2018-06-06',
          price:'500.00',
        },
         {
          orderNo:'1234909',
          state:'已下单',
          title:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          uploadState:'未上传',
          twoCode,
          releaseDate:'2018-06-06',
          price:'500.00',
        },
         {
          orderNo:'1234909',
          state:'已完成',
          title:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
          uploadState:'未上传',
          twoCode,
          releaseDate:'2018-06-06',
          price:'500.00',
        },
      ]
    }
  },
  methods:{

  },
  components:{
    detectionOrder,
  }
}
</script>

<style lang='less'>
  html,body{
    height: 100%;
    background-color: #f7f7f7;
    #app{
      height: 100%;
    }
  }
</style>
