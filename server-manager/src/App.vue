<template>
  <div id="app">
    <app-header :title="title"></app-header>
    <section class="row d-flex justify-content-center">
      <div class="col-md-5">
        <app-server :servers="servers"></app-server>
      </div>
      <div class="col-md-5">
        <app-server-details></app-server-details>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Server from "./components/server/Server";
import ServerDetails from "./components/server/ServerDetails";

export default {
  data: () => {
    return {
      title: "Server status",
      servers: [
        { id: 1, status: "Running" },
        { id: 2, status: "Stopped" },
        { id: 3, status: "Uknown" },
        { id: 4, status: "Running" },
        { id: 5, status: "Starting" }
      ]
    };
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-server": Server,
    "app-server-details": ServerDetails
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

p {
  margin: 0;
}
</style>
