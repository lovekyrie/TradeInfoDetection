<template>
   <div class="equipment" v-loading="loading">
    <!--搜索框-->
    <div class="mainSearch">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input class="searchInput_a" v-model="search.stitle" placeholder="职位名称"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="toSearch">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="toAddJob" class="release">发布招聘信息</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" style="width: 100%" align="left" padding="5px">
      <el-table-column prop="title" label="职位名称"  align="center">
        <!--插入第一列标题链接,scope相当于table，可以访问表内数据-->
        <template slot-scope="scope">
          <a class="buttonText" @click="toDetail(tableData[scope.$index].mxPubRecrPk)">{{tableData[scope.$index].nm}}</a>
        </template>
      </el-table-column>
      <el-table-column  label="薪资"  align="center">
        <template slot-scope="scope">
          {{tableData[scope.$index].frSala}} - {{tableData[scope.$index].toSala}}元/月
        </template>
      </el-table-column>
      <el-table-column  prop="crtTm" label="发布时间"  align="center">
      </el-table-column>

      <el-table-column  align="center"  label="操作"  width="130" >
        <template slot-scope="scope">
          <el-button
            size="small"
            @click.stop="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loading:false,
      search:{
        stitle:'',
      },
      tableData:[],
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
    toDetail(ipPk){
      this.$router.push({
        path:'/recruitDetail',
        query:{
          ipPk:ipPk
        }
      })
    },
    //删除当前行
    handleDelete(index, row) {
      this.loading = true;
      // console.log(index, row);
      this.until.get('/prod/mxpubrecr/del?pks='+row.mxPubRecrPk)
        .then(res=>{
          this.loading = false;
          if(res.status=='200'){
            this.tableData.splice(index,1)
            this.$message({
              message:'删除成功！',
              type:'success'
            });
          }else {
            this.$message({
              message:res.message,
              type:'warning'
            });
          }
        })
    },
    getList(){
      this.loading = true;
      let query = new this.Query();
      query.buildWhereClause('nm',this.search.stitle,'LK');

      query.buildPageClause(this.pageNo,this.pageSize);
      let param = query.getParam();
      this.until.get('/prod/mxpubrecr/pageSelf',param)
        .then(res=>{
          this.loading = false;
          if(res.status == 200){
            this.total = res.page.total
            res.data.items.forEach(item=>{
              item.crtTm = item.crtTm.split(' ')[0]
            })
            this.tableData = res.data.items


          }else {
            this.$message({
              message:res.message,
              type:'warning'
            });
          }
        },err=>{});
    },
    toSearch(){
        this.pageNo = 1
        this.list = []
        this.getList()
    },
    toAddJob(){
      if(!this.until.ifLogin()){
        return false
      }
      this.$router.push({
        path:'/addrecruit'
      })
    }
  }
};
</script>

<style>
</style>
