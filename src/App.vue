<template>
  <div id="app">
    <Header />
    <main id="main">
      <transition mode="out-in">
      <router-view />
      </transition>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

h1{
  font-size: 2rem;
  margin-top: 30px;
  text-align: center;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  list-style: none;
  color: white;
}

img {
  max-width: 100%;
  display: block;
}

body {
  font-family: 'Roboto', sans-serif;
  color: white;
  background: #1B1D20;
}

.btn {
  display: block;
  padding: 10px 25px;
  background: linear-gradient(#cfdc2f, #37b648);
  border-radius: 6px;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.05em;
}

.btn:hover {
  transform: scale(1.1);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
}

label{
  margin-bottom: 5px;
}

input, textarea{
  border-radius: 4px;
  border:none;
  border: 1px solid white;
  padding: 15px;
  transition: all 0.2s;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:focus,
textarea:hover{
  outline: none;
  border-color:#37b648;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
