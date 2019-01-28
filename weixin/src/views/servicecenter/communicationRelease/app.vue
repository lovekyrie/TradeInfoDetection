<template>
    <div id="app">
        <div class="header">
            <header-title :title="title"></header-title>
        </div>
        <div class="content">
            <div>
                <span>标题：</span>
                <div>
                    <input type="text" v-model="nm">
                </div>
            </div>
            <div>
                <span>发布时间：</span>
                <div>
                    <input type="text" v-model="myDate" disabled>
                </div>
            </div>
            <div>
                <span>需求描述：</span>
                <div>
                    <textarea name="" id=""  v-model="intro"></textarea>
                </div>
            </div>
            <div class="file-type">
                <span>附件上传：</span>
                <div>
                    <div class="i-item" v-if="upList.length>0" v-for="(up,i) in upList">
                        <svg class="icon" aria-hidden="true" @click="deletImg(i)">
                            <use xlink:href="#icon-guanbi"></use>
                        </svg>
                        <img :src="up.url"/>
                    </div>
                    <div class="upload">
                        <input type="file" @change="upImg($event)">
                    </div>
                </div>
            </div>
            <div>
                <span>下载金币数：</span>
                <div>
                    <input type="text" v-model.number.trim="price">
                </div>
            </div>
            <div>
                <div @click="submit">
                    <button>
                        发布
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerTitle from "components/headerTitle";

    export default {
        data() {
            return {
                title:'详情',
                myDate:'',
                mxComuPk:'',
                nm: "",
                pdfUrl:'',
                price:'',
                intro:'', //简介描述
                sysUserPk: "",
                upList:[],
            };
        },
        watch:{
            price:function () {
                setTimeout(()=>{
                    this.price= this.price.toString().indexOf('.') > -1 ? this.price.toString().split('.')[0] : this.price
                },200)
            }
        },
        mounted() {
            let info=JSON.parse(this.until.loGet('userInfo'))
            let date = this.until.formatDate()
            this.myDate = date.year + '-' + date.month + '-' + date.day
            if(info){
                this.sysUserPk = info.sysUserPk
            }
            if(this.until.getQueryString('type')=='edit'){
                this.getInfo()
            }
        },
        methods: {

            submit(){
                if(this.verify()){
                    this.$dialog.loading.open()
                    // this.pdfUrl=this.upList.join(',')
                    let param = {
                        mxComuPk:this.mxComuPk,
                        sysUserPk: this.sysUserPk,
                        nm: this.nm,
                        price: this.price,
                        pdfUrl: JSON.stringify(this.upList),
                        intro: this.intro,
                    }
                    this.until.postData('/prod/mxcomu/edit',JSON.stringify(param))
                        .then(res=>{
                            this.$dialog.loading.close()
                            if(res.status=='200'){
                                this.$hero.msg.show({
                                    text:'发布成功！',
                                    times:1500
                                });
                                window.history.go(-1)
                            }else {
                                this.$hero.msg.show({
                                    text:res.message,
                                    times:1500
                                });
                            }
                        })
                }else {
                    this.$hero.msg.show({
                        text:'请补全信息!',
                        times:1500
                    });
                }

            },
            verify(){
              if(this.nm==''){
                  return false
              }
              return true
            },
            upImg(e){
                let blob = e.target.files[0];
                let name = blob.name
                console.log(name)
                this.$dialog.loading.open()
                this.until.upImg(e)
                    .then(res=>{
                        this.$dialog.loading.close()
                        var str = res;
                        // var str1 = str.replace('http://127.0.0.1', this.hostUrl);
                         this.upList.push({
                             name:blob.name.split('.')[0],
                             url:str,
                             type:blob.name.split('.')[1]
                         });

                    },err=>{
                        this.$dialog.loading.close()
                        this.$hero.msg.show({
                            text:err,
                            times:1500
                        });
                    });
            },
            deletImg(index){
                this.upList.splice(index,1)
            }
        },
        components: {
            headerTitle
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
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            overflow: hidden;
            .content {
                height: 100%;
                flex: 1;
                overflow: auto;
                padding: 0.3rem;
                background-color: #fff;
                /*display: -webkit-flex;*/
                /*display: flex;*/
                /*flex-direction: column;*/
                > div {
                    /*position: relative;*/
                    width: 100%;
                    display: -webkit-flex;
                    display: flex;
                    /*flex-direction: row;*/
                    /*flex-wrap: nowrap;*/
                    /*justify-content: space-between;*/
                    align-items: center;
                    > span {
                        width: 30%;
                        /*text-align: right;*/
                    }
                    > div {
                        /*width: 70%;*/
                        flex: 1;
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
                    }
                    /*&:nth-last-of-type(2) {*/
                        /*> span {*/
                            /*margin-top: -1.2rem;*/
                        /*}*/
                    /*}*/
                    &:nth-last-of-type(1){
                        >div{
                            width: 100%;
                            background-color: #2A8AF2;
                            text-align: center;
                            border-radius: 5px;
                            margin-top: 1rem;
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
                    align-items: flex-start;
                    > span {
                        width: 30%;
                        padding-top: 20px;
                    }
                    >div{
                        border: 0;
                        padding: 0;
                        .i-item{
                            float: left;
                            margin-bottom: 5px;
                            margin-right: 5px;
                            width: 2rem;
                            height: 2rem;
                            border: 1px solid #f4f4f4;
                            border-radius: 3px;
                            display: flex;
                            display: -webkit-flex;
                            align-items: center;
                            justify-content: center;
                            position: relative;
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
                                color: #f00;
                            }
                        }
                        .upload_logo{
                            float: left;
                            background: url("./images/up.png") 50% 50% no-repeat;
                            background-size: 0.6rem 0.6rem;
                            width: 2rem;
                            height: 2rem;
                            border: 1px solid #f4f4f4;
                            border-radius: 3px;
                            position: relative;

                            input {
                                width: 100%;
                                height: 100%;
                                opacity: 0;
                                position: absolute;
                                z-index: 8;

                            }
                            .i-item{
                                width: 100%;
                                height: 100%;
                                background: #fff;
                                border: 0;
                                margin: 0;
                            }
                        }
                        .upload{
                            float: left;
                            background: url("./images/up.png") 50% 50% no-repeat;
                            background-size: 0.6rem 0.6rem;
                            width: 2rem;
                            height: 2rem;
                            border: 1px solid #f4f4f4;
                            border-radius: 3px;
                            position: relative;

                            input {
                                width: 100%;
                                height: 100%;
                                opacity: 0;
                            }
                        }

                    }
                    .i-item {
                        padding: 0;
                        /*margin-left: 20%;*/
                        width: 2rem;
                        height: 2rem;
                        border: 1px solid #efefef;

                        overflow: hidden;
                        float: left;
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
</style>
