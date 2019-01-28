<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <div class="content">
      <div>
        <span>真实姓名：</span>
        <div>
          <input type="text" v-model="nm">
        </div>
      </div>
      <div>
        <span>联系电话：</span>
        <div>
          <input type="text" v-model="mob">
        </div>
      </div>
      <div>
        <span>职称：</span>
        <div>
          <input type="text" v-model="prof">
        </div>
      </div>
      <div>
        <span>QQ：</span>
        <div>
          <input type="text" v-model="qq">
        </div>
      </div>
      <div>
        <span>微信：</span>
        <div>
          <input type="text" v-model="wx">
        </div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div>
          <input type="email" v-model="email">
        </div>
      </div>
      <div>
        <span>技能特长：</span>
        <div>
          <input type="text" v-model="specSkill">
        </div>
      </div>
      <div class="file-type">
        <span>资历证书：</span>
        <div>
          <div class="i-item" v-if="upList.length>0" v-for="(up,i) in upList">
            <svg class="icon" aria-hidden="true" @click="deletImg(i,1)">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
            <img :src="up">
          </div>
          <div class="upload">
            <input type="file" @change="upImg($event,1)">
          </div>
        </div>
          <!--<input type="file" v-model="qualCertUrl">-->
      </div>
      <div class="file-type">
        <span>培训经历：</span>
        <div>
          <div class="i-item" v-if="upList2.length>0" v-for="(up,i) in upList2">
            <svg class="icon" aria-hidden="true" @click="deletImg(i,2)">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
            <img :src="up">
          </div>
          <div class="upload">
            <input type="file" @change="upImg($event,2)">
          </div>
        </div>
      </div>
      <div>
        <span>个人简介：</span>
        <div>
          <textarea v-model="resume"></textarea>
        </div>
      </div>
      <div>
        <div @click="submit">
          <button>提交申请</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerTitle from "components/headerTitle";

export default {
  data() {
    return {
        mxperspk:'',
      title: "人才入驻",
        upList:[],
        upList2:[],
        mxperspk:'',
        dialogVisible: false,
        userPk:'',
        nm:'',
        mob:'',
        prof:'',
        qq:'',
        wx:'',
        email:'',
        specSkill:'',
        qualCertUrl:'',
        trainExpe:'',
        resume:'',
        catCd:'40000.170',
        statCd:'50000.200',
    };
  },
    mounted(){

      let info=JSON.parse(this.until.loGet('userInfo'))
        if(info){
          this.userPk = info.sysUserPk

        }
        if(this.until.getQueryString('type')=='edit'){
            this.getInfo()
        }
    },
  methods: {
      getInfo(){
          this.until.get('/prodx/mxpers/infosize/'+this.userPk)
              .then(res=>{
                  let myData = res.data.items[0]
                  console.log(myData)
                  this.mxperspk=myData.mxPersPk
                  this.nm=myData.nm
                  this.mob=myData.mob
                  this.prof=myData.prof
                  this.qq=myData.qq,
                  this.wx=myData.wx,
                  this.email=myData.email,
                  this.specSkill=myData.specSkill,
                  this.qualCertUrl=myData.qualCertUrl,
                  this.trainExpe=myData.trainExpe,
                  this.resume=myData.resume
                  this.upList = this.qualCertUrl?this.qualCertUrl.split(','):[]
                  this.upList2 = this.trainExpe?this.trainExpe.split(','):[]
                  if(myData.statCd=='50000.200'){
                      this.$hero.msg.show({
                          text:'入驻审核中……',
                          times:1500
                      });
                  }else if(myData.statCd=='50000.300'){
                      this.$hero.msg.show({
                          text:'入驻审核未通过，请重新提交！',
                          times:1500
                      });
                  }
                  // this.catCd=myData.catCd,
                  // this.statCd=myData.statCd
              })
      },
      Verification(){
          if(this.nm==''){
              return false
          }
          if(this.mob==''){
              return false
          }
          if(this.prof==''){
              return false
          }
          return true
      },
      submit(){
          if(this.Verification()){
              this.$dialog.loading.open();
              this.qualCertUrl = this.upList.join(',')
              this.trainExpe = this.upList2.join(',')
              let param = {
                  mxPersPk:this.mxperspk,
                  sysUserPk:this.userPk,
                  nm:this.nm,
                  mob:this.mob,
                  prof:this.prof,
                  qq:this.qq,
                  wx:this.wx,
                  email:this.email,
                  specSkill:this.specSkill,
                  qualCertUrl:this.qualCertUrl,
                  trainExpe:this.trainExpe,
                  resume:this.resume,
                  catCd:this.catCd,
                  statCd:this.statCd
              }
              this.until.postData('/prod/mxpers/edit',JSON.stringify(param))
                  .then(res=>{
                      this.$dialog.loading.close();
                      if(res.status=='200'){
                          window.location.href = 'talententersuc.html'
                      }else {
                          this.$hero.msg.show({
                              text:res.message,
                              times:1500
                          });
                      }
                  })
          }else {
              this.$hero.msg.show({
                  text:'请补全信息！',
                  times:1500
              });
          }

      },
      upImg(e,type){
          this.$dialog.loading.open()
          this.until.upImg(e)
              .then(res=>{
                  this.$dialog.loading.close()
                  var str = res;
                  // var str1 = str.replace('http://127.0.0.1', this.hostUrl);
                  if(type==1){
                      this.upList.push(str);
                  }else {
                      this.upList2.push(str);
                  }
              },err=>{
                  this.$dialog.loading.close()
                  this.Toast(err)
              });
      },
      deletImg(index,type){
          if(type==1){
              this.upList.splice(index,1)
          }else {
              this.upList2.splice(index,1)
          }
      }
  },
  components: {
    headerTitle
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    .content {
      padding: 0.3rem 0.4rem;
      background-color: #fff;
      flex: 1;
      overflow: auto;
      > div {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        &:nth-last-of-type(2) {
          > span {
            margin-top: -1.2rem;
          }
          > div {
            textarea {
              padding: 0.2rem 0;
              border: 0;
              width: 100%;
              height: 2rem;
            }
          }
        }
        &:nth-last-of-type(1) {
          margin-top: 0.6rem;
          margin-bottom: 0.3rem;
          > div {
            width: 100%;
            padding: 0.2rem 0;
            background-color: #2a8af2;
            text-align: center;
            > button {
              font-size: 16px;
              background-color: #2a8af2;
              color: #fff;
            }
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
        }
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
          border: 1px solid #f4f4f4;
          > input {
            padding: 0.2rem 0;
            border: 0;
            width: 100%;
          }
        }
      }
      > .file-type {
        align-items: flex-start;
        > span {
          width: 30%;
          padding-top: 20px;
        }
        >div{
          border: 0;
          .i-item{
            float: left;
            margin-right: 5px;
            margin-bottom: 5px;
            width: 2rem;
            height: 2rem;
            border: 1px solid #f4f4f4;
            border-radius: 3px;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            img{
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
            }
            svg{
              position: absolute;
              top: 5px;
              right: 5px;
            }
          }
          .upload{
            float: left;
            background: url("./images/up.png") 50% 50% no-repeat;
            background-size: 0.6rem 0.6rem;
            width: 2rem;
            height: 2rem;
            border: 1px solid #f4f4f4;
            border-radius: 3px;
             input {
              width: 100%;
              height: 100%;
              opacity: 0;
            }
          }

        }
         .i-item {
          padding: 0;
          /*margin-left: 20%;*/
          width: 2rem;
          height: 2rem;
          border: 1px solid #efefef;

          overflow: hidden;
           float: left;
          img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
    }
  }
}
</style>
