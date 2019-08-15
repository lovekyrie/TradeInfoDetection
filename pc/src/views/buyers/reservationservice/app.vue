<template>
  <div id="app" v-loading="loading">
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
            <img :src="img" alt="">
          </div>
          <div>
            <span>{{info.mxPubCheckNm}}</span>
          </div>
          <div>
            <span>{{info.qty}}</span>
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
        <el-form ref="info" :model="info" :rules="rules">
           <el-form-item label="供应商名称：" prop="supply">
              <el-input v-model="info.supply"></el-input>
            </el-form-item>
             <el-form-item label="质检产品名称：" prop="prodNm">
              <el-input v-model="info.prodNm"></el-input>
            </el-form-item>
             <el-form-item label="联系人：" prop="contNm">
              <el-input v-model="info.contNm"></el-input>
            </el-form-item>
             <el-form-item label="联系电话：" prop="contMob">
              <el-input v-model="info.contMob"></el-input>
            </el-form-item>
            <el-form-item label="备注：">
              <el-input type="textarea" v-model="info.rmks"></el-input>
            </el-form-item>
        </el-form>
      </div>
      <div class="addrTitle">
        <span></span>
        <span>我的地址</span>
        <p @click="addAddr">管理收货地址</p>
      </div>
        <address-manage :addressList="addrList" :addrPk="addrPk" @changeAddr="changeAddr" v-if="ifAdd"></address-manage>
        <!--<p class="addAddr" @click="addAddr" v-else>添加地址 +</p>-->
        <el-row>
          <el-button @click="submitOrder('info')">提交订单</el-button>
          <el-button @click="cancel('info')">取消</el-button>
        </el-row>
    </div>
    <el-dialog
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
   <div class="upload-content">
    <div>
      <vue-qr
        :logoSrc="logo"
        :text="url"
        :size="220"
        :margin="0"
      ></vue-qr>
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
import VueQr from 'vue-qr'
export default {
  data() {
    return {

      logo:'',
      url:'',
      ifAdd:true, //是否有地址时
      loading:false,
      code,
      centerDialogVisible: false,
      reservation,
      orderInfo: {
        serviceName: "CFDA食堂餐厅饭店酒店自制餐饮食品检测",
        count: 1,
        linkedPhone: "0574-88889999"
      },
      addrPk:'',
      img:'',
      info:{
        mxOrdDetePk:'',
        sysUserPk:'',//用户主键
        mxPubCheckNm:'', //服务名称
        mxPubCheckPk:'', //服务主键
        sysAddrPk:'', //收货地址主键
        price:'', //价格
        qty:'', //数量
        catCd:'',//支付分类编码
        statCd:'80020.001',//订单状态编码
        rcdTm:'',//下单时间
        supply:'',
        prodNm:'',
        contNm:'',
        contMob:'',
        rmks:''
      },
      rules: {
        supply: [
          { required: true, message: '请输入供应商', trigger: 'blur' }
        ],
        prodNm: [
          { required: true, message: '请输入质检产品名称', trigger: 'blur'}
        ],
        contNm: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        contMob: [
          { required: true, message: '请输入联系电话', trigger: 'change' }
        ],
      },
      form: {
        vendor: "",
        productName: "",
        linkedMan: "",
        linkedPhone: "",
        desc: ""
      },
      addrList: []
    };
  },
  mounted(){
    this.info.sysUserPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
    this.info.mxPubCheckPk = this.until.getQueryString('pk')
    this.info.mxPubCheckNm = this.until.getQueryString('nm')
    this.info.qty = this.until.getQueryString('qty')
    this.img = this.until.getQueryString('img')
    this.getAddr()
  },
  methods: {
    cancel(){
      this.info.supply = ''
      this.info.prodNm = ''
      this.info.contNm = ''
      this.info.contMob = ''
      this.info.rmks = ''

    },
    submitOrder(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.info.sysAddrPk = this.addrPk
          this.until.postData('/prod/mxordete/edit',JSON.stringify(this.info))
            .then(res=>{
              this.loading = false
              if(res.status=='200'){
                this.url = this.hostUrl+'/views/code/order.html?code='+res.data
                this.centerDialogVisible=true;
                setTimeout(()=>{
                  this.centerDialogVisible=false;
                  window.location.href = '../home/index.html#/myorder'
                },2000)
              }else {
                this.$message({
                  message:res.msg,
                  type:'warning'
                });
              }
            })

        }
      })

    },
    addAddr(){
      window.location.href = '../home/index.html#/addresslist'
    },
    getAddr(){
      this.until.get('/sys/addr/listSelf')
        .then(res=>{
          if(res.status==200){
            this.addrList = res.data.items
            if(this.addrList.length > 0){
              this.ifAdd = true
              this.addr = this.addrList[0]
              this.addrPk = this.addr.sysAddrPk
            }else {
              this.ifAdd = false
            }

          }else {
            this.$message({
              message:res.message,
              type:'warning'
            })
          }

        })
    },
    changeAddr(val){
      this.addrPk = val
    },
  },
  components: {
    tradeHeader,
    tradeFooter,
    addressManage,
    VueQr
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
      margin: 50px auto 50px;
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
          align-items: center;
          &:nth-of-type(1) {
            margin: 20px 0;
            > span {
              &:nth-of-type(1) {
                width: 6px;
                height: 20px;
                margin-right: 8px;
                background-color: #0d55d2;
              }
              &:nth-of-type(2) {
                font-size: 18px;
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
                height: 30px;
                display: flex;
                display: -webkit-flex;
                align-items: center;
                justify-content: center;
                img{
                  width: auto;
                  height: auto;
                  max-width: 100%;
                  max-height: 100%;
                }
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
      .el-row{
        float: right;
        margin-top: 15px;
        margin-bottom: 30px;
        button{
          width: 120px;
          text-align: center;
          &:first-child{
            border: 1px solid #0d55d2;
            background: #0d55d2;
            color: #ffffff;
          }
        }
      }
      .addrTitle {
        margin-top: 40px;
        margin-bottom: 25px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        p{
          color: #0d55d2;
          cursor: pointer;
          font-size: 16px;
        }
        > span {
          &:nth-of-type(1) {
            width: 6px;
            height: 20px;
            margin-right: 8px;
            background-color: #0d55d2;
          }
          &:nth-of-type(2) {
            font-size: 18px;
            flex: 1;
          }
        }
      }
      .addAddr{
        /*border: 1px solid #d4d4d4;*/
        padding: 10px 8px;
        border-radius: 3px;
        width: 120px;
        text-align: center;
        cursor:pointer;
        background: #0d55d2;
        color: #fff;
        margin: 15px 0;
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
            align-items: center;
            > span {
              &:nth-of-type(1) {
                width: 6px;
                height: 20px;
                margin-right: 8px;
                background-color: #0d55d2;
              }
              &:nth-of-type(2) {
                font-size: 18px;
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
              width: 121px;
            }
            > div {
              flex: 1;
            }
            textarea {
              height: 80px;
            }
          }
        }
      }
    }
    .el-dialog {
      width: 490px!important;
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
