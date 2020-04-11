<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button :disabled="disabled || !quote" class="btn btn-primary" @click.prevent="addQuote">Add quote</button>
      </div>
    </form>
  </div>
</template>
<script>
import { eventBus } from "../../src/main";
export default {
  props: {
      disabled: {
          type: Boolean,
          default: false
      }
  },
  data: () => {
    return {
      quote: ""
    };
  },
  methods: {
    addQuote() {
      eventBus.$emit("quoteWasAdded", this.quote);
      this.quote = "";
    }
  }
};
</script>