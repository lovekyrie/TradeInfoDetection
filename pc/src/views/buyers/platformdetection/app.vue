<template>
  <div id="app" v-loading="loading">
    <trade-header :showSearch="showSearch" @search="search" searchText="找服务"></trade-header>
    <div class="content">
      <div class="switch">
        <el-row>
          <el-button :class="{active:pageName=='平台发布'}">平台发布</el-button>
          <el-button @click="goToOther" :class="{active:pageName=='三方检测'}">三方检测</el-button>
        </el-row>
      </div>
      <div class="concret">
        <div class="sidebar">
          <ul>
            <li>主营业务</li>
            <li @click="chooseOption(item.cd)" :class="{active:cd==item.cd}" v-for="(item, index) in sidebarList" :key="index">{{item.nm}}</li>
          </ul>
        </div>
        <div class="infolist" v-if="ifSearch">
          <detection-search :detectionList="detectionList" detail="platformdetectiond.html"></detection-search>
        </div>
        <div class="infolist" v-else>
          <detection-list :detectionList="detectionList" num='1' detail="platformdetectiond.html"></detection-list>
        </div>
      </div>
    </div>
    <trade-footer></trade-footer>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import productImg from "./images/product_03.png";
import detectionList from "components/detectionList";
import detectionSearch from "components/detectionSearch";
import Vue from "vue"

export default {
  data() {
    return {
      key:'',
      ifSearch:false,
      pageName:'平台发布',
      showSearch: true,
      cd:'',
      loading:false,
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
        name: "河北纺织品制造有限公司四件套检测报告",
      },
      count:10,
     }

  },
  methods: {
    //查询
    search(val){
      this.key = val
      this.pageNo = 1
      this.ifSearch = true
      this.detectionList = []
      this.getList()
    },

    getClass1(){
      this.until.get('/general/cat/listByPrntCd?prntCd=70000')
        .then(res=>{
          this.sidebarList = res.data.items
          this.cd = this.sidebarList[0].cd
        })
    },
    chooseOption(item){
      this.ifSearch = false
      this.cd=item;

    },
    getList(val){
      // console.log(this.ifSearch)
      this.loading = true;
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
        value:val,
        order:false,
        // query:query.getParam(),
        pcvalue:this.key
      }
      let url = '/prodx/mxpubcheck/page'
      this.until.get(url,param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            res.data.items.forEach(item=>{
              item.imgUrl = item.imgUrl ? item.imgUrl.split(',')[0] : ''
            })
            if(this.ifSearch){
              this.detectionList = res.data.items
              // console.log(this.detectionList)
            }else{
              this.detectionList.forEach((item,index)=>{
                if(item.cd == val){

                  item.list = res.data.items
                  //更新tableData中的数据
                  Vue.set(this.detectionList,index,this.detectionList[index])
                }
              })
            }
            console.log(this.detectionList)
          }else {
            this.$message({
              message:res.message,
              type:'warning'
            });
          }
        },err=>{});
    },
    getClass2(){
      this.until.get('/general/cat/listByPrntCd?prntCd='+this.cd)
        .then(res=>{
          this.detectionList = res.data.items
          this.detectionList.forEach(item=>{
            item.list = []
            this.getList(item.cd)
          })
        })
    },

    goToOther(){
      window.location.href='./otherdetection.html'
    }
  },
  watch:{
    cd:function () {
      this.getClass2()
    }
  },
  mounted() {
    if(this.until.getQueryString('val')){
      this.key = this.until.getQueryString('val')
      this.search(this.key)
    }
    this.getClass1()
  },
  components: {
    tradeHeader,
    tradeFooter,
    detectionList,
    detectionSearch
  }
};
</script>

<style lang='less' scoped>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 20px auto 0px;
      .switch{
        border-bottom: 1px solid #ddd;
        button{
          padding: 15px 35px;
          border:0;
          font-size: 18px;
          border-radius: 3px 3px 0 0;
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
             cursor: pointer;
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
         width: 1000px;
       }
      }
    }
  }
}
</style>
