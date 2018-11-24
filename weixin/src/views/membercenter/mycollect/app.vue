<template>
  <div id="app">
    <div class="content">
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <report :edit="edit" :reportList="list"></report>

      </van-list>
      <div class="load-more" v-if="dataNo">
        <span>无查询结果</span>
      </div>
      <div class="load-more" v-if="dataFinish">
        <span>全部加载完</span>
      </div>
    </div>
  </div>
</template>

<script>
import report from 'components/report'

export default {
  data(){
    return {
      edit:'',
        loading:false,
        finished:false,
        dataFinish:false,
        dataNo:false,
        pageNo: 1,
        pageSize: 10,
        total:'',
        list:[],
        reportList:[
       {
        numberID:'1234567890987654',
        name:'福州福州服饰有限公司防晒衣检测报告',
        orgName:'宁波贸信检测',
        productName:'防晒衣',
        address:'浙江 - 宁波',
        release:'2018-06-06',
       },
       {
        numberID:'1234567890987654',
        name:'福州福州服饰有限公司防晒衣检测报告',
        orgName:'宁波贸信检测',
        productName:'防晒衣',
        address:'浙江 - 海曙',
        release:'2018-06-06',
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
          this.until.get('/prod/mxrepo/pageSelf',param)
              .then(res=>{
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      res.data.items.forEach(item=>{
                          item.crtTm = item.crtTm.split(' ')[0]
                      })
                      this.list.push(...res.data.items)
                      if(this.total==0){
                          this.dataNo = true
                          this.finished = true;
                      }else if(this.total<=this.pageSize){
                          this.dataFinish = true
                          this.finished = true;
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
              if(this.total>this.list.length){
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
    report,
  }
}
</script>

<style lang='less'>
  html,body{
    height: 100%;
    background-color: #f7f7f7;
    #app{
      height: 100%;
      .load-more{
        text-align: center;
        padding: 0.2rem 0;
      }
    }
  }
</style>
