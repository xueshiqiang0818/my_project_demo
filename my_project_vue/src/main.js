import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Header from './components/header/Header'
import 'lib-flexible/flexible'
import './mock/mock-server'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

Vue.component('wy-header',Header)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
