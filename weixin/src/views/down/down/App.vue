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
                      let url = data.data.split(',')
                      url.forEach(item=>{
                          if(item.indexOf('.pdf')>-1 || item.indexOf('.PDF')>-1){
                              this.pdf.push(item)
                          }else {
                              this.imgList.push(item)
                          }
                      })
                  }else {
                      this.$hero.msg.show({
                          text:res.message,
                          time:1500
                      })
                  }

              })
      }
  }
};
</script>

