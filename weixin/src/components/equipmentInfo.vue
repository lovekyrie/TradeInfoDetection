<template>
  <div class="recruitment">
    <div class="recruitment-wrap" v-for="(item, index) in equipmentList" :key="index">
      <div class="job-info">
        <div><span>{{item.nm}}</span></div>
        <div><span>设备性质：{{item.catNm}}</span></div>
        <div><span>价格：{{item.price}}</span></div>
        <div><span>审核状态：{{item.statNm}}</span></div>
      </div>
      <div class="release-time">
        <div>
          <button @click="toDetail(item.mxPubDevPk)">查看详情</button>
          <button @click="toDelete(item.mxPubDevPk,index)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["equipmentList"],
  data() {
    return {
        type:'', // 1个人  2企业
    };
  },
    mounted(){
       let info=JSON.parse(this.until.loGet('userInfo'))
        this.type = info.arg1
    },
    methods:{
      toDetail(pk){
          if(this.type==1){
              window.location.href = '../seller/personalreleasedetail.html?pk='+pk

          }else {
              window.location.href = '../seller/enterprisereleasedetail.html?pk='+pk

          }
      },
        toDelete(pk,index){
            this.until.get('/prod/mxpubdev/del?pks='+pk)
                .then(res=>{
                    if(res.status=='200'){
                        this.equipmentList.splice(index,1)
                        this.$hero.msg.show({
                            text:'删除成功！',
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
    },
  components:{

  },
};
</script>

<style lang='less'>
.recruitment-wrap {
  margin-bottom: 0.2rem;
  background-color: #fff;
  .job-info {
    padding: 0.3rem 0.4rem;
    border-bottom: 1px solid #e3e3e3;
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
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    > div {
      width: 50%;
      color: #9d9d9d;
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
</style>
