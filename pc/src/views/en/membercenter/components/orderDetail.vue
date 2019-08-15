<template>
    <div class="order-del">
          <p  @click="toOrder" style="text-align: left;padding-left: 20px" class="cursor"><i class="el-icon-arrow-left"></i> Back</p>

          <!--标题-->
          <ul class="mainTitle">
            <li class="line"><span></span></li>
            <li class="title">Order details</li>
            <li class="line"><span></span></li>
          </ul>

          <!--设备详情-->
          <!--订单表-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <template slot="empty">
              No information available
            </template>
            <el-table-column
              prop="orderNum"
              label="Order Number"
            >
              <template slot-scope="scope">
                <a :href="tableData[scope.$index].reportAddress"
                   target="_self"
                >{{tableData[scope.$index].mxOrdDetePk}}
                </a>
              </template>
            </el-table-column>

            <el-table-column
              prop="serviceName"
              label="Service Name"
            >
              <template slot-scope="scope">
                <a :href="tableData[scope.$index].reportAddress"
                   target="_self"
                >{{tableData[scope.$index].mxPubCheckNm}}
                </a>
              </template>

            </el-table-column>
            <el-table-column
              prop="qty"
              label="Quantity"
              width="80px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="crtTm"
              label="Order Time"
              align="center"

            >
            </el-table-column>
            <el-table-column
              prop="statNm"
              label="Order Process"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="Price"
              align="center"
            >
              <template slot-scope="scope">
                <span style="color: red">{{tableData[scope.$index].price}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="repoStatNm"
              label="Report Process"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="OR Code"
              align="center"
            >
              <template slot-scope="scope">
                <vue-qr
                  :logoSrc="logo"
                  :text="url"
                  :size = "80"
                  :margin="0"
                >

                </vue-qr>
              </template>
            </el-table-column>

          </el-table>

          <!--联系方式-->
          <div class="contactWay">
            <span class="dIcon"></span><span class="dTitle_b">Contact Information</span>
            <p><span style="display: inline-block;width: 35%">Supplier：{{info.supply}}</span><span>Product Name：{{info.prodNm}}</span></p>
            <p><span style="display: inline-block;width: 35%">Contact：{{info.contNm}}</span><span>Tel：{{info.contMob}}</span></p>
            <p>Remarks：{{info.rmks}}</p>
          </div>

          <!--收货地址-->
          <div class="receiveAdd">
            <span class="dIcon"></span><span class="dTitle_b">Shipping address</span>
            <p><span style="display: inline-block;width: 35%">Contact：{{info.addresReceNm}}</span><span>Telephone：{{info.addresReceMob}}</span></p>
            <p>Detailed address：{{info.addresProvNm}}{{info.addresCityNm}}{{info.addresDistNm}}{{info.addresStreetNm}}{{info.addresAddrDtl}}</p>
          </div>

          <!--检测报告-->
          <div class="exaRep">
            <span class="dIcon"></span><span class="dTitle_b">Test Report</span>
            <span class="dowButton" @click="down()"><a href="#">Download report</a></span>
            <p><span style="display: inline-block;width: 35%">Serial number：{{info.repoQrCd}}</span><span>Test Organization：宁波贸信检测</span></p>
            <p><span style="display: inline-block;width: 35%">Supplier：{{info.supply}}</span><span>Product Name：{{info.prodNm}}</span></p>
            <!--<div class="img" v-if="imgList.length>0">-->
              <!--<img :src="item" v-for="item in imgList"/>-->
            <!--</div>-->
            <!--<div v-if="pdfList.length>0">-->
              <!--<pdf :url="item"  v-for="(item,index) in pdfList" :key="index"></pdf>-->
            <!--</div>-->
            <div class="footer">
              <!--<div>下载报告</div>-->
              <div class="pdf-reader" v-if="imgList.length>0">
                <img :src="item" v-for="item in imgList"/>
              </div>
              <div class="pdf-reader" v-if="pdfList.length>0">
                <iframe :src="item" height="560" v-for="(item,index) in pdfList" :key="index" width="100%">
                </iframe>
              </div>
            </div>
          </div>

        </div>
</template>

<script>
import code from "../images/订单二维码.png";
import pdf from "components/contract.md";
import VueQr from 'vue-qr'
export default {
  data() {
    return {
      id:'',
      logo:'',
      info:{},
      url:'',
      downList:[],
      imgList:[],
      pdfList:[],
      tableData: [
        {
          orderNum: "12349099",
          serviceName: "CFDA食堂餐厅饭店酒店自制餐饮食品检测",
          reportAddress: "./orderDetail.html",
          number: "1",
          orderTime: "2018-06-06 12:00:00",
          status: "已完成",
          price: "¥" + "500.00",
          repStatus: "已上传",
          orderCodes: code
        }
      ]
    };
  },
  mounted(){
    this.id = this.$route.query.ipPk
    this.getInfo()
  },
  methods:{
    down(){
      this.downList.forEach(item=>{
        this.FileSaver.saveAs(item.url,item.nm)
      })
    },
    getInfo(){
      this.until.get('/prod/mxordete/info/'+this.id)
        .then(res=>{
          this.info = res.data
          // console.log(this.info)
          this.tableData[0] = res.data
          this.url = this.hostUrl+'/views/code/order.html?code='+ this.tableData[0].repoQrCd

          if(this.tableData[0].repoNo){
            let urlList = this.tableData[0].repoNo.split(',')
            urlList.forEach(item=>{
              let url = item.split('.')
              this.downList.push({
                nm:url[0],
                url:item
              })
              if(item.indexOf('.pdf')>-1 || item.indexOf('.PDF')>-1){
                this.pdfList.push(item)
              }else {
                this.imgList.push(item)
              }
            })
          }

        })
    },
    toOrder(){
      this.$router.back(-1)
    }
  },
  components: {
    pdf,
    VueQr
  }
};
</script>

<style lang='less'>
.order-del {
  flex: 5.5;
  background-color: white;
  padding: 20px 0px;
  text-align: center;

  .mainTitle {
    margin: 20px 0;
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
      width: auto;
    }
  }

  //  订单详情
  //表格
  .el-table {
    margin: 0 auto;
    border: none;
    font-size: 14px;
    color: rgb(144, 144, 144);

    //表头背景颜色
    .el-table__footer-wrapper thead div,
    .el-table__header-wrapper thead div {
      background-color: rgb(241, 241, 241);
    }

    //表头行高
    th {
      background-color: rgb(241, 241, 241);
      height: 48px;
    }

    //字体颜色
    tr .cell {
      color: rgb(134, 134, 134);
      word-break: break-all;
    }

    //表格底边框
    td,
    th.is-leaf {
      border-bottom: 2px solid rgb(241, 241, 241);
    }
    //除表头外行高
    td {
      height: 62px;
      padding: 15px 0;
      .el-table_1_column_1 .cell {
        color: rgb(13, 85, 210);
      }
    }
  }
  //elui表格后的细线消除
  .el-table::after {
    width: 0;
  }
  //表格内颜色消除
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: white;
  }

  //  联系方式,收货地址
  .contactWay,
  .receiveAdd,
  .exaRep {
    padding: 20px 20px;
    text-align: left;
    border-bottom: 1px solid rgb(231, 231, 231);

    p {
      color: rgb(99, 99, 99);
      line-height: 3em;
    }
  }

  .exaRep {
    //pdf位置
    .pdf {
      width: 100%;
      height: 500px;
      text-align: center;
      line-height: 500px;
      font-size: 28px;
      background-color: rgb(211, 211, 211);
    }

    //  下载报告按钮
    .dowButton {
      display: inline;
      float: right;
      padding-right: 10px;
      a {
        display: inline-block;
        float: right;
        border: 2px solid rgb(211, 211, 211);
        border-radius: 4px;
        font-size: 16px;
        color: rgb(181, 181, 181);
        padding: 8px 16px;
        text-align: center;
      }
    }
  }

  //  蓝色小块
  .dIcon {
    display: inline-block;
    content: "";
    height: 22px;
    width: 8px;
    position: relative;
    top: 4px;
    background-color: rgb(13, 85, 210);
  }

  //子标题
  .dTitle_b {
    display: inline-block;
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 20px;
    height: 23px;
  }
}
</style>
