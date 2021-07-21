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
    },
    DISMINUIR_TOTAL(state, num){
      state.total = state.total - num;
    }
  },
  actions: {
    accionAumentar({commit}){
      // Commit ejecuta las mutaciones
      commit('AUMENTAR_TOTAL');
    },
    accionDisminuir({commit}, numero) {
      commit('DISMINUIR_TOTAL', numero);
    },
    accionDoble({commit}, {estado, numero}) {   
      if(estado) {
          commit('AUMENTAR_TOTAL');
      } else {
        commit('DISMINUIR_TOTAL', numero);
      }
    }
  }
})
