<template>
  <div class="home">
   <h1>Home</h1>
   <p>{{ this.total }}</p>
   <button @click="accionAumentar()">Aumentat</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: { // SE MAPEA EL STATE
    ...mapState(['total'])
  },
  methods: {
    ...mapActions(['accionAumentar'])
  }

}
</script>
