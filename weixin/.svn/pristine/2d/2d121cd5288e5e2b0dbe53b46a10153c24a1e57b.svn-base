<template>
  <div id="app">
    <div class="content">
      <div class="order-info">
        <div><span>订单编号：{{orderInfo.orderNo}}</span></div>
        <div><span>服务名称：{{orderInfo.serviceName}}</span></div>
        <div><span>数量：{{orderInfo.count}}</span></div>
        <div><span>联系电话：{{orderInfo.linkedPhone}}</span></div>
        <div><span>下单时间：{{orderInfo.createTime}}</span></div>
        <div><span>订单状态：{{orderInfo.orderState}}</span></div>
        <div><span>价格：￥{{orderInfo.price}}</span></div>
        <div><span>报告状态：{{orderInfo.reportState}}</span></div>
        <div>
          <span>订单二维码</span>
          <div><img :src="twoCode" alt=""></div>
        </div>
      </div>
      <div class="linked">
        <div><span></span><span>联系方式</span></div>
        <div><span>供应商名称：{{linked.customerName}}</span></div>
        <div><span>样品名称：{{linked.sampleName}}</span></div>
        <div><span>联系人：{{linked.linkedMan}}</span></div>
        <div><span>联系电话：{{linked.linkedPhone}}</span></div>
        <div><span>备注：{{linked.note}}</span></div>
      </div>
      <div class="address">
        <div><span></span><span>收货地址</span></div>
        <div><span>收货人：{{address.receiver}}</span><span>手机号码：{{address.phoneNum}}</span></div>
        <div><span>详细地址：{{address.detail}}</span></div>
      </div>
      <div class="report">
        <div><span></span><span>检测报告</span></div>
        <div><span>序列号：{{report.serialNo}}</span></div>
        <div><span>检测机构：{{report.organization}}</span></div>
        <div><span>供应商名称：{{report.customerName}}</span></div>
        <div><span>样品名称：{{report.sampleName}}</span></div>
      </div>
    </div>
    <div class="pdf-content">
      pdf报告
    </div>
    <div class="footer">
      <div>下载报告</div>
    </div>
  </div>
</template>

<script>
import twoCode from './images/twocode.png'

export default {
  data(){
    return {
      twoCode,
      orderInfo:{
        orderNo:'12349099',
        serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
        count:1,
        linkedPhone:'0574-88889999',
        createTime:'2018-06-06',
        orderState:'已完成',
        price:'500.00',
        reportState:'已上传',
      },
      linked:{
        customerName:'宁波食品公司',
        sampleName:'餐盒',
        linkedMan:'张三',
        linkedPhone:'13577778888',
        note:`全部都要检测全部都要检测全部都要检测全部都要检测全部都要检测全部都要检测`,
      },
      address:{
        receiver:'张三',
        phoneNum:'15800876123',
        detail:'浙江省宁波市高新区福明路618号 516室 ',
      },
      report:{
        serialNo:'1234567890987654',
        organization:'宁波贸信检测',
        customerName:'宁波食品公司',
        sampleName:'餐盒',
      }
    }
  },
  
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
    .content{
      >div{
        &:not(:nth-last-of-type(1)){
          margin-bottom: .2rem;
        }
      }
      .order-info{
        padding: .3rem .4rem;
        background-color: #fff;
        >div{
          &:nth-last-of-type(1){
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            >div{
              margin-left: .4rem;
            }
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .3rem;
          }
        }
      }
      .linked,
      .address,
      .report{
          padding: .3rem .4rem;
        background-color: #fff;
        >div{
          &:nth-of-type(1){
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            >span:nth-of-type(1){
              width: 2%;
              height: .3rem;
              background-color: #54A6FF;
            }
            >span:nth-of-type(2){
              font-size: 16px;
              width: 95%;
            }
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .3rem;
          }
        }
      }
      .address{
        >div{
          &:nth-of-type(2){
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            >span{
              width: 55%;
              &:nth-of-type(1){
                width: 45%;
              }
            }
          }
        }
      }
    }
    .pdf-content{
      text-align: center;
      padding: 3rem 0;
    }
    .footer{
      >div{
        padding: .2rem;
        width: 100%;
        text-align: center;
        background-color: #2A8AF2;
        color: #fff;
      }
    }
  }
}
</style>
