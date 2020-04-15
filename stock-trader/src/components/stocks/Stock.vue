<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header alert-success">
        {{ stock.name }}
        <small>(Price: {{ stock.price }})</small>
      </div>
      <div class="d-flex card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="float-right mx-2">
          <button class="btn btn-success" :disabled="!isValidQuantity" @click="buyStock">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    stock: {
      type: Object,
      default: () => {
        return {
          id: 0,
          name: "",
          price: 0
        };
      }
    }
  },
  data() {
    return {
      quantity: ""
    };
  },
  computed: {
    isValidQuantity() {
      return this.quantity && this.quantity > 0;
    }
  },
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>