import * as types from './mutation-types';
export const changeLanguage = ({ dispatch }, language) => { // eslint-disable-line
  dispatch(types.CHANGELANGUAGE, language);
};
