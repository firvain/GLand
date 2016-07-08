import { CHANGELANGUAGE } from './mutation-types';

export default {
  [CHANGELANGUAGE](state, obj) {
    console.log('state.language', state.language);
      state.language = obj.language; // eslint-disable-line
  },
};
