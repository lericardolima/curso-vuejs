export const textCountMixin = {
  data: () => {
    return {
      textToCountWithComputed: ""
    };
  },
  computed: {
    computedCount() {
      return this.textToCountWithComputed.trim().length;
    }
  }
}