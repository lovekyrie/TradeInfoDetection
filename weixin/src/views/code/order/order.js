import Vue from 'vue';
import init from 'assets/js/init.js'

Vue.use(init);
import { Step, Steps } from 'vant';

Vue.use(Step).use(Steps);

import App from './App';

new Vue({
  render: h => h(App)
}).$mount('#container')