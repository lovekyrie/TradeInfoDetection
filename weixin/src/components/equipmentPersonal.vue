<template>
  <div class="person-release">
    <div class="person-wrap" v-for="(item, index) in personalReleaseList" :key="index" @click="toDetail(item.mxPubDevPk)">
      <div>
        <span></span>
        <span>{{item.nm}}</span>
      </div>
      <div>
        <span>{{item.contNm}}</span>
        <span>{{item.contMob}}</span>
        <span>{{item.crtTm}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['personalReleaseList'],
  data(){
    return {

    }
  },
    methods:{
        toDetail(val){
            window.location.href = 'personalreleasedetail.html?pk='+val
        }
    }
}
</script>

<style lang='less'>
  .person-release{
    background-color: #fff;
    .person-wrap{
      padding: .3rem .4rem;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border-bottom: 1px solid #E5E5E5;
      >div{
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        /*justify-content: space-between;*/
        align-items: center;
        &:nth-of-type(1){
          >span{
            &:nth-of-type(1){
              height: 3px;
              width: 3px;
              margin-right: 8px;
              background-color: #000;
            }
            &:nth-of-type(2){
              width: 97%;
            }
          }
        }
        &:nth-of-type(2){
          >span{
            &:nth-of-type(1){
              margin-left: 11px;
              width: 25%;
            }
            &:nth-of-type(2){
              width: 30%;
            }
            &:nth-of-type(3){
              width: 40%;
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
