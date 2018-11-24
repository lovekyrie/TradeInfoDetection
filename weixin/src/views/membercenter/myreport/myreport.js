import Vue from 'vue';
import init from 'assets/js/init.js'
import {List} from 'vant'

Vue.use(List);
Vue.use(init);

import App from './App';

new Vue({
  render: h => h(App)
}).$mount('#app')