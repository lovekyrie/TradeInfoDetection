<template>
  <div id="app">
    <report :edit="edit" :reportList="reportList" @updateReport="delReport"></report>
    <div class="footer">
      <foot-button :btnObj="btnObj"></foot-button>
    </div>
  </div>
</template>

<script>
 import report from 'components/report'
 import footButton from 'components/footButton'
 import edit from './images/编辑.png'
 
export default {
 data(){
   return {
     edit,
     btnObj:{
       btnName:'报告上传',
       scr:'',
     },
     reportList:[
       {
        numberID:'1234567890987654',
        name:'福州福州服饰有限公司防晒衣检测报告',
        orgName:'宁波贸信检测',
        productName:'防晒衣',
        address:'浙江 - 宁波',
        release:'2018-06-06',
       },
       {
        numberID:'1234567890987654',
        name:'福州福州服饰有限公司防晒衣检测报告',
        orgName:'宁波贸信检测',
        productName:'防晒衣',
        address:'浙江 - 海曙',
        release:'2018-06-06',
       },
     ]
   }
 }, 
 methods:{
   delReport(val){

     this.reportList=this.reportList.filter(item=>item!==val)
   }
 },
 components:{
   report,
   footButton,
 }
}
</script>

<style lang="less">
  html,body{
    height: 100%;
    background-color: #F7F7F7;

    #app{
      height: 100%;
    }
  }
</style>
