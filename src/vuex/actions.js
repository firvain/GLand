import { CHANGELANGUAGE } from './mutation-types';
export const changeLanguage = ({ dispatch }, active) => { // eslint-disable-line
  dispatch(CHANGELANGUAGE, active);
};
