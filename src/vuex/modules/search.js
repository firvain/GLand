import { SEARCH } from '../mutation-types';

// initial state
const state = {
  full: true,
};

// mutations
const mutations = {
  [SEARCH](state, full) { // eslint-disable-line
      state.full = full;  // eslint-disable-line
  },
};

export default {
  state,
  mutations,
};
