<style lang="less">
html,
body {
  height: 100%;
  background-color: #FFFFFF;
}
.contract-modal{
    height: 100%!important;
}
.content{
    font-size: 0.5rem;
    padding-top: 1rem;
}
.van-steps{
    padding:0 50px!important;
    .van-step__title{
        padding-left: 20px;
    }
    .van-step--process{
        div{
            color: #02988a!important;
        }

    }
    .van-step--vertical{
        padding: 20px 20px!important;
        &:last-child{
            .van-step__line{
                height: 0!important;
            }
        }
    }
    .van-step__circle-container{

        i{
            top: 20px !important;
           width: 20px;
            height: 20px;
        }
        .van-icon-checked{
            font-size: 22px!important;
            color: #02988a!important;
        }
        .van-step__circle{
            left: -20px;
        }

    }
    .van-step__line{
        left: -10px!important;
        top:40px;
        /*height: 100%!important;*/
    }
}
.imgList{
    img{
        width: auto;
        max-width: 100%;
    }
}
/*canvas{*/
    /*width: 20%!important;*/
/*}*/
#container {

}
</style>

<template>
    <div id="container">
        <div class="content" v-if="myData">
            <van-steps direction="vertical" :active="active" active-color="#f44">
                <van-step v-for="item in typeList" :key="item.cd">
                    <p>{{item.nm}}</p>
                </van-step>

            </van-steps>
        </div>
        <div class="imgList" v-if="imgList.length>0">
            <img :src="item" v-for="item in imgList"/>
        </div>
        <div class="pdfList" v-if="pdfList.length>0">
            <iframe :src="'/wechat/static/pdf/web/viewer.html?file=' + item" height="560" v-for="(item,index) in pdfList" :key="index"
                    width="100%">
            </iframe>
            <!--<pdf :url="item" v-for="(item,index) in pdfList" :key="index"></pdf>-->
        </div>
    </div>
</template>

<script>
    import pdf from "components/contract.md";

export default {
  data() {
    return {
        active:2,
        no:'',
        imgList:[],
        pdfList:[],
        myData:'',
        typeList:[]
    };
  },
  components:{
      pdf
  },

  mounted() {
      this.no = this.until.getQueryString('code')
      this.getInfo()
      this.getOrdType()
  },
  methods: {
      getOrdType(){
          this.until.get('/general/cat/listByPrntCd?prntCd=80020')
              .then(res=>{
                  if(res.status=='200'){
                      this.typeList.push(...res.data.items)
                      this.typeList.forEach((item,index)=>{
                          if(item.nm==this.myData){
                              this.active = index
                          }
                      })
                  }
              })
      },
      getInfo(){
          this.until.getText('/prodx/mxordete/infoByNo/'+this.no)
              .then(res=>{
                  let myInfo = JSON.parse(res)
                   if(myInfo.status=='2001'){
                       let url = myInfo.data.split(',')
                       url.forEach(item=>{
                           if(item.toUpperCase().indexOf('PDF')>-1){
                               this.pdfList.push(item)
                           }else {
                               this.imgList.push(item)
                           }
                       })
                   }else if(myInfo.status==2002){
                       this.myData = myInfo.data
                       this.typeList.forEach((item,index)=>{
                           if(item.nm==this.myData){
                               this.active = index
                           }
                       })
                   }else {
                       this.$hero.msg.show({
                           text:myInfo.message,
                           time:1500
                       })
                   }

              })
      }
  }
};
</script>

