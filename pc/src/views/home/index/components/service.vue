<template>
  <div class="service">
    <swiper></swiper>
      <div class="top-wrap">
        <div class="operate-top">
          <div @click="toTalent">
            <div>
              <img :src="talent" alt="">
            </div>
            <div>
              <span>人才入驻</span>
            </div>
          </div>
          <div @click="toPartner">
            <div>
              <img :src="partner" alt="">
            </div>
            <div>
              <span>合作伙伴入驻</span>
            </div>
          </div>
          <div @click="toOrgnization">
            <div>
              <img :src="orgnization" alt="">
            </div>
            <div>
              <span>检测机构入驻</span>
            </div>
          </div>
          <div @click="toCommunication">
            <div>
              <img :src="commu" alt="">
            </div>
            <div>
              <span>交流讨论区</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import talent from '../images/人才入驻.png'
import partner from '../images/合作伙伴入驻.png'
import orgnization from '../images/检测机构入驻.png'
import commu from '../images/交流讨论区.png'
import swiper from '../components/swiper'

export default {
  data() {
    return {
      commu,
      talent,
      partner,
      orgnization,
      userPk:'',
      myInfo:{},
      type:'', //个人还是企业 1是个人 2是企业
      type2:'', //入驻分类 40000.150合作伙伴 40000.160检测机构  40000.170个人  主要用于分别企业身份是合作伙伴是检测机构
      myState:'',//企业入驻状态 50000.100通过 50000.200未通过 50000.300拒绝
    };
  },
  mounted(){
    let info=JSON.parse(this.until.loGet('user'))
    if(info){
      this.userPk = info.sysUserPk
      this.getInfo()
    }else {

      // window.location.href = '../system/login.html'
    }
  },
  methods:{
    //获取个人信息
    getInfo(){
      this.until.get('/sys/user/info/'+this.userPk)
        .then(res=>{
          if(res.status == '200'){
            this.myInfo = res.data
            this.type = this.myInfo.arg1
            if(this.type==2){
              this.getType()
            }else {
              this.until.loSave('userInfo',JSON.stringify(this.myInfo));
              // this.getPersonState()
            }
          }else {

          }
        })
    },

    //企业身份判断
    getType(){
      this.until.get('/prodx/mxentp/info/'+this.userPk)
        .then(res=>{
          if(res.status=='200'){
            this.myState = res.data.statCd
            this.type2 = res.data.catCd
            this.myInfo.type2 = res.data.catCd
            this.myInfo.entpPk = res.data.mxEntpPk
            this.myInfo.entpNm = res.data.nm
            this.until.loSave('userInfo',JSON.stringify(this.myInfo));
          }else {
            this.until.loSave('userInfo',JSON.stringify(this.myInfo));
          }
        })
    },

    //个人入驻状态
    toTalent(){
      if(!this.until.ifLogin()){
        return false
      }
      if(this.type==1){
        this.until.get('/prodx/mxpers/infosize/'+this.userPk)
          .then(res=>{
            let myData = res.data.items[0]
              if(myData.statCd=='50000.100'){  //审核通过
                window.location.href = '../../views/servicecenter/settleInsuccess.html'
              }else {  //待审核及审核未通过,没有入驻
                window.location.href='../../views/servicecenter/personalEntry.html'
              }

          })

      }else {
        this.$message({
          message:'请选择企业入驻！',
          type:'warning'
        });
      }

    },
    toPartner(){
      if(!this.until.ifLogin()){
        return false
      }
      if(this.type==2){ //个人还是企业 1是个人 2是企业
        if(this.type2==0){  //未入驻时
          window.location.href='../servicecenter/partnerEntry.html'
        }else if(this.type2=='40000.150'){ //入驻分类 40000.150合作伙伴 40000.160检测机构  40000.170个人  主要用于分别企业身份是合作伙伴是检测机构
          if(this.myState=='50000.100'){
            window.location.href='../servicecenter/PsettlelnSucess.html'
          }else {
            window.location.href='../servicecenter/partnerEntry.html?type=edit'
          }
        }else {
          this.$message({
            message:'您已入驻检测机构！',
            type:'warning'
          });
        }
      }else {
        this.$message({
          message:'请选择个人入驻！',
          type:'warning'
        });
      }

    },
    toCommunication(){
      window.location.href='../servicecenter/communication.html'
    },
    toOrgnization(){
      if(!this.until.ifLogin()){
        return false
      }
      if(this.type==2){
        if(this.type2==0){
          window.location.href='../servicecenter/detectionEntry.html'
        }else if(this.type2=='40000.160'){
          if(this.myState=='50000.100'){
            window.location.href='../servicecenter/DsettleInSucess.html'
          }else {
            window.location.href='../servicecenter/detectionEntry.html?type=edit'
          }
        }else {
          this.$message({
            message:'您已入驻合伙伙伴！',
            type:'warning'
          });
        }
      }else {
        this.$message({
          message:'请选择个人入驻！',
          type:'warning'
        });
      }

    }
  },
  components:{
    swiper,
  }
};
</script>

<style lang='less'>
.service {
  .top-wrap {
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    .operate-top {
      width: 1200px;
      margin: 0 auto;
      display: -webkit-flex;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      > div {
        cursor: pointer;
        flex: 1;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        > div {
          padding: 20px 0;
          &:nth-of-type(1) {
            margin-right: 15px;
            img{
              width: 75px;
            }
          }
          &:nth-of-type(2) {
            /*flex: 1;*/
            font-size: 20px;
            font-weight: lighter;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
