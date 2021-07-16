<template>
  <div>
      <h1>Datos</h1>
      <!-- <button @click="consumirDatosAsyncAwait">Obtener Datos</button> -->
      <Tarjeta 
        v-for="dato in datos"
        :key="dato._id"
        :id="dato._id" 
        :texto="dato.text" 
        :textoSecundario="dato.type"
      />
  </div>
</template>

<script>
import Tarjeta from '../components/Tarjeta.vue'

export default {
    name: 'Datos',
    components: {
        Tarjeta
    },
    data() {
        return {
           datos: [
               {
                   _id: '273287783783',
                   texto: 'gdjdfjdhdjhdfhjdfj',
                   type: 'gato'
               }
           ]
        }
    },
    methods: {
        conmisurDatos() {
            fetch('https://cat-fact.herokuapp.com/facts')
            .then(res => res.json())
            .then(data => {
                console.log("fetch", data);
            })
            .catch(error => console.log(error));
        },
        async consumirDatosAsyncAwait () {
            try {
                const res =  await fetch('https://cat-fact.herokuapp.com/facts');
                const data = await res.json();
                // console.log("await", data);
                this.datos = data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.consumirDatosAsyncAwait();
    }
}
</script>

<style>

</style>