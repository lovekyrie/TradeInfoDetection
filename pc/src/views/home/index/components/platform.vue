<template>
  <div class="platform">
    <div class="plat-info">
      <div><img :src="platform" alt=""></div>
      <div @click="toPlatformDetail('制度合作要求')"><span>制度合作要求</span></div>
      <div @click="toPlatformDetail('注意事项')"><span>注意事项</span></div>
      <div @click="toPlatformDetail('平台声明')"><span>平台声明</span></div>
      <div @click="toPlatformDetail('送检流程介绍')"><span>送检流程介绍</span></div>
    </div>
  </div>
</template>

<script>
import platform from '../images/platform_03.png'

export default {
  data(){
    return {
      platform,
    }
  },
  methods:{
    toPlatformDetail(type){
      this.$router.push({
        path:'/platformDetail',
        query:{
          type:type
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
