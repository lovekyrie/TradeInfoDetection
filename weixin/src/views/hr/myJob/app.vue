<template>
  <div id="app">
    <div class="content">
      <div>
        <span>职位意向：</span>
        <div>
          <input type="text" placeholder="" v-model="info.post">
        </div>
      </div>
      <div>
        <span>联系电话：</span>
        <div>
          <input type="number" placeholder="" v-model="info.mob">
        </div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div>
          <input type="text" placeholder="" v-model="info.email">
        </div>
      </div>
      <div>
        <span>个人简介：</span>
        <div>
          <textarea name=""  placeholder="" v-model="info.intro">

          </textarea>
        </div>
      </div>


      <div>
        <span>资质证书：</span>
        <div>
          <textarea name=""  placeholder="" v-model="info.qualCert">

          </textarea>
        </div>
      </div>
      <div>
        <span>培训经历：</span>
        <div>
          <textarea name=""  placeholder="" v-model="info.trainExpes">

          </textarea>
        </div>
      </div>
      <div>
        <span>是否发布：</span>
        <div class="statcd">
          <div v-for="item in statList">
            <input type="radio" v-model="info.statCd" :value="item.cd">
            <span>{{item.nm}}</span>
          </div>
        </div>
      </div>
      <div @click="submit">
        <button>确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            info:{
                post:'',
                mob:'',
                email:'',
                intro:'',
                sysUserPk:'',//用户主键
                qualCert:'',//证书
                trainExpes:'',//培训经历
                statCd:''
            },
            statList:[]
        }
    },
    mounted(){
        let info=JSON.parse(this.until.loGet('userInfo'))
        // console.log(info)
        if(info){
            this.info.sysUserPk = info.sysUserPk
            this.getStatCd()
            this.getInfo()
        }
    },
    methods:{
        //获取状态
        getStatCd(){
            this.until.get('/general/cat/listByPrntCd?prntCd=60000')
                .then(res=>{
                    this.statList = res.data.items
                })
        },
        getInfo(){
          this.until.get('/prod/mxpubtale/listSelf')
              .then(res=>{
                  if(res.status=='200'){
                      let myData = res.data.items[0]
                      if(myData.mxPubTalePk){
                          this.info.mxPubTalePk = myData.mxPubTalePk
                      }
                      this.info.post = myData.post
                      this.info.mob = myData.mob
                      this.info.email = myData.email
                      this.info.intro = myData.intro!=''?myData.intro.replace(/\n/gm,"<br/>"):''
                      this.info.qualCert = myData.qualCert!=''? myData.qualCert.replace(/\n/gm,"<br/>"):''
                      console.log(myData)

                      this.info.trainExpes = myData.trainExpes!='' ? myData.trainExpes.replace(/\n/gm,"<br/>"):''
                      console.log(myData)
                      this.info.statCd = myData.statCd ? myData.statCd:this.statList[0].cd
                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          times:1500
                      });
                  }
                  // console.log(this.info)
              })
        },
        Verification(){
            if(this.info.catCd==''){
                return false
            }
            if(this.info.nm==''){
                return false
            }
            if(this.info.rcdTm==''){
                return false
            }
            if(this.info.rmks==''){
                return false
            }
            if(this.info.contNm==''){
                return false
            }
            if(this.info.contMob==''){
                return false
            }
            if(this.info.email==''){
                return false
            }
            if(this.info.contOther==''){
                return false
            }
            return true
        },
        submit(){
            if(this.Verification()){
                this.$dialog.loading.open()
                this.until.postData('/prod/mxpubtale/edit',JSON.stringify(this.info))
                    .then(res=>{
                        this.$dialog.loading.close()
                        if(res.status=='200'){
                            this.$hero.msg.show({
                                text:res.message,
                                times:1500
                            });
                            setTimeout(()=>{
                                // window.location.href = 'humanresource.html'
                            },1500)
                        }else {
                            this.$hero.msg.show({
                                text:res.message,
                                times:1500
                            });
                        }
                    })
            }else {
                this.$hero.msg.show({
                    text:'请补全信息',
                    times:1500
                });
            }

        }
    }
}
</script>

<style lang="less">
  html,body{
    height: 100%;
    background-color: #F7F7F7;
    #app{
      height: 100%;
      .content{
        padding: .4rem .3rem;
        background-color: #fff;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        >div{
          width: 100%;
          margin-bottom: .4rem;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          .statcd{
            div{
              float: left;
              width: 40%;
            }
          }
          &:nth-of-type(2){
            >div{
              display: -webkit-flex;
              display: flex;
              flex-wrap: nowrap;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;

            }
          }

          &:nth-last-of-type(1){
            border-radius: 5px;
            margin-bottom: 0;
            padding: .2rem 0;
            justify-content: space-around;
            background-color: #2A8AF2;
            >button{
              font-size: 16px;
              color: #fff;
              background-color: #2A8AF2;
            }
          }
          >span{
            padding-right: 10px;
          }
          >div{
            flex: 1;
            >input,
            textarea{
              -webkit-appearance: none;
              padding: .2rem 0 .2rem .3rem;
              width: 100%;
              height: 100%;
              border:1px solid #F3F3F3;
            }
            >textarea{
              height: 2.4rem;
            }
          }
        }
        
      }
    }
  }
</style>
