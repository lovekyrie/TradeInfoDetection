<template>
  <div class="industry">
    <div class="industry-wrap" v-for="(item, index) in industryList" :key="index+1" @click="toDetail(item.sysNewsPk)">
      <div>
        <img :src="item.imgUrl" alt="">
      </div>
      <div>
        <h4>{{item.nm}}</h4>
        <p>{{item.cont}}</p>
      </div>
    </div>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import industryImg from "../images/行业动态_03.png";

export default {
  data() {
    return {
      industryImg,
      pageNo:1,
      pageSize:20,
      total:0,
      industryObj: {

        ipPk:1,
        src: industryImg,
        title: "【动态分类】检测行业最新标准今早颁布",
        content: "检测行业最新标准今早颁布，所有检测标准都已更新，速看！"
      },
      industryList: []
    };
  },
  mounted() {
    this.getList()
  },
  methods:{
    getList(){
      // let query = new this.Query();
      // query.buildPageClause(this.pageNo,this.pageSize);
      let page = {
        p:{
          n:this.pageNo,
          s:this.pageSize
        }
      }
      let param = {
        query:JSON.stringify(page),
        value:'30040.170',
        // query:query.getParam()
      }
      this.until.get('/sys/news/page',param)
        .then(res=>{
          if(res.status==='200'){
            this.total = res.page.total
            this.industryList = res.data.items
            this.industryList.forEach(item=>{
              item.cont = item.cont.replace(/<\/?[^>]*>/g, "").substring(0,120)+'...';
            })
          }else {
            this.$message({
              message:res.message,
              type: 'warning'
            });
          }
          // console.log(res)

        })
    },
     //跳转到详情页面
        toDetail(ipPk){
            this.$router.push({
                path:'/industryDetail',
                query:{
                    ipPk:ipPk
                }
            })
        },
    handleCurrentChange(val){
      this.pageNo = val
      this.getList()
    }
  }
};
</script>

<style lang='less'>
.industry {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  .block{
    padding: 20px 0;
  }
  .block{
    width: 1200px;
    margin: 0 auto;
  }
  .industry-wrap {
    cursor: pointer;
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border-bottom: 1px solid #ddd;
    > div {
      &:nth-of-type(1) {
        width: 10%;
        margin-right: 20px;
        img{
          width: auto;
          max-width: 100%;
        }
      }
      &:nth-of-type(2) {
        flex: 1;
        h4 {
          font-size: 20px;
          margin: 20px 0;
        }
        p {
          font-size: 16px;
          color: #a1a1a1;
        }
      }
    }
  }
}
</style>
