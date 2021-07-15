<template>
  <div id="app" class="m-4">
    <h1>{{ titulo }}</h1>
    <br>
    <label for="fruta">Fruta</label> 
    <br>
    <span>{{fruta}}</span>
    <input 
      v-model="fruta"
      type="text"
      id="fruta"
      class="form-control"
    >
    <button @click="agregarFruta()" class="btn btn-primary mt-3">Agregar</button>
    <hr>
    <h4>Mis frutas</h4>
    <ul class="list-group">
      <li 
        class="list-group-item"
        v-for="(f, index) in frutas"
        v-bind:key="index"
      >
       {{ f }}
      </li>
    </ul>
    <hr>
    <h4>Inventario de frutas</h4>
    <ul class="list-group">
      <li 
        class="list-group-item"
        v-for="(f2, index) in frutas2"
        v-bind:key="index"
      >
       {{  f2.nombre }}
       <input type="number" v-model="f2.cantidad">
        <button @click="f2.cantidad++" class="btn btn-primary btn-sm mx-1">+</button>
        <button @click="f2.cantidad--" class="btn btn-primary btn-sm mx-1">-</button>
        <span v-if="f2.cantidad <= 0">No hay almacen</span>
        <span v-else>Si hay almacen</span>
      </li>
    </ul>
    <hr>
    <h3 :class="colorInventario" class="m-4">INVENTARIO ACTUAL: {{ sumarFrutas }}</h3>
  </div>
</template>

<script>
export default { // Objeto
  name: 'App',
  data() {
    return { // Objeto
      titulo: "Mi página con Vue",
      fruta: '',
      frutas: ['Fresa', 'Manzana', 'Uva'],
      frutas2: [
        { nombre: 'Fresa', cantidad: 10},
         { nombre: 'Manzana', cantidad: 5},
      ]
    }
  },
  methods: {
    agregarFruta() {
        this.frutas.push(this.fruta);
        this.fruta = '';
    }
  },
  computed: {
    sumarFrutas() {
      return this.frutas2.reduce((total, fruta) => total + fruta.cantidad, 0);
    },
    colorInventario() {
      return this.sumarFrutas > 10 ? 'text-success' : 'text-danger';
    }
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  font-size: 20px;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
