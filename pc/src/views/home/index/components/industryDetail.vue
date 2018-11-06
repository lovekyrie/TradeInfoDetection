<template>
  <div class="industry-detail">
    <div class="info-wrap">
      <div class="title">
        <p @click="toPrevious">
          <i class="el-icon-arrow-left"></i> 返回
        </p>
        <h4>{{industryDetailObj.title}}</h4>
        <div>发布日期：{{industryDetailObj.releaseDate}}</div>
      </div>
      <div class="detail-info">
        <p>{{industryDetailObj.content}}</p>
        <div>
        <img :src="industryDetail" alt="">
        </div>
        <p>{{industryDetailObj.desc}}</p>
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
  },
  methods:{
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
    width: 1200px;
    margin: 0 auto;
    .title {
      p {
        padding: 20px 0 10px;
        font-size: 16px;
        color: #7f7f7f;
      }
      h4 {
        padding: 20px 0;
        font-size: 20px;
        text-align: center;
      }
      div{
        text-align: right;
        font-size: 14px;
        margin-bottom: 45px;
      }
    }
    .detail-info{
      p{
        font-size: 16px;
        color: #bfbfbf;
        &:nth-last-of-type(1){
          text-indent: 40px;
          padding-bottom: 40px;
        }
      }
      div{
        margin: 20px 0;
        img{
          height: auto;
          width: auto;
        }
      }
    }
  }
}
</style>
