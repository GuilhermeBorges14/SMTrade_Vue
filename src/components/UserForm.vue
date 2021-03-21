<template>
  <form>
    
    <div class="user" v-if="showLogin">

    <label for="name">Nome</label>
    <input id="name" name="name" type="text" v-model="name">

    <label for="fantasyName">Nome Fantasia</label>
    <input id="fantasyName" name="fantasyName" type="text" v-model="fantasyName">

    <label for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email">

    <label for="senha">Senha</label>
    <input id="senha" name="senha" type="password" v-model="senha">

    <label for="tell">Telefone</label>
    <input id="tell" name="tell" type="text" v-model="tell">

    <label for="cnpj">CNPJ</label>
    <input id="cnpj" name="cnpj" type="text" v-model="cnpj">

    </div>

    <label for="cep">CEP</label>
    <input id="cep" name="cep" type="text" v-model="cep" @keyup="fillCep">

    <label for="adress">Rua</label>
    <input id="adress" name="adress" type="text" v-model="adress">

    <label for="number">Numero</label>
    <input id="number" name="number" type="text" v-model="number">

    <label for="neigh">Bairro</label>
    <input id="neigh" name="neigh" type="text" v-model="neigh">

    <label for="city">Cidade</label>
    <input id="city" name="city" type="text" v-model="city">

    <label for="state">Estado</label>
    <input id="state" name="state" type="text" v-model="state">

    <label for="owner">Proprietário</label>
    <input id="owner" name="owner" type="text" v-model="owner">


    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>

import {mapFields} from "@/helpers.js";
import {getCep} from "@/services.js";

export default {

    computed:{
        ...mapFields({
            fields: ["name", "fantasyName", "email", "senha", "tell", "cep", "cnpj", "adress", "number", "neigh",
            "city", "state", "owner"],
            base: "user",
            mutation: "UPDATE_USER"
        }),

        showLogin(){
          return !this.$store.state.login || this.$route.name === "edit";
        }
    },

    methods:{
        fillCep(){
            const cep = this.cep.replace(/\D/g, "");
            if(cep.length === 8){
                getCep(cep).then(response =>{
                  this.adress = response.data.logradouro;
                  this.neigh = response.data.bairro;
                  this.city = response.data.localidade;
                  this.state = response.data.uf;
                })
            }
        }
    }
};
</script>

<style scoped>
form,
.user {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

input{
    margin-left: 15px;
}

label{
    color:#8cd896;
}

.user {
  grid-column: 1 / 3;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
