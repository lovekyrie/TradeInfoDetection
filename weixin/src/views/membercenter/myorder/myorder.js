import Vue from 'vue';
import init from 'assets/js/init.js'
Vue.use(init);
import App from './app.vue';
import {List} from 'vant'

Vue.use(List);
new Vue({
  render: h => h(App)
}).$mount('#app')