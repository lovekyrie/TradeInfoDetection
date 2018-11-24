<template>
  <div id="app">
    <div class="content">
      <div>
        <span>原密码：</span>
        <div><input type="password" v-model="oldPWD"></div>
      </div>
      <div>
        <span>新密码：</span>
        <div><input type="password" v-model="newPWD"></div>
      </div>
      <div>
        <span>确认密码：</span>
        <div><input type="password" v-model="newPWD2"></div>
      </div>
      <div>
        <div>
          <button @click="submit">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            oldPWD:'',
            newPWD:'',
            newPWD2:''
        }
    },
    methods:{
        submit(){
            if(this.oldPWD&&this.newPWD&&this.newPWD2){
                let param={
                    oldPwd:this.oldPWD,
                    newPwd:this.newPWD
                }
                this.until.post('/general/auth/updPwd',param)
                    .then(res=>{
                        if(res.status=='200'){
                            this.$hero.msg.show({
                                text:'密码修改成功，请重新登录！',
                                times:1500
                            });
                            setTimeout(()=>{
                                // window.location.href = '../system/login.html'
                            },1500)
                        }else {
                            this.$hero.msg.show({
                                text:res.message,
                                times:1500
                            });
                        }
                    })
            }else {
                if(this.newPWD2&&this.newPWD!=this.newPWD2){
                    this.$hero.msg.show({
                        text:'请补全信息！',
                        times:1500
                    });
                }
            }
        }
    },
    watch:{
        newPWD:function () {
            setTimeout(()=>{
                if(this.newPWD2&&this.newPWD!=this.newPWD2){
                    this.$hero.msg.show({
                        text:'两次输入的密码不一致！',
                        times:1500
                    });
                }
            },1500)

        },
        newPWD2:function () {
            setTimeout(()=>{
                if(this.newPWD&&this.newPWD!=this.newPWD2){
                    this.$hero.msg.show({
                        text:'两次输入的密码不一致！',
                        times:1500
                    });
                }
            },1500)

        }
    }
}
</script>

<style lang='less'>
  html,body{
    height: 100%;
    background-color: #f7f7f7;
    #app{
      height: 100%;
      .content{
        padding: .3rem .4rem .6rem;
        background-color: #fff;
        >div{
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          &:nth-last-of-type(1){
            margin-top: .6rem;
            >div{
              text-align: center;
              width: 100%;
              background-color: #2A8AF2;
              button{
                padding: .2rem 0;
                font-size: 16px;
                background-color: #2A8AF2;
                color: #fff;
              }
            }
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .3rem;
          }
          >span{
            width: 30%;
          }
          >div{
            width: 70%;
            border: 1px solid #EDEDED;
            >input{
              padding :.2rem;
              border: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
