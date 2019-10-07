import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import router from './router'




new Vue({
  //把router实例注入vue实例
  router,
  render: h => h(App),
}).$mount('#app')
