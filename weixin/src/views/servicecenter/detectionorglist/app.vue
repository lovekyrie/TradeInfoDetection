<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
      <key-search @search="search"></key-search>
    </div>
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
          <detection-organization :detectionOrgList="detectionOrgList"></detection-organization>
          <div class="load-more" v-if="dataNo">
              <span>无查询结果</span>
          </div>
          <div class="load-more" v-if="dataFinish">
              <span>全部加载完</span>
          </div>
      </van-list>


    <div class="footer" @click="submit">
      发布检测服务
    </div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import keySearch from 'components/keySearch'
import footButton from 'components/footButton'
import detectionOrganization from 'components/detectionOrganization'

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
        key:'',
      title:"检测机构入驻",
      btnObj:{
        btnName:'发布检测服务',
        src:''
      },
      detectionOrgList:[]
    }
  },
    mounted(){
        this.getList()
    },
  methods:{
      submit(){
        window.location.href = 'releasedetection.html'
      },
      search(val){

          this.key = val
          this.detectionOrgList = []
          this.pageNo = 1
          this.dataFinish = false
          this.dataNo = false
          this.getList()
      },
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
              // query:query.getParam(),
              value:this.key
          }
          let url = '/prodx/mxpubthrser/pageSelf'
          this.until.get(url,param)
              .then(res=>{
                  this.$dialog.loading.close()
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
                          this.detectionOrgList.push(...res.data.items)
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
              let length = this.detectionOrgList.length
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
    detectionOrganization,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
      overflow: hidden;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      .van-list{
          flex: 1;
          overflow: auto;
      }
    .load-more{
      margin-top: .3rem;
      text-align: center;
    }
      .footer{
          background-color: #2a8af2;
          color: #ffffff;
          line-height: .8rem;
          text-align: center;
      }
  }
}
</style>
