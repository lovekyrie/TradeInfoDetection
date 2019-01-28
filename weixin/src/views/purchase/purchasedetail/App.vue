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
        button{
            background: #f9f9f9;
            border: 1px solid #d4d4d4;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            margin: 0.2rem;
        }
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
    .collectFooter{
        background-color: #d4d4d4;
        color: #666666;
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
                </span>{{detail.crtBy}}
                <!--<span @click="toDown()">-->
                    <!--<a>-->
                        <!--<img src="" alt="下载">-->
                    <!--</a>-->
                    <!--<span>下载报告</span>-->
                <!--</span>-->
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
            <p @click="toSuplyDetail(detail.supply)">
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
            <button @click="down">下载报告</button>
            <div class="imginfo" v-if="imgList.length>0">
                <img :src="item.url" v-for="item in imgList"/>
            </div>

            <div v-if="pdfList.length>0">

                <iframe :src="'/wechat/static/pdf/web/viewer.html?file=' + item.url" height="560" v-for="(item,index) in pdfList" :key="index"
                        width="100%">
                </iframe>
                <!--<pdf :url="item"  v-for="(item,index) in pdfList" :key="index"></pdf>-->
            </div>
        </div>

        <footer @click="collect" :class="{collectFooter:state}">
            {{state | ifState}}
        </footer>
    </div>
</template>

<script>
    import tempApp from 'components/tempApp'
    import pdf from "components/contract.md";
    export default {

        data() {
            return {
                pk:'',
                imgList:[],
                pdfList:[],
                downList:[],
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
            toSuplyDetail(val){
              window.location.href = 'productiondetail.html?nm='+val
            },
            getInfo(){
                this.until.get('/prodx/mxrepo/info/'+this.pk)
                    .then(res=>{
                        this.detail = res.data
                        this.downList = this.detail.pdfUrl
                        let down = JSON.parse(this.downList)
                        down.forEach(item=>{
                            if(item.type.toUpperCase()=='PDF'){
                                this.pdfList.push(item)
                            }else {
                                this.imgList.push(item)
                            }
                        })
                    })
            },
            down(){
                window.location.href = '../down/downList.html?urlList='+this.downList
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
                if(!this.until.loGet('user')){
                    this.$dialog.confirm({
                        mes:'登录后才能操作，请您先登录！',
                        title: '提示',
                        opts:()=>{
                            window.location.href = '../system/login.html'
                        }
                    })
                    return false
                }
                if(this.state){  //已经收藏了，要取消
                    this.until.get('/prodx/mxusercoll/canselcoll?subPk='+this.pk+'&sysUserPk='+this.userPk)
                        .then(res=>{

                            this.state = res.status=='200' ? 0: 1
                        })
                }else {
                    let params = {
                        subPk:this.pk,
                        sysUserPk:this.userPk
                    }
                    this.until.postData('/prod/mxusercoll/edit',JSON.stringify(params))
                        .then(res=>{
                            this.state = res.status=='200' ? 1: 0
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
            pdf
        }
    }
</script>

