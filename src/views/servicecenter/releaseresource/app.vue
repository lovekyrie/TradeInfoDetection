<template>
  <div id="app">
    <div class="content">
      <div>
        <span>资源类型：</span>
        <select>
          <option value="业务资源">业务资源</option>
          <option value="设备资源">设备资源</option>
        </select>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31xiala"></use>
        </svg>
      </div>
      <div>
        <span>资源名称：</span>
        <input type="text" placeholder="单行输入">
      </div>
      <div>
        <span>发布时间：</span>
        <input type="text" readonly :value="currentTime">
      </div>
      <div>
        <span>有效日期：</span>
        <select>
          <option :value="validTime">{{validTime}}</option>
        </select>
         <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31xiala"></use>
          </svg>
      </div>
      <div>
        <span>资源描述：</span>
        <textarea name="" id="" placeholder="多行输入"></textarea>
      </div>
      <div>
        <span>联系人：</span>
        <input type="text" placeholder="请输入联系人姓名">
      </div>
      <div>
        <span>联系电话：</span>
        <input type="text" placeholder="请输入联系电话">
      </div>
      <div>
        <span>邮箱地址：</span>
        <input type="text" placeholder="请输入邮箱地址">
      </div>
      <div>
        <span>联系方式：</span>
        <input type="text" placeholder="请输入其他联系方式">
      </div>
      <div>
        <button>
          确认
        </button>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      currentTime:'',
      validTime:'',
    }
  },
  mounted(){

    let time=this.until.formatDate()
    let month=time.month;
    let year=time.year;

    if(month<=6){
      month+=6;
    }
    else{
      year++;
      month=month-6;
    }

    month=month+1<10?"0"+month:month;
    this.currentTime=time.year+'-'+time.month+'-'+time.day
    this.validTime=year+'-'+month+'-'+time.day
  },
  methods:{

  }
};
</script>

<style lang="less">
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
        > input,
        select,
        textarea {
          width: 70%;
          padding: 0.2rem 0 0.2rem 0.3rem;
          border: 1px solid #dadada;
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
        &:nth-of-type(5){
          >span{
            margin-top: -1.2rem;
          }
        }
        &:not(:nth-last-of-type(1)) {
          margin-bottom: 0.3rem;
        }
        &:nth-last-of-type(1){
          margin: .5rem 0;
          padding: .2rem 0;
          background-color: #2A8AF2;
          font-size: 16px;
          border-radius: 5px;
          text-align: center;
          justify-content: space-around;
          >button{
            color: #fff;
            background-color: #2A8AF2;
          }
        }
      }
    }
  }
}
</style>
