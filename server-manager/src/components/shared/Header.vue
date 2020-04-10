<template>
  <div>
    <header class="page-header">
      <h1>{{ title }}</h1>
    </header>
  </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
};
</script>
<style scoped>
    header {
        padding: 20px;
    }
</style>