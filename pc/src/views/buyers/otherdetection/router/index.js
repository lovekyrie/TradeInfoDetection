import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import BabyPlay from '../components/BabyPlay.vue'
import Certification from '../components/Certification.vue'
import Consultation from '../components/Consultation.vue'
import FoodMaterial from '../components/FoodMaterial.vue'
import GarmentTextiles from '../components/GarmentTextiles.vue'
import Inspection from '../components/Inspection.vue'
import LeatherShoes from '../components/LeatherShoes.vue'
import LightIndustrial from '../components/LightIndustrial.vue'
import OutSource from '../components/OutSource.vue'
import Reliability from '../components/Reliability.vue'

export default new Router({
  routes: [
    {path:'/babyplay',component:BabyPlay},
    {path:'/certification',component:Certification},
    {path:'/consultation',component:Consultation},
    {path:'/foodmaterial',component:FoodMaterial},
    {path:'/garmenttextiles',component:GarmentTextiles},
    {path:'/inspection',component:Inspection},
    {path:'/leathershoes',component:LeatherShoes},
    {path:'/lightindustrial',component:LightIndustrial},
    {path:'/outsource',component:OutSource},
    {path:'/reliability',component:Reliability},
  ]
})
