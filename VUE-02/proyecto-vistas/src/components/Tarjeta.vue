<template>
  <router-link :to="`/datos/detalle/${id}`">
    <div>
      <h5>{{ id }}</h5>
      <p>{{ texto }}</p>
      <span>{{ textoSecundario }}</span>
      <hr />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Tarjeta",
  props: {
    id: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    textoSecundario: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
