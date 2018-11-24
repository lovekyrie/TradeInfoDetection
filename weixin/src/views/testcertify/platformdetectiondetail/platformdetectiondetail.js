import Vue from 'vue'
import init from 'assets/js/init.js'
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(init)

import App from './app.vue'
new Vue({
  render:h=>h(App)
}).$mount('#app')