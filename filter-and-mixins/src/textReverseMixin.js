export const textReverseMixin = {
  data: () => {
    return {
      textToReverseWithComputed: ""
    };
  },
  computed: {
    computedReverse() {
      return this.textToReverseWithComputed
        .split("")
        .reverse()
        .join("");
    }
  }
}