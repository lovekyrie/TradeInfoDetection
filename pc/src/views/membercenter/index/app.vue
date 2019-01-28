<template>
    <div id="member">
    <!--页头-->
    <!--<trade-header :showNav2="showNav" :showNav="showNav"></trade-header>-->
    <!--中间内容-->
    <div id="main">
      <div class="inMain">
        <!--中间左侧单边栏-->
        <div class="mainLeft">
          <ul>
            <li v-for="(item) in sidebarList" :key="item.ID">
              <router-link :to="item.itemLink">
                <span>{{item.content}}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <router-view></router-view>
      </div>
    </div>

    <!--页脚-->
    <!--<trade-footer></trade-footer>-->
  </div>

</template>

<script>

import tradeHeader from 'components/tradeHeader'
import tradeFooter from 'components/tradeFooter'

export default {
  data() {
    return {
      showNav:true,
      type:'', //个人还是企业 1是个人
      userPk:'',
      sidebarList:[],
      sidebarList1:[
        {
          ID: 0,
          content: "会员中心",
          itemLink:'/center',
        },
         {
          ID: 1,
          content: "我的金币",
          itemLink:'/mygold',
        },
        {
          ID: 2,
          content: "我的订单",
          itemLink:'/myorder',
        },
        {
          ID: 3,
          content: "我的报告",
          itemLink:'/myreport',
        },
        {
          ID: 4,
          content: "我的推荐",
          itemLink:'/myrecommend',
        },
        {
          ID:5,
          content:'我的兑换',
          itemLink:'/myexchange'
        },
         {
          ID:6,
          content:'我的收藏',
          itemLink:'/mycollect'
        },
         {
          ID:7,
          content:'人才信息',
          itemLink:'/myJob'
        },
         {
          ID:8,
          content:'设备信息',
          itemLink:'/equipment'
        },
         {
          ID:9,
          content:'收货地址管理',
          itemLink:'/addresslist'
        },
         {
          ID:10,
          content:'修改密码',
          itemLink:'/changepwd'
        },
      ],
      sidebarList2:[
        {
          ID: 0,
          content: "会员中心",
          itemLink:'/center',
        },
        {
          ID: 1,
          content: "我的金币",
          itemLink:'/mygold',
        },
        {
          ID: 2,
          content: "我的订单",
          itemLink:'/myorder',
        },
        {
          ID: 3,
          content: "我的报告",
          itemLink:'/myreport',
        },
        {
          ID: 4,
          content: "我的推荐",
          itemLink:'/myrecommend',
        },
        {
          ID:5,
          content:'我的兑换',
          itemLink:'/myexchange'
        },
        {
          ID:6,
          content:'我的收藏',
          itemLink:'/mycollect'
        },
        {
          ID:7,
          content:'招聘信息',
          itemLink:'/talentinfo'
        },
        {
          ID:8,
          content:'设备信息',
          itemLink:'/equipmentQY'
        },
        {
          ID:9,
          content:'收货地址管理',
          itemLink:'/addresslist'
        },
        {
          ID:10,
          content:'修改密码',
          itemLink:'/changepwd'
        },
      ]
    };
  },
  mounted(){
    let info=JSON.parse(this.until.loGet('user'))
    if(info){
      this.userPk = info.sysUserPk
      this.getInfo()
    }
  },
  methods:{
    //获取个人信息
    getInfo(){
      this.until.get('/sys/user/info/'+this.userPk)
        .then(res=>{
          if(res.status == '200'){
            this.type = res.data.arg1
            this.sidebarList = this.type==1? this.sidebarList1:this.sidebarList2
          }
        })
    },
  },
  components:{
    tradeHeader,
    tradeFooter,
  }
};
</script>

<style lang='less'>
  //中间内容
  #main {

    padding: 20px 0 50px 0;
    background-color: rgb(241, 241, 241);
    //中间白色部分
    .inMain {
      display: flex;
      /*flex-direction: row;*/
      width: 1200px;
      /*min-width: 800px;*/
      margin: 0 auto;

      //左边列表
      .mainLeft {
        text-align: center;
        padding: 20px 0;
        /*flex: 1;*/
        width: 200px;
        background-color: white;
        margin-right: 12px;
        min-height: 450px;
        min-width: 128px;

        ul {
          li {
            height: 34px;
            line-height: 34px;
            margin-bottom: 8px;
            padding: 1px 21px;
            .router-link-active{
              background: #0d55d2;
              color: #ffffff;
              border-radius: 3px;
            }
            &:nth-of-type(1){
              a{
                font-size: 18px;
              }
            }
            a {
              display: block;
              //color: white;
              //background-color: rgb(13,85,210);
            }
          }
        }
      }


    }
  }
</style>
