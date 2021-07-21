<template>
  <button @click="accionDoble({estado: estado, numero: 3 })">{{texto}}</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'BotonAccion',
    props: {
        estado: Boolean,
    },
    computed: {
        texto() {
            return this.estado ? 'Aumentar' : 'Disminuir';
        }
    },
    methods: {
        ...mapActions(['accionDoble'])
    }

}
</script>

<style>

</style>