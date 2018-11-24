<template>
  <div class="recruitment">
    <div class="recruitment-wrap" v-for="(item, index) in recruitmentList" :key="index">
      <div class="job-info">
        <div><span>职位名称：{{item.nm}}</span></div>
        <div><span>薪资：{{item.frSala}} - {{item.toSala}}</span></div>
        <div><span>审核状态：{{item.state}}</span></div>
      </div>
      <div class="release-time">
        <div>
          <span>发布时间：{{item.releaseTime}}</span>
        </div>
        <div>
          <button @click="detail(item.mxPubRecrPk)">查看详情</button>
          <button @click="deleteJob(item.mxPubRecrPk,index)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['recruitmentList'],
  data(){
    return {
      
    }
  },
    methods:{
      detail(pk){
          window.location.href='../hr/hrdetailinfo.html?pk='+pk
      },
        deleteJob(pk,index){
            this.until.get('/prod/mxpubrecr/del?pks='+pk)
                .then(res=>{
                    if(res.status=='200'){
                        this.recruitmentList.splice(index,1)
                        this.$hero.msg.show({
                            text:'删除成功',
                            times:1500
                        });
                    }else {
                        this.$hero.msg.show({
                            text:res.message,
                            times:1500
                        });
                    }
                })
        }
    }
};
</script>

<style lang='less'>
.recruitment-wrap {
  margin-bottom: 0.2rem;
  background-color: #fff;
  .job-info {
    padding: 0.3rem 0.4rem;
    border-bottom: 1px solid #E3E3E3;
    > div {
      &:nth-of-type(1) {
        font-size: 16px;
      }
      &:not(:nth-of-type(1)) {
        color: #9d9d9d;
      }
      &:not(:nth-last-of-type(1)) {
        margin-bottom: 0.2rem;
      }
    }
  }
  .release-time {
    padding: 0.2rem 0.4rem;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
    > div {
      width: 50%;
      color: #9d9d9d;
      &:nth-of-type(2) {
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        > button {
          padding: 0.15rem 0;
          text-align: center;
          border: 1px solid #d2d2d2;
          border-radius: 5px;
          &:nth-of-type(1) {
            width: 50%;
          }
          &:nth-of-type(2) {
            width: 30%;
          }
        }
      }
    }
  }
}
</style>
