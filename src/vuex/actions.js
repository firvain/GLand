import { CHANGELANGUAGE, SEARCH } from './mutation-types';

export const changeLanguage = ({ dispatch }, active) => {
  dispatch(CHANGELANGUAGE, active);
};
export const setSearchType = ({ dispatch }, active) => {
  dispatch(SEARCH, active);
};
