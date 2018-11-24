<template>
  <div id="app">
    <div class="content">
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <recruitment-info :recruitmentList="list"></recruitment-info>

      </van-list>
    </div>
    <footer @click="submit">
      发布招聘信息
    </footer>
  </div>
</template>

<script>
import recruitmentInfo from 'components/recruitmentInfo'

export default {
  data(){
    return {
        loading:false,
        finished:false,
        dataFinish:false,
        dataNo:false,
        pageNo: 1,
        pageSize: 10,
        total:'',
        list:[],
      recruitmentList:[
        {
          jobName:'无机分析工程师',
          salary:'4000-5000元/月',
          state:'审核通过',
          releaseTime:'2018-06-06',
        },
         {
          jobName:'无机分析工程师',
          salary:'4000-5000元/月',
          state:'审核通过',
          releaseTime:'2018-06-06',
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
            this.until.get('/prod/mxpubrecr/pageSelf',param)
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
        submit(){
            window.location.href = '../hr/recruitrelease.html'
        }
    },
  components:{
    recruitmentInfo,
  }
}

</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    overflow: hidden;
    .content{
      flex: 1;
      overflow: auto;
    }
    footer{
      background-color: #2a8af2;
      color: #ffffff;
      line-height: .8rem;
      text-align: center;
    }
  }
}
</style>
