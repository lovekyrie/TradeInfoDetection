<template>
  <div id="app">
    <div class="content">
      <div>
        <span>账号名称：</span>
        <div><input type="text"></div>
      </div>
      <div>
        <span>登录密码：</span>
        <div><input type="text"></div>
      </div>
      <div>
        <span>验证码</span>
        <div>
          <input type="text">
          <span>EUGY76</span>
        </div>
      </div>
      <p>
        <span>忘记密码？</span>
      </p>
      <div class="operate">
        <div>
          <button>登录</button>
        </div>
      </div>
      <div class="operate">
        <div>
          <button>注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
    //get message verification code
  
  },
  methods:{

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
      padding: 0.3rem 0.4rem;
      background-color: #fff;
      > div {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        &:nth-of-type(3){
          >div{
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            >input{
              width: 60%;
            }
            >span{
              line-height: 3;
              text-align:center;
              width: 40%;
              background-color: #B1B1B1;
              color:#fff;
            }
          }
        }
        &:nth-last-of-type(2),
        &:nth-last-of-type(1) {
          margin: .6rem 0;
          background-color: #2a8af2;
          > div {
            width: 100%;
            text-align: center;
            > button {
              font-size: 16px;
              padding: 0.2rem 0;
              background-color: #2a8af2;
              color: #fff;
            }
          }
        }
        &:nth-last-of-type(1) {
          background-color: #fff;
          > div {
          border-color: #5FA7F5;
            > button {
              color: #5FA7F5;
              background-color: #fff;
            }
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
        }
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
          border: 1px solid #e9e9e9;
          > input {
            padding: 0.2rem 0 .2rem .2rem;
            border: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
      > p {
        margin-bottom: 0.2rem;
        text-align: right;
        color: #9b9b9b;
      }
    }
  }
}
</style>
