import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import Login from "./views/Login.vue";
import User from "./views/user/User.vue";
import UserProducts from "./views/user/UserProducts.vue";
import UserBuy from "./views/user/UserBuy.vue";
import UserSell from "./views/user/UserSell.vue";
import UserEdit from "./views/user/UserEdit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/product/:id",
      name: "product",
      component: Product,
      props: true
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/user",
      component: User,
      children:[
        {
          path:"",
          name: "user",
          component: UserProducts
        },
        
        {
          path:"buy",
          name: "buy",
          component: UserBuy
        },

        {
          path:"sell",
          name: "sell",
          component: UserSell
        },

        {
          path:"edit",
          name: "edit",
          component: UserEdit
        },
      ]
    },
  ],

  scrollBehavior(){
    return window.scrollTo({top: 0});
  }
});
