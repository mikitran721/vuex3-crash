import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//data
const storeData = {
  todos: [
    { id: 1, title: "Viec 1", completed: false },
    { id: 2, title: "Viec 2", completed: false },
    { id: 3, title: "Viec 3", completed: true },
  ],
};
