import * as types from './mutation-types';

export const changeLanguage = ({ dispatch }, active) => {
  dispatch(types.CHANGELANGUAGE, active);
};
export const setSearchType = ({ dispatch }, active) => {
  dispatch(types.SEARCH, active);
};
export const setPreviousRoute = ({ dispatch }, previous) => {
  dispatch(types.PREVIOUS_ROUTE, previous);
};
export const setCurrentRoute = ({ dispatch }, current) => {
  dispatch(types.CURRENT_ROUTE, current);
};
export const setSnackbarMsg = ({ dispatch }, msg) => {
  dispatch(types.SNACKBAR, msg);
};

export const setClickedEstate = ({ dispatch }, clickedEstate) => {
  dispatch(types.SETCLICKEDESTATE, clickedEstate);
};

export const addToCart = ({ dispatch }, estate) => {
  dispatch(types.ADD_TO_CART, estate);
};
