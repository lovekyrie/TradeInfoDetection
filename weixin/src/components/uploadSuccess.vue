<template>
  <div id="upload">
    <div class="upload-wrap">
      <div class="upload-content">
        <div>
          <img :src="code" alt="">
        </div>
        <div>
          <span>
          预约成功！
          </span>
        </div>
        <div>
          <span>检测订单二维码已生成，您可随时扫描</span>
        </div>
        <div>
          <span>二维码查看检测进度。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import code from "./img/code.png";

export default {
  data() {
    return {
      code
    };
  }
};
</script>

<style lang="less">
.upload-wrap {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  .upload-content {
    padding: .4rem;
    position: fixed;
    width: 70%;
    height: 5.2rem;
    top: 40%;
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
      &:nth-of-type(2) {
        margin-top: .2rem;
        padding: 0.2rem 0;
      }
      &:nth-of-type(3) {
        font-size: 12px;
        color: #A0A0A0;
        padding: 0.2rem 0;
      }
      &:nth-last-of-type(1){
        font-size: 12px;
        color:#A0A0A0;
        padding-top: .2rem;
      }
    }
  }
}
</style>
