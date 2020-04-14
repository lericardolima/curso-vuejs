<template>
  <div>
    <h1>Stocks</h1>
    <stock-card v-for="(stock, index) in stocks" :key="index"></stock-card>
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
      stocks: [
        { id: 1, name: "BMW", price: 100 },
        { id: 2, name: "Google", price: 450 },
        { id: 3, name: "Apple", price: 600 },
        { id: 4, name: "Twitter", price: 300 }
      ]
    };
  }
};
</script>