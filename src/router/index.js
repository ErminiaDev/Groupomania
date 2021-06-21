import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Posts from "@/views/Posts.vue";
import SharedPosts from "@/views/SharedPosts.vue";
import LikedPosts from "@/views/LikedPosts.vue";
import AddPost from "@/views/AddPost.vue";
import UserDetail from "@/views/UserDetail.vue";
import UserProfile from "@/views/UserProfile.vue";
import Users from "@/views/Users.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import PostDetail from "@/views/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/publications",
    name: "Publications",
    component: Posts,
  },
  {
    path: "/publications/:id",
    component: PostDetail,
  },
  {
      path: "/publications-partagees/:user-id",
      name: "Publications partagées",
      component: SharedPosts,
  },
  {
      path: "/publications-aimees/:user-id",
      name: "Publications aimées",
      component: LikedPosts,
  },
  {
      path: "/ajouter-publication",
      name: "Ajouter une publication",
      component: AddPost,
  },
  {
        path: "/profils",
        name: "Utilisateurs",
        component: Users,
  },
  {
        path: "/profils/:user-id",
        name: "Profil Utilisateur",
        component: UserDetail,
  },
  {
        path: "/profils/:name",
        name: "Mon profil",
        component: UserProfile,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;