<template>
    <div id="app">
        <div class="header">
            <header-title :title="title"></header-title>
        </div>
        <div class="notify">
            <div>
                <div>
                    <img :src="successlog" >
                </div>
                <div><span>提交成功，请等待审核。</span></div>
            </div>
        </div>
        <div class="content">
            <div>
                <span>企业名称：</span>
                <div>
                    <span>{{info.nm}}</span>
                </div>
            </div>
            <div>
                <span>法人姓名：</span>
                <div>
                    <span>{{info.legal}}</span>
                </div>
            </div>
            <div>
                <span>邮箱地址：</span>
                <div>
                    <span>{{info.eamil}}</span>
                </div>
            </div>
            <div>
                <span>联系人：</span>
                <div>
                    <span>{{info.contNm}}</span>
                </div>
            </div>
            <div>
                <span>联系电话：</span>
                <div>
                    <span>{{info.contMob}}</span>
                </div>
            </div>
            <div>
                <span>联系地址：</span>
                <div>
                    <span>{{info.contAddr}}</span>
                </div>
            </div>
            <div class="file-type">
                <span>营业执照：</span>
                <div>
                    <div class="img"  v-for="item in busLicUrl">
                        <img :src="item">
                    </div>
                </div>
            </div>
            <div class="file-type">
                <span>CMA资质证书：</span>
                <div>
                    <div class="img" v-for="item in cmaQualUrl">
                        <img :src="item">
                    </div>
                </div>
            </div>
            <div class="file-type">
                <span>CNAS资质证书：</span>
                <div>
                    <div class="img" v-for="item in cnasQualRul">
                        <img :src="item">
                    </div>
                </div>
            </div>
            <div class="file-type">
                <span>其他资质证书：</span>
                <div>
                    <div class="img" v-for="item in otherQualRul">
                        <img :src="item" />
                    </div>
                </div>
            </div>
            <div>
                <span>公司简介：</span>
                <div>
                    <span>{{info.intro}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import successlog from './images/提交成功.png'
    import headerTitle from 'components/headerTitle'
    // import businessLicense from './images/businessLicense.png'

    export default {
        data(){
            return {
                successlog,
                title:'检测机构入驻',
                userPk:'',
                info:{},
                busLicUrl:[],
                cmaQualUrl:[],
                cnasQualRul:[],
                otherQualRul:[]
            }
        },
        mounted(){
            let info=JSON.parse(this.until.loGet('userInfo'))
            if(info){
                this.userPk = info.sysUserPk
            }
            this.getInfo()
        },
        methods:{
            getInfo(){
                this.until.get('/prodx/mxentp/info/'+this.userPk)
                    .then(res=>{
                        if(res.status=='200'){
                            this.info = res.data
                            if(this.info.busLicUrl){
                                this.busLicUrl = this.info.busLicUrl.split(',')
                            }
                            if(this.info.cmaQualUrl){
                                this.cmaQualUrl = this.info.cmaQualUrl.split(',')
                            }
                            if(this.info.cnasQualRul){
                                this.cnasQualRul = this.info.cnasQualRul.split(',')
                            }
                            if(this.info.otherQualRul){
                                this.otherQualRul = this.info.otherQualRul.split(',')
                            }
                        }else {
                            this.$hero.msg.show({
                                text:res.message,
                                times:1500
                            });
                        }

                    })
            }
        },
        components:{
            headerTitle,
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
            .notify{
                background-color: #fff;
                >div{
                    margin: 0 auto;
                    padding: .4rem 0;
                    width: 60%;
                    display: -webkit-flex;
                    display: flex;
                    flex-wrap: nowrap;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    >div:nth-of-type(1){
                        width: 10%;
                        >img{
                            max-width: 100%;
                            max-height: 100%;
                            width: auto;
                            height: auto;
                            vertical-align: middle;
                        }
                    }
                    >div:nth-of-type(2){
                        margin-left: .3rem;
                        width: 90%;
                    }
                }
            }
            .content {
                padding: 0 0.4rem .3rem;
                background-color: #fff;
                display: -webkit-flex;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                color: #868686;
                > div {
                    font-size: 12px;
                    width: 100%;
                    display: -webkit-flex;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    align-items: center;
                    > span {
                        width: 25%;
                    }
                    > div {
                        width: 75%;
                    }


                    &:not(:nth-last-of-type(1)) {
                        margin-bottom: 0.3rem;
                    }
                }
                > .file-type {
                    clear: both;
                    > span {
                        width: 30%;
                    }
                    > div {
                        padding: 0;
                        /*margin-right: 30%;*/
                        overflow: hidden;
                        .img{
                            float: left;
                            margin-right: 5px;
                            margin-bottom: 5px;
                            width: 2rem;
                            height: 2rem;
                            border: 1px solid #f4f4f4;
                            border-radius: 3px;
                            display: flex;
                            display: -webkit-flex;
                            align-items: center;
                            justify-content: center;
                            img{
                                width: auto;
                                height: auto;
                                max-width: 100%;
                                max-height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
