<template>
  <div id="app">
    <div class="content">
      <div>
        <span>职位名称：</span>
        <div>
          <input type="text" placeholder="无机分析工程师" v-model="info.nm">
        </div>
      </div>
      <div>
        <span>薪资：</span>
        <div>
          <input type="text" placeholder="4000" v-model="info.frSala">
          <span>~</span>
          <input type="text" placeholder="6000" v-model="info.toSala">
          <span>元／月</span>
        </div>
      </div>
      <div>
        <span>联系电话：</span>
        <div>
          <input type="number" placeholder="13599990000" v-model="info.mob">
        </div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div>
          <input type="text" placeholder="请输入邮箱地址" v-model="info.email">
        </div>
      </div>
      <div>
        <span>职位描述：</span>
        <div>
          <textarea name="" id="" placeholder="1、操作过ICP，GC-MS等分析仪器；2、英语CET4及以上；3、能熟练的操作办公软件。" v-model="info.intro">

          </textarea>
        </div>
      </div>
      <div @click="submit">
        <button>发布</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            info:{
                nm:'',
                frSala:'',
                toSala:'',
                mob:'',
                email:'',
                intro:'',
                sysUserPk:'',//用户主键
                entpPk:'',//企业主键
                entpNm:'',//企业名称
            }
        }
    },
    mounted(){
        let info=JSON.parse(this.until.loGet('userInfo'))
        console.log(info)
        if(info){
            this.info.sysUserPk = info.sysUserPk
            this.info.entpPk = info.entpPk
            this.info.entpNm = info.entpNm
        }
        console.log(this.info)
    },
    methods:{
        submit(){
            this.until.postData('/prod/mxpubrecr/edit',JSON.stringify(this.info))
                .then(res=>{
                    if(res.status=='200'){
                        this.$hero.msg.show({
                            text:res.message,
                            times:1500
                        });
                        setTimeout(()=>{
                            window.location.href = 'humanresource.html'
                        },1500)
                    }else {
                        this.$hero.msg.show({
                            text:res.message,
                            times:1500
                        });
                    }
                })
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
          &:nth-of-type(2){
            >div{
              display: -webkit-flex;
              display: flex;
              flex-wrap: nowrap;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              >input{
                width: 30%;
              }
            }
          }
          &:nth-last-of-type(2){
            >span{
              margin-top: -1.5rem;
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
            font-size: 14px;
            width: 30%;
          }
          >div{
            width: 70%;
            >input,
            textarea{
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
