<template>
  <div id="enterpriseDetail">
    <div class="header">
      <trade-header></trade-header>
    </div>
    <div class="main">
        <div class="intro">
          <div class="img">
             <img :src="info.imgUrl"/>
          </div>
          <div class="content">
             <p>
               <b>{{info.nm}}</b>
               <span>{{info.catNm}}</span>
             </p>
            <p>
              价格：<span>￥ {{info.price}}</span>
              <span>发布日期：{{info.crtTm}}</span>
            </p>
            <p>
              <b>产品描述</b>
              {{info.intro}}
            </p>
          </div>
        </div>
        <div class="contact">
          <b>联系方式</b>
          <p>联系人：{{info.contNm}}</p>
          <p>联系电话：{{info.contMob}}</p>
          <p>联系邮箱：{{info.contEmail}}</p>
        </div>
    </div>
    <trade-footer></trade-footer>
  </div>
</template>
<script>
  import tradeHeader from "components/tradeHeader";
  import tradeFooter from "components/tradeFooter";
  export default {
    data() {
      return {
        pk:'',
        info:{}
      };
    },
    mounted(){
      this.pk = this.until.getQueryString('pk')
      this.getInfo()
    },
    methods: {

      getInfo(){
        this.until.get('/prod/mxpubdev/info/'+this.pk)
          .then(res=>{
            this.info = res.data
          })
      },

    },
    components: {
      tradeHeader,
      tradeFooter
    }
  };
</script>
<style lang='less' scoped>
  html,body{
    height: 100%;
  }
  #enterpriseDetail{
    .main{
      width: 1200px;
      margin: 20px auto;
      overflow: hidden;
      .intro{
        overflow: hidden;
        .img{
          width: 420px;
          height: 420px;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          float: left;
          margin-right: 30px;
          img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
          }
        }
        .content{
          width: 750px;
          float: left;
          p{
            b{
              font-weight: normal;
            }
            &:first-child{
              line-height: 40px;
              margin-bottom: 10px;
              border-bottom: 1px solid #dddddd;
              b{
                font-size: 18px;

              }
            }
            &:nth-of-type(2){
              padding:15px 0;
              span:first-child{
                color: #ff3000;
                font-size: 16px;
              }
              span:last-child{
                float: right;
                font-size: 12px;
                color: #999;
              }
            }
            &:nth-of-type(3){
              padding-top: 20px;
              color: #999;
              b{
                color: #333;
                margin-bottom: 5px;
                font-size: 16px;
              }
            }
          }
        }
      }
      .contact{
        b{
          font-weight: normal;
          font-size: 16px;
          padding: 15px 0;
          display: block;
        }
        p{
          color: #999;
          line-height: 30px;
        }
      }
    }
  }
</style>
