import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import store from './store/store'
import currency from './filters/currency'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Bootstrap configuration
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

// Router configuration
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

// Filters
Vue.filter('currency', currency);

// Vue resource
Vue.use(VueResource);

// Vue http
Vue.http.options.root = 'https://stock-trader-8c8da.firebaseio.com/';

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
