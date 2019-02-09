import Vue from 'vue';
import Router from "vue-router"
import Home from "./components/Home.vue"
Vue.use(Router)



const router = new VueRouter({
    mode:"history",
    routes:[
    {
     path:"/",
     name:"home",
     component:""
    }
  ]
})