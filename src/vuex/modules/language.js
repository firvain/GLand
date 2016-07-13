import { CHANGELANGUAGE } from '../mutation-types';


// initial state
const state = {
  active: 'el',
};

// mutations
const mutations = {
  [CHANGELANGUAGE](state, language) { // eslint-disable-line
      state.active = language;  // eslint-disable-line
  },
};

export default {
  state,
  mutations,
};
