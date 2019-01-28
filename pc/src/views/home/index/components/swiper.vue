<template>
  <div class="swipper">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in swipperList" :key="item.sysAdPk">
          <div>
            <img :src="item.srcUrl" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>

export default {
  data(){
    return {
       swipperList: [],
    }
  },
  mounted(){
    this.until.get('/sys/ad/list?catCd=30040.150')
      .then(res=>{
        this.swipperList = res.data.items
      })
  }
}
</script>

<style lang='less'>
.swipper {
      width: 100%;
      background: #ffffff;
      height: 500px;
      margin: 0 auto;
      .el-carousel__container {
        height: 500px;
        background-color: #fff;
        .el-carousel__item {
          height: 500px;
          display: -webkit-flex;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          > div {
            width: 100%;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            img {
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
              /*vertical-align: middle;*/
            }
          }
        }
      }
    }
</style>
