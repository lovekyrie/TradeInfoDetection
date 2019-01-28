<template>
  <div id="guide">
    <div class="header">
      <span>主营业务：</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="left-side">
          <div @click="chooseType('')" :class="{active:code1==''}">
            <span>全部</span>
          </div>
          <div @click="chooseType(item.cd)" :class="{active:code1==item.cd}" v-for="(item, index) in bigClassifyList" :key="index">
            <span>{{item.nm}}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-side">
          <div v-for="item in smallClassifyList" @click="chooseType2(item.cd)" :class="{active:code2==item.cd}"><span>{{item.nm}}</span></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="reset" @click="cancel">
        重置
      </div>
      <div class="submit" @click="submit">
        确定
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        code1:'',  //大类选中的编码
        code2:'',  //小类选中的编码
      bigClassifyList:[
        '全部',
        '玩具 / 婴童用品检测',
        '食品接触材料检测 ',
        '电子电气产品检测 ',
        '轻工产品 / 杂货检测',
        '服装 / 纺织品检测',
        '皮革 / 鞋类检测',
        '可靠性检测',
        '检测认证服务',
        '验货服务',
        '咨询与培训',
      ],
        smallClassifyList:[]
    }
  },
  mounted(){
      this.getClass1()
  },
  methods:{
    getClass1(){
      this.until.get('/general/cat/listByPrntCd?prntCd=70000')
          .then(res=>{
              this.bigClassifyList = res.data.items
          })
    },
      getClass2(){
          this.until.get('/general/cat/listByPrntCd?prntCd='+this.code1)
              .then(res=>{
                  this.smallClassifyList = res.data.items
              })
      },
      chooseType(val){
          this.code1 = val
          this.getClass2()
          this.code2 = ''
      },
      chooseType2(val){
        this.code2 = val
      },
      submit(){
          let code = this.code2=='' ? this.code1:this.code2

          this.$emit('submit',code)
      },
      cancel(){
          this.$emit('cancel')
      }
  },
}
</script>

<style lang="less">
  html,body{
    height: 100%;
    background-color: #fff;
    #guide{
      height: 100%;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      position: fixed;
      z-index: 99;
      background-color: #fff;

      .header{
        padding: .3rem .4rem ;
        font-size: 16px;
      }
      .content{
        flex: 1;
        overflow: auto;
        background-color: #fff;
        height: 100%;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        border-top: 1px solid #EBEBEB;
        >div{
          width: 45%;
          height: 100%;
          overflow: auto;
          background-color: #F5F5F5;
          >div{
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            >div{
              width: 100%;
              padding:.3rem;
              border-bottom: 1px solid #E9E9E9;
            }
            .active{
              background-color: #fff;
            }
          }
        }
        .right{
          width: 55%;
          background-color: #fff;
          >div{
            >div{
              border-bottom: none;
              &:nth-of-type(2){
              }
            }
            div.active{
              color: #2F8CF2;
            }
          }
        }
      }
      .footer{
        width: 100%;
        bottom: 0;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        >div{
          font-size: 16px;
          padding: .3rem 0;
          width: 50%;
          text-align: center;
        }
        >div:nth-of-type(1){
          background-color: #fff;
        }
        >div:nth-of-type(2){
          background-color: #2A8AF2;
          color: #fff;
        }
      }
    }
  }
</style>
