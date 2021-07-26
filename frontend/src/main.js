import { createApp } from 'vue';
import App from './App.vue';
//for vue router
import router from './router';
//for Vuex
import store from './store';
//icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faMinus, faPlus);

createApp(App).use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app');

