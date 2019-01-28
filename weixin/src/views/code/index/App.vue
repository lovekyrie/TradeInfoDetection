<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}
.contract-modal{
    height: 100%!important;
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
        <div class="imgList" v-if="imgList.length>0">
            <img :src="item.url" v-for="item in imgList"/>
        </div>
        <div class="pdfList" v-if="pdf.length>0">
            <iframe :src="'/wechat/static/pdf/web/viewer.html?file=' + item.url" height="560" v-for="(item,index) in pdf" :key="index"
                    width="100%">
            </iframe>
            <!--<pdf :url="item" v-for="(item,index) in pdf" :key="index"></pdf>-->
        </div>
    </div>
</template>

<script>
    import pdf from "components/contract.md";

export default {
  data() {
    return {
        no:'',
        imgList:[],
        pdf:[]
    };
  },
  components:{
      pdf
  },

  mounted() {
      this.no = this.until.getQueryString('code')
      this.getInfo()

  },
  methods: {
      getInfo(){
          this.until.getText('/prodx/mxrepo/infoByNo/'+this.no)
              .then(res=>{
                  let data = JSON.parse(res)
                  if(data.status=='200'){
                      let url = JSON.parse(data.data)
                      url.forEach(item=>{
                          if(item.type.toUpperCase()=='PDF'){
                              this.pdf.push(item)
                          }else {
                              this.imgList.push(item)
                          }
                      })
                  }else {
                      this.$hero.msg.show({
                          text:data.message,
                          time:1500
                      })
                  }

              })
      }
  }
};
</script>

