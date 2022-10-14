import vue from "vue";
import VueRouter from "../vuerouter";
import Home from "../pages/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/about/index.vue"),
  },
];

const rotuer = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
