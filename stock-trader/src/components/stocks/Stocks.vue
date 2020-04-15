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
import { mapGetters } from 'vuex'
import Stock from "./Stock.vue";
export default {
  components: {
    "app-stocks-stock": Stock
  },
  computed: {
    ...mapGetters([
      'stocks'
    ])
  }
};
</script>