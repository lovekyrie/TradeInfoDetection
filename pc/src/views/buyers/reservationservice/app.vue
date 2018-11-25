<template>
  <div id="app">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="content">
      <div class="order-info">
        <div>
          <span></span>
          <span>检测服务订单信息</span>
        </div>
        <div>
          <div>
            <span>服务照片</span>
          </div>
          <div>
            <span>服务名称</span>
          </div>
          <div>
            <span>数量</span>
          </div>
          <div>
            <span>联系电话</span>
          </div>
        </div>
        <div>
          <div>
            <img :src="reservation" alt="">
          </div>
          <div>
            <span>{{orderInfo.serviceName}}</span>
          </div>
          <div>
            <span>{{orderInfo.count}}</span>
          </div>
          <div>
            <span>{{orderInfo.linkedPhone}}</span>
          </div>
        </div>
      </div>
      <div class="linked">
        <div>
          <span></span>
          <span>联系方式</span>
        </div>
        <el-form>
           <el-form-item label="供应商名称：">
              <el-input v-model="form.vendor"></el-input>
            </el-form-item>
             <el-form-item label="质检产品名称：">
              <el-input v-model="form.productName"></el-input>
            </el-form-item>
             <el-form-item label="联系人：">
              <el-input v-model="form.linkedMan"></el-input>
            </el-form-item>
             <el-form-item label="联系电话：">
              <el-input v-model="form.linkedPhone"></el-input>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
        </el-form>
      </div>
        <address-manage :addressList="addressList"></address-manage>
        <el-row>
          <el-button @click="submitOrder">提交订单</el-button>
          <el-button>取消</el-button>
        </el-row>
    </div>
    <el-dialog
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
   <div class="upload-content">
    <div>
      <img :src="code" alt="">
    </div>
    <div>
      <span>
      预约成功！
      </span>
    </div>
    <div>
      <span>检测订单二维码已生成，您可随时扫描</span>
    </div>
    <div>
      <span>二维码查看检测进度。</span>
    </div>
  </div>
  <span slot="footer" class="dialog-footer">
  </span>
</el-dialog>

    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import reservation from "./images/reservation_03.png";
import addressManage from "components/addressManage";
import code from "./images/code_03.png";
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      code,
      centerDialogVisible: false,
      reservation,
      orderInfo: {
        serviceName: "CFDA食堂餐厅饭店酒店自制餐饮食品检测",
        count: 1,
        linkedPhone: "0574-88889999"
      },
      form: {
        vendor: "",
        productName: "",
        linkedMan: "",
        linkedPhone: "",
        desc: ""
      },
      addressList: [
        {
          name: "章三",
          phone: "13588880000",
          address: `浙江省宁波市鄞州区首南街道蝶缘路280号 安邦大厦 2001-1`
        },
        {
          name: "章三",
          phone: "13588880000",
          address: `浙江省宁波市鄞州区首南街道蝶缘路280号 安邦大厦 2001-1`
        },
        {
          name: "章三",
          phone: "13588880000",
          address: `浙江省宁波市鄞州区首南街道蝶缘路280号 安邦大厦 2001-1`
        }
      ]
    };
  },
  methods: {
    submitOrder(){

      this.centerDialogVisible=true;
      setTimeout(()=>{
        this.centerDialogVisible=false;
      },2000)
    }
  },
  components: {
    tradeHeader,
    tradeFooter,
    addressManage
  }
};
</script>

<style lang='less'>
html,
body {
  width: 100%;
  background-color: #fff;
  #app {
    width: 100%;
    .content {
      width: 1200px;
      margin: 50px auto 0px;
      .order-info {
        padding-bottom: 35px;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 1px solid #ddd;
        > div {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          &:nth-of-type(1) {
            margin: 20px 0;
            > span {
              &:nth-of-type(1) {
                width: 10px;
                height: 25px;
                background-color: #0d55d2;
              }
              &:nth-of-type(2) {
                width: 98%;
              }
            }
          }
          &:nth-of-type(2) {
            padding: 10px 0;
            background-color: #f1f1f1;
          }
          &:nth-of-type(3) {
            margin: 30px 0;
          }
          &:not(:nth-of-type(1)) {
            > div {
              &:nth-of-type(1) {
                width: 10%;
              }
              &:nth-of-type(2) {
                width: 50%;
              }
              &:nth-of-type(3) {
                width: 25%;
              }
              &:nth-of-type(4) {
                width: 15%;
              }
            }
          }
        }
      }
      .linked {
        padding: 35px 0;
        border-bottom: 1px solid #ddd;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
          margin-bottom: 20px;
          &:nth-of-type(1) {
            width: 100%;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            > span {
              &:nth-of-type(1) {
                width: 10px;
                height: 25px;
                background-color: #0d55d2;
              }
              &:nth-of-type(2) {
                width: 98%;
              }
            }
          }
        }
        .el-form {
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          > div {
            width: 45%;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            > label {
              text-align: left;
              width: 20%;
            }
            > div {
              width: 80%;
            }
            textarea {
              height: 80px;
            }
          }
        }
      }
    }
    .el-dialog {
      width: 490px;
      border-radius: 10px;
      .el-dialog__header,
      .el-dialog__footer {
        display: none;
      }
      .el-dialog__body {
        padding: 0;
        width: 100%;
        height: 490px;
        .upload-content {
          width: 100%;
          height: 100%;
          > div {
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            &:nth-of-type(1){
              padding-top: 55px;
            }
            &:nth-of-type(2) {
              padding: 30px 0;
             font-size: 20px;
            }
            &:nth-of-type(3),
            &:nth-last-of-type(1) {
              font-size: 16px;
              color: #a0a0a0;
            }
          }
        }
      }
    }
  }
}
</style>
