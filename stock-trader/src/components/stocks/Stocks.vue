<template>
  <div>
    <h1>Stocks</h1>
    <div class="row">
      <app-stocks-stock
        class="col mb-3"
        v-for="(stock, index) in stocks"
        :key="index"
        :stock="stock"
      ></app-stocks-stock>
    </div>
  </div>
</template>
<script>
import Stock from "./Stock.vue";
export default {
  components: {
    "app-stocks-stock": Stock
  },
  data() {
    return {
      stocks: this.$store.getters.stocks
    };
  }
};
</script>