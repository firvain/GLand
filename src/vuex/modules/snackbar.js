import { SNACKBAR } from '../mutation-types';

// initial state
const state = {
  msg: '',
};

// mutations
const mutations = {
  [SNACKBAR](state, msg) { // eslint-disable-line
      state.msg = msg;  // eslint-disable-line
  },
};

export default {
  state,
  mutations,
};
