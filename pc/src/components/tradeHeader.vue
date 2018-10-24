<template>
  <div class="header-wrap">
    <div class="account-wrap">
      <div class="account">
        <span>登录</span>
        <span>|</span>
        <span>注册</span>
      </div>
    </div>
    <div class="header-log">
      <div class="log-wrap">
        <div class="log">
          <img :src="tradeLog" alt="">
        </div>
        <div class="search-wrap" v-if="showSearch">
          <div class="select">
            <div>
              <select >
                <option :value="item.content" v-for="(item) in findList" :key="item.ID">{{item.content}}</option>
              </select>
            </div>
            <div>
              <input type="text" >
            </div>
            <div>
              <button>搜索</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-sidebar" v-if="showSearch">
      <div class="sidebar">
        <div :class="{active:state==item.content}" v-for="(item) in sidebarList" :key="item.ID" @click="choose(item.content)">
          <span >{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tradeLog from "./images/logo.png";

export default {
  props:['showSearch'],
  data() {
    return {
      state:'买家中心',
      tradeLog,
      findList: [
        {
          ID: 1,
          content: "找服务"
        },
        {
          ID: 2,
          content: "找报告"
        },
        {
          ID: 3,
          content: "找人才"
        },
        {
          ID: 4,
          content: "找设备"
        }
      ],
      sidebarList:[
         {
          ID: 1,
          content: "买家中心"
        },
        {
          ID: 2,
          content: "卖家中心"
        },
        {
          ID: 3,
          content: "服务中心"
        },
        {
          ID: 4,
          content: "行业动态"
        },
        {
          ID:5,
          content:'平台指引'
        }
      ]
    };
  },
  methods:{
    
    choose(item){
      this.state=item;
    }
  }
};
</script>

<style lang='less'>
.header-wrap {
  margin: 0 auto;
  background-color: #fff;
  .account-wrap {
    background-color: #f1f1f1;
    .account {
      width: 820px;
      margin: 0 auto;
      padding: 5px 0;
      text-align: right;
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
            &:not(:nth-of-type(2)) {
              width: 20%;
            }
            &:nth-of-type(1){
              border-left: 1px solid #eaeaea;
            }
            &:nth-of-type(2) {
              padding-left: 0.6rem;
              width: 60%;
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
      }
      .active{
        color: #0d55d2;
        border-bottom: 1px solid #0d55d2;
      }
    }
  }
}
</style>
