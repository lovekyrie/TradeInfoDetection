<template>
       <!--中间右侧内容栏-->
        <div class="center">

          <!--右边上半部分-->
          <div class="rightTop">
            <div class="right_a">
              <img :src="defaultHead">

            </div>
            <div class="right_b">
              <p>账号：麻花</p>
              <p>手机号：13541231231</p>
              <p>邮箱：424242@163.com&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="./memberaccountManage.html" style="color: rgb(90,127,219);">账号管理 ></a>
              </p>

            </div>

            <div class="right_c">
              <img :src="myrecommend">
              <p style="color: rgb(151,151,151)">我的推荐码</p>

            </div>
          </div>

          <!--右边下半部分-->
          <div class="rightBottom">
            <!--右下第一行-->
            <div class="rightBottom_a">

              <div class="rightBottom_a_left"><a href="./memberCoin.html">
                <img :src="mygold" alt="我的金币" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                <p style="margin-bottom: 5px;font-size: 16px">我的金币</p>
                <p><a href="./memberCoin.html" style="font-size: 14px">查看消费详情 ></a></p>
                </div>
              </div>
              <div class="rightBottom_a_right"><a href="./memberOrder.html">
                <img :src="myorder" alt="我的订单" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的订单</p>
                  <p><a href="./memberOrder.html" style="font-size: 14px">查看订单状态 ></a></p>
                </div>
              </div>

            </div>

            <!--右下第二行-->
            <div class="rightBottom_b">
              <div class="rightBottom_b_left"><a href="./memberReport.html">
                <img :src="myreport" alt="我的报告" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的报告</p>
                  <p><a href="./memberReport.html" style="font-size: 14px">查看报告状态 ></a></p>
                </div>
              </div>

              <div class="rightBottom_b_right"><a href="./memberInfo.html">
                <img :src="talent" alt="人才信息" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">人才信息</p>
                  <p><a href="./memberInfo.html" style="font-size: 14px">查看人才信息 > ></a></p>
                </div>
              </div>
            </div>

            <!--右下第三行-->
            <div class="rightBottom_c">
              <div class="rightBottom_c_left"><a href="../../views/servicecenter/settleInsuccess.html">
                <img :src="joinIn" alt="我的入驻" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的入驻</p>
                  <p><a href="../../views/servicecenter/settleInsuccess.html" style="font-size: 14px">查看入驻情况 ></a></p>
                </div>
              </div>
              <div class="rightBottom_c_right"></div>
            </div>
          </div>
        </div>
</template>

<script>
import talent from "../images/人才信息.png";
import joinIn from "../images/我的入驻.png";
import myreport from "../images/我的报告.png";
import myrecommend from "../images/我的推荐码.png";
import myorder from "../images/我的订单.png";
import mygold from "../images/我的金币.png";
import defaultHead from "../images/默认头像.png";

export default {
  data(){
    return {
      talent,
      joinIn,
      myreport,
      myrecommend,
      myorder,
      mygold,
      defaultHead,
    }
  }
}
</script>

<style lang='less' scoped>
 //右边信息
      .center {
        display: flex;
        flex-direction: column;
        flex: 5.5;
        background-color: white;
        padding: 25px 30px;

        //右边上半部分
        .rightTop {
          display: flex;
          flex-direction: row;
          border-bottom: 2px solid rgb(241, 241, 241);
          padding-bottom: 30px;

          //右上第一行
          .right_a {
            flex: 1;
            justify-content: flex-end;
          }
          //右上第二行
          .right_b {
            display: flex;
            flex-direction: column;
            flex: 3;
            justify-content: center;
            padding-left: 10px;
            font-size: 16px;
            color: rgb(151, 151, 151);

            p {
              margin-bottom: 15px;
            }
          }
          //右上第三行
          .right_c {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            padding-right: 10px;

            img {
              margin-bottom: 5px;
            }
          }
        }

        //右边下半部分
        .rightBottom {
          display: flex;
          flex-direction: column;
          padding: 25px 0;
        }

        .rightBottom_a,
        .rightBottom_b,
        .rightBottom_c {
          display: flex;
          flex-direction: row;
          flex: 1;
          padding: 20px 0;
          padding-left: 30px;
        }

        //右下第一行
        .rightBottom_a {
          .rightBottom_a_left {
            flex: 1;
          }
          .rightBottom_a_right {
            flex: 1;
          }
        }

        //右下第二行
        .rightBottom_b {
          .rightBottom_b_left {
            flex: 1;
          }
          .rightBottom_b_right {
            flex: 1;
          }
        }

        //右下第三行
        .rightBottom_c {
          .rightBottom_c_left {
            flex: 1;
          }
          .rightBottom_c_right {
            flex: 1;
          }
        }
      }
</style>
