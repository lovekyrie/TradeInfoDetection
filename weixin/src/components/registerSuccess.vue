<template>
  <div id="upload">
    <div class="upload-wrap">
      <div class="upload-content">
        <div>
          <img :src="registersuc" alt="">
        </div>
        <div>
          <span>
            注册成功！
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registersuc from './img/注册成功.png'

export default {
  data(){
    return {
      registersuc,
    }
  }
}
</script>

<style lang='less'>

.upload-wrap {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  .upload-content {
    padding: .6rem .4rem;
    position: fixed;
    width: 50%;
    height: 2.8rem;
    top: 30%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: #ececec;
    border-radius: 10px;
    > div {
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      img{
        width: auto;
        max-width: 100%;
      }
      &:nth-of-type(2) {
        margin-top: .2rem;
        padding: 0.2rem 0;
      }
    }
  }
}
</style>
