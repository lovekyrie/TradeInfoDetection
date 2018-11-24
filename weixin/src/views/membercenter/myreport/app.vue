<template>
  <div id="app">
    <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
            @load="onLoad"
    >
      <report :edit="edit" :reportList="list" @updateReport="delReport"></report>
    </van-list>
    <div class="footer">
      <foot-button :btnObj="btnObj"></foot-button>
    </div>
  </div>
</template>

<script>
 import report from 'components/report'
 import footButton from 'components/footButton'
 import edit from './images/编辑.png'
 
export default {
 data(){
   return {
     edit,
       loading:false,
       finished:false,
       dataFinish:false,
       dataNo:false,
       pageNo: 1,
       pageSize: 10,
       total:'',
       btnObj:{
         btnName:'报告上传',
         scr:'',
       },
       list:[],
     reportList:[]
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
   delReport(index){
         // console.log('11111')
     this.list.splice(index,1)
   }
 },
 components:{
   report,
   footButton,
 }
}
</script>

<style lang="less">
  html,body{
    height: 100%;
    background-color: #F7F7F7;

    #app{
      height: 100%;
      .load-more{
      text-align: center;
      padding: 0.2rem 0;
    }
    }
  }
</style>
