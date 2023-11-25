import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//data chung
const storeData = {
  state: {
    todos: [],
    auth: {
      isAuthenticated: false,
    },
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.completed),
    /* progress: (state) => {
      const doneTodos = state.todos.filter((todo) => todo.completed);

      return Math.round((doneTodos.length / state.todos.length) * 100);
    }, */
    //using extend getters
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos;
      return Math.round((doneTodos.length / state.todos.length) * 100);
    },
  },
  actions: {
    async getTodos({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        //dua response nay thanh sate = mutation
        commit("SET_TODOS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    // deleteTodo(context,todoId){
    async deleteTodo({ commit }, todoId) {
      //goi len mutation can su dung
      // context.commit("DELETE_TODO",todoId);
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        commit("DELETE_TODO", todoId);
      } catch (error) {
        console.log(error);
      }
    },

    //action - addTodo
    async addTodo({ commit }, newTodo) {
      try {
        await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
        commit("ADD_TODO", newTodo);
      } catch (error) {
        console.log(error);
      }
    },
  },

  //mutation - thay doi state
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
    MARK_COMPLETE(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },

    ADD_TODO(state, newTodo) {
      state.todos.unshift(newTodo);
    },

    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
};

const store = new Vuex.Store(storeData);

export default store;
