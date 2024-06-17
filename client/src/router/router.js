import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import Menu from "@/pages/Menu.vue";
import Info from "@/pages/Info.vue";
import Cart from "@/pages/Cart.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/menu", component: Menu },
  { path: "/cart", component: Cart },
  { path: "/info/:id", component: Info, props: true },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
