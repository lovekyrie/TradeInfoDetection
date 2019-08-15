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
    <a href="../en/index.html"><img src="../img/logo.png"></a>
  </div>
  <!--中间主体-->
  <div id="main">
    <!--标题-->
    <ul>
      <li class="line"><span></span></li>
      <li class="title">Log in</li>
      <li class="line"><span></span></li>
    </ul>
    <!--表单-->
    <div class="form">
      <div><img src="../img/账号.png"><input type="text" placeholder="Please enter account name" v-model="user"> </div>
      <div><img src="../img/密码.png"><input type="password" placeholder="Please enter password" v-model="password"> </div>
      <div style="margin-bottom: 10px"><img src="../img/验证码.png"><input style="width: 200px" type="text" v-model="code">
        <span class="modified" @click="changeCode">
          {{myCode}}
        </span>
      </div>
      <div style="margin-top: 10px"><a href="./entryForgetPassword.html">Forget password</a></div>
      <div style="margin-left: 30px">
        <button class="loginBtn" type="submit" @click="submit">Log in</button>
        <button class="cancelBtn" @click="cancel">Cancel</button>
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
            loading:false,
            user:'',
            password:'',
            code:'',
            myCode:'',
            codeRight:false,
          }
        },
      mounted(){
        this.getCode()
      },
      methods:{
        changeCode(){
          this.getCode()
        },
        submit(){
          // console.log(this.code.toUpperCase)
          if(this.code.toUpperCase()!=this.myCode.toUpperCase()){
            this.$message({
              message: 'Please enter the correct verification code!',
              type: 'warning'
            });
          }else {
            this.loading = true
            this.codeRight = true
            let param = {
              username:this.user,
              password:this.password,
              remberMe:this.codeRight
            }
            this.until.post('/general/access/appLogin',param)
              .then(res=>{
                this.loading = false
                if(res.status == 200){
                  let myInfo = res.data.userInfo
                  this.until.loSave('user',JSON.stringify(myInfo));
                  this.$message({
                    message: 'Log in successfully!',
                    type: 'success'
                  });
                  setTimeout(()=>{
                    window.location.href='../en/index.html'
                  },1500)

                }else {
                  this.$message({
                    message: res.message,
                    type: 'warning'
                  });
                }
              },err=>{});

          }
        },
        cancel(){
          this.user = ''
          this.password = ''
          this.code = ''
        },
        getCode(){
          //首先默认code为空字符串
          let code = '';
          //设置长度，这里看需求，我这里设置了4
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
    }
</script>

<style scoped>

</style>
