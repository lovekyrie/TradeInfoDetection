<template>
  <div id="app">  
    <div class="content">
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <detection-order :myOrderList="list"></detection-order>

      </van-list>
    </div>
  </div>
</template>

<script>
import detectionOrder from 'components/detectionOrder'
import twoCode from './images/twocode.png'
export default {
  data(){
    return {
        loading:false,
        finished:false,
        dataNo:false,
        dataFinish:false,
        pageNo:1,
        pageSize:10,
        total:0,
        list: [],
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
    mounted(){
      this.getList()
    },
  methods:{
      getList(){
          this.loading = true;
          let query = new this.Query();
          query.buildPageClause(this.pageNo,this.pageSize);
          let param = {
              query:query.getParam()
          }
          let url = '/prod/mxordete/pageSelf'
          this.until.get(url,param)
              .then(res=>{
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      if(this.total==0){
                          this.dataNo = true
                      }else {
                          this.dataNo = false

                          this.list.push(...res.data.items)


                      }

                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              },err=>{});
      },
      //加载更多
      onLoad(){
          // 异步更新数据
          setTimeout(() => {
              let length = this.list.length
              if(this.total>length){
                  this.pageNo++
                  this.getList()
              }else {
                  this.dataFinish = true
                  this.loading = false;
                  this.finished = true;
              }
          }, 500);
      },
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
