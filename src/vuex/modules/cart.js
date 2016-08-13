import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
} from '../mutation-types';

const state = {
  added: [],
  lastCheckout: null,
};
const mutations = {
  [ADD_TO_CART](state, estate) { // eslint-disable-line
    state.lastCheckout = null // eslint-disable-line
    const record = state.added.find(e => e.gid === estate.gid);
    if (!record) {
      state.added.push({
        gid: estate.gid,
        price: estate.price,
        amenities: estate.amenities,
      });
    }
  },
  [CHECKOUT_REQUEST](state) { // eslint-disable-line
  // clear cart
    state.added = []; // eslint-disable-line
    state.lastCheckout = null; // eslint-disable-line
  },
};

export default {
  state,
  mutations,
};
