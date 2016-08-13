export const getLanguage = state => state.language.active;
export const getSearchType = state => state.search.active;
export const getCurrentRoute = state => state.routing.current;
export const getPreviousRoute = state => state.routing.previous;
export const getSnackbarMsg = state => state.snackbar.msg;
export const getClickedEstate = state => state.estate.estate;
export const getCartProducts = state => { //eslint-disable-line
  return state.cart.added.map(({ gid, price, amenities }) => { // eslint-disable-line
    console.log('amenities', amenities);
    return {
      gid,
      price,
      amenities,
    };
  });
};
