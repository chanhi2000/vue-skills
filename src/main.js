import Vue from 'vue'
// import * as VeeValidate from 'vee-validate';
import App from './App.vue'
import router from './router'

// Vue.use(VeeValidate, { inject: true, events: '' });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
