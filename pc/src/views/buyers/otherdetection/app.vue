<template>
  <div id="app">
    <div class="header">
      <trade-header :showSearch="showSearch"></trade-header>
    </div>
    <div class="content">
      <div class="switch">
        <el-row>
          <el-button @click="goToPlatform" :class="{active:pageName=='平台发布'}">平台发布</el-button>
          <el-button :class="{active:pageName=='三方检测'}">三方检测</el-button>
        </el-row>
      </div>
      <div class="concret">
        <div class="sidebar">
          <ul>
            <li>主营业务</li>
            <li @click="chooseOption(item)" :class="{active:state==item}" v-for="(item, index) in sidebarList" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="infolist">
          <detection-list :detectionList="detectionList"></detection-list>
        </div>
      </div>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import productImg from "./images/product_03.png";
import detectionList from "components/detectionList";

export default {
  data() {
    return {
      pageName:'三方检测',
      state:'玩具/婴童用品检测',
      showSearch: true,
      sidebarList: [
        "玩具/婴童用品检测",
        "食品接触材料检测",
        "轻工产品/杂货检测",
        "服装/纺织品检测",
        "皮革/鞋类检测",
        "可靠性检测",
        "检验认证服务",
        "验货服务",
        "合作外包",
        "咨询与培训"
      ],
      /**调用接口得到，现在为了展示用 */
      detectionList: [],
      productInfo: {
        productImg,
        name: "河北纺织品制造有限公司四件套检测报告"
      }
    };
  },
  methods: {
    chooseOption(item){
      this.state=item;
    },
    goToPlatform(){
      window.location.href='./platformdetection.html'
    }
  },
  mounted() {
    let normalObj = {
      title: "常规玩具安全检测",
      Arr: []
    };

    let electricObj = {
      title: "电动玩具安全测试",
      Arr: []
    };

    let childrenObj = {
      title: "儿童护理用品安全测试",
      Arr: []
    };

    for (let index = 0; index < 10; index++) {
      normalObj.Arr.push(this.productInfo);
      electricObj.Arr.push(this.productInfo);
      childrenObj.Arr.push(this.productInfo);
    }

    this.detectionList.push(normalObj);
    this.detectionList.push(electricObj);
    this.detectionList.push(childrenObj);
  },
  components: {
    tradeHeader,
    tradeFooter,
    detectionList
  }
};
</script>

<style lang='less'>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 50px auto 0px;
      .switch{
        border-bottom: 1px solid #ddd;
        button{
          padding: 10px 20px;
          font-size: 20px;
          background-color: #ddd;
        }
        button.active{
          background-color: #0d55d2;
          color: #fff;
        }
      }
      .concret{
        margin-top: 20px;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
       .sidebar{
         width: 200px;
         ul{
           display: -webkit-flex;
           display: flex;
           flex-direction: row;
           flex-wrap: wrap;
           >li{
             width: 100%;
             padding: 30px 0;
             text-align: center;
             border: 1px solid #ddd;
             border-top: none;
             &:nth-of-type(1){
               border-left: none;
               border-right: none;
             }
           }
           >li.active{
             background-color: #0d55d2;
             color: #fff;
           }
         }
       }
       .infolist{
         width: 1200px;
       }
      }
    }
  }
}
</style>
