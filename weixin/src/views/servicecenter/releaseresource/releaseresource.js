import Vue from 'vue'
import init from 'assets/js/init.js'
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(init)

import App from './app.vue'
new Vue({
  render:h=>h(App)
}).$mount('#app')