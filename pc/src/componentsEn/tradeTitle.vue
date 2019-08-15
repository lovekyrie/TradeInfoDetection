<template>
  <div class="title">
    <span></span>
      <h3>{{title}}</h3>
    <span></span>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'',
    }
  }
};
</script>

<style lang='less' scoped>
.title {
  margin: 60px auto;
  width: 600px;
  display: -webkit-flex;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  > span {
    height: 1px;
    flex: 1;
    background-color: #ccc;
  }
  > h3 {
    font-size: 22px;
    padding: 0 15px;
  }
}
</style>
