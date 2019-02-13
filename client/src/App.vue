<template>
  <div id="app">
    <h1>APP</h1>
    <div class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/signin">Signin</router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/profil">profil</router-link>
      <div>
        <input type="text">
        <button>search</button>
      </div>
    </div>
    <main>
      <!-- <transition name="fade"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </main>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
.navigation {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  font-size: 18px;
  color: green;
}

/* .fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(1000px);
} */
</style>
