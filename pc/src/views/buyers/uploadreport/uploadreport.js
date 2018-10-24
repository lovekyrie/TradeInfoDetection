import Vue from 'vue';
import init from 'assets/js/init.js'
import {Carousel} from 'element-ui'

Vue.use(Carousel);
Vue.use(init);
import App from './app.vue';

new Vue({
  render: h => h(App)
}).$mount('#app')
