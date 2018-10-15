<template>
  <div id="app">
    <div class="content">
      <div class="operate">
        <div>
          <span>兑换说明</span>
        </div>
        <div><span>我的金币</span></div>
        <div><span>16</span></div>
        <div class="operate-btn">
          <div>
            <button>充值</button>
            <button>兑换</button>
          </div>
        </div>
        <div>
          <span>金币交易记录：</span>
          <div>
            <select >
              <option value="交易方式">交易方式</option>
              <option value="在线阅读报告">在线阅读报告</option>
              <option value="下载报告">下载报告</option>
              <option value="充值">充值</option>
            </select>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-31xiala"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="operate-history">
        <div>
          <div><span>交易记录</span></div>
          <div><span>金币数</span></div>
          <div><span>交易时间</span></div>
        </div>
         <div v-for="(item, index) in tradeHistoryList" :key="index">
          <div><span>{{item.tradeName}}</span></div>
          <div><span>{{item.tradeThing}}</span></div>
          <div><span>{{item.tradeTime}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tradeHistoryList: [
        {
          tradeName: "在线阅读报告",
          tradeThing: "消耗2金币",
          tradeTime: "2018-06-06"
        },
        {
          tradeName: "下载报告",
          tradeThing: "消耗2金币",
          tradeTime: "2018-06-06"
        },
        {
          tradeName: "充值",
          tradeThing: "消耗2金币",
          tradeTime: "2018-06-06"
        }
      ]
    };
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .content {
      background-color: #fff;
      .operate {
        padding: 0.3rem 0.4rem 0;
        > div:nth-of-type(1) {
          text-align: right;
          color: #b7b7b7;
        }
        > div:nth-of-type(2) {
          text-align: center;
        }
        > div:nth-of-type(3) {
          font-size: 20px;
          text-align: center;
          color: #ff4014;
        }
        .operate-btn {
          > div {
            margin: 0.2rem auto;
            width: 60%;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            > button {
              padding: 0.1rem;
              width: 45%;
              border-radius: 5px;
              &:nth-of-type(1) {
                background-color: #2a8af2;
                color: #fff;
              }
              &:nth-of-type(2) {
                border: 1px solid #ff4014;
                color: #ff4014;
              }
            }
          }
        }
        > div:nth-last-of-type(1) {
          margin: .6rem 0;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          > span {
            width: 30%;
          }
          > div {
            position: relative;
            width: 70%;
            border: 1px solid #e4e4e4;
            > select {
              padding: 0.2rem 0.3rem;
              border: 0;
              width: 100%;
              height: 100%;
            }
            > svg {
              position: absolute;
              top: 30%;
              right: 0.2rem;
              transform: translateX(-50%);
            }
          }
        }
      }
      .operate-history{
        >div{
          padding: .3rem 0;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          &:nth-of-type(1){
            background-color: #f7f7f7;
            color: #A6A6A6;
          }
          &:not(:nth-last-of-type(1)){
            border-bottom: 1px solid #EFEFEF;
          }
          >div{
            flex: 3;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
