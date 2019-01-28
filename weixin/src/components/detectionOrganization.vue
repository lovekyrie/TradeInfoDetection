<template>
  <div class="detection">
    <div class="detection-wrap" v-for="(item, index) in detectionOrgList" :key="index">
      <div>
        <div>
          <span>{{item.nm}}</span>
        </div>
        <div>
          <span>检测服务分类：{{item.catNm}}</span>
        </div>
        <div>
          <span>二级类别：{{item.twoNm}}</span>
        </div>
      </div>
      <div>
        <span>发布时间：{{item.crtTm}}</span>
        <button @click="toDetail(item.mxPubThrserPk)">查看详情</button>
        <button @click="toEdit(item)">编辑</button>
        <button @click="toDelete(item.mxPubThrserPk,index)">删除</button>
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
  },
    methods:{
      toEdit(info){
        window.location.href = 'releasedetection.html?info='+JSON.stringify(info)
      },
        toDelete(pk,index){
            this.until.get('/prod/mxpubthrser/del?pks='+pk)
                .then(res=>{
                    if(res.status=='200'){
                        this.detectionOrgList.splice(index,1)
                        this.$hero.msg.show({
                            text:'删除成功！',
                            time:1500
                        })
                    }
                })
        },
      toDetail(val){
          window.location.href = 'detectionorgdetail.html?id='+val
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
