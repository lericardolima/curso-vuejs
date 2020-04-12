<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <router-view></router-view>
    <button class="btn btn-link" @click="goHome">Go home</button>
  </div>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>