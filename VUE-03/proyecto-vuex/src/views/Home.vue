<template>
  <div class="home">
   <h1>Home</h1>
   <p>{{ this.total }}</p>
   <button @click="accionAumentar()">Aumentar</button>
   <BotonDisminuir :cantidad="5" />
   <br><br>
   <BotonAccion :estado="true"/>
   <BotonAccion :estado="false"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BotonDisminuir from '../components/BotonDisminuir.vue';
import BotonAccion from '../components/BotonAccion.vue';

export default {
  name: 'Home',
  components: {
    BotonDisminuir,
    BotonAccion
  },
  computed: { // SE MAPEA EL STATE
    ...mapState(['total'])
  },
  methods: {
    ...mapActions(['accionAumentar'])
  }

}
</script>
