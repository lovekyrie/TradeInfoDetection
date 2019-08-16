<style lang="less">
    html,
    body {
        height: 100%;
        background-color: #f6f6f6;
    }
    #container{
        display: flex;
        display: -webkit-flex;
        height: 100%;
        flex-direction: column;
        .main{
            flex: 1;
            overflow: auto;
            -webkit-overflow-scrolling : touch;
            .img{
                border-top: 1px solid #e6e6e6;
                border-bottom: 1px solid #e6e6e6;
                background: #FFFFFF;
                margin-bottom: 5px;
                width: 100%;
                .opt-one {
                    margin: 0.2rem;
                    margin-left: 0.4rem;
                    width: 70%;
                    float: left;
                    position: relative;
                    font-size: 14px;
                    display: -webkit-flex;
                    display: flex;
                    flex-wrap: nowrap;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    > i {
                        color: #666666;
                        position: absolute;
                        top: 50%;
                        right: 5%;
                        transform: translateY(-50%);
                    }
                    >select{
                        flex: 1;
                        padding: 0.2rem .1rem;
                        margin-left: 0.1rem;
                        border: 1px solid #e4e4e4;
                    }
                }
                svg{
                    margin-top: 0.45rem;
                    float: right;
                    margin-right: 0.2rem;
                    color: #f00;
                }
                .i-item{
                    clear: both;
                    text-align: center;
                    padding-bottom: 0.2rem;
                    width: 100%;
                    img{
                        width: auto;
                        height: auto;
                        max-width: 100%;
                        max-height: 100%;
                    }

                }
            }
        }
        .footer{
            width: 100%;
            button{
                width: 100%;
                text-align: center;
                padding: .2rem 0;
                font-size: 16px;
                background-color: #2A8AF2;
                color: #fff;
            }
        }
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
    .header {
        background-color: #fff;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        padding: 0.45rem 0.3rem 0.3rem;
        margin: 0.2rem 0;
        .upload-file {
            border: 1px solid #e6e6e6;

            .opt-one {
                /*margin-bottom: 0.2rem;*/
                width: 70%;
                margin: 0.6rem auto 0.2rem;
                position: relative;
                font-size: 14px;
                display: -webkit-flex;
                display: flex;
                flex-wrap: nowrap;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                > i {
                    color: #666666;
                    position: absolute;
                    top: 50%;
                    right: 5%;
                    transform: translateY(-50%);
                }
                >select{
                    flex: 1;
                    padding: 0.2rem .1rem;
                    margin-left: 0.1rem;
                    border: 1px solid #e4e4e4;
                }
            }
            .upload {
                width: 70%;
                margin: 0 auto 0.2rem;
                height: 1rem;
                background-color: #2a8af2;
                border-radius: 5px;
                text-align: center;
                line-height: 1rem;
                color: #fff;
                font-size: 16px;
                position: relative;
                > input {
                    position: absolute;

                    opacity: 0;
                    width: 100%;
                    height: 1rem;
                    left: 0;
                }
            }
            > p {
                font-size: 14px;
                color: #101010;
                text-align: center;
                margin: 0.25rem 0;
                &:nth-of-type(2) {
                    font-size: 12px;
                    color: #777;
                }
            }
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
            > i {
                color: #666666;
                position: absolute;
                top: 50%;
                right: 5%;
                transform: translateY(-50%);
            }
            .address{
                width: 70%;
                padding: 0.1rem 0;
            }
            /*&:nth-last-of-type(1){*/
                /*border: 1px solid #7EB8F7;*/
                /*border-radius: 5px;*/
                /*background-color: #2A8AF2;*/
            /*}*/
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
                border: 1px solid #e4e4e4;
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
                上传成功！
            </div>
        </div>
        <div class="main">
            <div class="content">
                <!--<h3>完善信息</h3>-->

                <div class="opt-input opt-one border-c">
                    <span><i>*</i>报告标题:</span>
                    <input type="text"  class="c-ip" v-model="info.nm">
                </div>

                <!--<div class="opt-input opt-one">-->
                <!--<span><i>*</i>序列号:</span>-->
                <!--<input type="text"  class="c-ip" v-model="info.no" disabled>-->
                <!--</div>-->
                <div class="opt-input opt-one">
                    <span><i>*</i>检测机构:</span>
                    <input type="text"  class="c-ip" v-model="info.deteOrg">
                </div>
                <div class="opt-input opt-one">
                    <span>供应商名称:</span>
                    <input type="text"  class="c-ip" v-model="info.supply">
                </div>
                <div class="opt-input opt-one">
                    <span><i>*</i>质检产品名称:</span>
                    <input type="text"  class="c-ip" v-model="info.prodNm">
                </div>
                <div class="opt-input opt-one">
                    <span><i>*</i>质检产品地域:</span>
                    <addr @setAddr="getAddr" :provCd="info.prodProvCd" :city="info.prodCityCd" :distCd="0"></addr>
                </div>
                <div class="opt-radio opt-one">
                    <span><i>*</i>报告性质:</span>
                    <div v-for="item in statList">
                        <input type="radio" v-model="info.statCd" :value="item.cd">
                        <span>{{item.nm}}</span>
                    </div>

                </div>
                <!--<div class="opt-one">-->
                    <!--<span><i>*</i>报告简介:</span>-->
                    <!--<div class="c-textarea">-->
                        <!--<yd-textarea slot="right" maxlength="200" v-model="info.intro"></yd-textarea>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="opt-one">
                    <span><i>*</i>检测项目:</span>
                    <div class="c-textarea">
                        <yd-textarea slot="right" maxlength="200" v-model="info.rmks"></yd-textarea>
                    </div>
                </div>


            </div>
            <div class="header">
                <div class="upload-file">

                    <div class="opt-input opt-one">
                        <span>报告分类:</span>
                        <select v-model="catCd">
                            <option v-for="item in catCdList" :value="item.cd">
                                {{item.nm}}
                            </option>
                        </select>
                        <van-icon name="arrow-down" />
                    </div>
                    <div class="upload">
                        <span>{{name}}</span>
                        <input ref="upload" type="file" name="file" id="" @change="upImg($event)">
                    </div>
                    <p>每成功上传一份文档，可获取金币奖励</p>
                    <p>注意事项：您可以上传≤10MB的PDF报告。</p>
                </div>
            </div>
            <div class="img" v-if="imgUrl.length>0" v-for="(up,i) in imgUrl">
                <div class="opt-input opt-one">
                    <span>报告分类:</span>
                    <select v-model="up.catCd">
                        <option v-for="item in catCdList" :value="item.cd">
                            {{item.nm}}
                        </option>
                    </select>
                    <van-icon name="arrow-down" />
                </div>
                <svg class="icon" aria-hidden="true" @click="deletImg(i)">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
                <div class="i-item">
                    <iframe :src="'/wechat/static/pdf/web/viewer.html?file=' + up.url" height="560" :key="index"
                            width="100%" v-if="up.type.toLowerCase()=='pdf'" >
                    </iframe>
                    <img :src="up.url" v-else />
                </div>
            </div>
        </div>

        <div class="footer" @click="submit">
            <button>确认上传</button>
        </div>
    </div>
</template>

<script>
    import tempApp from "components/tempApp";
    import addr from "components/addr";
    import pdf from 'components/img/pdf.png'

    export default {
        data() {
            return {
                show:false,
                pdf,
                catCd:'',//每次上传时选择的报告分类
                catCdList:[],//报告集合
                imgUrl:[],
                info:{
                    statCd:'',
                    sysUserPk:'',
                    nm:'',
                    imgUrl:'',
                    no:'',
                    deteOrg:'',
                    pdfUrl:'',
                    supply:'',
                    prodNm:'',
                    prodProvCd:'',
                    prodCityCd:'',
                    intro:'',
                    rmks:'',
                    catCd:'',
                },
                statList:[],
                catCdList:[],
                name:'上传文件',
            };
        },
        created(){

            if(this.until.getQueryString('info')){
                let myInfo = JSON.parse(this.until.getQueryString('info'))
                // console.log(myInfo)
                this.imgUrl =  myInfo.pdfUrl ? JSON.parse(myInfo.pdfUrl): ''
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
                // this.catCdList = []
            }
        },
        mounted() {
            this.info.sysUserPk = JSON.parse(this.until.loGet('userInfo')).sysUserPk

            this.getStatCd()
            this.getCatCd()
        },
        methods: {
            // getInfo(){
            //     this.until.get('/prodx/mxrepo/info/'+this.info.mxRepoPk)
            //         .then(res=>{
            //             let detail = res.data
            //             this.imgUrl = detail.pdfUrl ? JSON.parse(detail.pdfUrl): ''
            //             this.info.statCd=detail.statCd
            //             this.info.nm=detail.nm
            //             this.info.no = detail.no
            //             this.info.deteOrg = detail.deteOrg
            //             this.info.pdfUrl = detail.pdfUrl
            //             this.info.supply = detail.supply
            //             this.info.prodNm = detail.prodNm
            //             this.info.prodProvCd = detail.prodProvCd
            //             this.info.prodCityCd = detail.prodCityCd
            //             this.info.intro = detail.intro
            //             this.info.rmks = detail.rmks
            //             // console.log('1111:'+this.info.prodProvCd)
            //         })
            // },
            getAddr:function(val){
                let cd = JSON.parse(val)
                // console.log(cd)
                this.info.prodProvCd = cd.cd1
                this.info.prodCityCd = cd.cd2
            },
            //获取状态
            getStatCd(){
                this.until.get('/general/cat/listByPrntCd?prntCd=60000')
                    .then(res=>{
                        this.statList = res.data.items
                        // console.log(this.statList)
                        this.info.statCd = this.statList[0].cd
                    })
            },
            //获取分类
            getCatCd(){
                this.until.get('/general/cat/listByPrntCd?prntCd=60005')
                    .then(res=>{
                        this.catCdList = res.data.items
                        // this.info.catCd = this.catCdList[0].cd
                        if(this.imgUrl.length>0){
                            this.imgUrl.forEach(item=>{
                                console.log(item.catCd)
                                for( let val of this.catCdList){
                                    if(item.catCd==val.nm){
                                        item.catCd = val.cd
                                    }
                                }
                            })
                        }
                    })
            },
            deletImg(index){
                // console.log('删除图片')
                this.imgUrl.splice(index,1)
                // console.log(this.imgUrl)
                // this.catCdList.splice(index,1)
            },
            Verification(){
                if(this.info.nm==''){
                    return false
                }
                // if(this.info.catCd==''){
                //     return false
                // }
                if(this.info.deteOrg==''){
                    return false
                }
                if(this.info.supply==''){
                    return false
                }
                if(this.info.prodNm==''){
                    return false
                }
                if(this.info.prodProvCd==''){
                    return false
                }
                if(this.info.prodCityCd==''){
                    return false
                }
                // if(this.info.statCd==''){
                //     return false
                // }
                // if(this.info.intro==''){
                //     return false
                // }
                if(this.info.rmks==''){
                    return false
                }
                return true
            },
            submit(){
                console.log('提交')
                if(this.Verification()){
                    this.$dialog.loading.open()
                    // this.imgUrl.forEach(item=>{
                    //     this.catCdList.push(item.catCd)
                    // })
                    // this.info.catCd = this.catCdList.join(',')
                    this.info.pdfUrl = JSON.stringify(this.imgUrl)
                    this.until.postData('/prod/mxrepo/edit',JSON.stringify(this.info))
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
            //上传的图片角度不对时，旋转，但是旋转后是base64格式的图片，要转成FormData对象上传
            upImg(fileObj){
                console.log('分类分类：'+this.catCd)
                if(!this.catCd){
                    this.$refs.upload.value = ''
                    this.$hero.msg.show({
                        text:'请选择报告分类！',
                        times:2000
                    });
                    return false
                }
                // console.log('开始上传图片')
                this.$dialog.loading.open()
                var file = fileObj.target.files['0']; //这里拿到的文件是blob类型
                // console.log(file.size)
                let maxSize = 1024*1024*10
                if(file.size>maxSize){
                    this.$dialog.loading.close()
                    this.$hero.msg.show({
                        text:'最大不能超过10M！',
                        times:1500
                    });
                    return
                }
                if (!/^image/.test(file.type)){
                     this.imgUpload(fileObj)
                 }else {
                    var Orientation = null;
                    if (file) {

                        //获取照片方向角属性，用户旋转控制
                        var that = this

                        that.EXIF.getData(file, function(){
                            that.EXIF.getAllTags(this);
                            Orientation = that.EXIF.getTag(this, 'Orientation');//这个Orientation 就是我们判断需不需要旋转的值了，有1、3、6、8
                        });


                        var oReader = new FileReader();

                        oReader.onload = function(e) {

                            var image = new Image();
                            image.src = e.target.result;

                            image.onload = function() {

                                var expectWidth = this.naturalWidth;
                                var expectHeight = this.naturalHeight;

                                if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                                    expectWidth = 800;
                                    expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
                                } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                                    expectHeight = 1200;
                                    expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
                                }
                                var canvas = document.createElement("canvas");
                                var ctx = canvas.getContext("2d");
                                canvas.width = expectWidth;
                                canvas.height = expectHeight;

                                //下面这两个是把透明背景变成白色背景
                                ctx.fillStyle = "#fff";
                                ctx.fillRect(0, 0, canvas.width, canvas.height);

                                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);

                                //如果方向角不为1，都需要进行旋转
                                // console.log(Orientation)
                                if(Orientation != "" && Orientation != 1){

                                    // alert('旋转处理');
                                    // console.log(Orientation)
                                    switch(Orientation){

                                        case 6://需要顺时针（向左）90度旋转

                                            // alert('（向左）90度旋转');

                                            that.rotateImg(this,'left',canvas);

                                            break;

                                        case 8://需要逆时针（向右）90度旋转

                                            // alert('向右）90度旋转');

                                            that.rotateImg(this,'right',canvas);

                                            break;

                                        case 3://需要180度旋转

                                            // alert('需要180度旋转');

                                            that.rotateImg(this,'right',canvas);//转两次

                                            that.rotateImg(this,'right',canvas);

                                            break;

                                    }

                                }

                                let base64 = canvas.toDataURL("image/jpeg", 0.8);
                                that.until.upBaseImg(base64).then(res=>{
                                    let newImg={
                                        name:file.name.split('.')[0],
                                        url:res,
                                        type:'jpg',
                                        catCd:that.catCd
                                    }
                                    that.catCd = ''
                                    let myIndex = that.imgUrl.findIndex(item=>{
                                        return item.catCd===newImg.catCd
                                    })
                                    console.log(myIndex)
                                    if(myIndex!='-1'){
                                        that.imgUrl.splice(myIndex,0,newImg)
                                    }else {
                                        that.imgUrl.push(newImg)
                                    }

                                    that.$dialog.loading.close()
                                })
                                // that.catCdList.push(that.catCd)

                                console.log(that.imgUrl)
                                // that.imgUrl.push(base64) //这里就是你放图片的地方啦



                            };

                        };

                        oReader.readAsDataURL(file);//注意一旦file不是blob类型这里是会报错的


                    }else{
                        this.$dialog.loading.close()
                        alert("暂不支持该格式！");

                        return;

                    }
                }

            },
            //旋转图片
            rotateImg(img, direction,canvas) {

                //最小与最大旋转方向，图片旋转4次后回到原方向

                var min_step = 0;

                var max_step = 3;

                if (img == null)return;

                //img的高度和宽度不能在img元素隐藏后获取，否则会出错

                var height = img.height;

                var width = img.width;

                var step = 2;

                if (step == null) {

                    step = min_step;

                }

                if (direction == 'right') {

                    step++;

                    //旋转到原位置，即超过最大值

                    step > max_step && (step = min_step);

                } else {

                    step--;

                    step < min_step && (step = max_step);

                }

                //旋转角度以弧度值为参数

                var degree = step * 90 * Math.PI / 180;

                var ctx = canvas.getContext('2d');

                switch (step) {

                    case 0:

                        canvas.width = width;

                        canvas.height = height;

                        ctx.drawImage(img, 0, 0);

                        break;

                    case 1:

                        canvas.width = height;

                        canvas.height = width;

                        ctx.rotate(degree);

                        ctx.drawImage(img, 0, -height);

                        break;

                    case 2:

                        canvas.width = width;

                        canvas.height = height;

                        ctx.rotate(degree);

                        ctx.drawImage(img, -width, -height);

                        break;

                    case 3:

                        canvas.width = height;

                        canvas.height = width;

                        ctx.rotate(degree);

                        ctx.drawImage(img, -width, 0);

                        break;

                }

            },
            imgUpload(e){
                this.$dialog.loading.open()
                let blob = e.target.files[0];
                this.until.upImg(e)
                    .then(res=>{
                        this.$dialog.loading.close()
                        var str = res;
                        this.imgUrl.push({
                            name:blob.name.split('.')[0],
                            url:str,
                            type:blob.name.split('.')[1]
                        })
                        console.log(this.imgUrl)
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
            tempApp,
            addr
        }
    };
</script>

