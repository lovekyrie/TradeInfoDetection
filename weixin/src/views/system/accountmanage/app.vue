<template>
  <div id="app">
    <div class="content">
      <div>
        <span>注册账号：</span>
        <div><input type="text">{{account}}</div>
      </div>
      <div>
        <span>手机号码：</span>
        <div><input type="text">{{phoneNum}}</div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div><input type="text">{{email}}</div>
      </div>
       <div>
        <span>企业名称：</span>
        <div><input type="text" placeholder="请输入企业名称"></div>
      </div>
      <div>
        <span>企业地址：</span>
        <div><input type="text" placeholder="请输入企业地址"></div>
      </div>
      <div>
        <div>
          <button>确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      account:'张三',
      phoneNum:'15188881111',
      email:'1111222255@qq.com'
    }
  }
}
</script>

<style lang='less'>
  html,body{
    height: 100%;
    background-color: #f7f7f7;
    #app{
      height: 100%;
      .content{
        padding: .3rem .4rem .6rem;
        background-color: #fff;
        >div{
          display: -webkit-flex;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          &:nth-last-of-type(1){
            margin-top: .6rem;
            >div{
              text-align: center;
              width: 100%;
              background-color: #2A8AF2;
              button{
                padding: .2rem 0;
                font-size: 16px;
                background-color: #2A8AF2;
                color: #fff;
              }
            }
          }
          &:not(:nth-last-of-type(1)){
            margin-bottom: .3rem;
          }
          >span{
            width: 30%;
          }
          >div{
            width: 70%;
            border: 1px solid #EDEDED;
            >input{
              padding :.2rem;
              border: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
