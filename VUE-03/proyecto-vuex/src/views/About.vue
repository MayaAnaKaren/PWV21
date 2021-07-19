<template>
  <div>
    <h1>About</h1>
    <p>{{this.nombre}}</p>
    <p>{{this.total}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
name: 'About',
computed: {
  ...mapState(['nombre', 'total'])
}
}

</script>

<style>

</style>