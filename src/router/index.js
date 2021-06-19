import { createWebHistory, createRouter } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import PubsRecentes from "@/views/PubsRecentes.vue";
import PubsPartagees from "@/views/PubsPartagees.vue";
import PubsAimees from "@/views/PubsAimees.vue";
import Profile from "@/views/Profile.vue";
import Connexion from "@/views/Connexion.vue";
import Inscription from "@/views/Inscription.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/publications-recentes",
    name: "Publications récentes",
    component: PubsRecentes,
  },
  {
      path: "/publications-partagees",
      name: "Publications partagées",
      component: PubsPartagees,
  },
  {
      path: "/publications-aimees",
      name: "Publications aimées",
      component: PubsAimees,
  },
  {
        path: "/mon-profile",
        name: "Mon profile",
        component: Profile,
  },
  {
        path: "/inscription",
        name: "Inscription",
        component: Inscription,
  },
  {
        path: "/connexion",
        name: "Connexion",
        component: Connexion,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;