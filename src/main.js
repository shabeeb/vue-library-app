import Vue from "vue";
import App from "./App.vue";
import myButton from "sb-vue-component-library";
import "sb-vue-component-library/dist/lib.css";

Vue.config.productionTip = false;
Vue.use(myButton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
