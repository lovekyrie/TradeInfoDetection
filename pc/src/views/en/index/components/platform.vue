<template>
  <div class="platform">
    <div class="plat-info">
      <div ><img :src="imgUrl"></div>
      <div @click="toPlatformDetail(item.sysNewsPk)" v-for="(item,index) in list" :key="index" class="cursor"><span>{{item.nm}}</span></div>
    </div>
  </div>
</template>

<script>
import platform from '../images/platform_03.png'

export default {
  data(){
    return {
      platform,
      pageNo:1,
      pageSize:999,
      list:[],
      imgUrl:''
    }
  },
  mounted(){
    this.getList();
    this.getPlatFromImg()
  },
  methods:{

    //获取平台指引广告图
    getPlatFromImg(){
      let query = new this.Query();
      query.buildWhereClause("catCd","30040.160","EQ");
      this.until.get('/sys/ad/list',{query:query.toString()})
        .then(res=>{
          this.imgUrl = res.data.items[0].srcUrl;
        })

    },



    getList(){
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
        value:'30040.160',
        // query:query.getParam()
      }
      this.until.get('/sys/news/page',param)
        .then(res=>{
          // console.log(res)
          if(res.status === '200'){
            this.list = res.data.items
          }else {
            this.$message({
              message:res.message,
              type: 'warning'
            });
          }
        })
    },
    toPlatformDetail(type){
      this.$router.push({
        path:'/platformDetail',
        query:{
          ipPk:type
        }
      })
    }
  }
}
</script>

<style lang='less'>
.platform{
  width: 100%;
  background-color: #fff;
  .plat-info{
    width: 1200px;
    margin: 0 auto ;
    >div{
      flex: 1;
      &:nth-of-type(1){
        padding-top: 60px;
        margin: 0 10px;
        img{
          height: 350px;
          width: 1168px;
        }
      }
      &:not(:nth-of-type(1)){
        padding: 25px 0;
        border-bottom: 1px solid #ddd;
      }
      &:nth-last-of-type(1){
        border-bottom-style: none;
      }
    }
  }
}
</style>
