<template>
  <div id="app">
    <!--<a :href="'../down/downList.html?urlList='+JSON.stringify(urlList)">下载列表</a>-->
    <!--<a href="http://192.168.2.140:9091/static/test.pdf" download="测试文档" mce_href="#">下载测试</a>-->
    <div class="content">
      <div>
        <span>账号名称：</span>
        <div><input type="text" v-model="user"></div>
      </div>
      <div>
        <span>登录密码：</span>
        <div><input type="password" v-model="password"></div>
      </div>
      <div>
        <span>验证码</span>
        <div>
          <input type="text" v-model="code">
          <span @click="changeCode">{{myCode}}</span>
        </div>
      </div>
      <p>
        <span @click="forgetPassword">忘记密码？</span>
      </p>
      <div class="operate">
        <div @click="login">
          <button>登录</button>
        </div>
      </div>
      <div class="operate">
        <div @click="register">
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
      user:'',
      password:'',
      code:'',
      myCode:'',
      codeRight:false,
        wxCode:'',
        urlList:[
            {
                nm:'111',
                url:'url111'
            },
            {
                nm:'222',
                url:'ur222'
            },
            {
                nm:'333',
                url:'ur333'
            }
        ]
    }
  },
  mounted(){
      // this.down()
      console.log(sessionStorage.getItem('wxCode'))
      // if(this.until.getQueryString('code')){
      //     this.wxCode = this.until.getQueryString('code')
      //     this.until.seSave('wxCode',this.wxCode)
      // }
      if(sessionStorage.getItem('wxCode')){
          this.wxCode = sessionStorage.getItem('wxCode')
      }

      this.getCode()
  },
  methods:{

      login(){
          console.log(this.code.toUpperCase)
          if(this.code.toUpperCase()!=this.myCode.toUpperCase()){
              this.$hero.msg.show({
                  text:'请输入正确的验证码！',
              });
          }else {
              this.codeRight = true
              let param = {
                username:this.user,
                password:this.password,
                code:this.wxCode
                // remberMe:this.codeRight
              }
              this.until.post('/wxMp/access/login',param)
             // this.until.post('/general/access/appLogin',param)
                  .then(res=>{
                      if(res.status == 200){
                          let myInfo = res.data.userInfo
                          this.until.loSave('user',JSON.stringify(myInfo));
                          this.$hero.msg.show({
                              text:'登录成功！',
                              times:1500
                          });
                          setTimeout(()=>{
                              window.location.href='../home/index.html'
                          },1500)

                      }else {
                          this.$hero.msg.show({
                              text:res.message,
                          });
                      }
                  },err=>{});
          }
      },
      register(){
          window.location.href='../system/register.html'
      },
      forgetPassword(){
          window.location.href='../system/forgetpassword.html'
      },
      changeCode(){
        this.getCode()
      },
      getCode(){
          //首先默认code为空字符串
          let code = '';
          //设置长度，这里看需求，我这里设置了6
          var codeLength = 6;
          //设置随机字符
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
          //循环codeLength 我设置的4就是循环4次
          for(var i = 0; i < codeLength; i++){
              //设置随机数范围,这设置为0 ~ 36
              var index = Math.floor(Math.random()*36);
              //字符串拼接 将每次随机的字符 进行拼接
              code += random[index];
          }
          //将拼接好的字符串赋值给展示的Value
          this.myCode = code;
      },
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
