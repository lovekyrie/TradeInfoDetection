<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#container{
  height: 100%;
  display: flex;
  display: -webkit-flex;
  overflow: hidden;
  flex-direction: column;
  .van-list{
    flex: 1;
    overflow: auto;
  }
  .noResult{
    margin: .2rem 0;
    text-align: center;
  }
  footer{
      padding: .2rem 0;
      width: 100%;
      font-size: 16px;
      background-color: #2A8AF2;
      color: #fff;
      text-align: center;
  }
}
</style>

<template>
    <div id="container">
      <header-title :title="title"></header-title>
      <key-search @search="search"></key-search>
      <div class="noResult"  v-if="dataNo">无查询结果</div>
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <hr-list :hrInfoList="hrInfoList"></hr-list>
        <div class="noResult"  v-if="dataFinish">全部加载完</div>
      </van-list>
        <footer @click="submit">
            发布人才需求
        </footer>
    </div>
</template>

<script>
import headerTitle from 'components/headerTitle';
import keySearch from "components/keySearch";
import hrList from "components/hrList";
export default {
  data() {
    return {
      title:'人力资源',
      hrInfoList: [],
        key:'',
      pageNo: 1,
      pageSize: 10,
        total:'',
        dataNo:false,
        dataFinish:false,
        finished:false,
        loading:false
    };
  },
  mounted() {
      this.getList()
  },
  methods: {
      //查询
      search(val){
          this.dataFinish = false
          this.dataNo = false
          this.key = val
          this.hrInfoList = []
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
          this.until.get('/prod/mxpubrecr/page',param)
              .then(res=>{
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      if(this.total==0){
                          this.dataNo = true
                      }else {
                          this.dataNo = false
                          this.hrInfoList.push(...res.data.items)

                      }

                  }
              },err=>{});
      },
      //加载更多
      onLoad(){
          console.log(this.total)
          // 异步更新数据
          setTimeout(() => {
              if(this.total>this.hrInfoList.length){
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
          window.location.href = 'recruitrelease.html'
      }
  },
  components: {
    keySearch,
    hrList,
    headerTitle,
  }
};
</script>

