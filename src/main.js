import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import filters from "./filters";

Vue.config.productionTip = false;

filters.forEach(filter => Vue.filter(filter.name, filter.file));

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
