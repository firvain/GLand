import { CHANGELANGUAGE } from '../mutation-types';


// initial state
const state = {
  active: 'el',
};

// mutations
const mutations = {
  [CHANGELANGUAGE](state, search) { // eslint-disable-line
      state.active = search;  // eslint-disable-line
  },
};

export default {
  state,
  mutations,
};
