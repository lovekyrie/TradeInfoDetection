<template>
  <div id="app">
    <header-title :title="title" :littleTitle="littleTitle"></header-title>
    <key-search @search="search"></key-search>
    <div class="detection-bar">
      <span></span>
      <span>{{siderName}}</span>
      <button @click="changeRelease()">
        {{buttonName}}
      </button>
    </div>
    <div class="list">
      <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              @load="onLoad"
      >
        <div class="equimpentList" v-if="showEnterpriseRelease" v-for="item in productList" @click="toDetail(item.mxPubDevPk)">
          <div class="img" :style="'background-image:url('+item.imgUrl+')'">
            <!--<img :src="item.imgUrl"/>-->
          </div>
          <p>{{item.nm}}</p>
        </div>
        <equipment-personal v-if="!showEnterpriseRelease" :personalReleaseList="personalReleaseList"></equipment-personal>

      </van-list>

      <div class="load-more" v-if="dataNo">
        <span>无查询结果</span>
      </div>
      <div class="load-more" v-if="dataFinish">
        <span>全部加载完</span>
      </div>
    </div>

  </div>  
</template>

<script>
import headerTitle from "components/headerTitle";
import product from "./images/product.png";
import detectionProduct from "components/equipmentList";
import equipmentPersonal from 'components/equipmentPersonal';
import keySearch from "components/keySearch";
export default {
  data() {
    return {
      title: "设备分享",
        type:false,  //false为企业发布
      siderName:'企业发布',
      buttonName:'查看个人发布',
      showEnterpriseRelease:true,
      dataNo:false,
      dataFinish:false,
        finished:false,
        loading:false,
      pageNo:1,
      pageSize:15,
      total:'',
      littleTitle: "",
      productList: [],
      personalReleaseList:[]
    };
  },
    mounted(){
      this.getList()
    },
  methods: {
      toDetail(val){
        window.location.href='enterprisereleasedetail.html?pk='+val
      },
    changeRelease(){
        if(!this.type){
        this.siderName='个人发布'
        this.buttonName='查看企业发布'

      }
      else{
        this.siderName='企业发布'
        this.buttonName='查看个人发布'

      }
        this.dataFinish = false
        this.dataNo = false
        this.productList = []
        this.personalReleaseList = []
        this.pageNo = 1
        this.type = !this.type
        this.showEnterpriseRelease=!this.showEnterpriseRelease
        this.getList()

    },
      //查询
      search(val){
          this.dataFinish = false
          this.dataNo = false
          this.key = val
          this.productList = []
          this.personalReleaseList = []
          this.pageNo = 1
          this.getList()
      },
      getList(){
          this.$dialog.loading.open()
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
              value:this.key,
              // query:query.getParam()
          }
          let url = this.type ? '/prodx/mxpubdev/page':'/prodx/mxpubdev/pageentp'
          this.until.get(url,param)
              .then(res=>{
                  this.$dialog.loading.close()
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      if(this.total==0){
                          this.dataNo = true
                      }else {
                          this.dataNo = false
                          res.data.items.forEach(item=>{
                              item.crtTm = item.crtTm.split(' ')[0]
                          })
                          if(this.type){
                              this.personalReleaseList.push(...res.data.items)
                          }else {
                              this.productList.push(...res.data.items)
                          }

                      }

                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              },err=>{});
      },
      //加载更多
      onLoad(){
          // 异步更新数据
          setTimeout(() => {
              let length = this.type ? this.personalReleaseList.length:this.productList.length
              if(this.total>length){
                  this.pageNo++
                  this.getList()
              }else {
                  this.dataFinish = true
                  this.loading = false;
                  this.finished = true;
              }
          }, 500);
      },
  },
  components: {
    headerTitle,
    detectionProduct,
    equipmentPersonal,
      keySearch
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
    display: -webkit-flex;
    display: flex;
    overflow: hidden;
    flex-direction: column;

    .list{
      flex: 1;
      overflow: auto;
      background: #ffffff;
      .van-list{
        overflow: hidden;
      }
      .equimpentList{
        width: 40%;
        float: left;
        &:nth-of-type(2n+1){
          margin-left: 8%;
          margin-right: 2%;
        }
        .img{
          width: 100%;
          height: 3rem;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          background-position:center;
          background-size:cover;
          background-repeat:no-repeat;
          img{
            width: auto;
            height: auto;
            max-height: 100%;
            max-width: 100%;
          }
        }
      }
      .van-list__loading{
        clear: both;
      }
    }
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

