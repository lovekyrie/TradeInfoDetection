<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
      <div><van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.srcUrl" />
        </van-swipe-item>
      </van-swipe></div>
    </div>
    <div class="content">
      <div v-for="item in list" @click="toDetail(item.sysNewsPk)"><span>{{item.nm}}</span></div>
    </div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import swiper from './images/swiper1.png'

export default {
  data(){
    return {
      title:"平台指引",
      swiper,
        pageNo:1,
        pageSize:999,
        images:[],
        list:[]
    }
  },
    mounted(){
        this.getImg()
        this.getList()
    },
  methods:{
      toDetail(pk){
        window.location.href = 'platformguidedetail.html?pk='+pk
      },
      //获取轮播图
      getImg(){
          this.until.get('/sys/ad/list?catCd=30040.150')
              .then(res=>{
                  this.images = res.data.items
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
                  this.list = res.data.items
              })
      }
  },
  components:{
    headerTitle,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
    .header{
      div{
        width: 100%;
        >img{
          width: auto;
          height: auto;
          max-width: 100%;
          max-width: 100%;
        }
      }
    }
    .van-swipe__indicators{
      justify-content: center;
      i{
        display: inline-block!important;
      }
    }
    .content{
      >div{
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 16px;
        border-bottom: 1px solid #DADADA;
        >span{
          padding: .3rem .4rem;
          width: 100%;
        }
      }
    }
  }
}
</style>
