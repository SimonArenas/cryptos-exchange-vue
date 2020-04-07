import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import router from "@/router";
import { dollarFilter, percentFilter } from "./filters";
import Chartick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.config.productionTip = false;

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.use(VueSpinners), Vue.use(Chartick.use(Chart));

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
