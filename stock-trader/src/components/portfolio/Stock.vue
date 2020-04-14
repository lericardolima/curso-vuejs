<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header">
        {{ stock.name }}
        <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
      </div>
      <div class="d-flex card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="float-right mx-2">
          <button class="btn btn-success" :disabled="!isValidQuantity" @click="sellStock">Sell</button>
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
    isValidQuantity() {
      return this.quantity && this.quantity > 0;
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
    }
  }
};
</script>