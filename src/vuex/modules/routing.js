import { CURRENT_ROUTE, PREVIOUS_ROUTE } from '../mutation-types';

// initial state
const state = {
  current: '/',
  previous: '',
};

// mutations
const mutations = {
  [CURRENT_ROUTE](state, current) { // eslint-disable-line
      state.current = current;  // eslint-disable-line
  },
  [PREVIOUS_ROUTE](state, previous) { // eslint-disable-line
      state.previous = previous;  // eslint-disable-line
  },
};

export default {
  state,
  mutations,
};
