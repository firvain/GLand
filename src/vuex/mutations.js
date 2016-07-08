import { CHANGELANGUAGE } from './mutation-types';

export default {
  [CHANGELANGUAGE](state, language) {
      state.language = language; // eslint-disable-line
  },
};
