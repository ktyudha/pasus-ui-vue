import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/event/Index.vue";
import Create from "../views/event/Create.vue";
import Edit from "../views/event/Edit.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "event.index",
    component: Index,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/create",
    name: "event.create",
    component: Create,
  },
  {
    path: "/edit/:id",
    name: "event.edit",
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
