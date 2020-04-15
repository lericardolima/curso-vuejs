<template>
  <div>
    <header class="mt-3">
      <nav class="flex-row navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/home">Stock Trader</router-link>

        <div class="col">
          <ul class="float-left flex-row navbar-nav mr-auto">
            <router-link to="portfolio" tag="li" class="nav-item ml-2">
              <a class="nav-link">Portfolio</a>
            </router-link>
            <router-link to="stocks" tag="li" class="nav-item ml-2">
              <a class="nav-link">Stocks</a>
            </router-link>
          </ul>
          <ul class="navbar-nav float-right mr-auto">
            <li class="nav-item ml-2">
              <strong class="nav-link disabled">Funds: {{ funds | currency }}</strong>
            </li>
          </ul>
          <ul class="float-right flex-row navbar-nav navbar-right">
            <li class="nav-item ml-2">
              <a class="nav-link" @click="endDay">End Day</a>
            </li>
            <li class="nav-item dropdown ml-2"
                @click="alternateDropdownStatus">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Save & Load
                <span class="caret"></span>
              </a>
              <div class="dropdown-menu position-absolute"
                :class="{show: isDropdownExpanded}">
                  <a class="dropdown-item" @click="saveData">Save data</a>
                  <a class="dropdown-item" @click="loadData">Load data</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </header>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      isDropdownExpanded: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    alternateDropdownStatus() {
      this.isDropdownExpanded = !this.isDropdownExpanded;
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }

      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>