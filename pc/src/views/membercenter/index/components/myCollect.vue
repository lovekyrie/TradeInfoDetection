<template>
   <div class="collect">

          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.id" placeholder="序列号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.name" placeholder="检测产品名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.supplierName" placeholder="供应商名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_b" v-model="search.place" placeholder="质检产品地域省、市"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!--收藏信息-->
          <el-table  :data="tableData" style="width: 100%"  align="left" padding="5px">
            <el-table-column prop="id" label="序列号" width="200"></el-table-column>
            <el-table-column prop="name" label="质检产品名称"></el-table-column>
            <el-table-column prop="supplierName" label="供应商名称"> </el-table-column>
            <el-table-column prop="place" label="质检产品地域"  align="center" > </el-table-column>
            <el-table-column align="center"  prop="Toperation" label="操作" width="130" >
              <template slot-scope="scope">
                <el-button
                  size="small"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>


        </div>

</template>

<script>
export default {
  data() {
    return {
      search: {
        id: "",
        name: "",
        supplierName: "",
        place: ""
      },
      tableData: [
        {
          id: "1100023232142311",
          name: "防晒衣",
          supplierName: "宁波贸信检测",
          place: "浙江 - 宁波"
        },
        {
          id: "1100023232142311",
          name: "防晒衣",
          supplierName: "宁波贸信检测",
          place: "浙江 - 宁波"
        },
        {
          id: "1100023232142311",
          name: "防晒衣",
          supplierName: "宁波贸信检测",
          place: "浙江 - 宁波"
        }
      ]
    };
  },
  methods: {
    //删除当前行
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang='less'>
.collect {
  flex: 5.5;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 50px;

  //搜索框
  .mainSearch {
    text-align: center;

    .el-input__inner {
      border-radius: 0;
    }

    .searchInput_a {
      width: 120px;
    }
    .searchInput_b {
      width: 180px;
    }

    .el-button {
      width: 100px;
    }

    .el-button--primary {
      background-color: rgb(13, 85, 210);
    }
  }
  //表格
  .el-table {
    margin: 0 auto;
    margin-bottom: 100px;
    border: none;
    font-size: 14px;
    color: rgb(144, 144, 144);

    //表头背景颜色
    .el-table__footer-wrapper thead div,
    .el-table__header-wrapper thead div {
      background-color: rgb(241, 241, 241);
    }

    //表头行高
    th {
      background-color: rgb(241, 241, 241);
      height: 48px;
    }

    //表头字体颜色
    tr .cell {
      color: rgb(134, 134, 134);
    }

    //表格底边框
    td,
    th.is-leaf {
      border-bottom: 2px solid rgb(241, 241, 241);
    }
    //除表头外行高
    td {
      height: 62px;
      .el-table_1_column_1 .cell {
        color: rgb(13, 85, 210);
      }
    }

    //编辑删除按钮样式
    .el-button--small {
      font-size: 14px;
      width: 60px;
    }
  }
  //elui表格后的细线消除
  .el-table::after {
    width: 0;
  }
  //表格内颜色消除
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: white;
  }
}
</style>
