<template>
  <div id="app">
    <div class="content">
      <div>
        <span>注册类型：</span>
        <div>
          <select v-model="registerType" @change="changeRegisterType(registerType)">
            <option value="企业注册">企业账号</option>
            <option value="个人注册">个人注册</option>
          </select>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-31xiala"></use>
          </svg>
        </div>
      </div>
      <div v-if="showEnterprise">
        <span>企业名称：</span>
        <div><input type="text" placeholder="请输入企业名称"></div>
      </div>
      <div>
        <span>账号名称：</span>
        <div><input type="text" placeholder="请输入账号名称"></div>
      </div>
      <div>
        <span>手机号码：</span>
        <div><input type="text" placeholder="请输入手机号码"></div>
      </div>
      <div class="verify">
        <span>手机验证码：</span>
        <div><input type="text"><button><span>获取验证码</span></button></div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div><input type="text" placeholder="请输入常用邮箱"></div>
      </div>
      <div>
        <span>登录密码：</span>
        <div><input type="text"></div>
      </div>
      <div>
        <span>确认密码：</span>
        <div><input type="text"></div>
      </div>
      <div>
        <div class="notice">
          <div>
            <img :src="registerlog">
          </div>
          <div>
            <span>我已阅读并同意接受<i>《服务协议》</i></span>
          </div>
        </div>
      </div>
      <div @click="register">
        <div>
          <button>注册</button>
        </div>
      </div>
      <p>
        <button>登录</button>
      </p>
    </div>
    <register-success v-if="showNotify"></register-success>
  </div>
</template>

<script>
import registerlog from './images/钩.png'
import registerSuccess from 'components/registerSuccess'

export default {
  data(){
    return {
      registerlog,
      showEnterprise:true,
      registerType:'企业注册',
      showNotify:false,
    }
  },
  methods:{
    changeRegisterType(value){
      if(value==='企业注册'){
        this.showEnterprise=true
      }
      else{
        this.showEnterprise=false;
      }
    },
    register(){
      this.showNotify=true;
      setTimeout(() => {
        this.showNotify=false;
      }, 2000);
    }
  },
  components:{
    registerSuccess,
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
      padding: 0.3rem 0.4rem 0.5rem;
      background-color: #fff;
      > div {
        margin-bottom: 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        &:nth-last-of-type(2) {
          .notice {
            width: 75%;
            margin: 0 auto;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            border: 0;
            > div:nth-of-type(1) {
              width: 10%;
              >img{
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
                vertical-align: middle;
              }
            }
            > div:nth-of-type(2) {
              width: 85%;
              span {
                > i {
                  font-style: normal;
                  color: #2a8af2;
                }
              }
            }
          }
        }
        &:nth-last-of-type(1) {
          > div {
            width: 100%;
            background-color: #2a8af2;
            text-align: center;
            > button {
              padding: 0.2rem 0;
              font-size: 16px;
              background-color: #2a8af2;
              color: #fff;
            }
          }
        }
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
          border: 1px solid #e5e5e5;
          position: relative;
          select,
          input {
            padding: 0.2rem 0.4rem;
            border: 0;
            width: 100%;
            height: 100%;
          }
          > svg {
            position: absolute;
            top: 50%;
            right: 5%;
            transform: translateY(-50%);
          }
        }
      }
      .verify{
          > div {
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            > input {
              width: 60%;
            }
            > button {
              width: 40%;
              background-color: #2a8af2;
              color: #fff;
            }
          }
        }
      > p {
        text-align: right;
        > button {
          color: #898989;
        }
      }
    }
  }
}
</style>
