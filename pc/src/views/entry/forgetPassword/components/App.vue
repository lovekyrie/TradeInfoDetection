<template>
  <div id="container">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="./login.html">登录</a> </li>
        <li><a href="./register.html">注册</a> </li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../login/img/logo.png">
    </div>
    <!--中间主体-->
    <div id="main">
      <!--标题-->
      <ul>
        <li class="line"><span></span></li>
        <li class="title">忘记密码</li>
        <li class="line"><span></span></li>
      </ul>
      <!--表单-->
      <div class="form">
        <div><img src="../img/账号.png"><input type="text" placeholder="请输入账号"> </div>
        <div><img src="../img/手机.png"><input v-model="phone" @blur.prevent="phoneCheck()" type="number" placeholder="请输入注册手机号码">
          <span v-model="Tips.tip1" style="position:absolute;top:11px;color: red">{{Tips.tip1}}</span>
        </div>

        <div><img src="../img/邮箱.png"><input v-model="email" @blur.prevent="emailCheck()" type="text" placeholder="请输入注册邮箱地址">
          <span v-model="Tips.tip2" style="position:absolute;top:11px;color: red">{{Tips.tip2}}</span>
        </div>
        <div style="margin-left: 30px"><button class="loginBtn" type="submit">确定</button>
          <button class="cancelBtn">取消</button>
        </div>
      </div>


    </div>
    <!--页脚-->
    <div id="footer">
      <p>版权所有：宁波贸信检测技术有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</p>
      <p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>
      <p>传真：+86-574-89017298&nbsp;&nbsp;&nbsp;&nbsp;E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com</p>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        phone:'',
        email:'',
        Tips:{
          tip1:'',
          tip2:''
        }
      }
    },
    methods:{
      phoneCheck:function () {
        let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(this.phone==''){
          this.Tips.tip1="*请输入注册手机号码";
        }
        else if(!reg.test(this.phone)){
          this.Tips.tip1="*请输入正确的手机号码格式";
        }
        else {
          this.Tips.tip1="";
        }
      },
      emailCheck:function () {
        let reg=/^[\w,\d]+[_|\.]?[\w,\d]*@[\w,\d]+[\.]{1}[\w]{1,3}$/;
        if(this.email==''){
          this.Tips.tip2="*请输入注册邮箱地址";
        }
        else if(!reg.test(this.email)){
          this.Tips.tip2="*请输入正确的邮箱格式";
        }
        else {
          this.Tips.tip2="";
        }

      }

    }
  }
</script>

<style scoped>

</style>
