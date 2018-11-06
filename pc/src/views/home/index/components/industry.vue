<template>
  <div class="industry">
    <div class="industry-wrap" v-for="(item, index) in industryList" :key="index+1" @click="toDetail(item.ipPk)">
      <div>
        <img :src="item.src" alt="">
      </div>
      <div>
        <h4>{{item.title}}</h4>
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import industryImg from "../images/行业动态_03.png";

export default {
  data() {
    return {
      industryImg,
      industryObj: {
        ipPk:1,
        src: industryImg,
        title: "【动态分类】检测行业最新标准今早颁布",
        content: "检测行业最新标准今早颁布，所有检测标准都已更新，速看！"
      },
      industryList: []
    };
  },
  mounted() {
    for (let index = 0; index < 4; index++) {
      this.industryList.push(this.industryObj);
    }
  },
  methods:{
     //跳转到详情页面
        toDetail(ipPk){
            this.$router.push({
                path:'/industryDetail',
                query:{
                    ipPk:ipPk
                }
            })
        }
  }
};
</script>

<style lang='less'>
.industry {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  .industry-wrap {
    padding: 30px 50px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    > div {
      &:nth-of-type(1) {
        width: 10%;
      }
      &:nth-of-type(2) {
        width: 85%;
        h4 {
          font-size: 20px;
          margin: 20px 0;
        }
        p {
          font-size: 16px;
          color: #a1a1a1;
        }
      }
    }
  }
}
</style>
