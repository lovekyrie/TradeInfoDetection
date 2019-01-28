<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <key-search @search="search"></key-search>
    <div class="content">
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <cooperative-partner :partnerList="partnerList"></cooperative-partner>
      </van-list>
      <div class="load-more" v-if="dataNo">
        <span>无查询结果</span>
      </div>
      <div class="load-more" v-if="dataFinish">
        <span>全部加载完</span>
      </div>
    </div>

    <div class="footer" @click="submit">
      发布资源
    </div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle';
import keySearch from 'components/keySearch';
import footButton from 'components/footButton';
import cooperativePartner from 'components/cooperativePartner';

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
      title:'合作伙伴入驻',
      btnObj:{
        btnName:'发布资源',
        src:'',
      },
        key:'',
      partnerList:[]
    }
  },
    mounted(){
      this.getList()
    },
  methods:{
      submit(){
        window.location.href = '../servicecenter/releaseresource.html'
      },
      search(val){
        this.key = val
          this.partnerList = []
          this.pageNo = 1
          this.dataFinish = false
          this.dataNo = false
        this.getList()
      },
      getList(){
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
              value:this.key
          }
          let url = '/prod/mxpubreq/pageSelf'
          this.until.get(url,param)
              .then(res=>{
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      if(this.total==0){
                          this.dataNo = true
                          this.finished = true;
                      }else {
                          this.dataNo = false
                          res.data.items.forEach(item=>{
                              item.crtTm = item.crtTm ? item.crtTm.split(' ')[0]:''
                          })
                          this.partnerList.push(...res.data.items)
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
              let length = this.partnerList.length
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
    footButton,
    cooperativePartner,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #F7F7F7;
  #app{
    height: 100%;
    display: flex;
    display: -webkit-flex;
    overflow: hidden;
    flex-direction: column;
    .content{
      flex: 1;
      overflow: auto;
    }
    .footer{
      padding: .2rem 0;
      width: 100%;
      font-size: 16px;
      background-color: #2A8AF2;
      color: #fff;
      text-align: center;
    }
    .load-more{
      margin: .2rem 0;
      text-align: center;
    }
  }
}
</style>
