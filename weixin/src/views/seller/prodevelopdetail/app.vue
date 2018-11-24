<template>
  <div id="app">
    <div class="header">
      <div class="job-hunter">
          <div>
            <div>{{info.talePost}}</div>
            <div>{{info.persNm}}</div>
          </div>
          <div>
            <span>联系电话：{{info.taleMob}}</span>
          </div>
          <div>
            <span>邮箱地址：{{info.taleEmail}}</span>
          </div>
      </div>
    </div>
    <div class="content">
      <div class="personal">
        <div>
          <span></span><span>个人简介</span>
        </div>
        <div v-html="info.taleIntro">
        </div>
      </div>
      <div class="hobby">
        <div>
          <span></span><span>技能特长</span>
        </div>
        <div v-html="info.taleSpecSkill">
        </div>
      </div>
      <div class="certificate">
        <div>
          <span></span><span>资历证书</span>
        </div>
        <div v-html="info.taleQualCert">
        </div>
      </div>
      <div class="train">
        <div>
          <span></span><span>培训经历</span>
        </div>
        <div v-html="info.taleTrainExpes">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

        info:'',
        pk:'',
      job:'无机分析工程师工作',
      hunterName:'张三',
      phoneNumber:'13599990000',
      email:'948398302@qq.com',
      personalList:[
        '1、操作过ICP，GC-MS等分析仪器；',
        '2、英语CET4及以上；',
        '3、能熟练的操作办公软件。'
      ],
      certificateList:[
        '2018年获得特级无机分析工程师证书',
        '2016年获得无机分析工程师证书'
      ],
      trainList:[
        '2015年于宁波检测机构培训并获得结业证书'
      ]
    }
  },
    mounted(){
        this.userPk = this.until.getQueryString('pk')
        this.getInfo()
    },
  methods:{
      getInfo(){
          this.until.get('/prodx/mxpubtale/info/'+this.userPk)
              .then(res=>{
                  this.info = res.data
              })
      }
  },
  components:{

  }
}
</script>

<style lang='less'>
  html,body{
    height: 100%;
    background-color: #F7F7F7;
    #app{
      height: 100%;
      .job-hunter{
        padding: .3rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #fff;
        border-bottom: 1px solid #E7E7E7;
        >div{
          width: 100%;
          &:nth-of-type(1){
            font-size: 16px;
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            >div:nth-of-type(1){
              width: 70%;
            }
            >div:nth-of-type(2){
              width: 30%;
            }
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .2rem;
          }
        }
      }
      .content{
        >div{
          padding: .3rem;
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          border-bottom: 1px solid #E7E7E7;
          background-color: #fff;
          >div{
            width: 100%;
            color: #BDBDBD;
            &:nth-of-type(1){
              font-size: 16px;
              color: #000;
              display:-webkit-flex;
              display: flex;
              flex-wrap: nowrap;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              >span:nth-of-type(1){
                width: 2%;
                height: .3rem;
                background-color: #54A6FF;
              }
              >span:nth-last-of-type(1){
                width: 95%;
              }
            }
            &:not(:nth-last-of-type(1)){
              margin-bottom: .2rem;
            }
          }
        }
      }
    }
  }
</style>
