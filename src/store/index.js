import Vue from "vue";
import Vuex from "vuex";

//import MODULES
import auth from "./modules/auth";
import todos from "./modules/todos"; //import default voi khac ten

Vue.use(Vuex);

//data chung
const storeData = {
  modules: {
    auth,
    todos,
  },
};

const store = new Vuex.Store(storeData);

export default store;
