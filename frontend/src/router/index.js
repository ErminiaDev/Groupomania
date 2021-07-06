import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Posts from "@/views/Posts.vue";
import Users from "@/views/Users.vue";
import Login from "@/views/Login.vue";


const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/tableau-de-bord",
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: "/publications",
    name: "Publications",
    component: Posts,
  },
  {
        path: "/utilisateurs",
        name: "AllUsers",
        component: Users,
  },
  {
        path: "/inscription",
        name: "Inscription",
        component: Login,
  },
  {
        path: "/connexion",
        name: "Connexion",
        component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;