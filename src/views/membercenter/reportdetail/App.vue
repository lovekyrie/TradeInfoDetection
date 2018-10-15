<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#container {
  height: 100%;
}

.detailinfo {
  background-color: #fff;
  .detail-wrap {
    padding: .25rem;
    h3 {
      padding: 0.1rem 0;
      font-size: 16px;
      font-weight: 400;
    }
    p {
      margin: 0.15rem 0;
      font-size: 14px;
      color: #666;
      span {
        i {
          font-style: normal;
          padding-left: 0.01rem;
          padding-right: 0.1rem;
        }
      }
    }
  }
}

.imginfo {
  margin: 0.6rem 0 0.6rem;
}
</style>

<template>
    <div id="container">
        <div class="detailinfo">
          <div class="detail-wrap">
            <h3>
              {{detail.title}}
            </h3>
            <p>
              <span>上传者
                <i>:</i>
              </span>{{detail.uploader}}
            </p>
            <p>
              <span>序列号
                <i>:</i>    
              </span>{{detail.numberid}}
            </p>
            <p>
              <span>检测机构
                <i>:</i>    
              </span>{{detail.organization}}
            </p>
            <p>
              <span>供应商名称
                <i>:</i>    
              </span>{{detail.vendorname}}
            </p>
            <p>
              <span>质检产品名称
                <i>:</i>
              </span>{{detail.productname}}
            </p>
            <p>
              <span>质检产品地域
                <i>:</i>    
              </span>{{detail.address}}
            </p>
            <p>
              <span>检测项目
                <i>:</i>
              </span>{{detail.description}}
            </p>
            </div>
        </div>
        <!-- <div class="imginfo">
            <img src="" alt="1">
        </div> -->
    </div>
</template>

<script>
import tempApp from "components/tempApp";

export default {
  data() {
    return {
      obj: {
        src: "./orderQueryDetail.html?"
      },
      detail: {
        title: "福州福州服饰有限公司防晒衣检测报告",
        uploader: "张三",
        numberid: "1234567890098765",
        organization: "宁波贸信检测",
        vendorname: "宁波太平鸟服饰",
        productname: "防晒衣",
        address: "浙江 - 宁波 - 海曙",
        description: `最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，
                    最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，最新最权威的防晒衣质检报告，
                    最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告。`
      }
    };
  },
  mounted() {
    var self = this;

    this.searchBtn();
  },
  methods: {},
  components: {
    tempApp
  }
};
</script>

