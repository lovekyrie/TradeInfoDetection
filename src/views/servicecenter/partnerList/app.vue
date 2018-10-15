<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <key-search></key-search>
    <cooperative-partner :partnerList="partnerList"></cooperative-partner>
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
import headerTitle from 'components/headerTitle';
import keySearch from 'components/keySearch';
import footButton from 'components/footButton';
import cooperativePartner from 'components/cooperativePartner';

export default {
  data(){
    return {
      title:'合作伙伴入驻',
      btnObj:{
        btnName:'发布资源',
        src:'',
      },
      partnerList:[
        {
          partnerName:'检测机器设备提供',
          partnerLink:'设备资源',
          introduce:'公司拥有检测设备，及某某设备资源',
          linked:'张先生',
          linkedPhone:'15990110000',
          releaseDate:'2018年6月26日',
        },
        {
          partnerName:'检测机器设备提供',
          partnerLink:'设备资源',
          introduce:'公司拥有检测设备，及某某设备资源',
          linked:'张先生',
          linkedPhone:'15990110000',
          releaseDate:'2018年6月26日',
        },
        {
          partnerName:'检测机器设备提供',
          partnerLink:'设备资源',
          introduce:'公司拥有检测设备，及某某设备资源',
          linked:'张先生',
          linkedPhone:'15990110000',
          releaseDate:'2018年6月26日',
        },
        {
          partnerName:'检测机器设备提供',
          partnerLink:'设备资源',
          introduce:'公司拥有检测设备，及某某设备资源',
          linked:'张先生',
          linkedPhone:'15990110000',
          releaseDate:'2018年6月26日',
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
    cooperativePartner,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #F7F7F7;
  #app{
    height: 100%;
    .load-more{
      margin-top: .2rem;
      text-align: center;
    }
  }
}
</style>
