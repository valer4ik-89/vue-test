import Vue from "vue";
import VueRouter from "vue-router";
import Cards from "../views/Cards.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "cards",
    component: Cards
  },
  {
    path: "/details/:id",
    name: "details",
    component: () => import("../views/CardDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
