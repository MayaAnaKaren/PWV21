<template>
  <div class="home">
    <TituloPrincipal :nuevo="10"  :titulo="tituloHome" :mostrarMensaje="true" mensaje="Mi mensaje de home" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TituloPrincipal from '../components/TituloPrincipal.vue'

export default {
  name: 'Home',
  components: {
    TituloPrincipal
  },
  data() {
    return {
      tituloHome: "Mi título desde home"
    }
  },
}
</script>
