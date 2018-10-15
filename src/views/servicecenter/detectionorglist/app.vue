<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
      <key-search></key-search>
    </div>
    <detection-organization :detectionOrgList="detectionOrgList"></detection-organization>
     <div class="load-more">
      <span>加载更多</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
    </div>
    <div class="footer">
      <foot-button :btnObj="btnObj"></foot-button>
    </div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import keySearch from 'components/keySearch'
import footButton from 'components/footButton'
import detectionOrganization from 'components/detectionOrganization'

export default {
  data(){
    return {
      title:"检测机构入驻",
      btnObj:{
        btnName:'发布检测服务',
        src:''
      },
      detectionOrgList:[
        {
          detectionName:'儿童家具儿童家居质检',
          serviceType:'家具检测',
          secondType:'木质',
          releaseDate:'2018-06-06'
        },
         {
          detectionName:'儿童家具儿童家居质检',
          serviceType:'家具检测',
          secondType:'木质',
          releaseDate:'2018-06-06'
        },
      ]
    }
  },
  methods:{

  },
  components:{
    headerTitle,
    keySearch,
    footButton,
    detectionOrganization,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
    .load-more{
      margin-top: .3rem;
      text-align: center;
    }
  }
}
</style>
