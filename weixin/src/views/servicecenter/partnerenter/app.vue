<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <div class="content">
      <div>
        <span>企业名称：</span>
        <div>
          <input type="text" v-model="nm">
        </div>
      </div>
       <div>
        <span>法人姓名：</span>
        <div>
          <input type="text" v-model="legal">
        </div>
      </div>
       <div>
        <span>邮箱地址：</span>
        <div>
          <input type="email" v-model="email">
        </div>
      </div>
      <div>
        <span>联系人：</span>
        <div>
          <input type="text"  v-model="contNm">
        </div>
      </div>
      <div>
        <span>联系电话：</span>
        <div>
          <input type="number"  v-model="contMob">
        </div>
      </div>
      <div>
        <span>联系地址：</span>
        <div>
          <input type="text"  v-model="contAddr">
        </div>
      </div>
      <div class="file-type">
        <span>营业执照：</span>
          <div>
              <div class="i-item" v-if="upList.length>0" v-for="(up,i) in upList">
                  <svg class="icon" aria-hidden="true" @click="deletImg(i,1)">
                      <use xlink:href="#icon-guanbi"></use>
                  </svg>
                  <svg class="icon i-hover" aria-hidden="true" @click="deletImg(i,1)"><use xlink:href="#icon-guanbi1"></use></svg>
                  <img :src="up"/>
              </div>
              <div class="upload">
                  <input type="file" @change="upImg($event,1)">
              </div>
          </div>
      </div>
       <div class="file-type">
        <span>CMA资质证书：</span>
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
       <div class="file-type">
        <span>CNAS资质证书：</span>
           <div>
               <div class="i-item" v-if="upList3.length>0" v-for="(up,i) in upList3">
                   <svg class="icon" aria-hidden="true" @click="deletImg(i,3)">
                       <use xlink:href="#icon-guanbi"></use>
                   </svg>
                   <img :src="up">
               </div>
               <div class="upload">
                   <input type="file" @change="upImg($event,3)">
               </div>
           </div>
      </div>
      <div class="file-type">
        <span>其他资质证书：</span>
          <div>
              <div class="i-item" v-if="upList4.length>0" v-for="(up,i) in upList4">
                  <svg class="icon" aria-hidden="true" @click="deletImg(i,4)">
                      <use xlink:href="#icon-guanbi"></use>
                  </svg>
                  <img :src="up">

              </div>
              <div class="upload">
                  <input type="file" @change="upImg($event,4)">
              </div>
          </div>
      </div>
      <div>
        <span>公司简介：</span>
        <div>
          <textarea name="" id=""  v-model="intro"></textarea>
        </div>
      </div>
      <div>
        <div>
          <button @click="submit">
            提交申请
          </button>
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
        userPk: "",
        title: "合作伙伴入驻",
        upList:[],
        upList2:[],
        upList3:[],
        upList4:[],
        mxentppk: "",
        sysUserPk: "",
        nm: "",
        legal: "",  //法人
        email: "",
        contNm: "",
        contMob: "",
        contAddr: "",
        busLicUrl: "",  //营业执照
        cmaQualUrl: "",  //CMA
        cnasQualRul: "",  //CNAS
        otherQualRul: "",  //其他
        intro: "",
        catCd: "40000.150/40000.160",
        statCd: "50000.200"
    };
  },
  mounted() {
      let info=JSON.parse(this.until.loGet('userInfo'))
      if(info){
          this.userPk = info.sysUserPk
      }
  },
  methods: {
      submit(){
          this.busLicUrl=this.upList.join(',')
          this.cmaQualUrl=this.upList2.join(',')
          this.cnasQualRul=this.upList3.join(',')
          this.otherQualRul=this.upList4.join(',')
          let param = {
              mxentppk: "",
              sysUserPk: this.userPk,
              nm: this.nm,
              legal: this.legal,
              email: this.email,
              contNm: this.contNm,
              contMob: this.contMob,
              contAddr: this.contAddr,
              busLicUrl: this.busLicUrl,
              cmaQualUrl: this.cmaQualUrl,
              cnasQualRul: this.cnasQualRul,
              otherQualRul: this.otherQualRul,
              intro: this.intro,
              catCd: "40000.150",
              statCd: "50000.200"
          }
          this.until.postData('/prod/mxentp/edit',JSON.stringify(param))
              .then(res=>{
                  if(res.status=='200'){
                      window.location.href = 'partnerentersuc.html'
                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
              })
      },
      upImg(e,type){
          this.until.upImg(e)
              .then(res=>{
                  var str = res;
                  var str1 = str.replace('http://127.0.0.1', this.hostUrl);
                  if(type==1){
                      this.upList.push(str1);
                  }else if(type==2) {
                      this.upList2.push(str1);
                  }else if(type==3) {
                      this.upList3.push(str1);
                  }else {
                      this.upList4.push(str1)
                  }
              },err=>{ this.Toast(err) });
      },
      deletImg(index,type){
          if(type==1){
              this.upList.splice(index,1)
          }else if(type==2) {
              this.upList2.splice(index,1)
          }else if(type==3) {
              this.upList3.splice(index,1)
          }else {
              this.upList4.splice(index,1)
          }
      }
  },
  components: {
    headerTitle
  }
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      overflow: hidden;
    .content {
        flex: 1;
        overflow: auto;
      padding: 0.3rem;
      background-color: #fff;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        position: relative;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
          padding: 0.2rem 0 0.2rem 0.3rem;
          border: 1px solid #dadada;
          > input,
          select,
          textarea {
            border: 0;
            width: 100%;
            height: 100%;
          }
          textarea {
            height: 2rem;
          }
        }
        &:nth-last-of-type(2) {
          > span {
            margin-top: -1.2rem;
          }
        }
        &:nth-last-of-type(1){
          >div{
            width: 100%;
            background-color: #2A8AF2;
            text-align: center;
            border-radius: 5px;
            >button{
              font-size: 16px;
              color: #fff;
              background-color: #2A8AF2;
            }
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
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
                padding: 0;
                .i-item{
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
                        color: #f00;
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
