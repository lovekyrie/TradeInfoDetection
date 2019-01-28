<template>
  <div id="app">
    <div class="header">
      <h3>{{info.nm}}</h3>
      <div>发布日期：{{info.releTm}}</div>
    </div>
    <div class="content" v-html="info.cont">

    </div>
  </div>
</template>

<script>
import swiper from "./images/swiper1.png";

export default {
  data() {
    return {
        pk:'',
        info:{},
      swiper,
      releaseDate: "2018-06-04",
      first: `检测服务机构入驻流程，先注册贸信账号，并于个人中心中进行检测服务机构入驻申请，填写所有相关内容，并提交后台审核，
      由贸信检测工作人员判断是否审核通过，审核通过后即可发布检测服务信息等。`
    };
  },
    mounted(){
        this.pk = this.until.getQueryString('pk')
        this.getInfo()
    },
  methods: {
      getInfo(){
          this.until.get('/sys/news/info/'+this.pk)
              .then(res=>{
                  this.info = res.data
              })
      }
  },
  components: {}
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .header{
      padding: .5rem 0.4rem 0;
      background-color: #fff;
      h3{
        margin-bottom: .2rem;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
      }
      div{
        text-align: right;
        color: #A4A4A4;
      }
    }
    .content {
      padding: .3rem .4rem;
      background-color: #fff;
      >div{
        margin-bottom: .2rem;
        text-indent: .5rem;
        >span{
        }
      }
      .img-file {
        text-indent: 0;
        width: 100%;
        >img{
          width: auto;
          height: auto;
          max-width: 100%;
          min-width: 100%;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
