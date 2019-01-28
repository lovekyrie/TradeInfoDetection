<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <div class="content">
      <div>
        <span>真实姓名：</span>
        <div>
          <span>{{info.nm}}</span>
        </div>
      </div>
      <div>
        <span>联系电话：</span>
        <div>
          <span>{{info.mob}}</span>
        </div>
      </div>
      <div>
        <span>职称：</span>
        <div>
          <span>{{info.prof}}</span>
        </div>
      </div>
      <div>
        <span>QQ：</span>
        <div>
          <span>{{info.qq}}</span>
        </div>
      </div>
      <div>
        <span>微信：</span>
        <div>
          <span>{{info.wx}}</span>
        </div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div>
          <span>{{info.email}}</span>
        </div>
      </div>
      <div>
        <span>技能特长：</span>
        <div>
          <span>{{info.specSkill}}</span>
        </div>
      </div>
      <div class="file-type">
        <span>资历证书：</span>
        <div>
          <div class="img" v-for="item in qualCertUrlList">
            <img :src="item"/>
          </div>
        </div>
      </div>
      <div class="file-type">
        <span>培训经历：</span>
        <div>
          <div class="img" v-for="item in trainExpeList">
            <img :src="item"/>
          </div>
        </div>
      </div>
      <div>
        <span>个人简介：</span>
        <div>
          <span>{{info.resume}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import businessLicense from './images/businessLicense.png'

export default {
  data(){
    return {
        userPk:'',
        info:{},
      title:'人才入驻',
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
                      if(this.info.qualCertUrl){
                          this.qualCertUrlList = this.info.qualCertUrl.split(',')
                      }
                      if(this.info.trainExpe){
                          this.trainExpeList = this.info.trainExpe.split(',')
                      }
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
    headerTitle,
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
  background-color: #f7f7f7;
  #app{
    height: 100%;
    .content{
      padding: .3rem .4rem;
      background-color: #fff;
      color: #929292;
      .file-type{
        .img{
          float: left;
          margin-bottom: 5px;
          margin-right: 5px;
          width: 2rem;
          height: 2rem;
          border: 1px solid #f4f4f4;
          border-radius: 3px;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      >div{
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        &:nth-last-of-type(1){
          >span{
            align-self: flex-start;
          }
        }
        &:not(:nth-last-of-type(1)){
          margin-bottom: .3rem;
        }
        >span{
          width: 30%;
        }
        >div{
          width: 70%;
          >span{
            padding: .2rem 0;
            border: 0;
            width: 100%;
          }
        }
      }
      .file-type{
        >span{
          align-self: flex-start;
        }
      }
    }
  }
}
</style>
