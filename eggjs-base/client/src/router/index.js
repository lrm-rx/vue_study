import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/add",
      component: () => import("../views/Add.vue"),
    },
    {
      path: "/detail",
      component: () => import("../views/Detail.vue"),
    },
  ],
});

export default router;
