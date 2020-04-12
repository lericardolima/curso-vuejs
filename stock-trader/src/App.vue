<template>
  <div class="container">
    <st-header></st-header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    "st-header": Header
  }
};
</script>
<style>
</style>
