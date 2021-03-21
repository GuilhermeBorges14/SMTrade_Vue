<template>
  <section>
    <div v-if="sells">
      <h2>Vendas</h2>
      <div class="product-box" v-for="(sell, index) in sells" :key="index">
        <ProductItem v-if="sell.product" :product="sell.product">
          <p class="vendedor">
            <span>Comprador:</span>
            {{sell.comprador_id}}
          </p>
        </ProductItem>
          <div class="delivery">
          <h3>Entrega:</h3>
          <ul v-if="sell.fullAdress">
            <li v-for="(value, key) in sell.fullAdress" :key="key">{{key}}: {{value}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      sells: null
    };
  },
  computed: {
    ...mapState(["user", "login"])
  },
  methods: {
    getSells() {
      api.get(`/transaction?vendedor_id=${this.user.id}`).then(response => {
        this.sells = response.data;
      });
    }
  },
  watch: {
    login() {
      this.getSells();
    }
  },
  created() {
    if (this.login) {
      this.getSells();
    }
  }
};
</script>

<style scoped>
.product-box {
  margin-bottom: 40px;
}

.delivery {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}

.vendedor span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin: 0px;
  justify-self: end;
}
</style>
