import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/cart",
    came: "cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/catalog",
    came: "catalog",
    component: () => import("../views/Catalog.vue"),
  },
  {
    path: "/product/:id",
    came: "catalog",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/registration",
    came: "catalog",
    component: () => import("../views/Registration.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
