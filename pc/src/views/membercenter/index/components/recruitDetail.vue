<template>
  <div id="app">
    <div class="content">
      <p  @click="back" style="text-align: left;padding-left: 20px" class="cursor"><i class="el-icon-arrow-left"></i> 返回</p>

      <!--标题-->
      <ul class="mainTitle">
        <li class="line"><span></span></li>
        <li class="title">招聘详情</li>
        <li class="line"><span></span></li>
      </ul>
      <div class="content-title">
        <span>{{detail.nm}}</span>
        <span>{{detail.frSala}}-{{detail.toSala}}元/月</span>
        <span>{{detail.entpNm}}</span>
        <span>联系电话：{{detail.mob}}</span>
        <span>邮箱地址：{{detail.email}}</span>
      </div>
      <div>
        <div>
          <span></span>
          <span>职位描述</span>
        </div>
        <div v-html="detail.intro"></div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        title:'招聘详情',
        detail: {
        }
      };
    },
    mounted(){
      this.userPk = this.$route.query.ipPk
      this.getInfo()
    },
    methods: {
      back(){
        this.$router.back(-1)
      },
      getInfo(){
        this.until.get('/prod/mxpubrecr/info/'+this.userPk)
          .then(res=>{
            this.detail = res.data
            this.detail.intro=this.detail.intro.replace(/\n/gm,"<br/>")
          })
      }
    },
    components: {
    }
  };
</script>

<style lang='less'scoped>
  html,
  body {
    width: 100%;
    background-color: #fff;
    #app {
      width: 100%;
      background: #ffffff;
      .content {

        /*width: 1200px;*/
        margin: 55px auto 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .mainTitle {
          margin: 20px auto;
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
        > div {
          padding: 35px 30px;
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          &:nth-of-type(1) {
            >span{
              width: 50%;
              margin-bottom: 25px;
              font-size: 16px;
              &:nth-of-type(1),
              &:nth-of-type(2){
                font-size: 22px;
              }
              &:nth-of-type(2n){
                text-align: right;
              }
            }
          }
          &:nth-last-of-type(1){
            flex-wrap: wrap;
            >div{
              width: 100%;
              margin-bottom: 25px;
              &:nth-of-type(1){
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;
                margin-bottom: 25px;
                >span{
                  &:nth-of-type(1){
                    width: 8px;
                    height: 20px;
                    background-color: #0d55d2;
                  }
                  &:nth-of-type(2){
                    font-size: 22px;
                    margin-left: 15px;
                  }
                }
              }
              &:not(:nth-of-type(1)){
                font-size: 16px;
              }
            }
          }
          &:not(:nth-last-of-type(1)){
            border-bottom: 1px solid #ddd;
          }
        }
      }
    }
  }
</style>
