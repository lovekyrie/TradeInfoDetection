<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="service">
        <div>
          <img :src="detailpro" alt="">
        </div>
        <div>
          <h3>{{detectionName}}</h3>
          <div>
            <h4>服务内容</h4>
            <span>{{service}}</span>
          </div>
        </div>
      </div>
      <div class="introduce">
        <h4>检测机构介绍</h4>
        <div class="info">
          <div>
            <div>
              <img :src="peacebird" alt="">
            </div>
            <div>
              <p>检测机构名称：{{orgnization}}</p>
              <span>{{introduce}}</span>
            </div>
          </div>
          <div><span>联系人：{{linkedMan}}</span></div>
          <div><span>联系电话：{{linkedPhone}}</span></div>
          <div><span>联系邮箱：{{email}}</span></div>
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
import detailpro from "./images/detailpro_03.png";
import peacebird from "./images/peacebird_03.png";

export default {
  data() {
    return {
      detailpro,
      peacebird,
      detectionName: "儿童家具质量评审儿童家具质检",
      service: `最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、乙烯等有害物质，严格按照国际标准。
      最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、乙烯等有害物质，严格按照国际标准。
      最全面儿童家具质量评审儿童家具质检，可检测儿童家具中的甲醛、乙烯等有害物质，严格按照国际标准。`,
      orgnization: "宁波华信检测有限公司",
      introduce: `宁波华信检测有限公司是一家专注检测并有十年以上行业检测经验的公司，曾服务过各大制造厂商。
      宁波华信检测有限公司是一家专注检测并有十年以上行业检测经验的公司，曾服务过各大制造厂商。
      宁波华信检测有限公司是一家专注检测并有十年以上行业检测经验的公司，曾服务过各大制造厂商。
      宁波华信检测有限公司是一家专注检测并有十年以上行业检测经验的公司，曾服务过各大制造厂商。`,
      linkedMan: "张收纳",
      linkedPhone: "13599990000",
      email: "83906@163.com"
    };
  },
  methods: {},
  components: {
    tradeHeader,
    tradeFooter
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 75px auto 0px;
      .service {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        > div {
          &:nth-of-type(1) {
            width: 418px;
          }
          &:nth-of-type(2) {
            width: 755px;
            h3 {
              padding: 30px 0;
              border-bottom: 1px solid #ddd;
              font-weight: 400;
              font-size: 20px;
            }
            div {
              h4 {
                font-size: 18px;
                padding: 30px 0 20px;
              }
              span {
                font-size: 16px;
              }
            }
          }
        }
      }
      .introduce {
        margin-top: 30px;
        h4 {
          padding-bottom: 20px;
          font-size: 18px;
          border-bottom: 1px solid #ddd;
        }
        div {
          width: 100%;
          font-size: 16px;
          &:nth-of-type(1) {
           
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            > div {
              &:nth-of-type(1) {
                display: -webkit-flex;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                > div {
                   margin: 20px 0;
                  &:nth-of-type(1) {
                    width: 198px;
                    border-radius: 3px;
                    img {
                      width: auto;
                      height: auto;
                      max-width: 100%;
                      max-height: 100%;
                      vertical-align: middle;
                    }
                  }
                  &:nth-of-type(2) {
                    width: 980px;
                    p {
                      font-weight: 700;
                      font-size: 18px;
                      margin-bottom: 20px;
                    }
                    span {
                      padding-right: 20px;
                      font-size: 16px;
                    }
                  }
                }
              }
            }
          }
          &:not(:nth-of-type(1)){
            margin-bottom: 25px;
          }
        }
      }
    }
  }
}
</style>
