import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Vue.use(VueApollo)

function fib(index) {
  if (index < 2) return 1
  return fib(index - 1) + fib(index - 2)
}




export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const apolloProvider = new VueApollo({
  defaultClient
})

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App),
}).$mount('#app')