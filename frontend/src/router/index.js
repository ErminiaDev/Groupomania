import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AllPosts from "@/views/AllPosts.vue";
import AddPost from "@/views/AddPost.vue";
import AllUsers from "@/views/AllUsers.vue";
import SignIn from "@/views/SignIn.vue";
import SignOut from "@/views/SignOut.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/publications",
    name: "Publications",
    component: AllPosts,
  },
  {
      path: "/ajouter-publication",
      name: "Ajouter une publication",
      component: AddPost,
  },
  {
        path: "/utilisateurs",
        name: "AllUsers",
        component: AllUsers,
  },
  {
        path: "/inscription",
        name: "Inscription",
        component: SignUp,
  },
  {
        path: "/connexion",
        name: "Connexion",
        component: SignIn,
  },
  {
        path: "/deconnexion",
        name: "Déonnexion",
        component: SignOut,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;