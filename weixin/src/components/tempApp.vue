<style lang="less" scoped>
    .temp-app {
        background-color: #f5f5f5;
        font-size: .24rem;
        border-bottom: 1px solid #d9d9d9;
        overflow: hidden;
    }
    .temp-content {
        position: relative;
        padding-bottom: .35rem ;
        p {
            line-height: 1;
            margin: .25rem 0;
            &:nth-last-of-type(1) {
                margin-bottom: 0;
            }
        }
    }

    svg {
        position: absolute;
        right: .35rem;
        top: 50%;
        margin-top: -6px;
        font-size: .25rem;
    }
</style>

<template>
    <div class="temp-app">
        <div class="temp-content">
            <slot name="content"></slot>
            <svg class="icon" aria-hidden="true" v-show="isShow" @click="toLink(obj.src)">
                <use xlink:href="#icon-gengduo"></use>
            </svg>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      obj: {
        type: Object,
        default() {
          return {}
        }
      },
      seaSn:{
        type:String,
          default:"",
      },
      seaGd:{
        type:String,
          default:"",
      },
      isShow:{
          type:Boolean,
          default:false
      }

    },
      data() {
          return {
              userSearch:"",
              seaType:"1",
          }
      },

      mounted(){

      },
    methods: {
      toLink(src) {
        location.href = src+'strSn='+this.seaSn+'&strType='+this.seaType+"&strGDNO="+this.seaGd;
      }
    }
  }
</script>