<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{ age }}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data: () => {
    return {
      age: 25
    };
  },
  methods: {
    editAge() {
      this.age = 26;
      eventBus.editAge(this.age);
    }
  },
  created() {
    eventBus.editAge(this.age);
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
