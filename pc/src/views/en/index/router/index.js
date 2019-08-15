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

import membercenter from '../../../en/membercenter/app.vue'
import accountManager from '../../../en/membercenter/components/accountManager.vue'
import center from '../../../en/membercenter/components/center.vue'
import addAddress from '../../../en/membercenter/components/addAddress.vue'
import addEquipment from '../../../en/membercenter/components/addEquipment.vue'
import addRecruit from '../../../en/membercenter/components/addRecruit.vue'
import addressList from '../../../en/membercenter/components/addressList.vue'
import changePwd from '../../../en/membercenter/components/changePwd.vue'
import goldExchange from '../../../en/membercenter/components/goldExchange.vue'
import goldRecharge from '../../../en/membercenter/components/goldRecharge.vue'
import myCollect from '../../../en/membercenter/components/myCollect.vue'
import myEquipment from '../../../en/membercenter/components/myEquipment.vue'
import myEquipmentQY from '../../../en/membercenter/components/myEquipmentQY.vue'
import myExchange from '../../../en/membercenter/components/myExchange.vue'
import myGold from '../../../en/membercenter/components/myGold.vue'
import myOrder from '../../../en/membercenter/components/myOrder.vue'
import myRecommend from '../../../en/membercenter/components/myRecommend.vue'
import myRecruit from '../../../en/membercenter/components/myRecruit.vue'
import myReport from '../../../en/membercenter/components/myReport.vue'
import orderDetail from '../../../en/membercenter/components/orderDetail.vue'
import recruitDetail from '../../../en/membercenter/components/recruitDetail.vue'
import reportDetail from '../../../en/membercenter/components/reportDetail.vue'
import equipmentDetail from '../../../en/membercenter/components/equipmentDetail.vue'
import myJob from '../../../en/membercenter/components/myJob.vue'
export default new VueRouter({
  routes:[
    {path:'',redirect:'/buyer'},
    {path:'/buyer',component:buyer},
    {path:'/industry',component:industry},
    {path:'/platform',component:platform},
    {path:'/seller',component:seller},
    {path:'/service',component:service},
    {path:'/industryDetail',component:industryDetail},
    {path:'/platformDetail',component:platformDetail},
    {path:'/membercenter',component:membercenter,
      children:[
        {path:'',redirect:'/center'},
        {path:'/center',component:center},
        {path:'/accountManager',component:accountManager},
        {path:'/mygold',component:myGold},
        {path:'/myorder',component:myOrder},
        {path:'/myreport',component:myReport},
        {path:'/myrecommend',component:myRecommend},
        {path:'/myexchange',component:myExchange},
        {path:'/mycollect',component:myCollect},
        {path:'/talentinfo',component:myRecruit},
        {path:'/equipment',component:myEquipment},
        {path:'/equipmentQY',component:myEquipmentQY},
        {path:'/addresslist',component:addressList},
        {path:'/changepwd',component:changePwd},
        {path:'/addaddress',component:addAddress},
        {path:'/addequipment',component:addEquipment},
        {path:'/addrecruit',component:addRecruit},
        {path:'/goldexchange',component:goldExchange},
        {path:'/goldrecharge',component:goldRecharge},
        {path:'/orderdetail',component:orderDetail},
        {path:'/recruitdetail',component:recruitDetail},
        {path:'/reportdetail',component:reportDetail},
        {path:'/equipmentdetail',component:equipmentDetail},
        {path:'/myJob',component:myJob}
      ],redirect:'/center'
    }
  ]
})
