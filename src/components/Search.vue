<template>
<form>
    <input name="search" id="search" type="text" v-model="search" placeholder="Buscar...">
    <input type="submit" id="lupa" value="search" @click.prevent="searchProducts">
</form>

</template>

<script>

 export default{
     data(){
         return{
             search: ""
         }
     }, 
     methods:{
         searchProducts(){
             this.$router.push({query :{q: this.search}});
         }
     }
 };
</script>

<style scoped>

form{
    max-width: 500px;
    margin: 30px auto 60px auto;
    position: relative;
}

@media screen and (max-width:500px) {
    form{
    max-width: 300px;

}
}

#search{
    width: 100%;
    border-radius: 4px;
    padding: 15px;
    border:none;
    transition:  all 0.3s;
}

#search:focus,
#search:hover{
    outline: none;
    transform: scale(1.1);
}

#lupa{
    width: 52px;
    height: 52px;
    background: url("../assets/search.svg") no-repeat center center;
    border:none;
    position:absolute;
    cursor: pointer;
    text-indent: -150px;
    top:0px;
    right: 0px;
}

</style>