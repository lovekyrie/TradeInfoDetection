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

import membercenter from '../../../membercenter/index/app.vue'
import accountManager from '../../../membercenter/index/components/accountManager.vue'
import center from '../../../membercenter/index/components/center.vue'
import addAddress from '../../../membercenter/index/components/addAddress.vue'
import addEquipment from '../../../membercenter/index/components/addEquipment.vue'
import addRecruit from '../../../membercenter/index/components/addRecruit.vue'
import addressList from '../../../membercenter/index/components/addressList.vue'
import changePwd from '../../../membercenter/index/components/changePwd.vue'
import goldExchange from '../../../membercenter/index/components/goldExchange.vue'
import goldRecharge from '../../../membercenter/index/components/goldRecharge.vue'
import myCollect from '../../../membercenter/index/components/myCollect.vue'
import myEquipment from '../../../membercenter/index/components/myEquipment.vue'
import myEquipmentQY from '../../../membercenter/index/components/myEquipmentQY.vue'
import myExchange from '../../../membercenter/index/components/myExchange.vue'
import myGold from '../../../membercenter/index/components/myGold.vue'
import myOrder from '../../../membercenter/index/components/myOrder.vue'
import myRecommend from '../../../membercenter/index/components/myRecommend.vue'
import myRecruit from '../../../membercenter/index/components/myRecruit.vue'
import myReport from '../../../membercenter/index/components/myReport.vue'
import orderDetail from '../../../membercenter/index/components/orderDetail.vue'
import recruitDetail from '../../../membercenter/index/components/recruitDetail.vue'
import reportDetail from '../../../membercenter/index/components/reportDetail.vue'
import equipmentDetail from '../../../membercenter/index/components/equipmentDetail.vue'
import myJob from '../../../membercenter/index/components/myJob.vue'
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
