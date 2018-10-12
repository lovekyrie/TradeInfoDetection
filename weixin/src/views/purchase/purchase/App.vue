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
  padding: 0.45rem;
  border-bottom: 1px solid @bdColor;
  .search-text {
    display: flex;
    height: 0.6rem;
    line-height: 0.6rem;
    margin-bottom: 0.4rem;
    overflow: hidden;
    .s-tit {
      font-size: 0.24rem;
      display: inline-block;
      width: 1.7rem;
    }
    .c-ip {
      flex: 1;
      font-size: 0.24rem;
      border: 1px solid @bdColor;
      text-indent: 0.2rem;
      vertical-align: middle;
    }
  }
  .s-select {
    position: relative;
    .icon {
      position: absolute;
      top: 50%;
      right: 0.3rem;
      font-size: 0.25rem;
      transform: translateY(-50%);
      color: #c9c9c9;
    }
    select {
      text-indent: 0.2rem;
      option {
        vertical-align: middle;
      }
    }
  }
  .s-btn {
    flex: 1;
    width: 100%;
    background-color: #004899;
    height: 0.6rem;
    font-size: 0.25rem;
    border: 0;
    border-radius: 5px;
    color: #fff;
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
    border-bottom: 1.5px solid #c9c9c9;
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
      <div class="header">
        <header-title :title="title"></header-title>
      </div>
        <div class="search">
            <div class="search-text">
                <span class="s-tit">质检产品名称：</span>
                <input type="text" class="c-ip" placeholder="产品名称" v-model="searchGdno">
            </div>
            <div class="search-text">
                <span class="s-tit">供应商名称：</span>
                <input type="text" class="c-ip" placeholder="供应商名称" v-model="searchCustName">
             </div>
             <div class="search-text">
                <span class="s-tit">质检产品地域：</span>
                <input type="text" class="c-ip" placeholder="省、市、区" v-model="searchCustName">
             </div>
             <div class="search-text">
                <span class="s-tit">序列号：</span>
                <input type="text" class="c-ip" placeholder="序列号" v-model="searchSn">
            </div>
            <div class="search-text" style="margin-bottom: 0;"><span class="s-tit"></span>
                <button class="s-btn" @click="searchBtn">查询</button>
            </div>
        </div>
        <div class="noResult" :style="{ display:show2 }">无查询结果</div>
        <div class="content" :style="{ display:show }">
            <tempApp :obj="obj" :seaGd="item.工单号" :seaSn="seaSn" v-for="(item,i) in searchBot" :key="i">
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
import headerTitle from "components/headerTitle";

export default {
  data() {
    return {
      title: "采购查询",
      obj: {
        src: "./orderQueryDetail.html?"
      },
      startTime: "",
      endTime: "",
      show: "none",
      show2: "none",
      searchBot: [],
      searchGdno: "",
      searchSn: "",
      searchCustName: "",
      seaGd: "",
      seaType: "1",
      seaSn: "",
      seaCustName: "",
      strPageCount: 1,
      strPageRows: 10
    };
  },
  mounted() {
    var self = this;
    $(window).scroll(function() {
      let scrollTop = $(this).scrollTop();
      let scrollHeight = $(document).height();
      let windowHeight = $(this).height();

      if (scrollTop + windowHeight >= scrollHeight) {
        self.strPageRows = self.strPageRows + 10;
        // self.strPageCount++;
        console.log("每页页数" + self.strPageRows);
        console.log("当前页数" + self.strPageCount);
        self.getPor();
      }
    });
    if (history.length >= sessionStorage.history) {
      this.searchGdno = sessionStorage.strGDNO;
      this.searchSn = sessionStorage.strSN;
      this.searchCustName = sessionStorage.strCustName;
    }
    this.searchBtn();
  },
  methods: {
    searchBtn() {
      this.strPageCount = 1;
      this.StrPageRows = 10;
      let param = {
        strGDNO: this.searchGdno,
        strSN: this.searchSn,
        strCustName: this.searchCustName,
        strType: 0,
        strPageCount: this.strPageCount,
        strPageRows: this.strPageRows
      };

      this.until
        .post("/HTWeChat/HTBills/HTOrderList", param)

        .then(
          res => {
            if (res.msg == "") {
              this.show = "block";
              this.searchBot = res.data;
              console.log(res.data);
              this.show2 = "none";
            } else {
              this.show = "none";
              this.show2 = "block";
            }
          },
          err => {
            this.show = "none";
          }
        );
    },
    getPor() {
      console.log("每页页数2：" + this.StrPageRows);
      let param = {
        strGDNO: this.searchGdno,
        strSN: this.searchSn,
        strCustName: this.searchCustName,
        strType: 0,
        strPageCount: this.strPageCount,
        StrPageRows: this.strPageRows
        // StrPageRows:9,
      };

      this.until
        .post("/HTWeChat/HTBills/HTOrderList", param)

        .then(
          res => {
            if (res.msg == "") {
              this.show = "block";
              this.searchBot = res.data;

              // this.searchBot = this.searchBot.concat(res.data);
              console.log(this.searchBot);

              sessionStorage.strGDNO = this.searchGdno;
              sessionStorage.strSN = this.searchSn;
              sessionStorage.strCustName = this.searchCustName;
              // sessionStorage.StrPageRows = this.StrPageRows;
            } else {
            }
          },
          err => {
            this.show = "none";
            alert("请输入正确数值");
          }
        );
    }
  },
  components: {
    tempApp,
    headerTitle
  }
};
</script>

