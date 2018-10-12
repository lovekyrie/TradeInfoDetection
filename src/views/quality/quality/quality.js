import Vue from 'vue';
import init from 'assets/js/init.js'
import {Area, Popup} from 'vant'

Vue.use(Area);
Vue.use(Popup);
Vue.use(init);
import App from './App';

new Vue({
  render: h => h(App)
}).$mount('#container')