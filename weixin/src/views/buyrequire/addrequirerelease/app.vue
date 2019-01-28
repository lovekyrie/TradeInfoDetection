<template>
  <div id="app">
    <div class="content">
      <div>
        <span>需求类型：</span>
        <select v-model="info.catCd">
          <option :value="item.cd" v-for="item in catList">{{item.nm}}</option>
        </select>
        <van-icon name="arrow-down" />
      </div>
      <div>
        <span>需求名称：</span>
        <input type="text" placeholder="请输入需求名称" v-model="info.nm">
      </div>
      <!--<div>-->
        <!--<span>发布时间：</span>-->
        <!--<input type="text" readonly :value="currentTime">-->
      <!--</div>-->
      <div>
        <span>有效日期：</span>
          <input @click="chooseDate=true" v-model="info.rcdTm" type="text" readonly="true "/>
          <van-popup v-model="chooseDate" position="bottom" :overlay="false">
            <van-datetime-picker
                            v-model="rcdTm2"
                            type="date"
                            :min-date="minDate"
                            @cancel="cancel"
                            @confirm="confirmDate"
                    />
          </van-popup>

        <van-icon name="arrow-down" />
      </div>
      <div>
        <span>需求描述：</span>
        <textarea name="" id="" placeholder="请输入需求描述"  v-model="info.rmks"></textarea>
      </div>
      <div>
        <span>联系人：</span>
        <input type="text" placeholder="请输入联系人姓名" v-model="info.contNm">
      </div>
      <div>
        <span>联系电话：</span>
        <input type="text" placeholder="请输入联系电话"  v-model="info.contMob">
      </div>
      <div>
        <span>邮箱地址：</span>
        <input type="text" placeholder="请输入邮箱地址" v-model="info.email">
      </div>
      <div>
        <span>联系方式：</span>
        <input type="text" placeholder="请输入其他联系方式" v-model="info.contOther">
      </div>
      <div @click="submit">
        <button>
          确认
        </button>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data(){
    return {
        type:'',  // 1买家 2卖家
        chooseDate:false,
        rcdTm:'',
        rcdTm2:'',
      currentTime:'',
      validTime:'',
        minDate:new Date(),
        info:{
            sysUserPk:'',
            nm:'',
            contNm:'',//联系人
            contOther:'',//其他联系方式
            contMob:'',//联系电话
            email:'',//邮箱
            rcdTm:'',//有效时间
            rmks:'',//描述
            catCd:'',
            statCd:'', //
        },
        catList:[]
    }
  },
  mounted(){
      this.type = this.until.getQueryString('type')
      this.info.statCd = this.type
      this.info.sysUserPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
      this.rcdTm = new Date()
      this.getCatList()
  },
  methods:{
      Verification(){
          if(this.info.catCd==''){
              return false
          }
          if(this.info.nm==''){
              return false
          }
          if(this.info.rcdTm==''){
              return false
          }
          if(this.info.rmks==''){
              return false
          }
          if(this.info.contNm==''){
              return false
          }
          if(this.info.contMob==''){
              return false
          }
          if(this.info.email==''){
              return false
          }
          if(this.info.contOther==''){
              return false
          }
          return true
      },
      submit(){
          if(this.Verification()){
              this.$dialog.loading.open()
              this.info.rcdTm = this.info.rcdTm? this.info.rcdTm+' 00:00:00':''
              this.until.postData('/prod/mxpubres/edit',JSON.stringify(this.info))
                  .then(res=>{
                      this.$dialog.loading.close()
                      if(res.status=='200'){
                          this.$hero.msg.show({
                              text:'发布成功！',
                              times:1500
                          });
                          setTimeout(()=>{
                              window.history.go(-1)
                              // window.location.href = '../buyrequire/requirerelease.html'
                          },1500)
                      }
                  })
          }else {
              this.$hero.msg.show({
                  text:'请补全信息！',
                  times:1500
              });
          }

      },
      getCatList(){
        this.until.get('/general/cat/listByPrntCd?prntCd=60020')
            .then(res=>{
                if(res.status=='200'){
                    this.catList = res.data.items
                    this.info.catCd = this.catList[0].cd
                }
            })
      },
      cancel(){
          this.rcdTm2 = this.rcdTm
          this.chooseDate = false
      },
      confirmDate(){
          this.rcdTm = this.rcdTm2
          this.chooseDate = false
      }
  },
    watch:{
        rcdTm:function (val) {
            let myDate = this.until.formatDate(val)
            this.info.rcdTm = myDate.year+'-'+myDate.month+'-'+myDate.day
        }
    }
};
</script>

<style lang="less">
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
        > input,
        select,
        textarea {
          width: 70%;
          padding: 0.2rem 0 0.2rem 0.3rem;
          border: 1px solid #dadada;
        }
        textarea {
          height: 2rem;
          -webkit-appearance: none;
        }
        > i {
          color: #666666;
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
        }
        &:nth-of-type(5){
          >span{
            /*margin-top: -1.2rem;*/
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
        }
        &:nth-last-of-type(1){
          margin: .5rem 0;
          padding: .2rem 0;
          background-color: #2A8AF2;
          font-size: 16px;
          border-radius: 5px;
          text-align: center;
          justify-content: space-around;
          >button{
            color: #fff;
            background-color: #2A8AF2;
          }
        }
      }
    }
  }
}
</style>
