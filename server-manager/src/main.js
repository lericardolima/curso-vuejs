import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverWasSelected(server) {
      this.$emit('serverWasSelected', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
