<template>
  <div id="app">
    <div class="main">
      <div class="header">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="detection-title">
        <div>{{info.nm}}</div>
        <span>联系方式：{{info.mob}}</span>
      </div>
      <div class="product-detail">
        <h3>商品详情</h3>
        <div>
          <span>产品参数：{{proParam}}</span>
        </div>
        <span>联系人：{{info.cont}}</span>
        <span>联系电话：{{info.mob}}</span>
      </div>
    </div>

    <div class="footer" @click="submit">
      <foot-button :btnObj="btnObj" ></foot-button>
    </div>
  </div>
</template>

<script>
import productInfo from './images/productinfo.png'
import footButton from 'components/footButton'
export default {
  data(){
    return {
      productInfo,
        images:[],
        info:{},
        pk:'',
      title:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
      linked:'0574-88889999',
      proParam:'CFDA食堂餐厅饭店酒店自制餐饮食品检测',
      linkedMan:'张三',
      linkedPhone:'13599990000',
      btnObj:{
        btnName:'立即预约',
        src:'',
      }
    }
  },
    mounted(){
        this.pk = this.until.getQueryString('pk')
        this.getInfo()
    },
  methods:{
      getInfo(){
          this.until.get('/prodx/mxpubcheck/info/'+this.pk)
              .then(res=>{
                  this.info = res.data
                  this.images = this.info.imgUrl.split(',')
              })
      },
      submit(){
          window.location.href = 'reservationservice.html?pk='+this.pk+'&img='+this.images[0]+'&nm='+this.info.nm
      }
  },
  components:{
    footButton,
  }
}
</script>

<style lang='less'>
  html,body{
    height: 100%;
    background-color: #F7F7F7;
    #app{
      height: 100%;
      display: flex;
      display: -webkit-flex;
      overflow: hidden;
      flex-direction: column;
      .main{
        flex: 1;
        overflow: auto;
      }
      .header{
        img{
          vertical-align: bottom;
        }
      }
      .detection-title{
        padding: .3rem;
        background-color: #fff;
        >div{
          font-size: 16px;
          margin-bottom: .3rem;
        }
        >span{
          color: #A7A7A7;
        }
      }
      .product-detail{
        margin-top: .3rem;
        padding: .3rem;
        background-color: #fff;
        h3{
          margin-bottom: .3rem;
          font-weight: 400;
          font-size: 16px;
        }
        div{
          margin-bottom: .3rem;
          color: #A7A7A7;
        }
        span{
          color:#A7A7A7;
          &:nth-of-type(2){
            margin-left: .5rem;
          }
        }
      }
    }
  }
</style>
