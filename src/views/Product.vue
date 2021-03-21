<template>
  <section>
    <div v-if="product" class="product">
      <ul class="photo" v-if="product.photo">
        <li v-for="(photo, index) in product.photo" :key="index">
          <img :src="photo.src" :alt="photo.title" />
        </li>
      </ul>
      <div class="info-product">
          <h1>{{product.name}}</h1>
          <p class="price">R$ {{product.price}}</p>
          <p class="description">{{product.description}}</p>

          <transition mode="out-in" v-if="product.sold === 'false'">
          <button class="btn" v-if="!end" @click="end = true">Comprar</button>
          <EndSell v-else :product="product" />
          </transition>
          <button class="btn" v-else disabled>Vendido</button>
      </div>
    </div>
    <LoadingPage v-else/>
  </section>
</template>

<script>
import { api } from "@/services.js";
import EndSell from "@/components/EndSell.vue";

export default {
  name: "Product",
  props: ["id"],
  components:{
    EndSell
  },

  data() {
    return {
      product: null,
      end: false
    };
  },

  methods: {
    getProduct() {
      api.get(`/product/${this.id}`).then((response) => {
        this.product = response.data;
      });
    },
  },

  created() {
    this.getProduct();
  },
};
</script>

<style scoped>

.product{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    max-width: 900px;
    padding: 60px 20px;
    margin: 0 auto;
}

.price{
    color:#37b648;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 40px;
    margin-top: 20px;
}

.description{
    font-size: 1.2rem;
}

.btn{
    width: 200px;
    margin-top: 60px;
}
</style>
