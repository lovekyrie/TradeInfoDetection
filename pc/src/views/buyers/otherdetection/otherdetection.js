import Vue from 'vue'
import init from 'assets/js/init.js'

Vue.use(init)

import App from './app.vue'
import router from './router';

new Vue({
  render:h=>h(App),
  router
}).$mount('#app')