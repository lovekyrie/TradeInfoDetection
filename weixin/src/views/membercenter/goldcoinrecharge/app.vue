<template>
  <div id="app">
    <div class="content">
      <div>
        <span>当前金币：</span>
        <div><span>16</span></div>
      </div>
      <div class="recharge">
        <span>充值金额：</span>
        <div>
          <input type="text" placeholder="100">
          <span>1元=1金币</span>
        </div>
      </div>
      <div>
        <span>当前金币：</span>
        <div><span>116</span></div>
      </div>
      <div class="paytype">
        <span>付款方式</span>
        <div>
          <div><img :src="webchat" alt=""></div>
          <span>微信</span>
        </div>
      </div>
      <div>
        <div>
          <button>确认支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webchat from './images/微信.png'

export default {
  data(){
    return {
      webchat,
    }
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
      padding: 0.3rem 0.4rem 0.6rem;
      background-color: #fff;
      > div {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        &:nth-of-type(1),
        &:nth-of-type(3) {
          > div {
            color: #ff3000;
            font-size: 20px;
          }
        }
        &:nth-of-type(2) {
          > div {
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            > input {
              padding: .2rem .3rem;
              border: 1px solid #E9E9E9;
              width: 70%;
            }
            > span {
              color: #bbb;
              width: 30%;
            }
          }
        }
        &:nth-last-of-type(1) {
          margin-top: .6rem;
          > div {
            width: 100%;
            text-align: center;
            background-color: #2a8af2;
            > button {
              padding: .2rem 0;
              background-color: #2a8af2;
              color: #fff;
            }
          }
        }
        &:not(:nth-last-of-type(1)){
          margin-bottom: .3rem;
        }
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
        }
      }
      .paytype{
        >div{
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          >div{
            width: 13%;
            img{
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
              vertical-align: middle;
            }
          }
          >span{
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
