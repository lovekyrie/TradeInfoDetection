<template>
  <div id="app">
    <div class="content">
      <report :edit="edit" :reportList="reportList"></report>
    </div>
  </div>
</template>

<script>
import report from 'components/report'

export default {
  data(){
    return {
      edit:'',
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

  },
  components:{
    report,
  }
}
</script>

<style lang='less'>
  html,body{
    height: 100%;
    background-color: #f7f7f7;
    #app{
      height: 100%;
    }
  }
</style>
