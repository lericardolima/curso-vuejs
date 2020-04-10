<template>
  <div id="app">
    <header class="page-header">
      <h1>Server Status</h1>
    </header>
    <section class="row container">
      <div class="col container">
        <app-server></app-server>
      </div>
      <div class="col container">
        Server Details are not currently updated
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
