import Vue from 'vue'
import init from 'assets/js/init.js'
import {Swipe,SwipeItem,Lazyload} from 'vant';
Vue.use(init);
Vue.use(Swipe).use(SwipeItem).use(Lazyload)

import App from './app.vue'
new Vue({
  render:h=>h(App)
}).$mount('#app')