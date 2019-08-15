<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <div id="header">
      <ul v-if="!login">
        <li><a class="login" href="./entryLogin.html">Login</a></li>
        <li><a href="./entryRegister.html">Register</a></li>
      </ul>
      <ul v-else>
        <li><a class="login" href="../en/index.html#/center">{{myInfo.usNm}}</a></li>
        <li><a href="#" @click="loginOut()">Quite</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <a href="../en/index.html">
        <img src="../../entryLogin/img/logo.png">
      </a>
      <!--搜索框-->
      <el-input placeholder="">
        <el-button slot="append">Search</el-button>
      </el-input>
      <input class="releaseButton" type="button" value="Publishing resources" @click="submit">
    </div>
    <!--中间主体-->
    <div id="main">

      <!--分页内容-->
      <div class="inContent" v-for="(item,index) in list" :key="index">
        <table>
          <tr>
            <td class="tableTitle"><ul><li>{{item.nm}}</li></ul></td>
            <td></td>
            <td class="tableRight_a">{{item.catNm}}</td>
          </tr>
          <tr>
            <td class="tableDec">{{item.rmks}}</td>

          </tr>
          <tr>
            <td>{{item.contNm}}</td>
            <td>{{item.contMob}}</td>
            <td class="tableRight_b">{{item.rcdTm}}</td>
          </tr>
        </table>
      </div>

      <!--分页选框-->
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pageNo"
          :page-size="pageSize"
          layout="pager, next, total"
          :total="total">
        </el-pagination>

      </div>
    </div>
    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
    </div>

  </div>
</template>

<script>
  import tradeFooter from '@/componentsEn/tradeFooterl'
  import tradeHeader from "@/componentsEn/tradeHeader";
  export default {
    data(){
      return{
        login:false,
        loading:false,
        userPk:'',
        key:'',
        pageNo:1,
        total:0,
        pageSize:20,
        myInfo:{},
        list:[]
      }
    },
    components:{
      tradeFooter,tradeHeader
    },
    mounted(){
      let info=JSON.parse(this.until.loGet('user'))
      this.userPk = info.sysUserPk
      this.getInfo()
      this.getList()
    },
    methods:{
      //获取个人信息
      getInfo(){
        this.until.get('/sys/user/info/'+this.userPk)
          .then(res=>{
            if(res.status == '200'){
              this.login = true
              this.myInfo = res.data
              this.type = this.myInfo.arg1
              this.until.loSave('userInfo',JSON.stringify(this.myInfo));
            }else {
              this.login = false
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          })
      },
      //注销
      loginOut(){
        this.until.get('/general/access/logout')
          .then(res=>{
            if(res.status=='200'){
              this.until.loRemove('userInfo')
              this.until.loRemove('user')
              this.$message({
                message: 'Cancellation success!',
                type: 'success'
              });
              window.location.href='../en/entryLogin.html'
            }else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }

          })
      },
      search(val){
        this.key = val
        this.list = []
        this.pageNo = 1
        this.getList()
      },
      getList(){
        this.loading = true;
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
          value:this.key
        }
        let url = '/prod/mxpubreq/pageSelf'
        this.until.get(url,param)
          .then(res=>{
            this.loading = false;
            if(res.status == 200){
              this.total = res.page.total

                res.data.items.forEach(item=>{
                  item.rcdTm = item.rcdTm ? item.rcdTm.split(' ')[0]:''
                })
                this.list=res.data.items

            }else {

            }
          },err=>{});
      },
      //分页条数
      submit() {
        if(!this.until.ifLogin()){
          return false
        }
       window.location.href = 'servicecenterPartnerSubmit.html'
      },
      //当前页
      handleCurrentChange(val) {
        this.pageNo = val
        this.getList()
        // console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style>


</style>
