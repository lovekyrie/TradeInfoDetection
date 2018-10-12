<template>
  <div id="app">
    <header-title :title="title"></header-title>
    <key-search></key-search>
      <div class="noResult" :style="{ display:show2 }">无查询结果</div>
      <product-develop :developList="productDevelopList"></product-develop>
      <div class="load-more">
        <span>加载更多</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
  </div>
</template>

<script>
import headerTitle from 'components/headerTitle'
import keySearch from "components/keySearch";
import productDevelop from "components/productDevelop";

export default {
  data(){
    return {
      title:'新产品研发人才',
      show: "block",
      show2: "none",
      productDevelopList: [
        {
          title: "实验室经理助理",
          name: "张无忌",
          phone: "0574-88889999",
        },
        {
          title: "实验室经理助理",
          name: "张无忌",
          phone: "0574-88889999",
        },
        {
          title: "实验室经理助理",
          name: "张无忌",
          phone: "0574-88889999",
        },
        {
          title: "实验室经理助理",
          name: "张无忌",
          phone: "0574-88889999",
        },
        {
          title: "实验室经理助理",
          name: "张无忌",
          phone: "0574-88889999",
        },
      ],
    }
  },
  methods:{

  },
  components:{
    headerTitle,
    keySearch,
    productDevelop,
  }
}
</script>

<style lang='less'>
html,
body {
  height: 100%;
  background-color: #f7f7f7;
}

#app{
  height: 100%;
  .load-more{
    margin-top: .2rem;
    text-align: center;
  }
 
}
</style>
