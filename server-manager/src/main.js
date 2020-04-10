import Vue from 'vue'
import App from './App.vue'
import Server from './Server'

Vue.component('app-server', Server);

new Vue({
  el: '#app',
  render: h => h(App)
})
