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
          <span>服务照片</span>
          <span>服务名称</span>
          <span>数量</span>
          <span>联系电话</span>
        </div>
        <div>
          <img :src="reservation" alt="">
          <span>{{orderInfo.serviceName}}</span>
          <span>{{orderInfo.count}}</span>
          <span>{{orderInfo.linkedPhone}}</span>
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
      <div class="address">

      </div>
    </div>
    <div class="footer">
      <trade-footer></trade-footer>
    </div>
  </div>
</template>

<script>
import tradeHeader from 'components/tradeHeader'
import tradeFooter from 'components/tradeFooter'
import reservation from './images/reservation_03.png'

export default {
  data(){
    return {
      reservation,
      orderInfo:{
        serviceName:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
        count:1,
        linkedPhone:'0574-88889999',
      },
      form:{
        vendor:'',
        productName:'',
        linkedMan:'',
        linkedPhone:'',
        desc:'',
      }
    }
  },
  methods:{

  },
  components:{
    tradeHeader,
    tradeFooter,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app{
    width: 100%;
    .content{
      width:1200px;
      margin: 150px auto 130px;
      .order-info{
        margin-bottom: 35px;
        
      }
    }
  }
}
</style>
