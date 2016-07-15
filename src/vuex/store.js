import Vue from 'vue';
import Vuex from 'vuex';
import language from './modules/language';
import search from './modules/search';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    language,
    search,
  },
  strict: true,
});
// /* eslint-disable */
// if (module.hot) {
//   module.hot.accept(['./mutations'], () => {
//     const newMutations = require('./mutations').default;
//     console.log(newMutations);
//     store.hotUpdate({
//       newMutations,
//     });
//   });
// }

export default store;
