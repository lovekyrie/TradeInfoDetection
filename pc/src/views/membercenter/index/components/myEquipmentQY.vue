<template>
     <div class="equipment" v-loading="loading">

          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.stitle" placeholder="设备标题"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="toSearch">搜索</el-button>
              </el-form-item>
              <el-form-item>
                <el-button @click="toAddEquipment" class="release">发布设备需求</el-button>
              </el-form-item>
            </el-form>
          </div>

         <div class="equipment-list">
           <div v-for="(item, index) in list" :key="index" @click="toEquipmentDetail(item.mxPubDevPk)"  class="cursor">
             <div>
               <img :src="item.imgUrl" alt="">
             </div>
             <p>{{item.nm}}</p>
             <p>{{item.statNm}}</p>
           </div>
         </div>
         <div class="block">
           <el-pagination
             @current-change="handleCurrentChange"
             :current-page=pageNo
             :page-size=pageSize
             layout="total, prev, pager, next, jumper"
             :total=total>
           </el-pagination>
         </div>

        </div>
</template>

<script>
export default {
  data() {
      return {
        list:[],
        loading:false,
        pageNo:1,
        pageSize:20,
        total:0,
        search: {
          stitle: '',
        },
      }
    },
  mounted(){
    this.getList()
  },
     methods: {
       toSearch(){
         // console.log('111111')
         this.pageNo = 1
         this.list = []
         this.getList()
       },
       getList(){
         this.loading = true;
         let query = new this.Query();
         // query.buildWhereClause('nm',this.search.stitle,'LK');
         query.buildPageClause(this.pageNo,this.pageSize);
         let param = {
           nm:this.search.stitle,
           query:query.getParam().query
         }
         this.until.get('/prod/mxpubdev/pageSelf',param)
           .then(res=>{
             this.loading = false;
             if(res.status == 200){
               this.total = res.page.total
               res.data.items.forEach(item=>{
                 item.crtTm = item.crtTm.split(' ')[0]
               })
               this.list = res.data.items


             }else {
               this.$message({
                 message:res.message,
                 type:'warning'
               });
             }
           },err=>{});
       },
       handleCurrentChange(val){
         this.pageNo=val
         this.getList()
       },
      //删除当前行
      handleDelete(index, row) {
        this.until.get('/prod/mxpubdev/del?pks='+row.mxPubDevPk)
          .then(res=>{
            if(res.status=='200'){
              this.$message({
                message:'删除成功！',
                type:'success'
              })
              this.list.splice(index,1)
            }
          })
        // console.log(index, row);
      },
      toAddEquipment(){
        this.$router.push({
          path:'/addequipment'
        })
      },
      toEquipmentDetail(pk){
         window.location.href = '../seller/enterpriseEquipmentd.html?pk='+pk

      }
    }
}
</script>

<style lang='less'>
 .equipment {
        flex: 5.5;
        background-color: white;
        padding-top: 30px;
        padding-bottom: 50px;

        //搜索框
        .mainSearch{
          text-align: left;
          padding: 0 15px;

          .el-input__inner{
            border-radius: 0;
          }

          .searchInput_a{
            width: 150px;

          }

          //搜索按钮

          .el-button{
            width: 100px;
          }

          .release{
            width: 130px;
          }

          .searchButton{
            width: 120px;
          }

          .el-button--primary{
            background-color: rgb(13,85,210);
          }

        }
   .equipment-list{
     display: -webkit-flex;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;

     >div{
       width: 275px;
       padding-bottom: 20px;
       display: -webkit-flex;
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       text-align: center;
       margin-left: 40px;
       div{
         height: 200px;
         display: flex;
         display: -webkit-flex;
         align-items: center;
         justify-content: center;
         img{
           width: auto;
           height: auto;
           max-height: 100%;
           max-width: 100%;
         }
       }
       div{
         width: 100%;
         margin-bottom: 20px;
       }

       p:first-of-type{
         padding-right: 15px;
         flex: 1;
         text-align: left;
       }
       p:last-of-type{
         float: right;
       }

     }
   }



      }
</style>
