<template>
  <div class="product-info">
    <div class="product-item" v-for="(item, index) in productList" :key="index" @click="toDetail(item.mxPubCheckPk)">
      <div>
        <img :src="item.imgUrl" alt="">
      </div>
      <p>{{item.nm}}</p>
      <span>销量：{{item.sela}}</span>
      <h3 v-if="item.gold">{{item.gold}}金币</h3>
      <button v-if="pageName==='金币兑换'">立即兑换</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['productList','pageName'],
  data(){
    return {

    }
  },
  methods:{
      toDetail(val){
          window.location.href = 'platformdetectiondetail.html?pk='+val
      }
  }
}
</script>

<style lang="less">
  .product-info{
    padding :0.2rem .4rem 0 .4rem;
    background-color: #fff;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    >div{
      margin-bottom: .2rem;
      width: 44%;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      div,
      p,
      span{
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
      }
      div{
        justify-content: space-around;
        width: 100%;
        height: 3rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        >img{
          height: auto;
          width: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      p{
        justify-content: space-around;
        font-size: 12px;
        color: #979797;
      }
      span{
        font-size: 12px;
        color: #C3C3C3;
      }
      h3{
        margin-top: .2rem;
        font-size: 20px;
        font-weight: 400;
        color: #FF3000;
      }
      button{
        margin-top: .2rem;
        padding: .2rem;
        border: 1px solid #FF3000;
        border-radius: 5px;
        color: #FF3000;
      }
    }
  }
</style>
