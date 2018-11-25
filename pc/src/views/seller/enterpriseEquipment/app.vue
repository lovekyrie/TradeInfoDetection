<template>
  <div id="app">
    <trade-header :showSearch="showSearch"></trade-header>
    <div class="content">
      <el-row>
        <el-button>企业发布</el-button>
        <el-button>个人发布</el-button>
      </el-row>
      <div class="equipment-list">
        <div v-for="(item, index) in equipmentList" :key="index">
          <div>
            <img :src="item.src" alt="">
          </div>
          <span>{{item.equipmentName}}</span>
        </div>
      </div>
    </div>
    <trade-footer></trade-footer>
  </div>
</template>

<script>
import tradeHeader from "components/tradeHeader";
import tradeFooter from "components/tradeFooter";
import equipmentImg from "./images/quipmentImg_03.png";

export default {
  data() {
    return {
      showSearch: true,
      equipmentImg,
      equipmentList: [],
      equipment: {
        src: equipmentImg,
        equipmentName: "【转租】转租水质检测设备一台"
      }
    };
  },
  mounted() {
    this.getEnterpriseEquipementList();
  },
  components: {
    tradeHeader,
    tradeFooter
  },
  methods: {
    getEnterpriseEquipementList() {
      for (let index = 0; index < 16; index++) {
        this.equipmentList.push(this.equipment);
      }
    }
  }
};
</script>

<style lang='less'>
html,body{
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app{
    width: 100%;
    .content{
      width: 1200px;
      margin: 50px auto 0px;
      .equipment-list{
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        >div{
          width: 285px;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          div,span{
            width: 100%;
            margin-bottom: 20px;
          }
          span{
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
