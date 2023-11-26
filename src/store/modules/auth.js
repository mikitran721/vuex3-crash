const state = {
  auth: {
    isAuthenticated: false,
  },
};

const getters = {};

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
