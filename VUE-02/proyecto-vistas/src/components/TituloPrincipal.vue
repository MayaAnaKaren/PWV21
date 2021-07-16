<template>
  <div>
      <h1>{{ titulo }}</h1>
      <span v-if="mostrarMensaje">{{mensaje}}</span>
  </div>
</template>

<script>
export default {
    name: 'TituloPrincipal',
    props: { // Propiedades que se reciben del padre
     titulo: {
         type: String,
         required: true
     },
     mensaje: {
         type: String,
         default: "Hola"
     },
     mostrarMensaje: {
         type: Boolean,
         default: false
     }
    }
}
</script>

<style>

</style>