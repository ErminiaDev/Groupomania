//Vuex store that contains all modules, used to make authentication requests

import { createStore } from "vuex";
import { auth } from "./auth.module";

const store = createStore({
  modules: {
    auth,
  },
});

export default store;