<template>
  <div class="industry">
    <div class="industry-wrap" v-for="(item, index) in industryList" :key="index">
      <div>
        <img :src="item.industrylogo" alt="">
      </div>
      <div>
        <div>
          <span>{{item.title}}</span>
        </div>
        <div>
          <span>{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['industryList'],
  data(){
    return {

    }
  }
}
</script>

<style lang='less'>
.industry-wrap{
  padding:.3rem .4rem;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #F2F2F2;
  >div:nth-of-type(1){
    width: 20%;
    >img{
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
  }
  >div:nth-of-type(2){
    width: 77%;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    >div{
      width: 100%;
      &:nth-of-type(2){
        font-size: 12px;
        color: #818181;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>
