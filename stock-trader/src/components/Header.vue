<template>
  <div>
    <header class="mt-3">
      <nav class="flex-row navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/home">
          Stock Trader
        </router-link>

        <div class="col">
          <ul class="float-left flex-row navbar-nav mr-auto">
            <router-link to="portfolio" tag="li" class="nav-item ml-2"><a class="nav-link">Portfolio</a></router-link>
            <router-link to="stocks" tag="li" class="nav-item ml-2"><a class="nav-link">Stocks</a></router-link>
          </ul>
          <ul class="float-right flex-row navbar-nav navbar-right">
            <li class="nav-item ml-2"><a class="nav-link" href="#">End Day</a></li>
            <li class="nav-item dropdown ml-2">
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