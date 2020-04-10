<template>
  <div>
    <p v-if="!server" class="text-center">Select a server to show its details</p>
    <div v-else>
      <p class="text-center">Server details</p>
      <p>ID: {{ server.id }}</p>
      <p>Status: {{ server.status }}</p>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../../main";

export default {
  data: () => {
    return {
      server: null
    };
  },
  created() {
    eventBus.$on("serverWasSelected", server => {
      this.server = server;
    });
  }
};
</script>