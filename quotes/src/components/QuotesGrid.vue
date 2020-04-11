<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="index"
      @click.native="deleteQuote(index)"
    >{{ quote }}</app-quote>
  </div>
</template>
<script>
import QuoteVue from "./Quote.vue";
import { eventBus } from "../../src/main";
export default {
  props: {
    quotes: {
      type: Array,
      default: []
    }
  },
  components: {
    "app-quote": QuoteVue
  },
  methods: {
    deleteQuote(index) {
      eventBus.$emit("quoteWasDeleted", index);
    }
  }
};
</script>
<style>
</style>