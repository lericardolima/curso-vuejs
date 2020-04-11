<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <div class="form form-group">
          <input type="text" class="form-control" placeholder="Exercise 1" v-model="textToReverse" />
        </div>
        <div>
          <p class="text-center">Reverse: {{ textToReverse | reverseText }}</p>
        </div>
        <hr />
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <div class="form form-group">
          <input type="text" class="form-control" placeholder="Exercise 2" v-model="textToCount" />
        </div>
        <div>
          <p class="text-center">Count: {{ textToCount | count }}</p>
        </div>
        <hr />
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <div class="form form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Exercise 3"
            v-model="textToReverseWithComputed"
          />
        </div>
        <div>
          <p class="text-center">Reverse: {{ computedReverse }}</p>
        </div>
        <div class="form form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Exercise 3"
            v-model="textToCountWithComputed"
          />
        </div>
        <div>
          <p class="text-center">Count: {{ computedCount }}</p>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { textReverseMixin } from "./textReverseMixin";
import { textCountMixin } from "./textCountMixin";
export default {
  mixins: [textReverseMixin, textCountMixin],
  data: () => {
    return {
      textToReverse: "",
      textToCount: ""
    };
  },
  filters: {
    reverseText(text) {
      return text
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
</style>
