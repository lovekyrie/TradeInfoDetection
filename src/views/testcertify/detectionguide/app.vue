<template>
  <div id="app">
    <div class="header">
      <span>主营业务：</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="left-side">
          <div @click="chooseType(item)" :class="{active:state==item}" v-for="(item, index) in bigClassifyList" :key="index">
            <span>{{item}}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-side">
          <div><span>生态纺织品测试</span></div>
          <div><span>纺织品和服装测试</span></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="reset">
        重置
      </div>
      <div class="submit">
        确定
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      state:'',
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
      ]
    }
  },
  mounted(){

  },
  methods:{
    chooseType(item){
      this.state=item;
    }
  }
}
</script>

<style lang="less">
  html,body{
    height: 100%;
    background-color: #fff;
    #app{
      height: 100%;
      .header{
        padding: .3rem .4rem ;
        font-size: 16px;
      }
      .content{
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
                color: #2F8CF2;
              }
            }
          }
        }
      }
      .footer{
        width: 100%;
        position: fixed;
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
