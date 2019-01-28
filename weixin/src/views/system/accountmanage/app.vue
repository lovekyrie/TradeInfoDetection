<template>
  <div id="app">
    <div class="content">
      <div>
        <span>注册账号：</span>
        <div><input type="text" v-model="info.usNm" disabled></div>
      </div>
      <div>
        <span>手机号码：</span>
        <div><input type="number" v-model="info.mob"></div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div><input type="text" v-model="info.email"></div>
      </div>
       <div>
        <span>企业名称：</span>
        <div><input type="text" placeholder="请输入企业名称" v-model="info.nkNm"></div>
      </div>
      <div>
        <span>企业地址：</span>
        <div><input type="text" placeholder="请输入企业地址" v-model="info.arg2"></div>
      </div>
      <div>
        <div @click="submit">
          <button>确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      info:{
          sysUserPk:'',
          usNm:'',
          mob:'',
          email:'',
          nkNm:'',
          arg2:''
      },

    }
  },
    mounted(){
        let info=JSON.parse(this.until.loGet('userInfo'))
        if(info){
            this.info.sysUserPk = info.sysUserPk
            this.info.usNm = info.usNm
            this.info.mob = info.mob
            this.info.email = info.email
            this.info.nkNm = info.nkNm
            this.info.arg2 = info.arg2
        }else {
            this.$hero.msg.show({
                text:'您还未登录，请选登录！',
                times:1500
            });
            setTimeout(()=>{
                window.location.href = '../system/login.html'
            },1500)
        }
    },
    methods:{
        submit(){
            this.$dialog.loading.open();
            this.until.postData('/sys/user/edit',JSON.stringify(this.info))
                .then(res=>{
                    if(res.status=='200'){
                        this.$dialog.loading.close();
                        this.$hero.msg.show({
                            text:'修改成功！',
                            times:1500
                        });
                        setTimeout(()=>{
                            window.location.href = '../home/index.html'
                        },1500)
                    }else {
                        this.$hero.msg.show({
                            text:res.message,
                            times:1500
                        });
                    }
                })
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
