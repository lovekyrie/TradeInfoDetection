<template>
  <div id="container">
    <!--顶部-->
    <trade-header></trade-header>
    <!--中间主体-->
    <div id="main">
      <!--标题-->

      <!--入驻成功提示-->
      <div id="successLogo"  v-if="info.statCd =='50000.200'">
        <img src="../img/settleInSuccess.png">提交成功 ，请等待审核
      </div>

      <ul>
        <li class="line"><span></span></li>
        <!--入驻成功的标题-->
        <li class="title">{{settleInTitle}}</li>
        <li class="line"><span></span></li>
      </ul>
      <!--信息表格-->
      <div class="infoTable">
        <table>
          <tr>
            <td>企业名称：</td>
            <td>{{info.nm}}</td>
          </tr>
          <tr>
            <td>法人姓名：</td>
            <td>{{info.legal}}</td>
          </tr>
          <tr>
            <td>邮箱地址：</td>
            <td>{{info.email}}</td>
          </tr>
          <tr>
            <td>联系人：</td>
            <td>{{info.contNm}}</td>
          </tr>
          <tr>
            <td>联系电话：</td>
            <td>{{info.contMob}}</td>
          </tr>
          <tr>
            <td>联系地址：</td>
            <td>{{info.contAddr}}</td>
          </tr>

          <tr>
            <td v-if="busLicUrl.length>0">营业执照：</td>
            <td>
              <div class="img"  v-for="item in busLicUrl">
                <img :src="item">
              </div>
            </td>
          </tr>
          <tr v-if="cmaQualUrl.length>0">
            <td>CMA资质证书：</td>
            <td>
              <div class="img" v-for="item in cmaQualUrl">
                <img :src="item">
              </div>
            </td>
          </tr>
          <tr v-if="cnasQualRul.length>0">
            <td>CNAS资质证书：</td>
            <td>
              <div class="img" v-for="item in cnasQualRul">
                <img :src="item">
              </div>
            </td>
          </tr>
          <tr v-if="otherQualRul.length>0">
            <td>其他资质证书：</td>
            <td>
              <div class="img" v-for="item in otherQualRul">
                <img :src="item">
              </div>
            </td>
          </tr>
          <tr>
            <td>公司简介：</td>
            <td>{{info.intro}}</td>
          </tr>

        </table>
      </div>


      <!--底部按钮-->


    </div>
    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
      <!--<p>版权所有：宁波贸信检测技术有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</p>-->
      <!--<p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>-->
      <!--<p>传真：+86-574-89017298&nbsp;&nbsp;&nbsp;&nbsp;E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com</p>-->
    </div>

  </div>
</template>

<script>
  import tradeFooter from 'components/tradeFooterl'
  import tradeHeader from "components/tradeHeader";
  export default {
    data(){
      return{
        settleInTitle:'检测机构入驻',
        userPk:'',
        info:{},
        busLicUrl:[],
        cmaQualUrl:[],
        cnasQualRul:[],
        otherQualRul:[]
      }
    },
    mounted(){
      let info=JSON.parse(this.until.loGet('userInfo'))
      if(info){
        this.userPk = info.sysUserPk
      }
      this.getInfo()
    },
    methods:{
      getInfo(){
        this.until.get('/prodx/mxentp/info/'+this.userPk)
          .then(res=>{
            if(res.status=='200'){
              this.info = res.data
              if(this.info.busLicUrl){
                this.busLicUrl = this.info.busLicUrl.split(',')
              }
              if(this.info.cmaQualUrl){
                this.cmaQualUrl = this.info.cmaQualUrl.split(',')
              }
              if(this.info.cnasQualUrl){
                this.cnasQualRul = this.info.cnasQualUrl.split(',')
              }
              if(this.info.otherQualUrl){
                this.otherQualRul = this.info.otherQualUrl.split(',')
              }
            }else {
              this.$message({
                message:res.message,
                type: 'warning'
              });
            }

          })
      }
    },
    components:{
      tradeFooter,
      tradeHeader
    }
  }
</script>

<style scoped>

</style>
