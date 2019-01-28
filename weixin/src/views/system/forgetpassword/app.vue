<template>
  <div id="app">
    <div class="content">
      <div>
        <span>手机号码：</span>
        <div><input type="text" v-model="phone" placeholder="请输入手机号码"></div>
      </div>
      <div class="verify">
        <span>手机验证码：</span>
        <div>
          <input type="text" v-model="code">
          <button @click="getCode" v-if="getCodeShow"><span>获取验证码</span></button>
          <p v-else><span>重新发送({{num}}S)</span></p>
        </div>
      </div>
      <div>
        <div @click="submit">
          <button>重置</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            phone:'',
            code:'',
            getCodeShow:true,
            time:60,
            num:0,
        }
    },
    mounted(){

    },
    methods:{
        submit(){
            let param={
                phone:this.phone,
                code:this.code
            }
          this.until.post('/prodx/adduser/chagpwd',param)
              .then(res=>{
                  if(res.status=='200'){
                      this.$dialog.confirm({
                          title: '',
                          mes: res.msg,
                          opts: () => {
                              window.location.href = '../system/login.html'
                          }
                      });
                  }else {
                      this.$hero.msg.show({
                          text:res.msg,
                          time:1500
                      })
                  }
              })
        },
        getCode(){

            let param={
                phone:this.phone
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
    }
}
</script>

<style lang='less'>
  html,body{
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
