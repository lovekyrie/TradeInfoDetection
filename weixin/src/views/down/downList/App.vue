<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#container {
    ul{
        width: 80%;
        margin: 20px auto;
        li{
            background: #f9f9f9;
            border-radius: 3px;
            border: 1px solid #d4d4d4;
            text-align: center;
            height: 40px;

            width: 100%;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            img{
                width: auto;
                height: auto;
                max-height: 70%;
                margin-left: 10px;
                margin-right: 10px;
            }
            p{
                height: 40px;
                line-height: 40px;
                overflow: hidden;
            }
        }

    }
    >div{
        padding: 10px 20px;
        b{
            margin-top: 20px;
            display: block;
        }
    }
}
</style>

<template>
    <div id="container">
        <ul>
            <li @click="toDown(item.url)" v-for="item in urlList">

                <img :src=image v-if="item.type.toUpperCase()=='JPG' || item.type.toUpperCase()=='PNG' || item.type.toUpperCase()=='GIF' || item.type.toUpperCase()=='JPEG'" />
                <img :src=pdf v-if="item.type.toUpperCase()=='PDF'" />
                <img :src=word v-if="item.type.toUpperCase()=='DOC' || item.type.toUpperCase()=='DOCX'" />
                <p>{{item.name}}</p>

            </li>
        </ul>
        <div>
            下载需要在手机浏览器中才能进行<br/>
            <b>安卓手机：</b>
            点击右上角的三个点<br/>
            选择在浏览器中打开<br/>
            在浏览器打开的页面点击文件下载<br/>
            <b>苹果手机：</b>
            点击右上角的三个点<br/>
            选择在safari中打开<br/>
            在打开的页面点击要下载的文件<br/>
            点击页面下面的分享图标<br/>
            点击 存储到文件
        </div>
    </div>
</template>

<script>
    import pdfs from "components/contract.md";
    import image from './img/图片.png'
    import pdf from './img/pdf.png'
    import word from './img/word.png'
export default {
  data() {
    return {
        image,
        pdf,
        word,
        no:'',
        urlList:[]
    };
  },
  components:{
      pdfs
  },

  mounted() {
      console.log(this.until.getQueryString('urlList'))
      this.urlList = JSON.parse(this.until.getQueryString('urlList'))
      console.log(this.urlList)
  },
  methods: {
        toDown(item){
            console.log(item)
            window.open(item)
        }
  }
};
</script>
