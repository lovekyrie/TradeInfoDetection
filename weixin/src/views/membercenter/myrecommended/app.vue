<template>
  <div id="app">
    <div class="content">
      <div>
        <span></span><span>推荐记录</span>
      </div>
      <div class="title">
       <div><span>一级人员</span></div>
       <div><span>二级人数</span></div>
       <div><span>推荐时间</span></div>
      </div>
      <div class="detail" v-for="(item, index) in list" :key="index">
        <div><span>{{item.recoUserNm}}</span></div>
        <div><span>{{item.recoQty}}</span></div>
        <div><span>{{item.crtTm}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list: []
    };
  },
    mounted(){
      this.getList()
    },
    methods:{
      getList(){
          this.until.get('/prodx/mxuserreco/listSelfReco')
              .then(res=>{
                  this.list = res.data.items
              })
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
      background: #fff;
      > div {
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        &:nth-of-type(1) {
          padding: 0.3rem 0.4rem;
          > span {
            &:nth-of-type(1) {
              width: 2%;
              height: 0.3rem;
              background-color: #54a6ff;
            }
            &:nth-of-type(2) {
              width: 95%;
            }
          }
        }
      }
      .title,
      .detail {
        border-top: 1px solid #EAEAEA;
        > div {
          padding: .3rem 0;
          flex: 1;
          text-align: center;
          &:last-child{
            flex: 2;
          }
        }
      }
      .title {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
