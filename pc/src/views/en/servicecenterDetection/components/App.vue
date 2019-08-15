<template>
  <div id="container" v-loading="loading">
    <!--顶部-->
    <header-top></header-top>
    <!--图标-->
    <div id="icon">
      <a href="../en/index.html">
        <img src="../../entryLogin/img/logo.png">
      </a>

      <!--搜索框-->
      <el-input placeholder="Services" v-model="key">
        <el-button slot="append" @click="search">Search</el-button>
      </el-input>
      <input class="releaseButton" type="button" value="Publish Detection Services" @click="submit">
    </div>
    <!--中间主体-->
    <div id="main">
      <p></p>
      <!--分页内容-->
      <el-table
        :data="list"
      align="left"
      padding="5px">
        <template slot="empty">
          No information available
        </template>
        <el-table-column
          prop="nm"
          label="Detection Service Title"
          width="230">

          <!--插入第一列标题链接,scope相当于table，可以访问表内数据-->
          <template slot-scope="scope">
            <a :href="'servicecenterDetectionDetails.html?id='+list[scope.$index].mxPubThrserPk"
               class="buttonText">{{list[scope.$index].nm}}</a>
          </template>

        </el-table-column>
        <el-table-column
          prop="catNm"
          label="classification">
        </el-table-column>
        <el-table-column
          prop="twoNm"
          label="Class two">
        </el-table-column>
        <el-table-column
          prop="crtTm"
          label="Time Posted">
        </el-table-column>
        <el-table-column
          align="center"
          prop="Toperation"
          label="Operate">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"><a href="#" class="el-icon-edit"></a></el-button>
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)"><a href="#" class="el-icon-delete"></a></el-button>
          </template>
        </el-table-column>
      </el-table>

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
  import HeaderTop from "@/componentsEn/headerTop";
  export default {
    data(){
      return{
        login:false,
        loading:false,
        userPk:'',
        key:'',
        pageNo:1,
        total:0,
        pageSize:10,
        list:[],
      }
    },
    components:{
      tradeFooter,HeaderTop
    },
    mounted(){
      let info=JSON.parse(this.until.loGet('user'))
      this.userPk = info.sysUserPk
      this.getInfo()
      this.getList()
    },
    methods:{
      submit(){
        window.location.href = 'servicecenterDetectionSubmit.html'
      },
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
      search(){
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
        let url = '/prodx/mxpubthrser/pageSelf'
        this.until.get(url,param)
          .then(res=>{
            this.loading = false;
            if(res.status == 200){
              this.total = res.page.total

                res.data.items.forEach(item=>{
                  item.crtTm = item.crtTm ? item.crtTm.split(' ')[0]:''
                })
                this.list = res.data.items

            }else {

            }
          },err=>{});
      },
      //编辑当前行
      handleEdit(index, row) {
        window.location.href = 'servicecenterDetectionSubmit.html?info='+JSON.stringify(row)
        // console.log(index, row);
      },
      //删除当前行
      handleDelete(index, row) {
        this.$confirm('Determine to delete?', 'Tips', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.until.get('/prod/mxpubthrser/del?pks='+row.mxPubThrserPk)
            .then(res=>{
              if(res.status=='200'){
                this.$message({
                  message:'Delete successfully!',
                  type:'success'
                })
                this.list.splice(index,1)
              }
            })
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });

        // console.log(index, row);
      },

      //分页条数
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      //当前页
      handleCurrentChange(val) {
        this.pageNo = val
        this.getList()
      }
    }
  }
</script>

<style>
  .releaseButton{
    border-width: 1px!important;
    width: auto !important;
    padding-left: 15px;
    padding-right: 15px;
    background: #fff!important;
  }
.el-table__body-wrapper{
  overflow: hidden !important;
}

</style>
