<template>
  <div class="report-detail">
          <p @click="toReport" style="text-align: left;"><i class="el-icon-arrow-left"></i> 返回</p>

          <!--报告详情-->
          <div class="repDetail">
            <span class="dIcon"></span><span class="dTitle">报告详情</span>
            <!--标题-->
            <h1>福州福州服饰有限公司防晒衣检测报告</h1>
            <div class="repDetail_p1">
              <p>序列号：1231231231231231</p>
              <p>供应商名称：宁波贸信检测</p>
              <p>质检产品地域：浙江 - 宁波</p>
              <p>检测项目：填写关键字</p>
            </div>
            <div class="repDetail_p2">
            <p>检测机构：宁波贸信检测</p>
            <p>质检产品名称：防晒衣</p>
            </div>
          </div>
          <div class="pdf">
            PDF
          </div>

        </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    toReport(){
      this.$router.back(-1)
    }
  }
}
</script>

<style lang='less' scoped>
  .report-detail {
        flex: 5.5;
        background-color: white;
        padding: 20px 20px;
        text-align: center;

        //子标题
        .dTitle {
          display: inline-block;
          font-size: 18px;
          margin-left: 10px;
          margin-bottom: 20px;
          height: 23px;
        }

        //  报告详情
        .repDetail {
          padding: 20px 0;
          text-align: left;

          h1 {
            line-height: 2em;
            margin-bottom: 12px;
          }

          .repDetail_p1,.repDetail_p2 {
            color: rgb(99, 99, 99);
            line-height: 2.5em;
            float: left;
          }

          .repDetail_p1{
            width: 280px;
          }

        }
        //清除浮动
        .repDetail::after{
          clear: both;
          content: '\200B';
          height: 0;
          display: block;
        }

        //  蓝色小块
        .dIcon {
          display: inline-block;
          content: '';
          height: 20px;
          width: 8px;
          position: relative;
          top: 3px;
          background-color: rgb(13, 85, 210);;

        }

        //pdf位置
        .pdf{
          width: 100%;
          height: 500px;
          line-height: 500px;
          font-size: 28px;
          background-color: rgb(211,211,211);
        }
      }
</style>
