<template>
  <div id="app">
    <guide @submit="submit" @cancel="cancel" v-if="guideShow"></guide>
    <header-title :title="title" :littleTitle="littleTitle"></header-title>
    <div class="detection-wrap">
      <div class="detection" @click="guideShow = true">
        检测认证指引
      </div>
    </div>
    <div class="detection-bar">
      <span>综合</span>
      <span>销量</span>
      <div @click="type=!type">
        <img :src="sellCount" alt="">
      </div>
    </div>
    <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
            @load="onLoad"
    >
      <detection-product :productList="list"></detection-product>
      <div class="load-more" v-if="dataNo">
        <span>暂无数据</span>
      </div>
      <div class="load-more" v-if="dataFinish">
        <span>全部加载完</span>
        <!--<svg class="icon" aria-hidden="true">-->
        <!--<use xlink:href="#icon-gengduo"></use>-->
        <!--</svg>-->
      </div>
    </van-list>

  </div>  
</template>

<script>
import headerTitle from "components/headerTitle";
import guide from "components/guide";
import sellCount from "./images/销量.png";
import detectionProduct from "components/detectionProduct";

export default {
  data() {
    return {
      title: "检测认证及服务指引",
      littleTitle: "三方检测",
        key:'',//选项编码
      sellCount,
        guideShow:false,
        type:false,  //排序方式
      loading:false,
          finished:false,
          dataNo:false,
          dataFinish:false,
          pageNo:1,
          pageSize:10,
          total:0,
          list: [],
    };
  },
    mounted(){
      this.getList()
    },
  methods: {
      getList(){
          this.loading = true;
          let query = new this.Query();
          query.buildPageClause(this.pageNo,this.pageSize);
          let param = {
              value:this.key,
              order:this.type,
              query:query.getParam()
          }
          let url = '/prodx/mxpubcheck/page'
          this.until.get(url,param)
              .then(res=>{
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      if(this.total==0){
                          this.dataNo = true
                      }else {
                          this.dataNo = false
                          if(this.total<=this.pageSize){
                              this.dataFinish = true
                              this.finished = true;
                          }
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
      submit(val){
          this.list = []
          this.pageNo = 1
          this.dataFinish = false
          this.dataNo = false
          this.key = val
          this.getList()
          this.guideShow = false
      },
      cancel(){
          this.guideShow = false
      }
  },
    watch:{
        type:function () {
            this.dataFinish = false
            this.dataNo = false
            this.list = []
            this.pageNo = 1
            this.getList()
        }
    },
  components: {
    headerTitle,
    detectionProduct,
      guide
  }
};
</script>

<style lang="less">
html,
body {
  background-color: #f7f7f7;
  height: 100%;
  #app {
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    overflow: hidden;
    .van-list{
      flex: 1;
      overflow: auto;
    }
    .detection-wrap {
      padding: 0.3rem 0.4rem;
      background-color: #fff;
      .detection {
        font-size: 16px;
        text-align: center;
        padding: 0.2rem 0;
        color: #fff;
        background-color: #ff6a21;
        border-radius: 3px;
      }
    }
    .detection-bar {
      padding: 0.2rem 0.4rem;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      color: #afafaf;
      > span:nth-of-type(1) {
        text-align: center;
        width: 20%;
      }
      > span:nth-of-type(2) {
         text-align: center;
        width: 25%;
      }
      > div {
        position: relative;
        width: 55%;
        height: 14px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          height: auto;
          width: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .load-more {
      margin: 0.2rem;
      text-align: center;
    }
  }
}
</style>

