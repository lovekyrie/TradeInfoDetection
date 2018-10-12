<template>
  <div class="detection">
    <div class="detection-wrap" v-for="(item, index) in detectionOrgList" :key="index">
      <div>
        <div>
          <span>{{item.detectionName}}</span>
        </div>
        <div>
          <span>检测服务分类：{{item.serviceType}}</span>
        </div>
        <div>
          <span>二级类别：{{item.secondType}}</span>
        </div>
      </div>
      <div>
        <span>发布时间：{{item.releaseDate}}</span>
        <button>查看详情</button>
        <button>编辑</button>
        <button>删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['detectionOrgList'],
  data(){
    return {

    }
  }
}
</script>

<style lang='less'>
  .detection-wrap{
    background-color: #fff;
    margin-bottom: .3rem;
    >div{
      padding: .3rem .4rem;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      &:nth-of-type(1){
        border-bottom: 1px solid #EFEFEF;
        >div{
          width: 100%;
          &:nth-of-type(1){
            font-size: 16px;
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .2rem;
          }
          &:not(:nth-of-type(1)){
            color: #9C9C9C;
          }
        }
      }
      &:nth-of-type(2){
        border-bottom: 1px solid #E1E1E1;
        >button{
          padding: .1rem;
          border:  1px solid #BEBEBE;
          border-radius: 5px;
          &:nth-of-type(1){
            border: 0;
            background-color: #3090F8;
            color: #fff;
          }
        }
      }
    }
  }
</style>
