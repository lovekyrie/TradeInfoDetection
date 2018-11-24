<template>
  <div id="app">
    <header-title :title="title"></header-title>
    <key-search @search="search"></key-search>
      <div class="noResult" v-if="dataNo">无查询结果</div>
    <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
            @load="onLoad"
    >
      <product-develop :developList="list"></product-develop>
    </van-list>
    <div class="noResult" v-if="dataFinish">全部加载完</div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import keySearch from "components/keySearch";
import productDevelop from "components/productDevelop";

export default {
  data(){
    return {
      title:'新产品研发人才',
      show: "block",
      show2: "none",
        loading:false,
        finished:false,
        dataNo:false,
        dataFinish:false,
        pageNo:1,
        pageSize:10,
        total:0,
      list: [],
    }
  },
    mounted(){
      this.getList()
    },
  methods:{
//查询
      search(val){
          this.dataFinish = false
          this.dataNo = false
          this.key = val
          this.list = []
          this.pageNo = 1
          this.getList()
      },
      getList(){
          this.loading = true;
          let query = new this.Query();
          query.buildPageClause(this.pageNo,this.pageSize);
          let param = {
              value:this.key,
              query:query.getParam()
          }
          let url = '/prodx/mxpubtale/page'
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
    headerTitle,
    keySearch,
    productDevelop,
  }
}
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#app{
  height: 100%;
  .noResult{
    margin: .2rem 0;
    text-align: center;
  }
 
}
</style>
