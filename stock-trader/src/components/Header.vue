<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/home">
          Stock Trader
        </router-link>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <router-link to="portfolio" tag="li" class="nav-item"><a class="nav-link">Portfolio</a></router-link>
            <router-link to="stocks" tag="li" class="nav-item"><a class="nav-link">Stocks</a></router-link>
          </ul>
          <ul class="navbar-nav navbar-right">
            <li class="nav-item"><a class="nav-link" href="#">End Day</a></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Save & Load<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Save data</a></li>
                <li><a href="#">Load data</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
header {
  margin: 20px 10%;
}
</style>