// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueTypedJs from 'vue-typed-js'
import "chart.js"
import "hchs-vue-charts"
import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(window.VueCharts)

Vue.use(VueTypedJs)
Vue.use(Vuetify, {
  iconfont: 'fa'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { 
    App
  }
})
