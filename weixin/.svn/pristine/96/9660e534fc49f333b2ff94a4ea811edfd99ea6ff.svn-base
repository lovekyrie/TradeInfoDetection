<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
      <div><img :src="swiper" alt=""></div>
    </div>
    <div class="content">
      <div><span>制度合作要求</span></div>
      <div><span>注意事项</span></div>
      <div><span>平台声明</span></div>
      <div><span>送检流程介绍</span></div>
      <div><span>检测服务机构入驻流程</span></div>
      <div><span>送检流程介绍</span></div>
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

    }
  },
  methods:{

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
          vertical-align: middle;
        }
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
