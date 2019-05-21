import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Header from './components/header/Header'
import NavList from './components/navList/navList'
import 'lib-flexible/flexible'
import './mock/mock-server'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

Vue.component('wy-header',Header)
Vue.component('wy-navlist',NavList)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
