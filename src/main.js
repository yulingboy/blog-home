import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import '../src/assets/css/global.css'
import moment from 'moment'

Vue.filter('time', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm'
  return moment(value).format(formatString)
})

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://112.124.203.100:3000/home/api/'
axios.defaults.headers.common.token = window.sessionStorage.getItem('token')
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
