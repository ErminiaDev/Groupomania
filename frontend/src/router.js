import { createWebHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import Profile from './views/Profile.vue';
import PostsPage from './views/PostsPage.vue';
import UsersPage from './views/UsersPage.vue';
import UserDetail from './views/UserDetail.vue';
import EditUser from './views/EditUser.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/connexion',
      name:'Connexion',
      component: Login
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
      // lazy-loaded??
    },
    {
      path: '/modifier-utilisateur/:id',
      name: 'EditUser',
      component: EditUser
      // lazy-loaded??
    },
    {
      path: '/publications',
      name: 'publications',
      component: PostsPage
    },
    {
      path: '/utilisateurs',
      name: 'utilisateurs',
      component: UsersPage
    },
    {
      path: '/utilisateurs/:id',
      name: 'UserDetail',
      component: UserDetail
    },

  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;