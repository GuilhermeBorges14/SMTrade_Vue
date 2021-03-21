<template>
  <section>
    <h1>Produtos</h1>
    <Search />
    <ProductList />
  </section>
</template>

<script>

import Search from "@/components/Search.vue";
import ProductList from "@/components/ProductList.vue";


export default {
  name: "home",
  components: {
    Search,
    ProductList

  }
};
</script>

<style scoped>

h1{
  font-size: 3em;
  margin-top: 40px;
  color: white;
  letter-spacing: 0.1em;
  text-align: center;
}
</style>
