<template>
  <section>
    <h2>Adicionar Produto</h2>
    <AddProduct />
    <h2>Seus Produtos</h2>
    <transition-group v-if="user_product" name="list" tag="ul">
      <li v-for="(product, index) in user_product" :key="index">
        <ProductItem :product="product">
          <p>{{product.description}}</p>
          <button class="delete" @click="deleteProduct(product.id)">Deletar</button>
        </ProductItem>
         
      </li>
    </transition-group>
  </section>
</template>

<script>
import AddProduct from "@/components/AddProduct.vue";
import ProductItem from "@/components/ProductItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services.js";

export default {
  name: "UserProdutos",
  components: {
    AddProduct,
    ProductItem
  },
  computed: {
    ...mapState(["login", "user", "user_product"])
  },
  methods: {
    ...mapActions(["getUserProducts"]),

     deleteProduct(id) {
      const confirm = window.confirm("Deseja remover este produto?");
      if (confirm) {
        api
          .delete(`/product/${id}`)
          .then(() => {
            this.getUserProducts();
          })
          .catch(error => {
            console.log(error.reponse);
          });
      }
    }

  },
  watch: {
    login() {
      this.getUserProducts();
    }
  },
  created() {
    if (this.login) {
      this.getUserProducts();
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.delete {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
</style>

