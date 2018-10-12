<template>
  <div id="app">
    <div class="header">
      <header-title :title="title"></header-title>
    </div>
    <div class="content">
      <div>
        <span>真实姓名：</span>
        <div>
          <span>{{name}}</span>
        </div>
      </div>
      <div>
        <span>联系电话：</span>
        <div>
          <span>{{linkedPhone}}</span>
        </div>
      </div>
      <div>
        <span>职称：</span>
        <div>
          <span>{{jobName}}</span>
        </div>
      </div>
      <div>
        <span>QQ：</span>
        <div>
          <span>{{QQ}}</span>
        </div>
      </div>
      <div>
        <span>微信：</span>
        <div>
          <span>{{webChat}}</span>
        </div>
      </div>
      <div>
        <span>邮箱地址：</span>
        <div>
          <span>{{email}}</span>
        </div>
      </div>
      <div>
        <span>技能特长：</span>
        <div>
          <span>{{hobby}}</span>
        </div>
      </div>
      <div class="file-type">
        <span>资历证书：</span>
        <div>
         <img :src="certificate">
        </div>
      </div>
      <div class="file-type">
        <span>培训经历：</span>
        <div>
         <img :src="train">
        </div>
      </div>
      <div>
        <span>个人简介：</span>
        <div>
          <span>{{introduce}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import businessLicense from './images/businessLicense.png'

export default {
  data(){
    return {
      title:'人才入驻',
      name:'贾清海',
      linkedPhone:'12879676755',
      jobName:'高级检测师',
      QQ:'7346387468374',
      webChat:'12879676755',
      email:'128796767@qq.com',
      hobby:'技能高级检测技术',
      certificate:businessLicense,
      train:businessLicense,
      introduce:`个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介
      个人简介`,
    }
  },
  methods:{

  },
  components:{
    headerTitle,
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
      padding: .3rem .4rem;
      background-color: #fff;
      color: #929292;
      >div{
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        &:nth-last-of-type(1){
          >span{
            align-self: flex-start;
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
          >span{
            padding: .2rem 0;
            border: 0;
            width: 100%;
          }
        }
      }
      .file-type{
        >span{
          align-self: flex-start;
        }
      }
    }
  }
}
</style>
