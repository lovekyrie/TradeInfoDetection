<template>
  <div class="mainRight">
          <p @click="toEquipment" style="text-align: left;"><i class="el-icon-arrow-left"></i> 返回</p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">设备详情</li>
            <li class="line"><span></span></li>
          </ul>

          <!--设备详情-->
          <!--标题-->
          <div class="dTitle">
            <span style="text-align: left">【转租】</span> 高价租最新服装衬衫全效检测设备一台
            <span class="titleTime">发布日期：2018-06-01</span>
          </div>

          <!--描述-->
          <div class="dDes">
            <span class="dIcon"></span><span class="dTitle_b">产品描述</span>
            <p>最新水质检测机最新水质检测机，最新水质检测机最新水质检测机最新水质检测机最新水质检测机。最新水质检测机最新水质检测机最新水质检测机
              最新水质检测机最新水质检测机最新水质检测机最新水质检测机。最新水质检测机最新水质检测机，最新水质检测机。</p>
          </div>

          <!--联系方式-->
          <div class="contactWay">
            <span class="dIcon"></span><span class="dTitle_b">联系方式</span>
            <p>联系人：张三</p>
            <p>联系方式：13999943921</p>
            <p>邮箱地址：1353@13.com</p>
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
    toEquipment(){
      this.$router.back(-1)
    }
  }
}
</script>

<style lang='less'>
 .mainRight {
        flex: 5.5;
        background-color: white;
        padding: 20px 20px;
        text-align: center;

        .mainTitle {
          margin-top: 20px;
          li {
            display: inline-block;
            height: 20px;

            span {
              display: block;
              width: 130px;
              height: 1px;
              background-color: rgb(204, 204, 204);
            }
          }
          .line {
            padding-top: 10px;
          }
          //标题字体
          .title {
            font-size: 20px;
            font-weight: 400;
            margin-left: 40px;
            margin-right: 40px;
          }
        }

      //  设备详情
      //  标题
        .dTitle{
          margin-top: 10px;
          padding: 20px 0;
          text-align: left;
          font-size: 20px;
          color: rgb(99,99,99);
          border-bottom: 1px solid rgb(211,211,211);

          .titleTime{
            float: right;
            font-size: 14px;
            color: rgb(181,181,181);
          }

        }

      //  描述
        .dDes{
          padding: 20px 0;
          text-align: left;
          font-size: 16px;
          line-height: 1.5em;
          color: rgb(99,99,99);
          border-bottom: 1px solid rgb(211,211,211);


        }

      //  联系方式
        .contactWay{
          padding: 20px 0;
          text-align: left;
          margin-bottom: 40px;

          p{
            color: rgb(99,99,99);
            line-height: 2em;

          }
        }

      //  蓝色小块
        .dIcon{
          display: inline-block;
          content: '';
          height: 22px;
          width: 8px;
          position: relative;
          top: 4px;
          background-color: rgb(13,85,210);;

        }

        //子标题
        .dTitle_b{
          display: inline-block;
          font-size: 20px;
          margin-left: 10px;
          margin-bottom: 20px;
          height: 23px;
        }
      }
</style>
