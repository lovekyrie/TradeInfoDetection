<template>
  <div id="container">
    <!--顶部-->
    <header-top></header-top>
    <!--图标-->
    <div id="icon">
      <img src="../../entryLogin/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">
      <p @click="back" class="cursor"><i class="el-icon-arrow-left"></i>  Back</p>
      <div class="inMain">
        <!--左边图片-->
        <div class="inmainLeft"><img :src="info.imgUrl"></div>
        <!--右边简介-->
        <div class="inmainRight">
          <div class="rightTitile">{{info.nm}}</div>
          <div class="inmainDescription">
            <h2>Service Content</h2>
            <span>{{info.intro}}
            </span>
          </div>
        </div>
      </div>

    </div>
    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
    </div>
  </div>
</template>

<script>
  import tradeFooter from '@/componentsEn/tradeFooterl'
  import HeaderTop from "@/componentsEn/headerTop";
  export default {
    data(){
      return{
        pk:'',
        info:{},
        inmainDescription:'最全面儿童家具质检，最全面儿童家具质检最全面儿童家具质检最全面儿童家具质检最全面儿童家具质检最全面儿童家具质检，最全面儿童家具质检。'

      }
    },
    components:{
      tradeFooter,HeaderTop,
    },
    mounted(){
      this.pk=this.until.getQueryString('id')
      this.getInfo()
    },
    methods:{
      back(){
        window.history.go(-1)
      },
      getInfo(){
        this.until.get('/prod/mxpubthrser/info/'+this.pk)
          .then(res=>{
            this.info=res.data
          })
      }
    }
  }
</script>

<style>


</style>
