<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#container {
  height: 100%;
  display: flex;
  display: -webkit-flex;
  overflow: hidden;
  flex-direction: column;
}

.detailinfo {
  flex: 1;
  overflow: auto;
  background-color: #fff;
  .detail-wrap {
    padding: .25rem;
    h3 {
      padding: 0.1rem 0;
      font-size: 16px;
      font-weight: 400;
    }
    p {
      margin: 0.15rem 0;
      font-size: 14px;
      color: #666;
      span {
        i {
          font-style: normal;
          padding-left: 0.01rem;
          padding-right: 0.1rem;
        }
      }
    }
  }

}
footer{
  padding: .2rem 0;
  width: 100%;
  font-size: 16px;
  background-color: #2A8AF2;
  color: #fff;
  text-align: center;
}
.imginfo {
  margin: 0.6rem 0 0.6rem;
}
</style>

<template>
    <div id="container">
        <div class="detailinfo">
          <div class="detail-wrap">
            <h3>
              {{detail.nm}}
            </h3>
            <p>
              <span>上传者
                <i>:</i>
              </span>{{detail.crtBy}}
            </p>
            <p>
              <span>序列号
                <i>:</i>    
              </span>{{detail.no}}
            </p>
            <p>
              <span>检测机构
                <i>:</i>    
              </span>{{detail.deteOrg}}
            </p>
            <p>
              <span>供应商名称
                <i>:</i>    
              </span>{{detail.supply}}
            </p>
            <p>
              <span>质检产品名称
                <i>:</i>
              </span>{{detail.prodNm}}
            </p>
            <p>
              <span>质检产品地域
                <i>:</i>    
              </span>{{detail.prodProvNm}} {{detail.prodCityNm}}
            </p>
            <p>
              <span>检测项目
                <i>:</i>
              </span>{{detail.description}}
            </p>
            </div>
        </div>
      <footer @click="collect">
        {{state | ifState}}
      </footer>
      <!--<pdf></pdf>-->
        <!-- <div class="imginfo">
            <img src="" alt="1">
        </div> -->
    </div>
</template>

<script>
import tempApp from "components/tempApp";
// import pdf from "components/pdf";
export default {
  data() {
    return {
      obj: {
        src: "./orderQueryDetail.html?"
      },
        pk:'',
        state:'',
        userPk:'',
      detail: {
        title: "福州福州服饰有限公司防晒衣检测报告",
        uploader: "张三",
        numberid: "1234567890098765",
        organization: "宁波贸信检测",
        vendorname: "宁波太平鸟服饰",
        productname: "防晒衣",
        address: "浙江 - 宁波 - 海曙",
        description: `最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，
                    最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，最新最权威的防晒衣质检报告，
                    最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告。`
      }
    };
  },
  mounted() {
    this.pk = this.until.getQueryString('pk')
      this.userPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
    this.getInfo();
      this.ifCollect()
  },
  methods: {
      getInfo(){
          this.until.get('/prodx/mxrepo/info/'+this.pk)
              .then(res=>{
                  this.detail = res.data
              })
      },
      //判断收藏状态
      ifCollect(){
          this.until.get('/prodx/mxusercoll/collnum?subPk='+this.pk+'&sysUserPk='+this.userPk)
              .then(res=>{
                  this.state = res
              })

      },
      //取消或加入收藏
      collect(){
          if(this.state){
              this.until.get('/prodx/mxusercoll/canselcoll?subPk='+this.pk+'&sysUserPk='+this.userPk)
                  .then(res=>{
                      this.state = res
                  })
          }else {
              this.until.post('/prod/mxusercoll/edit?subPk='+this.pk+'&sysUserPk='+this.userPk)
                  .then(res=>{
                      this.state = res
                  })
          }
      }
  },
    filters:{
        ifState:function (val) {
            if(val){
                return '已收藏'
            }else {
                return '未收藏'
            }
        }
    },
  components: {
    tempApp,
      // pdf
  }
};
</script>

