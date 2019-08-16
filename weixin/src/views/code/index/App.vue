<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}
b{
    text-align: center;
    display: block;
    margin: 0.3rem;
}
.contract-modal{
    height: 100%!important;
}
.imgList{
    background: #FFFFFF;
    margin-bottom: 0.2rem;
    padding-bottom: 0.2rem;
    text-align: center;
    p{
        padding: 0.2rem;
        text-align: left;
    }
    img{
        width: auto;
        max-width: 100%;
    }
}
.pdfList{

}

/*canvas{*/
    /*width: 20%!important;*/
/*}*/

</style>

<template>
    <div id="container">
        <b>{{name}}</b>
        <div class="imgList" v-if="urlList.length>0" v-for="item in urlList">
            <p>报告类别：{{item.catCd}}</p>
            <iframe :src="'/wechat/static/pdf/web/viewer.html?file=' + item.url" height="560" v-if="item.type.toUpperCase()=='PDF'"
                    width="100%">
            </iframe>
            <img :src="item.url" v-else />
        </div>
    </div>
</template>

<script>
    import pdf from "components/contract.md";
export default {
  data() {
    return {
        name:'',//名称
        no:'',
        imgList:[],
        pdfList:[],
        urlList:[],
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
                      this.urlList = JSON.parse(data.data)
                      console.log(this.urlList)

                      this.name = data.nm
                      // url.forEach(item=>{
                      //     if(item.type.toUpperCase()=='PDF'){
                      //         this.pdfList.push(item)
                      //     }else {
                      //         this.imgList.push(item)
                      //     }
                      // })
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

