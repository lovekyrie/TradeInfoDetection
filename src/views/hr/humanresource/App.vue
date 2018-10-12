<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#container{
  height: 100%;
  .load-more{
    margin-top: .2rem;
    text-align: center;
  }
 
}
</style>

<template>
    <div id="container">
      <header-title :title="title"></header-title>
      <key-search></key-search>
      <div class="noResult" :style="{ display:show2 }">无查询结果</div>
      <hr-list :hrInfoList="hrInfoList"></hr-list>
      <div class="load-more">
        <span>加载更多</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
      <foot-button :btnObj="btnObj"></foot-button>
    </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import keySearch from "components/keySearch";
import hrList from "components/hrList";
import footButton from "components/footButton";

export default {
  data() {
    return {
      title:'人力资源',
      btnObj: {
        btnName:"发布人才需求",
        src: "https://www.baidu.com"
      },
      startTime: "",
      endTime: "",
      show: "block",
      show2: "none",
      hrInfoList: [
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元／月",
          phone: "0574-88889999",
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元／月",
          phone: "0574-88889999",
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元／月",
          phone: "0574-88889999",
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元／月",
          phone: "0574-88889999",
        },
        {
          title: "实验室经理助理1名",
          company: "浙江宁波华信质检",
          salary: "4000-5000元／月",
          phone: "0574-88889999",
        },
      ],
      strPageCount: 1,
      strPageRows: 10
    };
  },
  mounted() {},
  methods: {},
  components: {
    keySearch,
    hrList,
    footButton,
    headerTitle,
  }
};
</script>

