<template>
  <div>
    <ul class="list-group">
      <p v-if="servers.length <= 0">There is no server to show</p>
      <li
        v-for="server in servers"
        :key="server.id"
        class="list-group-item"
        @click="showDetails(server)"
      >
        <p class="text-center align-middle">Server #{{ server.id }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { eventBus } from "../../main";

export default {
  props: {
    servers: {
      type: Array,
      default: []
    }
  },
  methods: {
    showDetails(server) {
      eventBus.serverWasSelected(server);
    }
  }
};
</script>