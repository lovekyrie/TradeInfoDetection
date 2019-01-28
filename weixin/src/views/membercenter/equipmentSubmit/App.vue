<style lang="less">
    html,
    body {
        height: 100%;
        background-color: #f6f6f6;
    }
    .success{
        width: 100%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.5);
        z-index: 99;
        position: fixed;
        div{
            background: #ffffff;
            width: 3rem;
            padding: .5rem 0;
            text-align: center;
            border-radius: 3px;
            img{
                width: .5rem;
            }
        }
    }
    .upImg{
        flex: 1;
        margin-bottom: 0.2rem;
    }
    .i-item{
        float: left;
        margin-right: 5px;
        margin-bottom: 5px;
        width: 2rem;
        height: 2rem;
        border-radius: 3px;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0;
        /*margin-left: 20%;*/
        border: 1px solid #efefef;
        overflow: hidden;
        img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
        svg{
            position: absolute;
            top: 5px;
            right: 5px;
        }
    }
    .upload{
        float: left;
        background: url("./img/up.png") 50% 50% no-repeat;
        background-size: 0.6rem 0.6rem;
        width: 2rem;
        height: 2rem;
        border: 1px solid #f4f4f4;
        border-radius: 3px;
        input {
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }

    .content {
        background-color: #fff;
        padding: 0.25rem 0.3rem;
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        h3 {
            margin-bottom: 0.2rem;
            font-size: 16px;
            font-weight: 400;
        }
        .opt-one {
            margin-bottom: 0.2rem;
            width: 100%;
            position: relative;
            font-size: 14px;
            display: -webkit-flex;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            .address{
                width: 70%;
                padding: 0.1rem 0;
            }
            &:nth-last-of-type(1){
                border: 1px solid #7EB8F7;
                border-radius: 5px;
                background-color: #2A8AF2;
            }
            .el-select {
                float: right;
                margin-right: -20px;
                margin-top: -8px;
            }
            span {
                width: 30%;
                display: inline-block;
                position: relative;
                i {
                    position: absolute;
                    left: -0.25rem;
                    visibility: hidden;
                }
            }
            input {
                width: 70%;
                padding: 0.2rem 0;
                flex: 1;
                border: 1px solid #e4e4e4;
                text-indent: 0.2rem;
                vertical-align: middle;
            }
            >select{
                width: 70%;
                padding: 0.2rem 0;
            }
            .c-textarea {
                flex: 1;
                background-color: #fff;
                padding: 0 0.35rem;
                border: 1px solid #d9d9d9;
                margin-bottom: 0.2rem;
                textarea {
                    font-size: 12px;
                    color: #999;
                }
                .textarea-counter {
                    font-size: 12px;
                }
            }
            button{
                padding: .2rem 0;
                font-size: 16px;
                background-color: #2A8AF2;
                color: #fff;
            }
        }
    }

    .opt-radio {
        padding: 0.1rem 0;
        div{
            float: left;
            width: 35%;
            input{
                width: auto!important;
            }
        }
        input {
            flex: 2;
        }
    }
</style>

<template>
    <div id="container">
        <div class="success" v-if="show">
            <div>
                <img src="../../../components/img/success.png"/><br/>
                发布成功！
            </div>
        </div>
        <div class="content">

            <div class="opt-input opt-one border-c">
                <span><i>*</i>设备标题:</span>
                <input type="text"  class="c-ip" v-model="info.nm">
            </div>
            <div class="opt-input opt-one" v-if="type==2">
                <span><i>*</i>性质:</span>
                <select v-model="info.catCd">
                    <option v-for="item in catCdList" :value="item.cd">
                    {{item.nm}}
                    </option>
                </select>
            </div>
            <div class="opt-input opt-one" v-if="type==2">
                <span><i>*</i>价格:</span>
                <input type="text"  class="c-ip" v-model="info.price">
            </div>
            <div class="opt-one" v-if="type==2">
                <span><i>*</i>设备图片:</span>
                <div class="upImg">
                    <div class="i-item" v-if="imgUrl.length>0" v-for="(up,i) in imgUrl">
                        <svg class="icon" aria-hidden="true" @click="deletImg(i)">
                            <use xlink:href="#icon-guanbi"></use>
                        </svg>
                        <img :src="up">
                    </div>
                    <div class="upload">
                        <input type="file" @change="upImg($event)">
                    </div>
                </div>
            </div>
            <div class="opt-one">
                <span><i>*</i>产品描述:</span>
                <div class="c-textarea">
                    <yd-textarea slot="right" maxlength="200" v-model="info.intro"></yd-textarea>
                </div>
            </div>
            <div class="opt-input opt-one">
                <span>联系人:</span>
                <input type="text"  class="c-ip" v-model="info.contNm">
            </div>
            <div class="opt-input opt-one">
                <span><i>*</i>联系电话:</span>
                <input type="text"  class="c-ip" v-model="info.contMob">
            </div>
            <div class="opt-input opt-one">
                <span><i>*</i>邮箱地址:</span>
                <input type="text"  class="c-ip" v-model="info.contEmail">
            </div>

            <!--<div class="opt-input opt-one">-->
                <!--<span><i>*</i>联系方式:</span>-->
                <!--<input type="text"  class="c-ip" v-model="info.prodNm">-->
            <!--</div>-->

            <div class="opt-one" @click="submit">
                <button>发布</button>
            </div>

        </div>
    </div>
</template>

<script>
    // import tempApp from "components/tempApp";
    export default {
        data() {
            return {
                show:false,
                imgUrl:[],
                info:{
                    mxPubDevPk:'',
                    sysUserPk:'',
                    nm:'',
                    price:'',
                    imgUrl:'',
                    contNm:'',
                    contMob:'',
                    contEmail:'',
                    catCd:'',
                    statCd:'',
                    intro:'',
                },
                type:'', // 1个人  2企业
                catCdList:[],
            };
        },
        created(){

            if(this.until.getQueryString('info')){
                let myInfo = JSON.parse(this.until.getQueryString('info'))
                console.log(myInfo)
                this.imgUrl =  myInfo.pdfUrl ? myInfo.pdfUrl.split(','): ''
                this.info.statCd= myInfo.statCd
                this.info.nm= myInfo.nm
                this.info.no =  myInfo.no
                this.info.deteOrg =  myInfo.deteOrg
                this.info.pdfUrl =  myInfo.pdfUrl
                this.info.supply= myInfo.supply
                this.info.prodNm= myInfo.prodNm
                this.info.prodProvCd= myInfo.prodProvCd
                this.info.prodCityCd= myInfo.prodCityCd
                this.info.intro= myInfo.intro
                this.info.rmks= myInfo.rmks
                this.info.catCd = myInfo.catCd
            }
        },
        mounted() {
            let info=JSON.parse(this.until.loGet('userInfo'))
            this.type = info.arg1
            this.info.statCd = this.type==1 ? '':'50000.200'
            this.info.sysUserPk = info.sysUserPk
            this.getCatCd()
        },
        methods: {
            upImg(e){
                this.$dialog.loading.open()
                this.until.upImg(e)
                    .then(res=>{
                        this.$dialog.loading.close()
                        var str = res;
                        // var str1 = str.replace('http://127.0.0.1', this.hostUrl);
                            this.imgUrl.push(str);
                    },err=>{
                        this.$dialog.loading.close()
                        this.Toast(err)
                    });
            },
            deletImg(index){
                    this.imgUrl.splice(index,1)
            },

            //获取性质
            getCatCd(){
                this.until.get('/general/cat/listByPrntCd?prntCd=60010')
                    .then(res=>{
                        this.catCdList = res.data.items
                        this.info.catCd = this.catCdList[0].cd
                    })
            },
            Verification(){
                if(this.info.nm==''){
                    return false
                }
                if(this.info.intro==''){
                    return false
                }
                if(this.info.contNm==''){
                    return false
                }
                if(this.info.rmks==''){
                    return false
                }
                if(this.info.contNm==''){
                    return false
                }
                if(this.info.contMob==''){
                    return false
                }
                return true
            },
            submit(){
                if(this.Verification()){
                    this.$dialog.loading.open()
                    this.info.imgUrl = this.imgUrl.join(',')
                    this.until.postData('/prod/mxpubdev/edit',JSON.stringify(this.info))
                        .then(res=>{
                            this.$dialog.loading.close()
                            if(res.status='200'){
                                this.show = true
                                setTimeout(()=>{
                                    this.show = false
                                    window.history.go(-1)
                                },1500)
                            }else {
                                this.$hero.msg.show({
                                    text:res.message,
                                    times:1500
                                });
                            }
                        })
                }else {
                    this.$hero.msg.show({
                        text:'请补全信息！',
                        times:1500
                    });
                }

            },
            upImg(e){
                this.$dialog.loading.open()
                let blob = e.target.files[0];

                this.until.upImg(e)
                    .then(res=>{
                        this.$dialog.loading.close()
                        var str = res;
                        // this.name = blob.name
                        // var str1 = str.replace('http://127.0.0.1', this.hostUrl);
                        this.imgUrl.push(str)


                    },err=>{
                        this.$dialog.loading.close()
                        this.$hero.msg.show({
                            text:err,
                            times:1500
                        });
                    });
            },
        },
        components: {
            // tempApp,
        }
    };
</script>

