<template>
  <div class="footer-btn">
    {{btnObj.btnName}}
  </div>  
</template>

<script>
export default {
  props:['btnObj'],
  data(){
    return{

    }
  },
  methods:{

  }
};
</script>

<style lang="less">
 .footer-btn{
    padding: .2rem 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 16px;
    background-color: #2A8AF2;
    color: #fff;
    text-align: center;
  }
</style>
