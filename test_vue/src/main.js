import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// import jQuery from "jquery";
// global.jQuery = jQuery;
// global.$ = jQuery;

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.prototype.$baseurl = "https://reqres.in/";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
