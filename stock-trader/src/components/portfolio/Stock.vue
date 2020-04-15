<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header alert-info">
        {{ stock.name }}
        <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small>
      </div>
      <div class="pb-0 flex-column card-body">
        <div class="d-flex flex-row mb-3">
          <div class="float-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
          </div>
          <div class="float-right mx-2">
            <button class="btn btn-info" :disabled="!isQuantityPositive || !isQuantitySufficient" @click="sellStock">Sell</button>
          </div>
        </div>
        <div class="alert-light">
          <p v-if="!isQuantitySufficient" class="text-danger">Insufficient quantity.</p>
          <p v-if="!isQuantityZeroOrPositive" class="text-danger">Invalid quantity.</p>
          <p v-if="isQuantityZeroOrPositive && isQuantitySufficient"
            class="text-success"
          >Total: {{ this.quantity * this.stock.price | currency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
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
    isQuantityZeroOrPositive() {
      return this.quantity >= 0;
    },
    isQuantityPositive() {
      return this.quantity && this.quantity > 0;
    },
    isQuantitySufficient() {
      return this.quantity <= this.stock.quantity;
    },
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrders: "sellStock"
    }),
    sellStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };

      this.placeSellOrders(order);
      this.quantity = 0;
    }
  }
};
</script>