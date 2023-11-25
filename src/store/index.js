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
  actions: {
    // deleteTodo(context,todoId){
    deleteTodo({ commit }, todoId) {
      //goi len mutation can su dung
      // context.commit("DELETE_TODO",todoId);
      commit("DELETE_TODO", todoId);
    },

    //action - addTodo
    addTodo({ commit }, newTodo) {
      commit("ADD_TODO", newTodo);
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
  },
};

const store = new Vuex.Store(storeData);

export default store;
