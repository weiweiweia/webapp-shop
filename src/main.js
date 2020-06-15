import Vue from 'vue'
import App from './App.vue'
//关闭项目启动的生产提示
Vue.config.productionTip = false

import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
