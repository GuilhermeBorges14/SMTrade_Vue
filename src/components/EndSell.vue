<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="endSell">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "EndSell",
  components: {
    UserForm
  },
  props: ["product"],
  computed: {
    ...mapState(["user"]),
    trade() {
      return {
        comprador_id: this.user.email,
        vendedor_id: this.product.user_id,
        product: this.product,
        fullAdress: {
          cep: this.user.cep,
          rua: this.user.adress,
          numero: this.user.number,
          bairro: this.user.neigh,
          cidade: this.user.city,
          estado: this.user.state
        }
      };
    }
  },
  methods: {
    createTransaction() {
      return api.post("/transaction", this.trade).then(() => {
        this.$router.push({ name: "buy" });
      });
    },
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch(
          "getUser",
          this.$store.state.user.email
        );
        await this.createTransaction();
      } catch (error) {
        console.log(error);
      }
    },
    endSell() {
      if (this.$store.state.login) {
        this.createTransaction();
      } else {
        this.createUser();
      }
    }
  }
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>
