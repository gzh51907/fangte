import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import router from './router'
import store from './store'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.use(ElementUI);




new Vue({
  //把router实例注入vue实例
  router,
  store,
  render: h => h(App),
}).$mount('#app')
