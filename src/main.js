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
Vue.filter('text', function (str) {
  const textlen = 150
  if (str.length * 2 <= textlen) {
    return str + '...'
  }
  let strlen = 0
  let s = ''
  for (let i = 0; i < textlen; i++) {
    s = s + str.charAt(i)
    if (str.charCodeAt(i) > 128) {
      strlen = strlen + 2
      if (strlen >= textlen) {
        return s.substring(0, s.length - 1) + '...'
      }
    } else {
      strlen = strlen + 1
      if (strlen >= textlen) {
        return s.substring(0, s.length - 2) + '...'
      }
    }
  }
  return s
})

Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://112.124.203.100:3000/home/api/'
axios.defaults.baseURL = 'http://127.0.0.1:3000/home/api'
// axios.defaults.headers.common.token = window.sessionStorage.getItem('token')
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config
// })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
