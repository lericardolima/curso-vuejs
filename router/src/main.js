import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: new VueRouter({ routes, mode: 'history' }),
  render: h => h(App)
})
