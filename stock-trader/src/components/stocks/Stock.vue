<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header alert-success">
        {{ stock.name }}
        <small>(Price: {{ stock.price | currency }})</small>
      </div>
      <div class="pb-0 flex-column card-body">
        <div class="d-flex flex-row mb-3">
          <div class="float-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
          </div>
          <div class="float-right mx-2">
            <button
              class="btn btn-success"
              :disabled="!isQuantityPositive || !areFundsSufficient"
              @click="buyStock"
            >Buy</button>
          </div>
        </div>
        <div class="alert-light">
          <p v-if="!areFundsSufficient" class="text-danger">Insufficient funds.</p>
          <p v-if="!isQuantityZeroOrPositive" class="text-danger">Invalid quantity.</p>
          <p
            v-if="isQuantityZeroOrPositive && areFundsSufficient"
            class="text-success"
          >Total: {{ this.quantity * this.stock.price | currency }}</p>
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
      quantity: ''
    };
  },
  computed: {
    isQuantityZeroOrPositive() {
      return this.quantity >= 0;
    },
    isQuantityPositive() {
      return this.quantity && this.quantity > 0;
    },
    areFundsSufficient() {
      return this.quantity * this.stock.price <= this.funds;
    },
    funds() {
      return this.$store.getters.funds;
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