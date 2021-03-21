<template>
  <section>
    <div v-if="buys">
      <h2>Compras</h2>
      <div class="product-box" v-for="(buy, index) in buys" :key="index">
        <ProductItem v-if="buy.product" :product="buy.product">
          <p class="vendedor">
            <span>Vendedor:</span>
            {{buy.vendedor_id}}
          </p>
        </ProductItem>
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
      buys: null
    };
  },
  computed: {
    ...mapState(["user", "login"])
  },
  methods: {
    getBuys() {
      api.get(`/transaction?comprador_id=${this.user.id}`).then(response => {
        this.buys = response.data;
      });
    }
  },
  watch: {
    login() {
      this.getBuys();
    }
  },
  created() {
    if (this.login) {
      this.getBuys();
    }
  }
};
</script>

<style scoped>
.product-box {
  margin-bottom: 40px;
}

.vendedor span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}
</style>
