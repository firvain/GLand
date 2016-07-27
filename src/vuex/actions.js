import { CHANGELANGUAGE, SEARCH, PREVIOUS_ROUTE, CURRENT_ROUTE,
   SNACKBAR, SETCLICKEDESTATE } from './mutation-types';

export const changeLanguage = ({ dispatch }, active) => {
  dispatch(CHANGELANGUAGE, active);
};
export const setSearchType = ({ dispatch }, active) => {
  dispatch(SEARCH, active);
};
export const setPreviousRoute = ({ dispatch }, previous) => {
  dispatch(PREVIOUS_ROUTE, previous);
};
export const setCurrentRoute = ({ dispatch }, current) => {
  dispatch(CURRENT_ROUTE, current);
};
export const setSnackbarMsg = ({ dispatch }, msg) => {
  dispatch(SNACKBAR, msg);
};

export const setClickedEstate = ({ dispatch }, clickedEstate) => {
  dispatch(SETCLICKEDESTATE, clickedEstate);
};
