<template>
  <div>
    <h1>Todos</h1>
    <div v-for="t in doneTodos" :key="t.id">
      <span>{{t.id}}</span>
      <h3>{{ t.title }}</h3>
      <p>{{ t.completed ? "Completo" : "Sin completar" }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Todos",
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["allTodos", "doneTodos"])
  },
  methods: {
    ...mapActions(["getTodos"]),
  },
  created() {
    this.getTodos();
  },
};
</script>

<style></style>
