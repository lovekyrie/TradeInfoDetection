import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import addAddress from '../components/addAddress.vue'
import addEquipment from '../components/addEquipment.vue'
import addRecruit from '../components/addRecruit.vue'
import addressList from '../components/addressList.vue'
import changePwd from '../components/changePwd.vue'
import goldExchange from '../components/goldExchange.vue'
import goldRecharge from '../components/goldRecharge.vue'
import myCollect from '../components/myCollect.vue'
import myEquipment from '../components/myEquipment.vue'
import myExchange from '../components/myExchange.vue'
import myGold from '../components/myGold.vue'
import myOrder from '../components/myOrder.vue'
import myRecommend from '../components/myRecommend.vue'
import myRecruit from '../components/myRecruit.vue'
import myReport from '../components/myReport.vue'
import orderDetail from '../components/orderDetail.vue'
import recruitDetail from '../components/recruitDetail.vue'
import reportDetail from '../components/reportDetail.vue'
import center from '../components/center.vue'
import equipmentDetail from '../components/equipmentDetail.vue'

export default new VueRouter({
  routes:[
    {path:'',component:center},
    {path:'/center',component:center},
    {path:'/mygold',component:myGold},
    {path:'/myorder',component:myOrder},
    {path:'/myreport',component:myReport},
    {path:'/myrecommend',component:myRecommend},
    {path:'/myexchange',component:myExchange},
    {path:'/mycollect',component:myCollect},
    {path:'/talentinfo',component:myRecruit},
    {path:'/equipment',component:myEquipment},
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
    {path:'/equipmentdetail',component:equipmentDetail}
  ]
})

