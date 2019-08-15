<template>
       <!--中间右侧内容栏-->
        <div class="center">

          <!--右边上半部分-->
          <div class="rightTop">
            <div class="right_a">
              <!-- 头像上传组件 -->
                <my-upload field="img" :width="300" :height="300"  v-model="show"  url="/general/file/upload"
                      @crop-upload-success="cropUploadSuccess" img-format="png">
                </my-upload>
              <img :src="myInfo.imgUrl" @click="toggleShow" :width="136" :height="136">
            </div>
            <div class="right_b">
              <p>账号：{{myInfo.usNm}}</p>
              <p>手机号：{{myInfo.mob}}</p>
              <p>邮箱：{{myInfo.email}}&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="index.html#/accountManager" style="color: rgb(90,127,219);">账号管理 ></a>
              </p>

            </div>

            <div class="right_c">
              <vue-qr
                :logoSrc="logo"
                :text="url"
                :size="size"
                :margin="0"
                ></vue-qr>
              <p style="color: rgb(151,151,151)">我的推荐码</p>

            </div>
          </div>

          <!--右边下半部分-->
          <div class="rightBottom">
            <!--右下第一行-->
            <div class="rightBottom_a">

              <div class="rightBottom_a_left"><a href="index.html#/myGold">
                <img :src="mygold" alt="我的金币" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                <p style="margin-bottom: 5px;font-size: 16px">我的金币</p>
                <p><a  style="font-size: 14px" href="index.html#/myGold">查看消费详情 ></a></p>
                </div>
              </div>
              <div class="rightBottom_a_right"><a href="index.html#/myorder">
                <img :src="myorder" alt="我的订单" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的订单</p>
                  <p><a href="index.html#/myorder" style="font-size: 14px">查看订单状态 ></a></p>
                </div>
              </div>

            </div>

            <!--右下第二行-->
            <div class="rightBottom_b">
              <div class="rightBottom_b_left"><a @click="toReport()">
                <img :src="myreport" alt="我的报告" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的报告</p>
                  <p><a style="font-size: 14px"  @click="toReport()">查看报告状态 ></a></p>
                </div>
              </div>

              <div class="rightBottom_b_right" v-if="type==1"><a href="index.html#/myJob">
                <img :src="talent" alt="人才信息" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">人才信息</p>
                  <p><a href="index.html#/myJob" style="font-size: 14px">查看人才信息 > ></a></p>
                </div>
              </div>
              <div class="rightBottom_b_right" v-if="type==2"><a href="index.html#/talentinfo">
                <img :src="talent" alt="人才信息" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">招聘信息</p>
                  <p><a href="index.html#/talentinfo" style="font-size: 14px">查看招聘信息 > ></a></p>
                </div>
              </div>
            </div>

            <!--右下第三行-->
            <div class="rightBottom_c">
              <div class="rightBottom_c_left"><a href="#" @click="toEntry">
                <img :src="joinIn" alt="我的入驻" align="left" style="margin-right: 30px"></a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的入驻</p>
                  <p><a href="#" style="font-size: 14px" @click="toEntry">查看入驻情况 ></a></p>
                </div>
              </div>
              <div class="rightBottom_c_right" v-if="type==2">
                <a href="../../views/servicecenter/partner.html" v-if="type2 == '40000.150'">
                  <img :src="fabu" alt="我的发布" align="left" style="margin-right: 30px">
                </a>
                <a href="../../views/servicecenter/detection.html" v-else>
                  <img :src="fabu" alt="我的发布" align="left" style="margin-right: 30px">
                </a>
                <div style="padding-top: 10px">
                  <p style="margin-bottom: 5px;font-size: 16px">我的发布</p>
                  <p v-if="type2 == '40000.150'"><a href="../../views/servicecenter/partner.html" style="font-size: 14px">查看发布情况 ></a></p>
                  <p v-else><a href="../../views/servicecenter/detection.html" style="font-size: 14px">查看发布情况 ></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import talent from "../images/人才信息.png";
import joinIn from "../images/我的入驻.png";
import myreport from "../images/我的报告.png";
import myrecommend from "../images/我的推荐码.png";
import myorder from "../images/我的订单.png";
import mygold from "../images/我的金币.png";
import defaultHead from "../images/默认头像.png";
import fabu from "../images/我的发布.png";
import VueQr from 'vue-qr'
import myUpload from 'vue-image-crop-upload';
export default {
  data(){
    return {
      show: false,
      imgDataUrl: '',
      imgUrl:'',
      talent,
      fabu,
      joinIn,
      myreport,
      myrecommend,
      myorder,
      mygold,
      defaultHead,
      size:120,
      userPk:'',
      type:'', //个人还是企业 1是个人 2是企业
      type2:'', //入驻分类 40000.150合作伙伴 40000.160检测机构  40000.170个人  主要用于分别企业身份是合作伙伴是检测机构  0还没有入驻
      myState:'',//企业入驻状态 50000.100通过 50000.200未通过 50000.300拒绝
      myInfo:{},
      logo:'',
      url:'',
    }
  },
  mounted(){
    let info=JSON.parse(this.until.loGet('user'))
    if(info){
      this.userPk = info.sysUserPk
      this.url = this.hostUrl+'/views/system/register.html?recomCode='+this.userPk
      this.getInfo()
    }else {
      this.$message.show({
        message:'您还未登录，请先登录！',
        type:'warning'
      });
      window.location.href = '../system/login.html'
    }
  },
  methods:{
    //显示头像上传
    toggleShow() {
				this.show = !this.show;
      },
      //完成上传
      cropUploadSuccess(jsonData, field){
       if(jsonData.status == '200'){
          let param ={imgUrl:jsonData.data}
          console.log(JSON.stringify(param));
           this.until.postData('/sys/user/updUser',JSON.stringify(param))
              .then(res=>{
            if(res.status=='200'){
           
            location.reload()
            }
            this.$message({
              message:res.message,
            });
          })
        


       }
        this.show = false;
		
        
			},
    //获取个人信息
    getInfo(){
      this.until.get('/sys/user/info/'+this.userPk)
        .then(res=>{
          if(res.status == '200'){
            console.log(res.data);
            
            this.myInfo = res.data
            this.type = this.myInfo.arg1
            // console.log(this.type)
            if(this.type==2){
              this.getType()
            }else {
              this.until.loSave('userInfo',JSON.stringify(this.myInfo));
            }

          }
        })
    },
    getType(){
      this.until.get('/prodx/mxentp/info/'+this.userPk)
        .then(res=>{
          if(res.status=='200'){
            this.myState = res.data.statCd
            this.type2 = res.data.catCd
            this.myInfo.type2 = res.data.catCd
            this.myInfo.entpPk = res.data.mxEntpPk
            this.myInfo.entpNm = res.data.nm
            this.until.loSave('userInfo',JSON.stringify(this.myInfo));
            // console.log(this.type)
            // console.log(this.type2)
          }
        })
    },
    //我的报告
    toReport(){
      this.$router.push({
        path:'/myreport'
      })
    },
    //我的入驻
    toEntry(){
      if(this.type==1){ //个人
        this.until.get('/prodx/mxpers/infosize/'+this.userPk)
          .then(res=>{
            let myData = res.data.items[0]
              if(myData.statCd=='50000.100'){  //审核通过
                window.location.href = '../servicecenter/settleInsuccess.html'
              }else {  //待审核及审核未通过,没有入驻过
                window.location.href='../servicecenter/personalEntry.html'
              }
          })
      }else {
        if(this.type2==0){ //未提交入驻
          this.$message({
            message:'您还提交未入驻，请先入驻！',
            type:'warning'
          });
        }else if(this.type2=='40000.150'){ //合作伙伴
          if(this.myState=='50000.100'){  //审核通过
            window.location.href='../servicecenter/PsettlelnSucess.html'
          }else {  //待审核 审核拒绝
            window.location.href='../servicecenter/partnerEntry.html?type=edit'
          }
        }else {  //检测机构
          if(this.myState=='50000.100'){
            window.location.href='../servicecenter/DsettleInSucess.html'
          }else {
            window.location.href='../servicecenter/detectionEntry.html?type=edit'
          }
        }
      }
    },
  },
  components:{
    VueQr,
    'my-upload': myUpload
  },
}
</script>

<style lang='less'>
 //右边信息
      .center {
        display: flex;
        flex-direction: column;
        flex: 5.5;
        background-color: white;
        padding: 25px 30px;

        //右边上半部分
        .rightTop {
          display: flex;
          flex-direction: row;
          border-bottom: 2px solid rgb(241, 241, 241);
          padding-bottom: 30px;

          //右上第一行
          .right_a {
            flex: 1;
            justify-content: flex-end;
          }
          //右上第二行
          .right_b {
            display: flex;
            flex-direction: column;
            flex: 3;
            justify-content: center;
            padding-left: 10px;
            font-size: 16px;
            color: rgb(151, 151, 151);

            p {
              margin-bottom: 15px;
            }
          }
          //右上第三行
          .right_c {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            padding-right: 10px;

            div {
              width: 120px;
              margin-bottom: 5px;
              img{
                width: 100%;
              }
            }
          }
        }

        //右边下半部分
        .rightBottom {
          display: flex;
          flex-direction: column;
          padding: 25px 0;
        }

        .rightBottom_a,
        .rightBottom_b,
        .rightBottom_c {
          display: flex;
          flex-direction: row;
          flex: 1;
          padding: 20px 0;
          padding-left: 30px;

        }

        //右下第一行
        .rightBottom_a {
          .rightBottom_a_left {
            flex: 1;
          }
          .rightBottom_a_right {
            flex: 1;
          }
        }

        //右下第二行
        .rightBottom_b {
          .rightBottom_b_left {
            flex: 1;
            a{
              cursor:pointer;
            }
          }
          .rightBottom_b_right {
            flex: 1;
          }
        }

        //右下第三行
        .rightBottom_c {
          .rightBottom_c_left {
            flex: 1;
          }
          .rightBottom_c_right {
            flex: 1;
          }
        }
      }
</style>
