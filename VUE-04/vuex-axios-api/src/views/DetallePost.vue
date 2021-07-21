<template>
  <div>
      {{$route.params.idx}}
      <h1>Detalle</h1>
      <h2>{{post.id}}</h2>
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name:'DetallePost',
    computed: {
        ...mapState(['post'])
    },
    methods: {
        ...mapActions(['getPost'])
    },
    created() {
        this.getPost(this.$route.params.idx)
    }
}
</script>

<style>

</style>