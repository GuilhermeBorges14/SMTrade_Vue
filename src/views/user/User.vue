<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'user'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'buy'}">Compras</router-link>
        </li>
        <li>
          <router-link :to="{name: 'sell'}">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{name: 'edit'}">Editar Usuário</router-link>
        </li>
        <li>
          <button  @click="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "user",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUser");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.user {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}


@media screen and (max-width: 500px) {
  .user {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}


.sidenav a,
.sidenav button {
  padding: 10px;
  display: block;
  background: #0E1013;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #37b648;
  color: white;
}

.sidenav button {
  border: none;
  width: 100%;
  margin-top: 30px;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
  color: white;
}
</style>
