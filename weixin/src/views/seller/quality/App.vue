<style lang="less">
@bdColor: #d9d9d9;
body,html {
    height: 100%;
  background-color: #f5f5f5;
}
footer{
    background-color: #2a8af2;
    color: #ffffff;
    line-height: .8rem;
    text-align: center;
}
#container{
    height: 100%;
    overflow: hidden;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    .container{
        flex: 1;
        overflow: auto;
    }
}
.noResult {
  text-align: center;
  color: #999;
  margin: 0.4rem 0;
}
.search {
  background-color: #fff;
  border-bottom: 1px solid @bdColor;

  > div {
    padding: 0.3rem;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    > span {
      width: 30%;
    }
    > div {
      width: 70%;
      > input {
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
    &:nth-of-type(3) {
      > div {
        position: relative;
        svg {
          position: absolute;
          top: 50%;
          right: 0.5rem;
          transform: translateY(-50%);
        }
      }
    }
    &:nth-last-of-type(1) {
      > div {
        width: 100%;
        > button {
          width: 100%;
          text-align: center;
          padding: 0.3rem 0;
          background-color: #2a8af2;
          color: #fff;
          border-radius: 3px;
        }
      }
    }
  }

  .s-time {
    flex: 1;
    border: 1px solid @bdColor;
    display: flex;
    > span {
      color: #999;
      font-size: 0.24rem;
    }
    > div {
      flex: 1;
      height: 100%;
      text-align: center;
      font-size: 0.24rem;
      position: relative;
      padding-right: 0.2rem;
      img {
        position: absolute;
        top: 50%;
        right: 0.2rem;
        width: 0.28rem;
        height: 0.28rem;
        transform: translateY(-50%);
      }
    }
  }
}

.content {

  background-color: #fff;
  border-top: 1px solid @bdColor;
  border-bottom: 1px solid @bdColor;
  .temp-app {
    &:nth-last-of-type(1) {
      border-bottom: 0;
    }
    .temp-content {
      background-color: #fff;
    }
  }
}

.tempapp-cnt {
  > p {
    margin-left: 0.35rem !important;
    margin-right: 0.35rem !important;
    i {
      color: red;
      &.v-n {
        visibility: hidden;
      }
    }
  }
  > div {
    background-color: #fff;
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #c9c9c9;
    > p {
      position: relative;
      line-height: 0.8rem !important;
      > span {
        margin-left: 0.35rem;
        &:nth-last-of-type(1) {
          position: absolute;
          right: 0.8rem;
          font-size: 0.2rem;
          color: #777;
        }
      }
    }
  }
}
</style>

<template>
    <div id="container">
      <header-title :title="title"></header-title>
        <div class="container">
            <div class="search">
                <div>
                    <span>产品名称：</span>
                    <div>
                        <input type="text" placeholder="产品名称" v-model="searchGdno">
                    </div>
                </div>
                <div>
                    <span>供应商名称：</span>
                    <div>
                        <input type="text" placeholder="供应商名称" v-model="searchCustName">
                    </div>
                </div>
                <div>
                    <span>产品地域：</span>
                    <addr @setAddr="getAddr"></addr>

                </div>
                <div>
                    <span>序列号：</span>
                    <div>
                        <input type="text" placeholder="序列号" v-model="searchSn">
                    </div>
                </div>
                <div>
                    <div>
                        <button class="s-btn" @click="search">查询</button>
                    </div>
                </div>
            </div>
            <div class="noResult" v-if="dataNo">无查询结果</div>
            <div class="content"  v-if="!dataNo">
                <van-list
                        v-model="loading"
                        :finished="finished"
                        :immediate-check="false"
                        @load="onLoad"
                >
                    <tempApp :obj="obj" v-for="(item,i) in searchBot" :key="i">
                        <div slot="content" class="tempapp-cnt" @click="toDetail(item.mxRepoPk)">
                            <div>
                                <p>
                                    <span>序列号：{{item.no}}</span>
                                    <span>上传时间：{{item.crtTm}}</span>
                                </p>
                            </div>
                            <p>{{item.nm}}</p>
                            <p>报告类别：{{item.catNm}}</p>
                            <p>检测机构：{{item.deteOrg}}</p>
                            <p>产品名称：{{item.prodNm}}</p>
                            <p>产品地域：{{item.prodProvNm}} {{item.prodCityNm}}</p>
                        </div>
                    </tempApp>
                </van-list>

            </div>
            <div class="noResult" v-if="dataFinish">全部加载完</div>
        </div>
        <footer @click="upLoad">
            报告上传
        </footer>
    </div>
</template>

<script>
import tempApp from "components/tempApp";
import areaList from "vant/packages/area/demo/area.js";
import headerTitle from "components/headerTitle";
import addr from "components/addr";
export default {
  data() {
    return {
        loading:false,
        finished:false,
        dataFinish:false,
        dataNo:false,
        title: "产品质控",

        areaList,
        showArea: false,
        obj: {
          src: "./orderQueryDetail.html?"
        },
      startTime: "",
      endTime: "",
        cityCode1:'',
        cityCode2:'',
      searchBot: [],
      searchGdno: "",
      searchSn: "",
      searchCustName: "",
        pageNo: 1,
        pageSize: 10,
        total:''
    };
  },
  mounted() {
      this.getList()
  },
  methods: {
      getAddr:function(val){
          let cd = JSON.parse(val)
          this.cityCode1 = cd.cd1
          this.cityCode2 = cd.cd2
      },
      //详情
      toDetail(val){
        window.location.href = '../membercenter/reportdetail.html?pk='+val
      },
      //上传
      upLoad(){
          if(this.until.ifLogin()) {
              window.location = '../quality/reportupload.html'
          }
      },
      getList(){
          this.$dialog.loading.open()
          this.loading = true;
          let query = new this.Query();
          query.buildWhereClause('no',this.searchSn,'LK');
          query.buildWhereClause('prodNm',this.searchGdno,'LK');
          query.buildWhereClause('supply',this.searchCustName,'LK');
          query.buildWhereClause('prodProvCd',this.cityCode1,'LK');
          query.buildWhereClause('prodCityCd',this.cityCode2,'LK');

          query.buildPageClause(this.pageNo,this.pageSize);
          let myParam = query.getParam();
          // console.log(myParam)
          let param = {
              type:1,
              query:myParam.query
          }
          this.until.get('/prodx/mxrepo/page',param)
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
                              item.crtTm = item.crtTm?item.crtTm.split(' ')[0]:''
                          })
                          this.searchBot.push(...res.data.items)

                      }

                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              },err=>{});
      },
      //查询
      search(){
          this.searchBot = []
          this.pageNo = 1
          this.dataFinish = false
          this.dataNo = false
          this.getList()
      },
      //加载更多
      onLoad(){
        // 异步更新数据
          setTimeout(() => {
              if(this.total>this.searchBot.length){
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
    tempApp,
    headerTitle,
      addr
  }
};
</script>

