<template>
  <div id="container">
    <!--顶部-->
    <trade-header></trade-header>
    <!--中间主体-->
    <div id="main">
      <!--标题-->

      <!--入驻成功提示-->
      <div id="successLogo" v-if="info.statCd =='50000.200'">
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
            <td>真实姓名：</td>
            <td>{{info.nm}}</td>
          </tr>
          <tr>
            <td>联系电话：</td>
            <td>{{info.mob}}</td>
          </tr>
          <tr>
            <td>职称：</td>
            <td>{{info.prof}}</td>
          </tr>
          <tr>
            <td>QQ：</td>
            <td>{{info.qq}}</td>
          </tr>
          <tr>
            <td>微信：</td>
            <td>{{info.wx}}</td>
          </tr>
          <tr>
            <td>邮箱地址：</td>
            <td>{{info.email}}</td>
          </tr>
          <tr>
            <td>技能特长：</td>
            <td>{{info.specSkill}}</td>
          </tr>
          <tr>
            <td>资历证书：</td>
            <td>
              <div class="img" v-for="item in qualCertUrlList">
                <img :src="item"/>
              </div>
            </td>
          </tr>
          <tr>
            <td>培训经历：</td>
            <td>
              <div class="img" v-for="item in trainExpeList">
                <img :src="item"/>
              </div>
            </td>
          </tr>
          <tr>
            <td>个人简介：</td>
            <td>{{info.resume}}</td>
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
        settleInTitle:'人才入驻',
        userPk:'',
        info:{},
        qualCertUrlList:[],
        trainExpeList:[]
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
        this.until.get('/prodx/mxpers/infosize/'+this.userPk)
          .then(res=>{
            if(res.status=='200'){
              let myData = res.data.items[0]
              this.info = myData
              console.log(this.info)
              if(this.info.qualCertUrl){
                this.qualCertUrlList = this.info.qualCertUrl.split(',')
              }
              if(this.info.trainExpe){
                this.trainExpeList = this.info.trainExpe.split(',')
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
