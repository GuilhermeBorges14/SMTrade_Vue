<template>
<section class="products-container">
    <transition mode="out-in">
   <div v-if="products && products.length" class="products">
   <div class="product" v-for="(product, index) in products" :key="index">
       <router-link :to="{name: 'product', params: {id: product.id}}">
      <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
       <p class="price">R$ {{product.price}}</p>
       <h2 class="title">{{product.name}}</h2>
       <p>{{product.description}}</p>
       </router-link>
   </div>
   <Pagination :totalCount="totalCount" :productsPerPage="productsPerPage"/>
   </div>

   <div v-else-if="products && products.length === 0">
       <p class="not-found">Não encontramos nenhum produto! <br> Busque por outro nome.</p>
   </div>

   <div v-else>
       <LoadingPage />
   </div>
   </transition>
</section>
 
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import {api} from "@/services.js";
import {serializeSearch} from "@/helpers.js"

 export default{
    name: "ProductList",

    components:{
        Pagination
    },

     data(){
         return{
             products:null,
             productsPerPage: 9,
             totalCount: 0,
         };
     },

     computed:{
         url(){
            const query = serializeSearch(this.$route.query);
            return `/product?_limit=${this.productsPerPage}${query}`
         }
     },

     methods: {
         getProducts(){
             this.products = null;
             setTimeout(() =>{
             api.get(this.url)
             .then(response =>{
                 this.totalCount = Number(response.headers['x-total-count']);
                 this.products = response.data; });
     },1500);
         }
     
     },

     watch:{
         url(){
             this.getProducts();
         }
     },

     created(){
         this.getProducts();
 }

 }

</script>

<style scoped>

.products-container{
    max-width: 1200px;
    margin: 0 auto;
}

.products{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    

}

.product{
    margin: 30px;
    padding: 10px;
    background: #0E1013;
    border-radius: 4px;
    transition: all .2s;
    width: 300px;
}

.product:hover{
    transform: scale(1.05);
    border: 1px solid #81eb90;
}

.product img{
    border-radius: 4px;
    margin-bottom: 15px;
}

.title{
    margin-bottom: 10px;
}

.price{
    color:#37b648;
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom: 10px;
}

.not-found{
    font-size: 2.25em;
    text-align: center;
    color:rgb(255, 92, 92);
}

</style>