import Vue from 'vue';
import init from 'assets/js/init';
import App from './components/App';

Vue.use(App);
require('./css/memberCenter.less');

new Vue({
  render:h=>h(App)
}).$mount('#container')
