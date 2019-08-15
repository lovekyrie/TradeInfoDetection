<template>
  <div class="header-wrap">
    <div class="account-wrap">
      <div class="account" v-if="!login">
        <div class="language">
          <a href="../home/index.html">简体中文</a>
          <span>|</span>
          <a href="../en/index.html">ENGLISH</a>
        </div>
        <span><a href="../en/entryLogin.html">Login</a></span>
        <span>|</span>
        <span><a href="../en/entryRegister.html">Register</a></span>
      </div>
      <div class="account" v-else>
        <div class="language">
          <a href="../home/index.html">简体中文</a>
          <span>|</span>
          <a href="../en/index.html">ENGLISH</a>
        </div>
        <span>
          <a href="../en/index.html#membercenter">{{myInfo.usNm}}</a>
        </span>
        <span>|</span>
        <span><a href="#" @click="loginOut()">Sign out</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import tradeLog from "./images/logo.png";

export default {
  props:{
    showSearch:{
      type:Boolean,
      default:false
    },
    showNav:{
      type:Boolean,
      default:false
    },
    upload:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      key:'',
      state:'Buyer center',
      userPk:'',
      tradeLog,
      login:false,
      myInfo:{},
      findList: [
        {
          ID: 1,
          content: "Service"
        },
        {
          ID: 2,
          content: "Report"
        },
        {
          ID: 3,
          content: "Talents"
        },
        {
          ID: 4,
          content: "Equipment"
        }
      ],
      sidebarList:[
         {
          ID: 1,
          content: "Buyer center",
          itemLink:'/buyer',
        },
        {
          ID: 2,
          content: "Seller center",
          itemLink:'/seller',
        },
        {
          ID: 3,
          content: "Service center",
          itemLink:'/service',
        },
        {
          ID: 4,
          content: "Industry news",
          itemLink:'/industry',
        },
        {
          ID:5,
          content:'Site guide',
          itemLink:'/platform'
        }
      ]
    };
  },
  mounted(){
    let info=JSON.parse(this.until.loGet('user'))
    this.userPk = info.sysUserPk
    this.getInfo()
  },
  methods:{
    search(){
      this.$emit('search',this.key)
    },
    //获取个人信息
    getInfo(){
      this.until.get('/sys/user/info/'+this.userPk)
        .then(res=>{
          if(res.status == '200'){
            this.login = true
            this.myInfo = res.data
            this.type = this.myInfo.arg1
            this.until.loSave('userInfo',JSON.stringify(this.myInfo));
          }else {
            this.login = false
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
        })
    },
    //注销
    loginOut(){
      this.until.get('/general/access/logout')
        .then(res=>{
          if(res.status=='200'){
            this.until.loRemove('userInfo')
            this.until.loRemove('user')
            this.$message({
              message: 'Cancellation success!',
              type: 'success'
            });
            window.location.href='../entry/login.html'
          }else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }

        })
    },
    choose(item,url){
      this.state=item;
      this.$router.push({//你需要接受路由的参数再跳转
        path: url
      });
    }
  }
};
</script>

<style lang='less'>
.header-wrap {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 1px solid #F1F1F1;
  .account-wrap {
    background-color: #f1f1f1;
    .account {
      width: 820px;
      margin: 0 auto;
      padding: 5px 0;
      text-align: right;
      .language{
        float: left;
        font-size: 12px;
        span{
          color: #e1e1e1;
          margin: 0 0.8rem;
        }
      }
      > span {
        font-size: 12px;
        &:not(:nth-last-of-type(1)) {
          margin-right: 0.8rem;
        }
        &:nth-of-type(2) {
          color: #e1e1e1;
        }
      }
    }
  }
  .header-log {
    width: 820px;
    margin: 0 auto;
    padding: 20px 0;
    .log-wrap {
      display: -webkit-flex;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      >a{
        border-color: #0d55d2;
        background-color: #0d55d2;
        color: #fff;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: inline-block;
      }
      > .log {
        width: 130px;
      }
      .search-wrap {
        width: 375px;
        .select {
          display: -webkit-flex;
          display: flex;
          flex-wrap: nowrap;
          > div {
          border:1px solid #eaeaea;
          border-left: 0;
            &:not(:nth-last-of-type(1)) {
              border-right: 1px solid #eaeaea;
            }
            /*&:not(:nth-of-type(2)) {*/
              /*width: 20%;*/
            /*}*/
            &:nth-of-type(1){
              border-left: 1px solid #eaeaea;
              width: 70%;
            }
            &:nth-of-type(2) {
              padding-left: 0.6rem;
              width: 30%;
            }
            &:nth-last-of-type(1) {
              border-color: #0d55d2;
              background-color: #0d55d2;
              color: #fff;
            }
            select,
            input,
            button {
              padding: 8px 0;
              width: 100%;
              height: 100%;
              border: 0;
            }
            button {
              text-align: center;
              background-color: rgba(0, 0, 0, 0);
            }
          }
        }
      }
    }
  }
  .header-sidebar{
    width: 820px;
    margin: 0 auto;
    .sidebar{
      width: 750px;
      display: -webkit-flex;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      >div{
        width: 15%;
        padding: 10px 0;
        text-align: center;
        .router-link-active{
          text-decoration: none;
          span{
            color:  #0d55d2;
          }
        }
      }
      .active{
        border-bottom: 1px solid #0d55d2;
      }
    }
  }
}
</style>
