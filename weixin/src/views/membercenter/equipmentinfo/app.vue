<template>
  <div id="app">
    <div class="content">
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <equipment-info :equipmentList="list"></equipment-info>
      </van-list>
    </div>
  </div>
</template>

<script>
import equipmentInfo from 'components/equipmentInfo'

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
      equipmentList:[
        {
          title:'转卖水质检测设备',
          nature:'设备出售',
          salary:'5000.00',
          state:'审核通过',
        },
         {
           title:'转卖水质检测设备',
          nature:'设备出售',
          salary:'5000.00',
          state:'审核通过',
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
            this.until.get('/prod/mxpubdev/pageSelf',param)
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
    equipmentInfo,
  }
}

</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
  }
}
</style>
