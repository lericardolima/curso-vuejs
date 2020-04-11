<template>
  <div class="form-horizontal">
    <div class="col form-group">
      <div class="col-xs-5">
        <input
          type="text"
          class="form-control"
          placeholder="First name"
          v-model="firstName"
          @keyup="fullNameEdited"
        />
      </div>
      <div class="col-xs-7">
        <input
          type="text"
          class="form-control"
          placeholder="Last name"
          v-model="lastName"
          @keyup="fullNameEdited"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      firstName: "",
      lastName: ""
    };
  },
  methods: {
    fullNameEdited() {
      this.$emit("input", `${this.firstName} ${this.lastName}`);
    }
  }
};
</script>