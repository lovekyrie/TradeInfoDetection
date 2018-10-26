<template>
  <div class="sidebar">
    <router-link to="/babyplay">
      <i class="iconfont icon-home"></i>
      <span>玩具/婴童用品检测</span>
    </router-link>
    <router-link to="/foodmaterial">
      <i class="iconfont icon-liebiao"></i>
      <span>食品接触材料检测</span>
    </router-link>
    <router-link to="/lightindustrial">
      <i class="iconfont icon-tianjia"></i>
      <span>轻工产品/杂货检测</span>
    </router-link>
     <router-link to="/garmenttextiles">
      <i class="iconfont icon-home"></i>
      <span>服装/纺织品检测</span>
    </router-link>
    <router-link to="/leathershoes">
      <i class="iconfont icon-liebiao"></i>
      <span>皮革/鞋类检测</span>
    </router-link>
    <router-link to="/reliability">
      <i class="iconfont icon-shoucang"></i>
      <span>可靠性检测</span>
    </router-link>
    <router-link to="/certification">
      <i class="iconfont icon-tianjia"></i>
      <span>检验认证服务</span>
    </router-link>
     <router-link to="/inspection">
      <i class="iconfont icon-liebiao"></i>
      <span>验货服务</span>
    </router-link>
    <router-link to="/outsource">
      <i class="iconfont icon-shoucang"></i>
      <span>合作外包</span>
    </router-link>
    <router-link to="/consultation">
      <i class="iconfont icon-tianjia"></i>
      <span>咨询与培训</span>
    </router-link>
  </div>
</template>

<script>
  
</script>

<style lang="less">
.sidebar{
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 800px;
    display: flex;
    border-top: 1px solid #ccc;
    a{
      display: flex;
      color: #deff4d;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    a.router-link-active{
      color: red;
    }
  }
</style>
