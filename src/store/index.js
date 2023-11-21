import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//data chung
const storeData = {
  state: {
    todos: [
      { id: 1, title: "Viec 1", completed: false },
      { id: 2, title: "Viec 2", completed: false },
      { id: 3, title: "Viec 3", completed: true },
    ],
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
};

const store = new Vuex.Store(storeData);

export default store;
