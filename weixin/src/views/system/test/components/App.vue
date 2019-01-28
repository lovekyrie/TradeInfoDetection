<template>
<div id="container">
  <!--顶部-->

</div>
</template>

<script>
    export default {
        data(){
          return{
            loading:false,
            user:'admin',
            password:'1124',
            code:'',
            myCode:'',
            codeRight:false,
          }
        },
      mounted(){
        this.submit()
      },
      methods:{
        submit(){

            this.until.get('/prodx/adduser/test')
              .then(res=>{
                console.log(res)
              },err=>{});

          }
        },
    }
</script>

<style scoped>

</style>
