<template>
  <div id="app">
    <div class="content">
      <div>
        <span>注册类型：</span>
        <div>
          <select v-model="info.arg1" @change="changeRegisterType(info.arg1)">
            <option value="2">企业账号</option>
            <option value="1">个人注册</option>
          </select>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-31xiala"></use>
          </svg>
        </div>
      </div>
      <div v-if="showEnterprise">
        <span>企业名称：</span>
        <div><input type="text" v-model="info.nkNm" placeholder="请输入企业名称"></div>
      </div>
      <div>
        <span>账号名称：</span>
        <div><input type="text" v-model="info.usNm" placeholder="请输入账号名称"></div>
      </div>
      <div>
        <span>手机号码：</span>
        <div><input type="number" v-model.number="info.mob" placeholder="请输入手机号码"></div>
      </div>
      <div class="verify">
        <span>手机验证码：</span>
        <div>
          <input type="number" v-model.number="info.rmks">
          <button @click="getCode" v-if="getCodeShow"><span>获取验证码</span></button>
          <p v-else><span>重新发送({{num}}S)</span></p>
        </div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div><input type="text" v-model="info.email" placeholder="请输入常用邮箱"></div>
      </div>
      <div>
        <span>登录密码：</span>
        <div><input type="password" v-model="info.pwd"></div>
      </div>
      <div>
        <span>确认密码：</span>
        <div><input type="password" v-model="passwordConfirm"></div>
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
        <button @click="toLogin()">登录</button>
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
        getCodeShow:true, //是否禁止发送验证码
        num:'',//倒计时
        time:60,//倒计时时间
        info:{
            usNm:'',//账号名称
            nkNm:'',//企业名称
            pwd:'',//密码
            mob:'',//手机
            email:'',//邮件
            arg1:'1',//1/2；个人/企业
            catCd:'',//20000.160/20000.170
            arg9:'',//推荐码
            rmks:'',//验证码
        },
      registerlog,
      showEnterprise:false,
      registerType:'企业注册',
      showNotify:false,
        companyName:'',
        userName:'',
        phone:'',
        verificationCode:'',
        email:'',
        password:'',
        passwordConfirm:'',
        wxCode:'',
    }
  },
  mounted(){
      this.wxCode = this.until.getQueryString('code') ? this.until.getQueryString('code') : this.until.seGet('wxCode')
      this.info.arg9 = this.until.getQueryString('recomCode') ? this.until.getQueryString('recomCode'):0
      this.until.seSave('wxCode',this.wxCode)
  },
  methods:{
      login(){
          let param = {
              username:this.info.usNm,
              password:this.info.pwd,
              code:this.wxCode
              // remberMe:true
          }
          this.until.post('/wxMp/access/login',param)
              .then(res=>{
                  if(res.status == 200){
                      let myInfo = res.data.userInfo
                      this.until.loSave('user',JSON.stringify(myInfo));
                      // this.$hero.msg.show({
                      //     text:'登录成功！',
                      //     times:1500
                      // });
                      // setTimeout(()=>{
                          window.location.href='../home/index.html'
                      // },1500)

                  }else {
                      this.$hero.msg.show({
                          text:res.data,
                      });
                  }
              },err=>{});
      },
      getCode(){

          let param={
              phone:this.info.mob
          }
          this.until.post('/general/sms/sendCode',param)
              .then(res=>{
                  if(res.status=='200'){
                      this.getCodeShow=false
                      this.num = this.time
                      this.countDown()
                  }
                  this.$hero.msg.show({
                      text:res.message,
                      times:1500
                  });
              })
      },
      //倒计时
      countDown(){
          let timePick=setInterval(()=>{
              this.num--
              if(this.num==0){
                  this.getCodeShow = true
                  clearInterval(timePick)
              }
          },1000)
      },
    changeRegisterType(value){
      if(value==='2'){
         this.info.catCd = 20000.170
         this.showEnterprise=true
      }
      else{
          this.info.catCd = 20000.160
        this.showEnterprise=false;
      }
    },
    register(){
        if(this.info.pwd!=this.passwordConfirm){
            this.$hero.msg.show({
                text:'两次输入的密码不一致！',
                times:1500
            });
            return false
        }
      this.until.postData('/prodx/adduser/edit',JSON.stringify(this.info))
          .then(res=>{
              console.log(res.status)
              if(res.status=='200'){
                  this.showNotify=true;
                  // this.$hero.msg.show({
                  //     text:'注册成功，即将登录！',
                  //     time:1500
                  // })
                  this.login()
                  // setTimeout(()=>{
                  //     window.location.href = 'login.html'
                  // },1500)

              }else {
                  this.$hero.msg.show({
                      text:res.message,
                      time:1500
                  })
              }
          })
      // setTimeout(() => {
      //   this.showNotify=false;
      // }, 2000);
    },
      toLogin(){
        window.location.href = 'login.html'
      }
  },
  computed:{
   passwordYZ:function(){
       let judge=this.password==this.passwordConfirmue ? true:false
       if(!judge){
           this.$hero.msg.show({
               text:'',
           });
       }
        return judge
      }
  },
    watch:{

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
            >p{
              width: 40%;
              display: flex;
              display: -webkit-flex;
              justify-content: center;
              align-items: center;
              background-color: #d2d2d2;
              color: #333;
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
