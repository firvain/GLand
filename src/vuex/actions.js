import { CHANGELANGUAGE } from './mutation-types';
export const changeLanguage = ({ dispatch }, language) => { // eslint-disable-line
  dispatch(CHANGELANGUAGE, language);
};
