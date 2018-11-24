<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <key-search @search="search"></key-search>
    <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
            @load="onLoad"
    >
       <require-publish :releaseList="releaseList"></require-publish>
      <div class="load-more" v-if="dataNo">
        <span>无查询结果</span>
      </div>
      <div class="load-more" v-if="dataFinish">
        <span>全部加载完</span>
      </div>
    </van-list>
    <footer @click="submit">
      发布需求
    </footer>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import keySearch from "components/keySearch";
import requirePublish from "components/requirePublish";
import footButton from "components/footButton";

export default {
  data() {
    return {
      title:'需求发布',
        type:'',
        key:'',
        dataFinish:false,
        dataNo:false,
        pageNo:1,
        pageSize:15,
        loading:false,
        finished:false,
      btnObj:{
        btnName:'发布需求',
        src:'',
      },
      releaseList: []
    };
  },
    mounted(){
      this.type = this.until.getQueryString('type')
        this.getList()
    },
  methods: {
      getList(){
          this.loading = true;
          let query = new this.Query();
          query.buildPageClause(this.pageNo,this.pageSize);
          let param = {
              type:this.type,
              value:this.cityCode1,
              query:query.getParam()
          }
          this.until.get('/prodx/mxpubreq/page',param)
              .then(res=>{
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      if(this.total==0){
                          this.dataNo = true
                      }else {
                          this.dataNo = false
                          res.data.items.forEach(item=>{
                              item.userCrtTm=item.userCrtTm.slice(0,9)
                              item.state = new Date(item.rcdTm) > new Date ? true: false
                              if(!item.state){
                                  item.contMob = item.contMob.slice(0,2)+'********'
                              }
                          })
                          this.releaseList.push(...res.data.items)

                      }

                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              },err=>{});
      },
      //查询
      search(val){
          this.dataFinish = false
          this.dataNo = false
          this.key = val
          this.releaseList = []
          this.pageNo = 1
          this.getList()
      },
      //加载更多
      onLoad(){
          // 异步更新数据
          setTimeout(() => {
              if(this.total>this.releaseList.length){
                  this.pageNo++
                  this.getList()
              }else {
                  this.dataFinish = true
                  this.loading = false;
                  this.finished = true;
              }
          }, 500);
      },
      submit(){
          console.log('11111111')
        window.location.href = 'addrequirerelease.html'
      }
  },
  components: {
    keySearch,
    requirePublish,
    footButton,
    headerTitle,
  }
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    display: flex;
    display: -webkit-flex;
    overflow: hidden;
    flex-direction: column;
    .van-list{
      flex: 1;
      overflow: auto;
    }
    .load-more {
      margin-top: 0.2rem;
      text-align: center;
    }
    footer{
      padding: .2rem 0;
      bottom: 0;
      width: 100%;
      font-size: 16px;
      background-color: #2A8AF2;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
