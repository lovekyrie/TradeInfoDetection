<template>
  <div id="app">
    <div class="content">
      <div>
        <span>检测服务标题：</span>
        <div><input type="text" v-model="info.nm"></div>
      </div>
      <div class="file-type">
        <span>服务图片：</span>
        <div>
          <div class="i-item" v-if="imgList.length>0" v-for="(up,i) in imgList">
            <svg class="icon" aria-hidden="true" @click="deletImg(i)">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
            <img :src="up">
          </div>
          <div class="upload">
            <input type="file" @change="upImg($event)">
          </div>
        </div>
      </div>
      <div>
        <span>服务内容：</span>
        <div>
          <textarea name=""  v-model="info.intro">
          </textarea>
        </div>
      </div>
      <div>
        <span>检测服务分类：</span>
        <div>
          <select v-model="info.catCd">
            <option :value="item.cd" v-for="(item,index) in catCdList" :key="index">{{item.nm}}</option>
          </select>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-31xiala"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>二级类别：</span>
        <div>
          <select v-model="info.twoCd">
            <option :value="item.cd" v-for="(item,index) in twoCdList" :key="index">{{item.nm}}</option>
          </select>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-31xiala"></use>
          </svg>
        </div>
      </div>
      <div>
        <div @click="submit">
          <button>
            提交审核
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        info:{
            mxpubthrserpk:'',//主键
            sysUserPk:'',//用户pk
            nm:'',//检测服务标题
            imgUrl:'',//服务图片
            statCd:'50000.200',//是否通过审核  50000.200
            intro:'',// 简介
            catCd:'',//检测服务分类
            twoCd:'',
        },
        catCdList:[],
        twoCdList:[],
        imgList:[]
    }
  },
  components:{

  },
    created(){

        if(this.until.getQueryString('info')){
            let info = JSON.parse(this.until.getQueryString('info'))
            this.info.mxpubthrserpk = info.mxpubthrserpk
            this.info.nm = info.nm
            this.info.imgUrl = info.imgUrl
            this.info.statCd = info.statCd
            this.info.intro = info.intro
            this.info.catCd = info.catCd
            this.info.twoCd = info.twoCd
            this.imgList = this.info.imgUrl.split(',')
        }
    },
    mounted(){
      this.info.sysUserPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
        this.getCatCd()
    },
  methods:{
      upImg(e){
          this.$dialog.loading.open()
          this.until.upImg(e)
              .then(res=>{
                  this.$dialog.loading.close()
                  var str = res;
                  // var str1 = str.replace('http://127.0.0.1', this.hostUrl);
                  this.imgList.push(str);

              },err=>{
                  this.$dialog.loading.close()
                  this.Toast(err)
              });
      },
      deletImg(index){
              this.imgList.splice(index,1)

      },
      getCatCd(){
        this.until.get('/general/cat/listByPrntCd?prntCd=70000')
            .then(res=>{
                this.catCdList = res.data.items
            })
      },
      getCatCdTwo(){
          this.until.get('/general/cat/listByPrntCd?prntCd='+this.info.catCd)
              .then(res=>{
                  this.twoCdList = res.data.items
              })
      },

      Verification(){
          if(this.info.nm==''){
              return false
          }
          if(this.info.intro==''){
              return false
          }
          if(this.info.catCd==''){
              return false
          }
          return true
      },
      submit(){
          this.$dialog.loading.open()
          if(this.Verification()){
              this.info.imgUrl = this.imgList.join(',')
              this.until.postData('/prod/mxpubthrser/edit',JSON.stringify(this.info))
                  .then(res=>{
                      this.$dialog.loading.close()
                      if(res.status=='200'){
                          this.$hero.msg.show({
                              text:'提交成功！',
                              time:1500
                          })
                          setTimeout(()=>{
                              window.location.href = 'detectionorglist.html'
                          },1500)
                      }
                  })
          }else {
              this.$hero.msg.show({
                  text:'请补全信息！',
                  times:1500
              });
          }

      }
  },
    watch:{
        "info.catCd":function () {
            this.getCatCdTwo()
        }
    }
}
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .content {
      padding: 0.3rem;
      background-color: #fff;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        position: relative;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
          padding: 0.2rem 0 0.2rem 0.3rem;
          border: 1px solid #dadada;

          > input,
          select,
          textarea {
            border: 0;
            width: 100%;
            height: 100%;
          }
          textarea {
            height: 2rem;
          }
          > svg {
            position: absolute;
            top: 50%;
            right: 5%;
            transform: translateY(-50%);
          }
        }
        &:nth-last-of-type(1){
          margin:.4rem 0;
          >div{
            width: 100%;
            background-color: #2A8AF2;
            text-align: center;
            border-radius: 5px;
            >button{
              font-size: 16px;
              color: #fff;
              background-color: #2A8AF2;
            }
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
        }
      }
      > .file-type {
        > span {
          width: 30%;
        }
        > div {
          padding: 0;
          width: 70%;
          border: 0;
          overflow: hidden;
          .i-item{
            float: left;
            margin-bottom: 5px;
            margin-right: 5px;
            width: 2rem;
            height: 2rem;
            border: 1px solid #f4f4f4;
            border-radius: 3px;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            img{
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
            }
            svg{
              position: absolute;
              top: 5px;
              right: 5px;
              color: #f00;
            }
          }
          .upload{
            float: left;
            background: url("./images/up.png") 50% 50% no-repeat;
            background-size: 0.6rem 0.6rem;
            width: 2rem;
            height: 2rem;
            border: 1px solid #f4f4f4;
            border-radius: 3px;
            input {
              width: 100%;
              height: 100%;
              opacity: 0;
            }
          }
          > input {
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>
