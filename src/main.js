// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import Index from './components/Index'
import Favorites from './components/Favorites'
import Breed from './components/Breed'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/favorites', component: Favorites },
  { path: '/breed', component: Breed },
  { path: '/breed/:name', component: Breed },
  { path: '/', component: Index },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
