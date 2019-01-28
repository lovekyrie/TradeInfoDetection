import Vue from 'vue'
import init from 'assets/js/init.js'

Vue.use(init)
import {List} from 'vant'

Vue.use(List);
import App from './app.vue'
new Vue({
  render:h=>h(App)
}).$mount('#app')