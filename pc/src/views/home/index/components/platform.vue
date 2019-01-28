<template>
  <div class="platform">
    <div class="plat-info">
      <div><img :src="platform" alt=""></div>
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
      list:[]
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
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
          this.list = res.data.items
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
          height: auto;
          width: auto;
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
