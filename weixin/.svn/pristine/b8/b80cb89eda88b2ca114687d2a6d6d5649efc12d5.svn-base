<style lang="less">
    @bdColor: #d9d9d9;
    @fontColor:#101010;

    body {
        background-color: #fff;
    }
    
    .detailinfo{
        h3{
            margin: .35rem .25rem;
            font-size: .35rem;
            font-weight: 400;
        }
        p{
            margin:.2rem 0 .2rem .25rem;
            font-size: .26rem;
            color: @fontColor;
            &:nth-last-of-type(1){
                margin-right: .25rem;
                padding-right: .25rem;
                color: #777;
            }
            >span{
                i{
                    font-style: normal;
                    padding-left: .01rem;
                    padding-right: 0.1rem;
                }
                &:nth-of-type(2){
                    margin-left: 1.8rem;
                }
            }
        }
    }

    .imginfo{
        margin: .6rem 0 .6rem;
    }
</style>

<template>
    <div id="container">
        <div class="detailinfo">
            <h3>
                {{detail.title}}
            </h3>
            <p>
                <span>上传者
                    <i>:</i>
                </span>{{detail.uploader}}
                <span>
                    <a href="">
                        <img src="" alt="下载">
                    </a>
                    <span>下载报告</span>
                </span>
            </p>
            <p>
                <span>序列号
                    <i>:</i>    
                </span>{{detail.numberid}}
            </p>
            <p>
                <span>检测机构
                    <i>:</i>    
                </span>{{detail.organization}}
            </p>
            <p>
                <span>供应商名称
                    <i>:</i>    
                </span>{{detail.vendorname}}
            </p>
            <p>
                <span>质检产品名称
                    <i>:</i>
                </span>{{detail.productname}}
            </p>
            <p>
                <span>质检产品地域
                    <i>:</i>    
                </span>{{detail.address}}
            </p>
            <p>
                <span>报告简介
                    <i>:</i>
                </span>{{detail.description}}
            </p>
        </div>
        <div class="imginfo">
            <img src="" alt="1">
        </div>
    </div>
</template>

<script>
    import tempApp from 'components/tempApp'

    export default {

        data() {
            return {
                obj: {
                    src: "./orderQueryDetail.html?",
                },
                detail:{
                    title:'福州福州服饰有限公司防晒衣检测报告',
                    uploader:'张三',
                    numberid:'1234567890098765',
                    organization:'宁波贸信检测',
                    vendorname:'宁波太平鸟服饰',
                    productname:'防晒衣',
                    address:'浙江 - 宁波 - 海曙',
                    description:`最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，
                    最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，最新最权威的防晒衣质检报告，
                    最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告。`
                }
            }
        },
        mounted() {
            var self = this;
          
            this.searchBtn();
        },
        methods: {

        },
        components: {
            tempApp,
        }
    }
</script>

