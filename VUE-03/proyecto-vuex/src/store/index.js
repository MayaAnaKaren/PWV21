import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// centralizar información

export default new Vuex.Store({
  state: {
    total: 90,
    nombre: 'Juan'
  },
  mutations: {
    AUMENTAR_TOTAL(state){
      state.total++;
    }
  },
  actions: {
    accionAumentar({commit}){
      // Commit ejecuta las mutaciones
      commit('AUMENTAR_TOTAL');
    }
  }
})