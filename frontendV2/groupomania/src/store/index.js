//Vuex store that contains all modules, used to make authentication requests


import { createApp } from 'vue'
import { createStore } from 'vuex'


import { auth } from './auth.module';

const store = createStore({
  modules: {
    auth
  }
})

const app = createApp('#app')

app.use(store);