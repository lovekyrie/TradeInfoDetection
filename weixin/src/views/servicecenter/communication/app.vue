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
       <communication :releaseList="releaseList"></communication>
      <div class="load-more" v-if="dataNo">
        <span>无查询结果</span>
      </div>
      <div class="load-more" v-if="dataFinish">
        <span>全部加载完</span>
      </div>
    </van-list>
    <footer @click="submit">
      我要发布
    </footer>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import keySearch from "components/keySearch";
import communication from "components/communication";
import footButton from "components/footButton";

export default {
  data() {
    return {
      title:'交流讨论',
        key:'',
        dataFinish:false,
        dataNo:false,
        pageNo:1,
        pageSize:15,
        total:0,
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
        this.until.pushHistory();
        this.getList()
    },
  methods: {
      getList(){
          this.$dialog.loading.open()
          this.loading = true;
          // let query = new this.Query();
          // query.buildPageClause(this.pageNo,this.pageSize);
          let page = {
              p:{
                  n:this.pageNo,
                  s:this.pageSize
              }
          }
          let param = {
              query:JSON.stringify(page),
              value:this.key,
              // query:query.getParam(),
          }
          this.until.get('/prod/wxcomux/wxPage',param)
              .then(res=>{
                  this.$dialog.loading.close()
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      if(this.total==0){
                          this.finished = true;
                          this.dataNo = true
                      }else {
                          this.dataNo = false
                          res.data.items.forEach(item=>{
                              item.crtTm=item.crtTm?item.crtTm.split(' ')[0]:''
                              // item.state = new Date(item.rcdTm) > new Date ? true: false
                              // if(!item.state){
                              //     item.contMob = item.contMob.slice(0,3)+'********'
                              // }
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
          if(!this.until.ifLogin()){
              return false
          }
          // console.log('11111111')
        window.location.href = 'communicationRelease.html'
      }
  },
  components: {
    keySearch,
      communication,
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
