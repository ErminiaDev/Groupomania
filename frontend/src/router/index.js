import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AllPosts from "@/views/AllPosts.vue";
import AddPost from "@/views/AddPost.vue";
import DeletePost from "@/views/DeletePost.vue";
import UserDetail from "@/views/UserDetail.vue";
import UserProfile from "@/views/UserProfile.vue";
import AllUsers from "@/views/AllUsers.vue";
import SignIn from "@/views/SignIn.vue";
import SignOut from "@/views/SignOut.vue";
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
    component: AllPosts,
  },
  {
    path: "/publications/:id",
    name:"PostDetail",
    component: PostDetail,
  },
  {
      path: "/ajouter-publication",
      name: "Ajouter une publication",
      component: AddPost,
  },
  {
      path: "/supprimer-publication",
      name: "Supprimer une publication",
      component: DeletePost,
  },
  {
        path: "/utilisateurs",
        name: "AllUsers",
        component: AllUsers,
  },
  {
        path: "/utilisateurs/:user-id",
        name: "UserDetail",
        component: UserDetail,
  },
  {
        path: "/utilisateurs/:name",
        name: "UserProfile",
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