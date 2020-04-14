<template>
  <div>
    <h1>Portfolio</h1>
    <div class="row">
      <app-portfolio-stock
        class="col mb-3"
        v-for="(stock, index) in stocks"
        :key="index"
        :stock="stock"
      ></app-portfolio-stock>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    "app-portfolio-stock": Stock
  }
};
</script>