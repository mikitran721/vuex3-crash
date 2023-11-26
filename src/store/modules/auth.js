const state = {
  auth: {
    isAuthenticated: false,
  },
};

const getters = {
  //rut gon cho cach viet auth.auth.isAuthenticated o cac component #
  isAuthenticated: (state) => state.auth.isAuthenticated,
};

const actions = {};

const mutations = {
  TOGGLE_AUTH(state) {
    state.auth.isAuthenticated = !state.auth.isAuthenticated;
  },
};

//xuat khau
export default {
  state,
  getters,
  actions,
  mutations,
};
