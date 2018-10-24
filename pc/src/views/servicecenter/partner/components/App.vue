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
      <el-input placeholder="找设备">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <input class="releaseButton" type="button" value="发布资源">
    </div>
    <!--中间主体-->
    <div id="main">

      <!--分页内容-->
      <div class="inContent">
        <table>
          <tr>
            <td class="tableTitle"><ul><li>检测机器设备提供</li></ul></td>
            <td></td>
            <td class="tableRight_a">设备资源</td>
          </tr>
          <tr>
            <td class="tableDec">公司拥有检测设备，及某某设备资源</td>

          </tr>
          <tr>
            <td>张先生</td>
            <td>15055555200</td>
            <td class="tableRight_b">2018年6月20日</td>
          </tr>
        </table>
      </div>
      <div class="inContent">
        <table>
          <tr>
            <td class="tableTitle"><ul><li>检测机器设备提供</li></ul></td>
            <td></td>
            <td class="tableRight_a">设备资源</td>
          </tr>
          <tr>
            <td class="tableDec">公司拥有检测设备，及某某设备资源</td>

          </tr>
          <tr>
            <td>张先生</td>
            <td>15055555200</td>
            <td class="tableRight_b">2018年6月20日</td>
          </tr>
        </table>
      </div>
      <div class="inContent">
        <table>
          <tr>
            <td class="tableTitle"><ul><li>检测机器设备提供</li></ul></td>
            <td></td>
            <td class="tableRight_a">设备资源</td>
          </tr>
          <tr>
            <td class="tableDec">公司拥有检测设备，及某某设备资源</td>

          </tr>
          <tr>
            <td>张先生</td>
            <td>15055555200</td>
            <td class="tableRight_b">2018年6月20日</td>
          </tr>
        </table>
      </div>
      <div class="inContent">
        <table>
          <tr>
            <td class="tableTitle"><ul><li>检测机器设备提供</li></ul></td>
            <td></td>
            <td class="tableRight_a">设备资源</td>
          </tr>
          <tr>
            <td class="tableDec">公司拥有检测设备，及某某设备资源</td>

          </tr>
          <tr>
            <td>张先生</td>
            <td>15055555200</td>
            <td class="tableRight_b">2018年6月20日</td>
          </tr>
        </table>
      </div>
      <div class="inContent">
        <table>
          <tr>
            <td class="tableTitle"><ul><li>检测机器设备提供</li></ul></td>
            <td></td>
            <td class="tableRight_a">设备资源</td>
          </tr>
          <tr>
            <td class="tableDec">公司拥有检测设备，及某某设备资源</td>

          </tr>
          <tr>
            <td>张先生</td>
            <td>15055555200</td>
            <td class="tableRight_b">2018年6月20日</td>
          </tr>
        </table>
      </div>


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
  import tradeFooter from 'components/tradeFooter'

  export default {
    data(){
      return{
        currentPage:1,
        totalCount:100,
        pageSize:5,
      }
    },
    components:{
      tradeFooter,
    },
    methods:{
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
