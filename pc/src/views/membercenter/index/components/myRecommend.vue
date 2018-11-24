<template>
    <div class="recommend">

          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="name"
              label="一级人员"
              align="center"
              >
            </el-table-column>
            <el-table-column
              prop="number"
              label="二级人数"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="date"
              label="时间">
            </el-table-column>
          </el-table>


        </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        name: "",
        number: "",
        date: ""
      },
      tableData: [
        {
          name: "张三",
          number: "5",
          date: "2018-06-06  13:00:12"
        },
        {
          name: "李四",
          number: "5",
          date: "2018-06-06  13:00:12"
        },
        {
          name: "王五",
          number: "5",
          date: "2018-06-06  13:00:12"
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
.recommend {
  flex: 5.5;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 50px;

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
