<template>
  <div>
      <h1>Detalle</h1>
      {{ $route.params.id }}
  </div>
</template>

<script>
export default {
    name: 'DetalleDato',
    data() {
      return {
        detalle: {}
      }
    },
    methods: {
        async obtenerDetalle () {
            try {
                const res =  await fetch(`https://cat-fact.herokuapp.com/facts/${this.$route.params.id}`);
                const data = await res.json();
                // console.log("await", data);
                this.detalle = data;
            } catch (error) {
                console.log(error);
            }
        }
    }

}
</script>

<style>

</style>