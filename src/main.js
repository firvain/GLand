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
      toggleLanguage: 'Switch Language',
      home: 'Home',
      back: 'Go Back',
    },
    estate: {
      type: 'Estate Type',
      category: {
        description: {
          apartment: 'Apartment',
          maisonete: 'Maisonette',
          detached_house: 'Detached House',
          villa: 'Villa',
        },
      },
      area: 'Estate area',
      areaUnits: 'sq.m.',
    },
    listing: {
      type: {
        sale: 'Sale',
        rent: 'Rent',
      },
      price: 'Estate Price',
      range: {
        from: 'from',
        to: 'to',
      },
      searchSwitch: 'Search by Listing Id',
      searchMsg: 'Listing Id',
      error: 'Wrong Input!',
    },
    advancedOptions: 'Advanced Options',
    btns: {
      clear: 'Clear',
      cancel: 'Cancel',
      confirm: 'Ok',
      search: 'Search',
      yes: 'Yes',
      no: 'No',
    },
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
      toggleLanguage: 'Αλλαγή Γλώσσας',
      home: 'Αρχική',
      back: 'Πίσω',
    },
    estate: {
      type: 'Τύπος Ιδιοκτησίας',
      category: {
        description: {
          apartment: 'Διαμέρισμα',
          maisonete: 'Μαιζονέτα',
          detached_house: 'Μονοκατοικία',
          villa: 'Έπαυλη',
        },
      },
      area: 'Εμβαδό ακινήτου',
      areaUnits: 'τ.μ.',
    },
    listing: {
      type: {
        sale: 'Πώληση',
        rent: 'Ενοικίαση',
      },
      price: 'Τιμή Ακινήτου',
      range: {
        from: 'από',
        to: 'εώς',
      },
      searchSwitch: 'Αναζήτηση με Κωδικό Αγγελίας',
      searchMsg: 'Κωδικός Αγγελίας',
      error: 'Λάθος Τιμή!',
    },
    advancedOptions: 'Περισσότερες Επιλογές',
    btns: {
      clear: 'Καθαρισμος',
      cancel: 'Ακυρωση',
      confirm: 'Ok',
      search: 'Αναζητηση',
      yes: 'Ναι',
      no: 'Οχι',
    },
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
  '/search': {
    name: 'search',
    component(resolve) {
      require(['./components/search'], resolve) // eslint-disable-line
    },
  },
  '/hello': {
    name: 'hello',
    component(resolve) {
    require(['./components/hello'], resolve)  // eslint-disable-line
    },
  },
});
sync(store, router);
router.start(App, '#app');

// router.beforeEach((transition) => {
//   console.log('transition', transition.from);
//   transition.next();
// });
