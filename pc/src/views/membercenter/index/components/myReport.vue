<template>
   <div class="myreport">

          <!--搜索框-->
          <div class="mainSearch">
            <el-form :inline="true" :model="search" class="demo-form-inline">

              <el-form-item>
                <el-input class="searchInput_a" v-model="search.reportTitle" placeholder="报告标题"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.id" placeholder="序列号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.testingAgency" placeholder="检测机构"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input class="searchInput_a" v-model="search.testingName" placeholder="质检产品名称"></el-input>
              </el-form-item>
              <br/>
              <el-form-item label="性质：">
                <el-select v-model="value">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">搜索</el-button>
              </el-form-item>
              <a class="upReport" href="#">报告上传</a>
            </el-form>

          </div>
          <!--收藏信息-->
          <el-table
            :data="tableData"
            style="width: 100%"
            align="left"
            padding="5px">
            <el-table-column
              prop="reportTitle"
              label="报告标题"
            >
              <template slot-scope="scope">
               <a :href="tableData[scope.$index].reportAddress"
                  target="_self"
               >{{tableData[scope.$index].reportTitle}}
               </a>
              </template>
            </el-table-column>

            <el-table-column
              prop="id"
              label="序列号"
              >
            </el-table-column>
            <el-table-column
              prop="testingAgency"
              label="检测机构"
              width="160px"
            >
            </el-table-column>
            <el-table-column
              prop="testingName"
              label="质检产品名称"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="property"
              label="性质"
              width="70"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="upTime"
              label="上传时间"
              align="center"
            >
            </el-table-column>

            <el-table-column
              align="center"
              prop="Toperation"
              label="操作"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                <el-button
                  size="mini"
                  @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
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
          reportTitle:'',
          id:'',
          testingAgency:'',
          testingName:'',
        },
        tableData: [
          {
            reportTitle:'福州福州服饰有限公司防晒衣检测报告',
            reportAddress:'./reportDetail.html',
            id:'1023240321223102',
            testingAgency:'宁波贸信检测',
            testingName:'防晒衣',
            property:'公开',
            upTime:'2018-06-06 12:00:00',
          },{
            reportTitle:'福州福州服饰有限公司防晒衣检测报告',
            reportAddress:'./reportDetail.html',
            id:'1023240321223102',
            testingAgency:'宁波贸信检测',
            testingName:'防晒衣',
            property:'公开',
            upTime:'2018-06-06 12:00:00',
          },{
            reportTitle:'福州福州服饰有限公司防晒衣检测报告',
            reportAddress:'./reportDetail.html',
            id:'1023240321223102',
            testingAgency:'宁波贸信检测',
            testingName:'防晒衣',
            property:'公开',
            upTime:'2018-06-06 12:00:00',
          },
        ],
        options:[
          {value:0,
          label:'全部'},
          {value:1,
          label:'公开'},
          {value:2,
          label:'私密'},
        ],
        value:0
      }
    },
     methods: {
      //编辑当前行
      handleEdit(index, row) {
        console.log(index, row);
      },

      //删除当前行
      handleDelete(index, row) {
        console.log(index, row);
      },
    }
};
</script>

<style lang='less'>
.myreport {
  flex: 5.5;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 50px;

  //搜索框
  .mainSearch {
    text-align: left;
    padding: 0 20px;

    .el-input__inner {
      border-radius: 0;
    }

    //表单宽度
    .searchInput_a {
      width: 180px;
    }

    //选择器表单宽度
    .el-select {
      width: 140px;
    }
    label {
      color: rgb(144, 144, 144);
      font-weight: 200;
    }

    .el-button {
      width: 100px;
    }

    .el-button--primary {
      background-color: rgb(13, 85, 210);
    }

    //上传报告按钮
    .upReport {
      display: inline-block;
      float: right;
      text-align: center;
      width: 120px;
      height: 36px;
      line-height: 36px;
      border: 1px solid rgb(201, 201, 201);
      border-radius: 4px;
      position: relative;
      right: 20px;
    }
  }
  //表格
  .el-table {
    margin: 0 auto;
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

    //字体颜色
    tr .cell {
      color: rgb(134, 134, 134);
      word-break: break-all;
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
    .el-button--mini {
      border: none;
      font-size: 14px;
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
