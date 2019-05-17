import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/header/Header'
import 'lib-flexible/flexible'
import './mock/mock-server'


Vue.component('wy-header',Header)

new Vue({
  el: '#app ',
  render: h => h(App),
  router
})
