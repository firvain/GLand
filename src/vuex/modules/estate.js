import { SETCLICKEDESTATE } from '../mutation-types';

// initial state
const state = {
  estate: {},
};

// mutations
const mutations = {
  [SETCLICKEDESTATE](state, clickedEstate) { // eslint-disable-line
      state.estate = clickedEstate;  // eslint-disable-line
  },
};

export default {
  state,
  mutations,
};
