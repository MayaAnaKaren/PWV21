<template>
  <div class="home">
    <div v-if="loading">Cargando....</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <hr />
        <router-link :to="`/detalle/${post.id}`">
          <h3>{{ post.id }} - {{ post.title }}</h3>
        </router-link>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    // propiedades computadas
    ...mapState(["posts", "loading"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
  },
  mounted() {
    this.getPosts();
  },
};
</script>
