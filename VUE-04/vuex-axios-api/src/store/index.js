import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
    loading: false,
    todos: []
  },
  mutations: {
    SET_POSTS(state, data){
      state.posts =  data;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_POST(state, data) {
      state.post = data;
    },
    SET_TODOS(state, data) {
      state.todos = data;
    }
  },
  actions: {
    getPosts({commit}) {
      commit('SET_LOADING', true);
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('SET_POSTS', response.data);
      })
      .catch(error => console.log(error))
      .finally( () => commit('SET_LOADING', false));
    },
    getPost({commit}, id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => commit('SET_POST', response.data))
      .catch(error => console.log(error))
    },
    getTodos({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => commit('SET_TODOS', response.data))
      .catch(error => console.log(error));
    }
  },
  getters: {
    allTodos: state => {
      return state.todos;
    },
    doneTodos: state => {
      return state.todos.filter(t => t.completed);
    }
  }
})
