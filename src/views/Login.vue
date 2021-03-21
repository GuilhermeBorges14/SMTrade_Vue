<template>
    <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email">
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha">
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="forgot">
        <a href="/" target="_blank">Esqueceu a senha? Clique aqui</a>
    </p>
    <LoginCreate/>
    </section>
</template>

<script>
import LoginCreate from "@/components/LoginCreate.vue";

export default {
   
   name: "Login",

   components:{
       LoginCreate
   },
    
    data(){
        return{
            login: {
                email: "",
                senha: ""
            }
        };
    },
  
    methods:{
        logar(){
        this.$store.dispatch("getUser", this.login.email);
        this.$router.push({name: "user"});
        }
    }
};
</script>

<style scoped>

.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 30px;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.forgot {
  text-align: center;
  margin: 20px auto 0 auto;
}

.forgot a:hover {
  color: #cfdc2f;
  text-decoration: underline;
}

</style>