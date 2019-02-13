import Vue from 'vue';
import Router from "vue-router"
import Home from "./components/Home.vue"
import AddPost from "./components/AddPost.vue"
import Signin from "./components/Signin.vue"
import Signup from "./components/Signup.vue"
import Posts from "./components/Posts.vue"
import Profil from "./components/Profile.vue"
Vue.use(Router)



const router = new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts
    },
    {
      path: "/post/add",
      name: "post",
      component: AddPost
    },
    {
      path: "/profil",
      name: "profil",
      component: Profil
    }
  ]
})

export default router