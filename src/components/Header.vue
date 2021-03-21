<template>
    <header>
        <nav>
            <router-link to="/" class="logo">
            <img src="@/assets/logoSmtrade.png" alt="Logo Smtrade">
            </router-link>
            <router-link class="btn" v-if="$store.state.login" to="/user">{{name}}</router-link>
            <router-link v-else to="/login" class="btn">
            login
            </router-link>
        </nav>
    </header> 
</template>

<script>

 export default{
     name:"Header",

     computed:{
         name(){
             return this.$store.state.user.name.replace(/ .*/, "");
         }
     }
 }
</script>

<style scoped>

nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    background: #0E1013;
}

.logo{
    padding: 10px 0;
}

.logo img{
    max-width: 300px;
}

</style>

