<template>
  <div id="app">
    <div class="content">
      <div>
        <span>收货人姓名</span>
        <input type="text" v-model="info.receNm"></div>
      <div>
        <span>手机号码</span>
        <input type="text" v-model="info.receMob"></div>
      <div>
        <span>省 市 区</span>
        <addr @setAddr="getAddr" :provCd="info.provCd" :city="info.cityCd" :distCd="info.distCd"></addr>
      </div>
      <div>
        <span>详细地址</span>
        <input type="text" v-model="info.addrDtl"></div>
    </div>
    <footer @click="submit">
      确定
    </footer>
  </div>
</template>

<script>
import footButton from 'components/footButton'
import addr from "components/addr";
export default {
  data(){
    return {
      btnObj:{
        btnName:'确定',
      },
        info:{},
        getInfo:{},
      receiverName:'李科',
      phone:13577778888,
      province:'浙江省宁波市镇海区',
      address:'永茂西路329路'
    }
  },
    created(){
        if(this.until.getQueryString('info')){
            this.getInfo = JSON.parse(this.until.getQueryString('info'))
            this.info.sysAddrPk = this.getInfo.sysAddrPk  //主键
            this.info.sysUserPk = this.getInfo.sysUserPk  //用户主键
            this.info.sysUserNm = this.getInfo.sysUserNm  //登录名

            this.info.receNm = this.getInfo.receNm  //联系人
            this.info.receMob = this.getInfo.receMob  //电话
            this.info.provCd = this.getInfo.provCd  //省编码
            this.info.provNm = this.getInfo.provNm  //省份
            this.info.cityCd = this.getInfo.cityCd  //市编码
            this.info.cityNm = this.getInfo.cityNm  //市
            this.info.distCd = this.getInfo.distCd  //区编码
            this.info.distNm = this.getInfo.distNm  //区
            this.info.addrDtl = this.getInfo.addrDtl  //详细地址
        }else {
            this.info.sysUserPk = this.until.getQueryString('pk')  //用户主键
            this.info.sysUserNm = this.until.getQueryString('nm')   //登录名
        }

    },
    mounted(){

    },
  methods:{
      getAddr(val){
          let cd = JSON.parse(val)
          this.info.provCd = cd.cd1
          this.info.cityCd = cd.cd2
          this.info.distCd = cd.cd3
      },
      submit(){
          this.until.postData('/sys/addr/edit',JSON.stringify(this.info))
              .then(res=>{
                  if(res.status='200'){
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                      setTimeout(()=>{
                          window.location.href = '../address/addresslist.html'
                      },1500)
                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              })
      }
  },
  components:{
    footButton,
      addr
  }
}
</script>

<style lang="less">
  html,body{
    background-color: #F7F7F7;
    height: 100%;
    #app{
      height: 100%;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      overflow: hidden;
      footer{
        width: 100%;
        background-color: #2A8AF2;
        text-align: center;
        padding: 0.2rem 0;
        color: #fff;
      }
      .content{
        flex: 1;
        overflow: auto;
        background-color: #fff;
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*flex-direction: row;*/
        /*flex-wrap: wrap;*/
        >div{
          padding: .3rem;
          width: 100%;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          border-bottom: 1px solid #E7E7E7;
          >span{
            width: 30%;
          }
          >input{
            width: 70%;
            border: 0;
          }
        }
      }
    }
  }
</style>
