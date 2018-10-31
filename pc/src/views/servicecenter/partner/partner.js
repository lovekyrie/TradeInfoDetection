import Vue from 'vue';
import init from 'assets/js/init';
import App from './components/App';

Vue.use(init);
require('./css/partner.less');

new Vue({
  render: h=>h(App)
}).$mount('#container');
