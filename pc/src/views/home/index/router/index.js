import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import buyer from '../components/buyer.vue'
import industry from '../components/industry.vue'
import platform from '../components/platform.vue'
import seller from '../components/seller.vue'
import service from '../components/service.vue'
import industryDetail from '../components/industryDetail.vue'
import platformDetail from '../components/platformDetail.vue'

export default new VueRouter({
  routes:[
    {path:'/buyer',component:buyer},
    {path:'/industry',component:industry},
    {path:'/platform',component:platform},
    {path:'/seller',component:seller},
    {path:'/service',component:service},
    {path:'/industryDetail',component:industryDetail},
    {path:'/platformDetail',component:platformDetail}
  ]
})