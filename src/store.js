import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules
});

for (let module in modules) {
  if (modules[module].actions && modules[module].actions.initStore)
    store.dispatch(`${module}/initStore`);
}
export default store;
