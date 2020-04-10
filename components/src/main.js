import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    editAge: (age) => {
      this.$emit('ageWasUpdated', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
