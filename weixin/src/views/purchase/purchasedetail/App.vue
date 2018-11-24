<style lang="less">
    @bdColor: #d9d9d9;
    @fontColor:#101010;

    html,body {
        background-color: #fff;
        height: 100%;
    }
    #container{
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }
    .detailinfo{
        flex: 1;
        overflow: auto;
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
    footer{
        padding: .2rem 0;
        width: 100%;
        font-size: 16px;
        background-color: #2A8AF2;
        color: #fff;
        text-align: center;
    }
    .imginfo{
        margin: .6rem 0 .6rem;
    }
</style>

<template>
    <div id="container">
        <div class="detailinfo">
            <h3>
                {{detail.nm}}
            </h3>
            <p>
                <span>上传者
                    <i>:</i>
                </span>{{detail.uploader}}
                <span @click="toDown(detail.pdfUrl)">
                    <a>
                        <img src="" alt="下载">
                    </a>
                    <span>下载报告</span>
                </span>
            </p>
            <p>
                <span>序列号
                    <i>:</i>    
                </span>{{detail.no}}
            </p>
            <p>
                <span>检测机构
                    <i>:</i>    
                </span>{{detail.deteOrg}}
            </p>
            <p @click="toSuplyDetail()">
                <span>供应商名称
                    <i>:</i>    
                </span>{{detail.supply}}
            </p>
            <p>
                <span>质检产品名称
                    <i>:</i>
                </span>{{detail.prodNm}}
            </p>
            <p>
                <span>质检产品地域
                    <i>:</i>    
                </span>{{detail.prodProvNm}} {{detail.prodCityNm}}
            </p>
            <p>
                <span>报告简介
                    <i>:</i>
                </span>{{detail.intro}}
            </p>
            <div class="imginfo">
                <img src="" alt="1">
            </div>
        </div>

        <footer @click="collect">
            {{state | ifState}}
        </footer>
    </div>
</template>

<script>
    import tempApp from 'components/tempApp'

    export default {

        data() {
            return {
                pk:'',
                obj: {
                    src: "./orderQueryDetail.html?",
                },
                state:'',
                userPk:'',
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
            this.pk = this.until.getQueryString('pk')
            this.userPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk
            this.getInfo();
            this.ifCollect()
        },
        methods: {
            getInfo(){
                this.until.get('/prodx/mxrepo/info/'+this.pk)
                    .then(res=>{
                        this.detail = res.data
                    })
            },
            toDown(href){
                window.location.href = href
            },
            //判断收藏状态
            ifCollect(){
                this.until.get('/prodx/mxusercoll/collnum?subPk='+this.pk+'&sysUserPk='+this.userPk)
                    .then(res=>{
                        this.state = res
                    })

            },
            //取消或加入收藏
            collect(){
                if(this.state){
                    this.until.get('/prodx/mxusercoll/canselcoll?subPk='+this.pk+'&sysUserPk='+this.userPk)
                        .then(res=>{
                            this.state = res
                        })
                }else {
                    this.until.post('/prod/mxusercoll/edit?subPk='+this.pk+'&sysUserPk='+this.userPk)
                        .then(res=>{
                            this.state = res
                        })
                }
            }
        },
        filters:{
            ifState:function (val) {
                if(val){
                    return '已收藏'
                }else {
                    return '未收藏'
                }
            }
        },
        components: {
            tempApp,
        }
    }
</script>

