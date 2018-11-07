<template>
    <div id="app">
    <!--页头-->
    <trade-header :showNav="showNav"></trade-header>
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
    <trade-footer></trade-footer>
  </div>

</template>

<script>

import tradeHeader from 'components/tradeHeader'
import tradeFooter from 'components/tradeFooter'

export default {
  data() {
    return {
      showNav:true,
      sidebarList:[
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
          itemLink:'/talentinfo'
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
      ]
    };
  },
  components:{
    tradeHeader,
    tradeFooter,
  }
};
</script>

<style lang='less'>
#app {
  //中间内容
  #main {
    padding: 20px 0 50px 0;
    background-color: rgb(241, 241, 241);

    //中间白色部分
    .inMain {
      display: flex;
      flex-direction: row;
      width: 70%;
      min-width: 800px;
      margin: 0 auto;

      //左边列表
      .mainLeft {
        text-align: center;
        padding: 20px 0;
        flex: 1;
        background-color: white;
        margin-right: 12px;
        max-height: 450px;
        min-width: 128px;

        ul {
          li {
            height: 30px;
            line-height: 30px;
            margin-bottom: 8px;
            padding: 1px 21px;
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
}
</style>
