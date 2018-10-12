<template>
  <div id="app">
    <div class="content">
      <div>
        <span>检测服务标题：</span>
        <div><input type="text"></div>
      </div>
      <div class="file-type">
        <span>服务图片：</span>
        <div><input type="file"></div>
      </div>
      <div>
        <span>服务内容：</span>
        <div><input type="text"></div>
      </div>
      <div>
        <span>检测服务分类：</span>
        <div>
          <select>
            <option value="家具检测">家具检测</option>
            <option value="衣服检测">衣服检测</option>
            <option value="食品检测">食品检测</option>
            <option value="玩具检测">玩具检测</option>
          </select>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-31xiala"></use>
          </svg>
        </div>
      </div>
      <div>
        <span>二级类别：</span>
        <div>
          <select>
            <option value="类别1">类别1</option>
            <option value="类别2">类别2</option>
            <option value="类别3">类别3</option>
          </select>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-31xiala"></use>
          </svg>
        </div>
      </div>
      <div>
        <div>
          <button>
            提交审核
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  components:{

  },
  methods:{

  }
}
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .content {
      padding: 0.3rem;
      background-color: #fff;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > div {
        position: relative;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        > span {
          width: 30%;
        }
        > div {
          width: 70%;
          padding: 0.2rem 0 0.2rem 0.3rem;
          border: 1px solid #dadada;
          > input,
          select,
          textarea {
            border: 0;
            width: 100%;
            height: 100%;
          }
          textarea {
            height: 2rem;
          }
          > svg {
            position: absolute;
            top: 50%;
            right: 5%;
            transform: translateY(-50%);
          }
        }
        &:nth-last-of-type(1){
          margin:.4rem 0;
          >div{
            width: 100%;
            background-color: #2A8AF2;
            text-align: center;
            border-radius: 5px;
            >button{
              font-size: 16px;
              color: #fff;
              background-color: #2A8AF2;
            }
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
        }
      }
      > .file-type {
        > span {
          width: 30%;
        }
        > div {
          padding: 0;
          width: 70%;
          height: 2rem;
          border: 1px solid #efefef;
          background: url("./images/up.png") 50% 50% no-repeat;
          background-size: 0.6rem 0.6rem;
          overflow: hidden;
          > input {
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>
