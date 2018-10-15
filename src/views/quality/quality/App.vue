<style lang="less">
@bdColor: #d9d9d9;
body {
  background-color: #f5f5f5;
}
.noResult {
  text-align: center;
  color: #999;
  margin-top: 0.4rem;
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
        <div class="search">
            <div>
                <span>质检产品名称：</span>
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
                <span>质检产品地域：</span>
                <div>
                  <input type="text" placeholder="省、市" v-model="address">
                  <svg class="icon" aria-hidden="true" @click="openVantArea">
                    <use xlink:href="#icon-gengduo"></use>
                  </svg>
                  <van-popup v-model="showArea" position="bottom" :overlay="false">
                    <van-area @cancel="cancelChoose" @confirm="chooseAddress"  :area-list="areaList" :columns-num="2" title="选择质检产品地域" />
                  </van-popup>
                </div>
             </div>
             <div>
                <span>序列号：</span>
                <div>
                  <input type="text" placeholder="序列号" v-model="searchSn">
                </div>
            </div>
            <div>
              <div>
                <button class="s-btn">查询</button>
              </div>
            </div>
        </div>
        <div class="noResult" :style="{ display:show2 }">无查询结果</div>
        <div class="content" :style="{ display:show }">
            <tempApp :obj="obj" v-for="(item,i) in searchBot" :key="i">
                <div slot="content" class="tempapp-cnt">
                    <div>
                        <p>
                            <span>序列号：{{item.numberid}}</span>
                            <span>上传时间：{{item.uploadtime}}</span>
                        </p>
                    </div>
                    <p>{{item.title}}</p>
                    <p>检测机构：{{item.organization}}</p>
                    <p>质检产品名称：{{item.productname}}</p>
                    <p>质检产品地域：{{item.address}}</p>
                </div>
            </tempApp>
        </div>
    </div>
</template>

<script>
import tempApp from "components/tempApp";
import areaList from "vant/packages/area/demo/area.js";
import headerTitle from "components/headerTitle";

export default {
  data() {
    return {
      title: "质控管理",
      areaList,
      showArea: false,
      obj: {
        src: "./orderQueryDetail.html?"
      },
      startTime: "",
      endTime: "",
      show: "block",
      show2: "none",
      searchBot: [
        {
          title: "福州福州服饰有限公司防晒衣检测报告",
          organization: "宁波贸信检测",
          productname: "防晒衣",
          address: "浙江 - 宁波",
          numberid: "1234567890098765",
          uploadtime: "2018-06-06"
        },
        {
          title: "福州福州服饰有限公司防晒衣检测报告",
          organization: "宁波贸信检测",
          productname: "防晒衣",
          address: "浙江 - 宁波",
          numberid: "1234567890098765",
          uploadtime: "2018-06-06"
        }
      ],
      searchGdno: "",
      searchSn: "",
      searchCustName: "",
      seaType: "1",
      address: "",
      strPageCount: 1,
      strPageRows: 10
    };
  },
  mounted() {},
  methods: {
    openVantArea() {
      this.showArea = true;
    },
    chooseAddress(arr) {
      this.showArea = false;
      arr.forEach(item => {
        Object.keys(item).forEach(element => {
          if (element === "name") {
            this.address += item[element];
          }
        });
        this.address += "-";
      });
      this.address = this.address.slice(0, -1);
    },
    cancelChoose() {
      this.showArea = false;
    }
  },
  components: {
    tempApp,
    headerTitle
  }
};
</script>

