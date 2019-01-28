<template>
  <div id="app">
    <div class="content">
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <detection-product :productList="productList" :pageName="pageName"></detection-product>
      </van-list>
    </div>
  </div>
</template>

<script>
import detectionProduct from 'components/detectionProduct'
import product from './images/product.png'

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
    getList(){
        this.loading = true;
        this.until.get('/general/cat/listByPrntCd?prntCd=81010')
            .then(res=>{
                this.loading = false;
                if(res.status == 200){
                    this.total = res.page.total
                    if(this.total==0){
                        this.finished = true;
                        this.dataNo = true
                    }else {
                        this.dataNo = false
                        res.data.items.forEach(item=>{
                            item.crtTm = item.crtTm.split(' ')[0]
                            item.code = this.hostUrl+'/views/code/order.html?code='+item.repoQrCd
                        })
                        this.list.push(...res.data.items)


                    }

                }else {
                    this.$hero.msg.show({
                        text:res.message,
                        times:1500
                    });
                }
            })
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
    detectionProduct,
  }
}
</script>

<style lang='less'>

</style>
