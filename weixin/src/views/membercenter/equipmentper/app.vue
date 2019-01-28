<template>
  <div id="app">
    <div class="content">
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <equipment-per :equipmentList="list" ></equipment-per>
      </van-list>
    </div>
    <footer @click="submit">
      发布设备需求
    </footer>
  </div>
</template>

<script>
import equipmentInfo from 'components/equipmentInfo'
import equipmentPer from 'components/equipmentPer'
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
        this.until.pushHistory();
        this.getList()
    },
    methods:{
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
        submit(){
            window.location.href = 'equipmentSubmit.html'
        }
    },
  components:{
    equipmentInfo,
      equipmentPer
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
    flex-direction:column;
    .content{
      flex: 1;
      overflow: auto;
    }
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
