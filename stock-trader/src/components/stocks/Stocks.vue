<template>
  <div>
    <h1>Stocks Component</h1>
    <st-stock v-for="(stock, index) in stocks" :key="index"></st-stock>
  </div>
</template>
<script>
import Stock from './Stock.vue';
export default {
  components: {
    'st-stock': Stock
  },
  data() {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 100 },
        { id: 2, name: 'Google', price: 450 },
        { id: 3, name: 'Apple', price: 600 },
        { id: 4, name: 'Twitter', price: 250 }
      ]
    }
  }
};
</script>