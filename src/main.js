import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueMdl from 'vue-mdl';
import VueI18n from 'vue-i18n';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueMdl);
const router = new VueRouter({
  hashbang: false,
  history: true,
});
const locales = {
  en: {
    language: {
      en: 'English',
      el: 'Greek',
    },
    navigation: {
      search: 'Search',
      advancedSearch: 'Advanced Search',
      toggleLanguage: 'Switch Language',
      home: 'Home',
      back: 'Go Back',
    },
    estate: {
      category: {
        description: {
          apartment: 'Apartment',
          maisonete: 'Maisonette',
          detached_house: 'Detached House',
          villa: 'Villa',
        },
      },
    },
    advancedOptions: 'Advanced Options',
    message: {
      hello: 'hello world',
    },
  },
  el: {
    language: {
      en: 'Αγγλικά',
      el: 'Ελληνικά',
    },
    navigation: {
      search: 'Αναζήτηση',
      advancedSearch: 'Σύνθετη Αναζήτηση',
      toggleLanguage: 'Αλλαγή Γλώσσας',
      home: 'Αρχική',
      back: 'Πίσω',
    },
    estate: {
      category: {
        description: {
          apartment: 'Διαμέρισμα',
          maisonete: 'Μαιζονέτα',
          detached_house: 'Μονοκατοικία',
          villa: 'Έπαυλη',
        },
      },
    },
    advancedOptions: 'Περισσότερες Επιλογές',
    message: {
      hello: 'Καλημέρα',
    },
  },
};

Vue.config.lang = 'el';

Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang]);
});
router.map({
  '/advanced-search': {
    component(resolve) {
      require(['./components/advanced-search'], resolve) // eslint-disable-line
    },
    name: 'advanced-search',
  },
  '/hello': {
    component(resolve) {
    require(['./components/hello'], resolve)  // eslint-disable-line
    },
    name: 'hello',
  },
});
sync(store, router);
router.start(App, '#app');

// router.beforeEach((transition) => {
//   console.log('transition', transition.from);
//   transition.next();
// });
