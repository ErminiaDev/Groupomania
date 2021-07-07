import { createWebHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import Profile from './views/Profile.vue';
import BoardAdmin from './views/BoardAdmin.vue';
import BoardUser from './views/BoardUser.vue';

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
      path: '/login',
      component: Login
    },
    {
      path: '/inscription',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
      // lazy-loaded??
    },
    {
      path: '/admin',
      name: 'admin',
      component: BoardAdmin
      // lazy-loaded
    },
    {
      path: '/user',
      name: 'user',
      component: BoardUser
      // lazy-loaded
    }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;