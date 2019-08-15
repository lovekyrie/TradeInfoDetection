<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="./entryLogin.html">Login</a> </li>
        <li><a href="./entryRegister.html">Register</a> </li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../entryLogin/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">Forget password</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="form">
        <div><img src="../img/手机.png"><input v-model="phone" type="number" placeholder="Please enter the registered mobile phone number." class="phone">
          <span v-model="Tips.tip1" style="position:absolute;top:11px;color: red">{{Tips.tip1}}</span>
        </div>

        <div style="margin-bottom: 10px"><img src="../img/验证码.png"><input style="width: 200px" type="text" v-model="code">
          <button class="formButton_c" @click="getCode()" v-if="getCodeShow">Get the authentication code</button>
          <button class="modified" v-else>Resend({{num}}S)</button>

        </div>
        <div style="margin-left: 30px"><button class="loginBtn" type="submit" @click="submit">Reset</button>
        </div>
      </div>


    </div>
    <!--页脚-->
    <div id="footer">
      <p>Copyright:   MaoXin Technology Limited Company   Record / License No.: 浙ICP备16007937号 </p>
      <!--<p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>-->
      <p>E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com</p>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        loading: false,
        getCodeShow:true, //是否禁止发送验证码
        num:'',//倒计时
        time:300,//倒计时时间
        phone:'',
        code:'',
        Tips:{
          tip1:'',
          tip2:''
        }
      }
    },
    methods:{
      submit(){
        this.loading = true
        let param={
          phone:this.phone,
          code:this.code
        }
        this.until.post('/prodx/adduser/chagpwd',param)
          .then(res=>{
            this.loading = false
            if(res.status=='200'){
              this.$alert(res.msg, 'reset password', {
                confirmButtonText: 'Confirm',
                callback: action => {
                  // this.$message({
                  //   type: 'info',
                  //   message: `action: ${ action }`
                  // });
                }
              });
            }else {
              this.$message({
                message:res.msg,
                type: 'warning'
              });
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
              this.$message({
                message:res.message,
                type: 'success'
              });
            }else {
              this.$message({
                message:res.message,
                type: 'warning'
              });
            }

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

<style scoped lang="less">
  .form{
    input.phone{
      width: 340px!important;
    }
  }
.formButton_c {
  width: 135px!important;
  height: 36px;
  font-size: 12px;
  background-color: rgb(13, 85, 210);
  color: white;
  /*position: relative;*/
  left: -5px;
  top: 2px;
}
.modified{
  width: 135px!important;
}
</style>
