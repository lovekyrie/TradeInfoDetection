<template>
  <div id="app">
    <header-title :title="title"></header-title>
    <address-manage :addressList="list" @delete="deleteAddr"></address-manage>
    <div class="footer">
      <div @click="toAddAddress">
        <img :src="addAddress" alt="">
        <span>
          添加地址
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import addressManage from "components/addressManage";
import addAddress from "./images/添加地址.png";
import headerTitle from "components/headerTitle";
export default {
  data() {
    return {
        url:'../home/index.html',
        title:'地址管理',
      addAddress,
        info:{

        },
        list:[],
      addressList: [
        {
          receiver: "李泳",
          phoneNumber: 15988899900,
          address: "浙江省宁波市镇海区329创业社区212室"
        },
        {
          receiver: "李泳",
          phoneNumber: 15988899900,
          address: "浙江省宁波市镇海区329创业社区212室"
        }
      ]
    };
  },
    mounted(){
       this.until.pushHistory();
      this.info = JSON.parse(this.until.loGet('userInfo'))
      this.getAddr()
    },
  methods:{
      // pushHistory(){
      //     window.addEventListener("popstate", function(e) {
      //
      //         // alert("后退");
      //         self.location.reload();
      //     }, false);
      //
      //     var state = {
      //         title : "",
      //         url : "#"
      //     };
      //     window.history.replaceState(state, "", "#");
      //
      // },
      deleteAddr(index){
          this.list.splice(index,1)
      },
      getAddr(){
          this.until.get('/sys/addr/listSelf')
              .then(res=>{
                  this.list = res.data.items
              })
      },
    toAddAddress(){
          // console.log(this.info)
          // console.log(this.info.nkNm)
       window.location.href='./addaddress.html?pk='+this.info.sysUserPk+'&nm='+this.info.nkNm
    }
  },
  components: {
    addressManage,
      headerTitle
  }
};
</script>

<style lang="less">
  html,body{
    height: 100%;
    background-color: #F7F7F7;
    #app{
      height: 100%;
      display: flex;
      display: -webkit-flex;
      overflow: hidden;
      flex-direction: column;
      .address{
        flex: 1;
        overflow: auto;
      }
      .footer{
        width: 100%;
        bottom: 0;
        background-color: #2A8AF2;
        text-align: center;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        >div{
          width: 30%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items:center;
          padding: .2rem 0;
          color: #fff;
          img{
            width: 0.4rem;
          }
          >span{
            font-size: 16px;
            margin-left: .2rem;
          }
        }
      }
    }
  }
</style>
