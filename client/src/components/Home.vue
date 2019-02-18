<template>
  <div>
    <div v-if="$apollo.loading">load.............</div>
    <ul v-for="post in posts" :key="post.id">
      <h1>{{post.title}}</h1>
      {{post.imageUrl}}
      {{post.description}}
      {{post.likes}}
    </ul>
    <carousel :autoplayTimeout="1000" :loop="true" :per-page="1" :autoplay="true">
      <slide>
        <h1>Title</h1>
        <img src="../assets/a.jpg" alt>
      </slide>
      <slide>
        <h1>uhjkl</h1>
        <img src="../assets/b.jpg" alt>
      </slide>
      <slide>
        <h1>vguhjkl</h1>
        <img src="../assets/c.jpg" alt>
      </slide>
      <slide>
        <h1>gjhkl</h1>
        <img src="../assets/d.jpg" alt>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "home",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
    console.log("boj");
  },
  methods: {
    getPosts() {
      this.$store.dispatch("getPosts");
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100vh;
}

h1 {
  position: fixed;
  background: red;
  top: 14px;
  margin-left: 24px;
}
</style>