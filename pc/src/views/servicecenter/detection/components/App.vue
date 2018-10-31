<template>
  <div id="container">
    <!--顶部-->
    <div id="header">
      <ul>
        <li><a class="login" href="../entry/login.html">登录</a></li>
        <li><a href="../entry/register.html">注册</a></li>
      </ul>
    </div>
    <!--图标-->
    <div id="icon">
      <img src="../../../entry/login/img/logo.png">

      <!--搜索框-->
      <el-input placeholder="找服务">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <input class="releaseButton" type="button" value="发布检测服务">
    </div>
    <!--中间主体-->
    <div id="main">

      <!--分页内容-->
      <el-table
        :data="tableData"
        style="width: 61%;min-width: 600px"
      align="left"
      padding="5px">
        <el-table-column
          prop="Ttitle"
          label="检测服务标题"
          width="230">

          <!--插入第一列标题链接,scope相当于table，可以访问表内数据-->
          <template slot-scope="scope">
            <a :href="tableData[scope.$index].Address"
               target="_blank"
               class="buttonText">{{tableData[scope.$index].Ttitle}}</a>
          </template>

        </el-table-column>
        <el-table-column
          prop="Tclassification"
          label="检测服务分类">
        </el-table-column>
        <el-table-column
          prop="Tclassification_b"
          label="二级类别">
        </el-table-column>
        <el-table-column
          prop="Ttime"
          label="发布时间">
        </el-table-column>
        <el-table-column
          align="center"
          prop="Toperation"
          label="操作">
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
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout=" prev, pager, next, total,jumper"
          :total="totalCount">
        </el-pagination>

      </div>
    </div>
    <!--页脚-->
    <div id="footer">
      <tradeFooter></tradeFooter>
    </div>
    <!--<div id="footer">-->
    <!--<p>版权所有：宁波贸信检测技术有限公司 信息产业部备案/许可证编号：浙ICP备16007937号</p>-->
    <!--<p>宁波贸信检测技术服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;地址：宁波市鄞州区富强路555号三、四楼&nbsp;&nbsp;电话：+86-574-89201299</p>-->
    <!--<p>传真：+86-574-89017298&nbsp;&nbsp;&nbsp;&nbsp;E-mail：info@gig-lab.com&nbsp;&nbsp;&nbsp;&nbsp;http://www.gig-lab.com</p>-->
    <!--</div>-->

  </div>
</template>

<script>
  import tradeFooter from 'components/tradeFooterl'

  export default {
    data(){
      return{
        currentPage:1,
        totalCount:160,
        pageSize:8,

        tableData:[{
          Address:'./detectionDetails.html',
          Ttitle:'儿童家具儿童家居质检0',
          Tclassification:'家具检测',
          Tclassification_b:'木质',
          Ttime:'2018-06-06'
        },{
          Address:'./detectionDetails.html',
          Ttitle:'儿童家具儿童家居质检1',
          Tclassification:'家具检测',
          Tclassification_b:'木质',
          Ttime:'2018-06-06'
        },{
          Address:'./detectionDetails.html',
          Ttitle:'儿童家具儿童家居质检2',
          Tclassification:'家具检测',
          Tclassification_b:'木质',
          Ttime:'2018-06-06'
        },{
          Address:'./detectionDetails.html',
          Ttitle:'儿童家具儿童家居质检3',
          Tclassification:'家具检测',
          Tclassification_b:'木质',
          Ttime:'2018-06-06'
        },{
          Address:'./detectionDetails.html',
          Ttitle:'儿童家具儿童家居质检4',
          Tclassification:'家具检测',
          Tclassification_b:'木质',
          Ttime:'2018-06-06'
        },{
          Address:'./detectionDetails.html',
          Ttitle:'儿童家具儿童家居质检5',
          Tclassification:'家具检测',
          Tclassification_b:'木质',
          Ttime:'2018-06-06'
        },{
          Address:'./detectionDetails.html',
          Ttitle:'儿童家具儿童家居质检6',
          Tclassification:'家具检测',
          Tclassification_b:'木质',
          Ttime:'2018-06-06'
        },{
          Address:'./detectionDetails.html',
          Ttitle:'儿童家具儿童家居质检7',
          Tclassification:'家具检测',
          Tclassification_b:'木质',
          Ttime:'2018-06-06'
        },
        ]
      }
    },
    components:{
      tradeFooter,
    },
    methods:{
      //编辑当前行
      handleEdit(index, row) {
        console.log(index, row);
      },
      //删除当前行
      handleDelete(index, row) {
        console.log(index, row);
      },

      //分页条数
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      //当前页
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style>


</style>
