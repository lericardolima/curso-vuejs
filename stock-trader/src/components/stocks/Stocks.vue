<template>
  <div>
    <h1>Stocks</h1>
    <div class="row">
      <stock-card class="col mb-3" v-for="(stock, index) in stocks" :key="index" :stock="stock"></stock-card>
    </div>
  </div>
</template>
<script>
import Stock from "./Stock.vue";
export default {
  components: {
    "stock-card": Stock
  },
  data() {
    return {
      stocks: this.$store.getters.stocks
    }
  }
};
</script>