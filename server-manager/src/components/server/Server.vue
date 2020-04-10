<template>
  <div>
    <ul class="list-group">
      <li v-for="(number, index) in 5" :key="index" class="list-group-item">
        <p class="text-center align-middle">Server #{{ number }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>