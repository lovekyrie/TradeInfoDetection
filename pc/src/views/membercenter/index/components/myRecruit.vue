<template>
   <div class="equipment">
    <!--搜索框-->
    <div class="mainSearch">
      <el-form :inline="true" :model="search" class="demo-form-inline">
        <el-form-item>
          <el-input class="searchInput_a" v-model="search.stitle" placeholder="设备标题"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="toAddEquipment" class="release">发布招聘信息</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--收藏信息-->
    <el-table :data="tableData" style="width: 100%" align="left" padding="5px" @row-click="toEquipmentDetail()">
      <el-table-column prop="title" label="设备标题"  align="center">
        <!--插入第一列标题链接,scope相当于table，可以访问表内数据-->
        <template slot-scope="scope">
          <a :href="tableData[scope.$index].address"
              target="_self"
              class="buttonText">{{tableData[scope.$index].Ttitle}}</a>
        </template>
      </el-table-column>
      <el-table-column  prop="contacts" label="联系人"  align="center"> </el-table-column>
      <el-table-column prop="contactWay" label="联系方式" align="center"> </el-table-column>
      <el-table-column  align="center"  label="操作"  width="130" >
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
export default {};
</script>

<style>
</style>
