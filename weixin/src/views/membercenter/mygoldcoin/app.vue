<template>
  <div id="app">
    <div class="content">
      <div class="operate">
        <div>
          <span>兑换说明</span>
        </div>
        <div><span>我的金币</span></div>
        <div><span>{{gold}}</span></div>
        <div class="operate-btn">
          <div>
            <button @click="recharge">充值</button>
            <button>兑换</button>
          </div>
        </div>
        <div>
          <span>金币交易记录：</span>
          <div>
            <select v-model="type">
              <option value="">全部</option>
              <option :value="item.cd" v-for="(item,index) in typeList" :key="index">{{item.nm}}</option>
            </select>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-31xiala"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="operate-history">
        <div class="menu">
          <div><span>交易记录</span></div>
          <div><span>金币数</span></div>
          <div><span>交易时间</span></div>
        </div>
        <van-list
                v-model="loading"
                :finished="finished"
                :immediate-check="false"
                @load="onLoad"
        >
          <div v-for="(item, index) in list" :key="index" class="list">
            <div><span>{{item.catNm}}</span></div>
            <div><span>{{item.qty}}</span></div>
            <div><span>{{item.crtTm}}</span></div>
          </div>
        </van-list>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        dataFinish:false,
        dataNo:false,
        pageNo:1,
        pageSize:15,
        total:0,
        loading:false,
        finished:false,

        gold:0,
        type:'', //交易类型
        typeList:[],//交易类型列表
        list:[],
      tradeHistoryList: [
        {
          tradeName: "在线阅读报告",
          tradeThing: "消耗2金币",
          tradeTime: "2018-06-06"
        },
        {
          tradeName: "下载报告",
          tradeThing: "消耗2金币",
          tradeTime: "2018-06-06"
        },
        {
          tradeName: "充值",
          tradeThing: "消耗2金币",
          tradeTime: "2018-06-06"
        }
      ]
    };
  },
  mounted(){
    this.getList()
    this.getType()
    this.getGold()
  },
    watch:{
      type:function () {
          this.list = []
          this.pageNo = 1
          this.finished = false
          this.getList()
      }
    },
  methods:{
      getList(){

          let query = new this.Query();
          query.buildWhereClause('catCd',this.type,'LK');
          query.buildPageClause(this.pageNo,this.pageSize);
          let param = query.getParam();
          this.loading = true;
          this.until.get('/prod/log/pageSelf',param)
              .then(res=>{
                  this.$dialog.loading.close()
                  this.loading = false;
                  if(res.status == 200){
                      this.total = res.page.total
                      if(this.total==0){
                          this.finished = true;
                          this.dataNo = true
                      }else {
                          this.dataNo = false
                          res.data.items.forEach(item=>{
                              item.crtTm = item.crtTm ? item.crtTm.split(' ')[0] : ' '
                          })
                          this.list.push(...res.data.items)
                      }


                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              })
      },
      //加载更多
      onLoad(){
          // 异步更新数据
          setTimeout(() => {
              if(this.total>this.list.length){
                  this.pageNo++
                  this.getList()
              }else {
                  this.dataFinish = true
                  this.loading = false;
                  this.finished = true;
              }
          }, 500);
      },
      getType(){
          this.until.get('/general/cat/listByPrntCd?prntCd=81020')
              .then(res=>{
                  if(res.status == 200){
                      this.typeList = res.data.items
                      console.log(this.typeList)
                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              })
      },
      getGold(){
          this.$dialog.loading.open()

        this.until.get('/prod/mxpers/listSelf')
            .then(res=>{
                if(res.status == 200){
                  this.gold = res.data.items[0].goldQty

                }else {
                    this.$hero.msg.show({
                        text:res.message,
                        times:1500
                    });
                }
            })
      },
      recharge(){
          window.location.href = 'goldcoinrecharge.html?gold='+this.gold
      }
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .content {
      background-color: #fff;
      .operate {
        padding: 0.3rem 0.4rem 0;
        > div:nth-of-type(1) {
          text-align: right;
          color: #b7b7b7;
        }
        > div:nth-of-type(2) {
          text-align: center;
        }
        > div:nth-of-type(3) {
          font-size: 20px;
          text-align: center;
          color: #ff4014;
        }
        .operate-btn {
          > div {
            margin: 0.2rem auto;
            width: 60%;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            > button {
              padding: 0.1rem;
              width: 45%;
              border-radius: 5px;
              &:nth-of-type(1) {
                background-color: #2a8af2;
                color: #fff;
              }
              &:nth-of-type(2) {
                border: 1px solid #ff4014;
                color: #ff4014;
              }
            }
          }
        }
        > div:nth-last-of-type(1) {
          margin: .6rem 0;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          > span {
            padding-right: 8px;
          }
          > div {
            position: relative;
            flex: 1;
            /*width: 70%;*/
            border: 1px solid #e4e4e4;
            > select {
              padding: 0.2rem 0.3rem;
              border: 0;
              width: 100%;
              height: 100%;
            }
            > svg {
              position: absolute;
              top: 30%;
              right: 0.2rem;
              transform: translateX(-50%);
            }
          }
        }
      }
      .operate-history{
        .menu{
          padding: .3rem 0;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          &:nth-of-type(1){
            background-color: #f7f7f7;
            color: #A6A6A6;
          }
          &:not(:nth-last-of-type(1)){
            border-bottom: 1px solid #EFEFEF;
          }
          >div{
            flex: 3;
            text-align: center;
          }
        }
        .van-list .list{
          padding: .3rem 0;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          >div{
            flex: 3;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
