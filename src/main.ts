import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

function add(a:number,b:number){
 return a + b;
}

module.exports = add;


new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
