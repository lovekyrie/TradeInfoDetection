<template>
  <div id="app">
    <header-title :title="title" :littleTitle="littleTitle"></header-title>
    <div class="detection-bar">
      <span></span>
      <span>{{siderName}}</span>
      <button @click="changeRelease(buttonName)">
        {{buttonName}}
      </button>
    </div>
    <detection-product v-if="showEnterpriseRelease" :productList="productList"></detection-product>
    <equipment-personal v-else :personalReleaseList="personalReleaseList"></equipment-personal>
    <div class="load-more">
      <span>加载更多</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
    </div>
  </div>  
</template>

<script>
import headerTitle from "components/headerTitle";
import product from "./images/product.png";
import detectionProduct from "components/detectionProduct";
import equipmentPersonal from 'components/equipmentPersonal';

export default {
  data() {
    return {
      title: "设备分享",
      siderName:'企业发布',
      buttonName:'查看个人发布',
      showEnterpriseRelease:true,
      littleTitle: "",
      productList: [
        {
          src: product,
          content: "[转租]河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "[转租]河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "[转租]河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "[转租]河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "[转租]河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "[转租]河北纺织品制造有限公司四件套检测报告"
        },
        {
          src: product,
          content: "[转租]河北纺织品制造有限公司四件套检测报告"
        }
      ],
      personalReleaseList:[
        {
          title:'【转租】高价租最新服装衬衫全效检测设备一台',
          linked:'张先生',
          linkedPhone:15990110000,
          releaseDate:'2018年6月17日'
        },
        {
          title:'【转租】高价租最新服装衬衫全效检测设备一台',
          linked:'张先生',
          linkedPhone:15990110000,
          releaseDate:'2018年6月17日'
        },
        {
          title:'【转租】高价租最新服装衬衫全效检测设备一台',
          linked:'张先生',
          linkedPhone:15990110000,
          releaseDate:'2018年6月17日'
        },
        {
          title:'【转租】高价租最新服装衬衫全效检测设备一台',
          linked:'张先生',
          linkedPhone:15990110000,
          releaseDate:'2018年6月17日'
        },
        {
          title:'【转租】高价租最新服装衬衫全效检测设备一台',
          linked:'张先生',
          linkedPhone:15990110000,
          releaseDate:'2018年6月17日'
        }
      ]
    };
  },
  methods: {
    changeRelease(buttonName){
      
      if(buttonName==='查看个人发布'){

        this.siderName='个人发布'
        this.buttonName='查看企业发布'
        this.showEnterpriseRelease=false;
      }
      else{

        this.siderName='企业发布'
        this.buttonName='查看个人发布'
        this.showEnterpriseRelease=true
      }
    }
  },
  components: {
    headerTitle,
    detectionProduct,
    equipmentPersonal,
  }
};
</script>

<style lang="less">
html,
body {
  background-color: #f7f7f7;
  height: 100%;
  #app {
    height: 100%;
    .detection-bar {
      background-color: #fff;
      padding: 0.2rem 0.4rem 0;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      > span:nth-of-type(1) {
        width: 2%;
        height: 0.3rem;
        background-color: #54a6ff;
      }
      > span:nth-of-type(2) {
        width: 65%;
      }
      >button{
        padding: .1rem 0;
        border: 1px solid #B2D7FF;
        color: #B2D7FF;
        width: 30%;
        border-radius: 6%;
      }
    }
    .load-more {
      margin-top: 0.2rem;
      text-align: center;
    }
  }
}
</style>

