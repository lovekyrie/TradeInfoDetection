<style lang="less">
html,
body {
  height: 100%;
  background-color: #f6f6f6;
}
.success{
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
    z-index: 99;
    position: fixed;
    div{
        background: #ffffff;
        width: 3rem;
        padding: .5rem 0;
        text-align: center;
        border-radius: 3px;
        img{
            width: .5rem;
        }
    }
}
.header {
  background-color: #fff;
  padding: 0.45rem 0.3rem 0.3rem;
  margin-bottom: 0.2rem;
  .upload-file {
    border: 1px solid #e6e6e6;
    > div {
      width: 2.5rem;
      margin: 0.6rem auto 0.2rem;
      height: 1rem;
      background-color: #2a8af2;
      border-radius: 5px;
      text-align: center;
      line-height: 1rem;
      color: #fff;
      font-size: 16px;
        position: relative;
      > input {
          position: absolute;

        opacity: 0;
          width: 2.5rem;
          height: 1rem;
          left: 0;
      }
    }
    > p {
      font-size: 14px;
      color: #101010;
      text-align: center;
      margin: 0.25rem 0;
      &:nth-of-type(2) {
        font-size: 12px;
        color: #777;
      }
    }
  }
}

.content {
  background-color: #fff;
  padding: 0.25rem 0.3rem;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  h3 {
    margin-bottom: 0.2rem;
    font-size: 16px;
    font-weight: 400;
  }
  .opt-one {
    margin-bottom: 0.2rem;
    width: 100%;
    position: relative;
    font-size: 14px;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
      .address{
          width: 70%;
          padding: 0.1rem 0;
      }
    &:nth-last-of-type(1){
      border: 1px solid #7EB8F7;
      border-radius: 5px;
      background-color: #2A8AF2;
    }
    .el-select {
      float: right;
      margin-right: -20px;
      margin-top: -8px;
    }
    span {
      width: 30%;
      display: inline-block;
      position: relative;
      i {
        position: absolute;
        left: -0.25rem;
        visibility: hidden;
      }
    }
    input {
      width: 70%;
      padding: 0.2rem 0;
      flex: 1;
      border: 1px solid #e4e4e4;
      text-indent: 0.2rem;
      vertical-align: middle;
    }
    .c-textarea {
      flex: 1;
      background-color: #fff;
      padding: 0 0.35rem;
      border: 1px solid #d9d9d9;
      margin-bottom: 0.2rem;
      textarea {
        font-size: 12px;
        color: #999;
      }
      .textarea-counter {
        font-size: 12px;
      }
    }
    button{
      padding: .2rem 0;
      font-size: 16px;
      background-color: #2A8AF2;
      color: #fff;
    }
  }
}

.opt-radio {
    padding: 0.1rem 0;
    div{
        float: left;
        width: 35%;
        input{
            width: auto!important;
        }
    }
  input {
    flex: 2;
  }
}
</style>

<template>
    <div id="container">
        <div class="success" v-if="show">
            <div>
                <img src="../../../components/img/success.png"/><br/>
                上传成功！
            </div>
        </div>
      <div class="header">
        <div class="upload-file">
          <div>
            <span>{{name}}</span>
            <input ref="upload" type="file" name="file" id="" @change="upImg($event)">
          </div>
          <p>每成功上传一份文档，可获取金币奖励</p>
          <p>注意事项：您可以上传≤10MB的PDF报告。</p>
        </div>
      </div>
        <div class="content">
            <h3>完善信息</h3>          
             <div class="opt-input opt-one border-c">
                <span><i>*</i>报告标题:</span>
                <input type="text"  class="c-ip" v-model="info.nm">
            </div>
            <!--<div class="opt-input opt-one">-->
                <!--<span><i>*</i>序列号:</span>-->
                <!--<input type="text"  class="c-ip" v-model="info.no" disabled>-->
            <!--</div>-->
            <div class="opt-input opt-one">
                <span><i>*</i>检测机构:</span>
                <input type="text"  class="c-ip" v-model="info.deteOrg">
            </div>
            <div class="opt-input opt-one">
                <span>供应商名称:</span>
                <input type="text"  class="c-ip" v-model="info.supply">
            </div>
            <div class="opt-input opt-one">
                <span><i>*</i>质检产品名称:</span>
                <input type="text"  class="c-ip" v-model="info.prodNm">
            </div>
            <div class="opt-input opt-one">
                <span><i>*</i>质检产品地域:</span>
                <addr @setAddr="getAddr"></addr>
            </div>
            <div class="opt-radio opt-one">
                <span><i>*</i>报告性质:</span>
                <div v-for="item in statList">
                    <input type="radio" v-model="info.statCd" :value="item.cd">
                    <span>{{item.nm}}</span>
                </div>

            </div>
            <div class="opt-one">
                <span><i>*</i>报告简介:</span>
                <div class="c-textarea">
                    <yd-textarea slot="right" maxlength="200" v-model="info.intro"></yd-textarea>
                </div>
            </div>
            <div class="opt-one">
                <span><i>*</i>检测项目:</span>
                <div class="c-textarea">
                    <yd-textarea slot="right" maxlength="200" v-model="info.rmks"></yd-textarea>
                </div>
            </div>
            <div class="opt-one" @click="submit">
                <button>确认上传</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import tempApp from "components/tempApp";
import addr from "components/addr";
export default {
  data() {
    return {
      show:false,
        info:{
            statCd:'',
            sysUserPk:'',
            nm:'',
            no:'',
            deteOrg:'',
            pdfUrl:'',
            supply:'',
            prodNm:'',
            prodProvCd:'',
            prodCityCd:'',
            intro:'',
            rmks:'',
        },
        statList:[],

        name:'上传文件',
    };
  },
  mounted() {
        this.getStatCd()
  },
  methods: {
      getAddr:function(val){
          let cd = JSON.parse(val)
          this.info.prodProvCd = cd.cd1
          this.info.prodCityCd = cd.cd2
      },
      //获取状态
      getStatCd(){
          this.until.get('/general/cat/listByPrntCd?prntCd=60000')
              .then(res=>{
                    this.statList = res.data.items
                    this.info.statCd = this.statList[0].cd
              })
      },
    submit(){
        this.until.postData('/prod/mxrepo/edit',JSON.stringify(this.info))
            .then(res=>{
                if(res.status='200'){
                    this.show = true
                    setTimeout(()=>{
                        this.show = false
                        window.location.href = '../membercenter/myreport.html'
                    },1500)
                }else {
                    this.$hero.msg.show({
                        text:res.message,
                        times:1500
                    });
                }
            })
    },
      upImg(e){
          let blob = e.target.files[0];

          this.until.upPDF(e)
              .then(res=>{
                  var str = res;
                  this.name = blob.name
                  var str1 = str.replace('http://127.0.0.1', this.hostUrl);
                    this.info.pdfUrl = str1
              },err=>{
                  this.$hero.msg.show({
                      text:err,
                      times:1500
                  });
              });
      },
  },
  components: {
    tempApp,
      addr
  }
};
</script>

