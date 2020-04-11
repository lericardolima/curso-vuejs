<template>
  <div class="container">
    <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
    <app-quote-form :disabled="maxReached"></app-quote-form>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it!</div>
        <div
          v-if="maxReached"
          class="alert alert-warning"
        >Warning: Maximun number of quotes reached.</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuotesGridVue from "./components/QuotesGrid.vue";
import QuoteFormVue from "./components/QuoteForm.vue";
import { eventBus } from "../src/main";
import HeaderVue from "./components/Header.vue";
export default {
  data: () => {
    return {
      maxQuotes: 10,
      quotes: ["A default quote for you!"],
      maxReached: false
    };
  },
  components: {
    "app-quote-grid": QuotesGridVue,
    "app-quote-form": QuoteFormVue,
    "app-header": HeaderVue
  },
  methods: {
    addQuote(quote) {
      this.quotes.push(quote);
      if (this.quotes.length >= this.maxQuotes) {
        this.maxReached = true;
      }
    }
  },
  mounted() {
    eventBus.$on("quoteWasAdded", quote => {
      this.addQuote(quote);
    });

    eventBus.$on("quoteWasDeleted", index => {
      this.quotes.splice(index, 1);
      if (this.quotes.length < this.maxQuotes) {
        this.maxReached = false;
      }
    });
  }
};
</script>

<style>
</style>
