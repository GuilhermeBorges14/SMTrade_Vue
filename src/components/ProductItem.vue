<template>
  <div class="product" v-if="product">
   <router-link :to="{name: 'product', params: {id: product.id}}">
  <img class="product-img" v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
     <p class="seeProduct">Ver Produto</p>
     </router-link>
   <div class="info">
    <p class="price">R$ {{product.price}}</p>
    <h2 class="title">{{product.name}}</h2>
    <slot></slot>
   </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"]
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
  background: #0E1013;
  padding: 10px;
  border-radius: 4px;
}

.info {
  align-self: end;
}

.product-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}

.seeProduct{
  font-size: 1.2rem;
  margin-top: 20px; 
}

.price{
  color:#e80;
}

.seeProduct:hover{
  color: #37b648;
}
</style>
