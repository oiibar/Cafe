import Main from "@/pages/Main.vue";
import Menu from "@/pages/Menu.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Main },
  { path: "/menu", component: Menu },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
