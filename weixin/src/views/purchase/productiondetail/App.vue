<style lang="less">
    @bdColor: #d9d9d9;
    @grayColor:#777;
    @fontColor:#101010;

    body {
        background-color: #fff;
    }

    .header{
        margin: .4rem .3rem 0rem;
        border-bottom: 1px solid @bdColor;
        >div{
            display: inline-block;
            margin-bottom: .25rem;
            img{
                display: inline-block;
                width: 2.4rem;
                height: 1.6rem;
                border: 0;
                vertical-align: middle;
            }
            &:nth-last-of-type(1){
                margin-left: .2rem;
                h2{
                    font-size: .34rem;
                    font-weight: 400;
                    color: @fontColor;
                }
                p{
                    margin-top: .1rem;
                    font-size: .25rem;
                    color:@grayColor;
                }
            }
            
        }       
    }

    .content{
        margin: .55rem .3rem 0;
        border-bottom: 1px solid @grayColor;
        h3{
            font-size: .3rem;
            font-weight: 400;
            margin-bottom: .2rem;
            color: @fontColor;
            &:nth-last-of-type(1){
                margin-top: .4rem;
            }
        }
        p{
            padding: .05rem 0;
            font-size: .27rem;
            color:@grayColor;
            &:nth-last-of-type(1){
                margin-bottom: .7rem;
            }
        }   
    }

    .propagate{
        margin:.4rem .3rem 0;
        h3{
            font-size: .3rem;
            font-weight: 400;
            color: @fontColor;
        }
        .imglist{
            margin-top: .35rem;
            margin-bottom: .35rem;
            display: flex;
            >img{
                flex: 3;
                margin-right: .1rem;
                width: 1rem;
                height: 2rem;
                &:nth-last-of-type(1){
                    margin-right: 0;
                }
            }
        }
        .description{
            p{
                font-size: .27rem;
                color:@grayColor;
            }
        }
    }
  
</style>

<template>
    <div id="container">
        <div class="header">
            <div class="log">
                <img :src="detail.logoUrl" alt="logo">
            </div>
            <div class="productioninfo">
                <h2>{{nm}}</h2>
                <p>法人姓名:{{detail.legal}}</p>
            </div>
        </div>
        <div class="content">
            <div class="introduction">
                <h3>公司简介：</h3>
                <p>{{detail.intro}}</p>
            </div>
            <div class="link">
                <h3>联系方式</h3>
                <p>
                    <span>联系人：</span>
                    {{detail.contNm}}
                </p>
                <p>
                    <span>联系方式：</span>
                    {{detail.contMob}}
                </p>
                <p>
                    <span>联系传真：</span>
                    {{detail.linkedtax}}
                </p>
                <p>
                    <span>联系邮箱：</span>
                    {{detail.email}}
                </p>
                <p>
                    <span>详细地址：</span>
                    {{detail.contAddr}}
                </p>
            </div>
        </div>
        <div class="propagate">
            <div>
                <h3>生产工艺质量宣传</h3>
            </div>
            <div class="imglist">
                <img src="item" alt="" v-for="item in imgList">
            </div>
            <div class="description">
                <p>
                    <span>生产工艺描述：</span>
                    {{detail.descr}}
                </p>
            </div>
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
                imgList:[],
                nm:'',
                detail:{
                    // introduction:'质检服饰配饰_CTTC中纺标 _ 认证需求。如果你无法简洁的表达你的想法，那只说明你还不够了解它。',
                    // linkedman:'张三',
                    // linkedphone:'13911112222',
                    // linkedtax:'宁波贸信检测',
                    // linkedemail:'宁波太平鸟服饰',
                    // linkedaddress:'防晒衣',
                    // description:`最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，
                    // 最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告，最新最权威的防晒衣质检报告，
                    // 最新最权威的防晒衣质检报告最新最权威的防晒衣质检报告。`
                }
            }
        },
        mounted() {
            this.nm = this.until.getQueryString('nm')
            this.getInfo();
        },
        methods: {
            getInfo(){
                this.until.get('/prod/mxmagent/page?nm='+this.nm)
                    .then(res=>{
                        if(res.status=='200'){
                            this.detail = res.data.items[0]
                            this.imgList = this.detail.imgUrl!='' ? this.detail.imgUrl.split(',') : ''
                        }
                    })
            }
        },
        components: {
            tempApp,
        }
    }
</script>

