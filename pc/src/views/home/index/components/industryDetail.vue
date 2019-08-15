<template>
  <div class="industry-detail">
    <div class="info-wrap">
      <div class="title">
        <p @click="toPrevious" class="cursor">
          <i class="el-icon-arrow-left"></i> 返回
        </p>
        <h4>{{industryDetailObj.nm}}</h4>
        <div>发布日期：{{industryDetailObj.releTm}}</div>
      </div>
      <div class="detail-info" v-html="industryDetailObj.cont">
      </div>
    </div>
  </div>
</template>

<script>
import industryDetail from "../images/industrydetail_03.png";

export default {
  data() {
    return {
      industryDetail,
      ipPk: "",
      industryDetailObj: {
        title: "【动态分类】检测行业最新标准今早颁布",
        content: `检测行业最新标准今早颁布，所有检测标准都已更新，速看！检测行业最新标准今早颁布，所有检测标准都已更新，速看！检测行业最新标准今早颁布，所有检测标准都已更新，
        速看！检测行业最新标准今早颁布，所有检测标准都已更新，速看！检测行业最新标准今早颁布，所有检测标准都已更新，速看！`,
        desc: `        对保障人身健康和生命财产安全、国家安全、生态环境安全以及满足经济社会管理基本需要的技术要求，应当制定强制性国家标准。强制性国家标准由国务院有关行政主管部门依据职责提出、组织起草、
        征求意见和技术审查，由国务院标准化行政主管部门负责立项、编号和对外通报。强制性国家标准由国务院批准发布或授权发布。`,
        releaseDate: "2018-06-06"
      }
    };
  },
  mounted() {
    this.ipPk = this.$route.query.ipPk;
    this.getInfo()
  },
  methods:{
    getInfo(){
      this.until.get('/sys/news/info/'+this.ipPk)
        .then(res=>{
          this.industryDetailObj = res.data
        })
    },
    toPrevious(){
      this.$router.back(-1)
    }
  }
};
</script>

<style lang='less'>
.industry-detail {
  width: 100%;
  background-color: #fff;
  .info-wrap {
    /*width: 1200px;*/
    width: 100%;
    max-width: 1200px;
    min-width: 1000px;
    margin: 0 auto;
    .title {
      position: relative;
      width: 100%!important;
      padding-bottom: 20px;
      margin-bottom: 30px;
      padding-top: 30px;
      /*p {*/
        /*padding: 20px 0 10px;*/
        /*font-size: 16px;*/
        /*color: #7f7f7f;*/
      /*}*/
      h4 {
        width: 100%;
        padding: 20px 0;
        font-size: 20px;
        text-align: center;
      }
      div{
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: right;
        font-size: 14px;
        color: #999999;
      }
    }
    .detail-info{
      font-size: 16px;
      padding-bottom: 40px;
      color: #303030;
      img{
        height: auto;
        width: auto;
      }
    }
  }
}
</style>
