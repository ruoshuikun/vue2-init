import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import 'assets/styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
