<template>
  <div class="myHeader">
    <div class="header-wrap">
      <div class="account-wrap">

        <div class="account" v-if="!login">
          <div class="language">
            <a href="../home/index.html">简体中文</a>
            <span>|</span>
            <a href="../en/index.html">ENGLISH</a>
          </div>
          <span><a href="./entryLogin.html">Login</a></span>
          <span>|</span>
          <span><a href="./entryRegister.html">Register</a></span>
        </div>
        <div class="account" v-else>
          <div class="language">
            <a href="../home/index.html">简体中文</a>
            <span>|</span>
            <a href="../en/index.html">ENGLISH</a>
          </div>
        <span  v-if="showNav2">
          <a @click="choose('0','/center')" class="cursor">{{myInfo.usNm}}</a>
          <!--<a href="../membercenter/index.html#center" >-->
          <!--{{myInfo.usNm}}-->
          <!--</a>-->
          <!--<a href="../membercenter/index.html">{{myInfo.usNm}}</a>-->
        </span>
        <span v-else>
          <a @click="toMember">{{myInfo.usNm}}</a>
          <!--<router-link to="center">{{myInfo.usNm}}</router-link>-->
        </span>
          <span>|</span>
          <span><a href="#" @click="loginOut()">Sign out</a></span>
        </div>
      </div>
      <div class="header-log">
        <div class="log-wrap">
          <div class="log">
            <a href="../en/index.html">
              <img :src="tradeLog" alt="">
            </a>
          </div>
          <div class="search-wrap" v-if="showSearch">
            <div class="select">
              <div class="selectChoose" v-if="ifSelect">
                <select v-model="searchType">
                  <option :value="item.ID" v-for="(item) in findList" :key="item.ID">{{item.content}}</option>
                </select>
              </div>
              <div>
                <input type="text" v-model="key" :placeholder="searchText"/>
              </div>
              <div @click="search">
                <button>Search</button>
              </div>
            </div>
          </div>
          <a href="#" v-if="butNm!=0 && show" @click="submit">{{butNm}}</a>
          <!--<a href="#" v-if="upload" @click="submit">发布需求</a>-->
        </div>
      </div>
      <div class="header-sidebar" v-if="showNav">
        <div class="sidebar">
          <div v-for="(item) in sidebarList" :key="item.ID"  @click="choose(item.ID,item.itemLink)">
            <router-link :to="item.itemLink" >
              <span>{{item.content}}</span>
            </router-link>
          </div>
        </div>
      </div>

    </div>
    <p @click="back" v-if="!showNav" class="cursor"><i class="el-icon-arrow-left"></i>  Back</p>
  </div>
</template>

<script>
import tradeLog from "./images/logo.png";
export default {
  props:{
    myType:{  //1买家 2卖家
      type:String,
      default:'0'
    },
    butNm:{  //发布 ……
      type:String,
      default:'0'
    },
    searchText:{  //输入框里的默认文字
      type:String,
      default:''
    },
    ifSelect:{
      type:Boolean,
      default:false
    },
    showSearch:{
      type:Boolean,
      default:false
    },
    showNav:{
      type:Boolean,
      default:false
    },
    showNav2:{
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
      show:true,
      type:'', //个人还是企业 1是个人 2是企业
      key:'',
      state:'Buyer center',
      userPk:'',
      tradeLog,
      login:false,
      myInfo:{},
      searchType:2, //搜索类型
      findList: [
        // {
        //   ID: 1,
        //   content: "找服务"
        // },
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
    // console.log(this.butNm)
    let info=JSON.parse(this.until.loGet('user'))
    this.userPk = info?info.sysUserPk:''
    this.getInfo()
    // console.log(this.state)
  },
  methods:{
    back(){
      window.history.go(-1)
    },
    //发布需求
    submit(){
      if(!this.until.ifLogin()){
        return false
      }
      let url = ''
      if(this.myType==1 || this.myType==2){
        url = '../en/buyersReleaserequire.html?type='+this.myType
      }else if(this.myType==3){
        url = '../en/servicecenterCommunicationRelease.html'
      } else {
        url = '../en/buyersTalentrecruit.html'
      }
        window.location.href = url
    },
    search(){
      if(this.ifSelect){
          if(this.searchType==1){ //服务
            window.location.href = '../en/buyersPlatformdetection.html?val='+this.key
          }
        if(this.searchType==2){ //报告
            window.location.href = '../en/buyersQualitymanage.html?val='+this.key
        }
        if(this.searchType==3){ //找人才
          window.location.href = '../en/sellerNewproducttalent.html?val='+this.key
        }
        if(this.searchType==4){ //设备
          window.location.href = '../en/sellerEnterpriseEquipment.html?val='+this.key
        }
      }else {
        this.$emit('search',this.key)
      }
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
            if(this.butNm=='Release Talents Requirements' && this.type==1){
              this.show = false
            }
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
              message: 'Write off successfully!',
              type: 'success'
            });
            window.location.href='../en/entryLogin.html'
          }else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }

        })
    },
    toMember(){
      this.$emit('searchFalse')
      // this.$router.push({//你需要接受路由的参数再跳转
      //   path: '/center'
      // });
      window.location.href="../en/index.html#/center"

    },
    choose(item,url){
      this.state=item;
      if(this.state=='0'){
        this.$emit('searchFalse')
      }else {
        this.$emit('searchTrue')
      }
      this.$router.push({//你需要接受路由的参数再跳转
        path: url
      });
    }
  }
};
</script>

<style lang='less'>
  .myHeader >p{
    /*width: 1200px;*/
    width: 100%;
    max-width: 1200px;
    min-width: 1000px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
.header-wrap {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 1px solid #F1F1F1;
  a{
    color: #666666;
  }
  .account-wrap {
    background-color: #f1f1f1;
    .account {
      /*width: 1200px;*/
      width: 100%;
      max-width: 1200px;
      min-width: 1000px;
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
    /*width: 1200px;*/
    width: 100%;
    max-width: 1200px;
    min-width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    .log-wrap {
      display: -webkit-flex;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      >a{
        border:1px solid #0d55d2;
        border-radius: 3px;
        /*background-color: #0d55d2;*/
        color: #0d55d2;
        padding: 0 15px;
        height: 35px;
        line-height: 35px;
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
          .selectChoose{
            width: 80px;
          }
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
              /*width: 70%;*/
            }
            &:nth-last-of-type(2) {
              padding-left: 0.6rem;
              flex: 1;
              /*width: 30%;*/
            }
            &:nth-last-of-type(1) {
              width: 80px;
              border-color: #0d55d2;
              background-color: #0d55d2;
              color: #fff;
            }
            select,
            input,
            button {
              color: #666666;
              padding: 8px 0;
              width: 100%;
              height: 100%;
              border: 0;
            }
            button {
              color: #ffffff;
              text-align: center;
              background-color: rgba(0, 0, 0, 0);
            }
          }
        }
      }
    }
  }
  .header-sidebar{
    /*width: 1200px;*/
    width: 100%;
    max-width: 1200px;
    min-width: 1000px;
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
        margin-right: 20px;
        text-align: center;
        a{
          padding: 10px 0;
          display: block;
          span{
            font-size: 16px;
          }
        }
        .router-link-active{
          text-decoration: none;
          border-bottom: 1px solid #0d55d2;
          width: 100%;
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
