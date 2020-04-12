<template>
  <div>
    <h3>Some User Details</h3>
    <p>Active user ID: {{ id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="`/user/${id}/edit`">Edit</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  beforeRouteEnter(to, from, next) {
    const authenticated = true;
    next(authenticated);
  }
};
</script>