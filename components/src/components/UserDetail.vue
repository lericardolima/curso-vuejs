<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{ name }}</p>
    <p>User age: {{ age }}</p>
    <button @click="resetName">Reset name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data: () => {
    return {
      age: null
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    resetName() {
      this.$emit("nameWasReset", "Ricardo");
    }
  },
  created() {
    eventBus.$on("ageWasUpdated", event => {
      this.age = event;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
