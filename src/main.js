import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueMdl from 'vue-mdl';
import VueI18n from 'vue-i18n';
import { sync } from 'vuex-router-sync';
import VueResource from 'vue-resource';
import AsyncComputed from 'vue-async-computed';
import store from './vuex/store';

Vue.use(VueI18n);
Vue.use(AsyncComputed);
Vue.use(VueResource);
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
      address: 'Address',
      amenities: {
        solar_water_heating: 'Solar Water System',
        heating_system: 'Heating System',
        fireplace: 'Fireplace',
        awning: 'Awning',
        alarm: 'Alarm',
        furnished: 'Furnished',
        has_storage: 'Storage',
        elevator: 'Elevator',
        balcony: 'Balcony',
        corner: 'Corner',
        airy: 'Airy',
        double_glass: 'Double Glass',
        attic: 'Attic',
        has_view: 'View',
        garden: 'Garden',
        air_condition: 'Air Condition',
        penthouse: 'Penthhouse',
        night_power: 'Night Power',
        parking: 'Parking',
        playroom: 'Playroom',
        pool: 'Pool',
        satellite: 'Sattelite',
        secure_door: 'Secure Door',
        shared_expenses: 'Shared Expenses',
      },
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
      atRoad: 'at road',
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
      address: 'Διεύθυνση',
      amenities: {
        solar_water_heating: 'Ηλιακός',
        heating_system: 'Θέρμανση',
        fireplace: 'Τζάκι',
        awning: 'Τέντα',
        alarm: 'Συναγερμός',
        furnished: 'Επιπλωμένο',
        has_storage: 'Αποθήκη',
        elevator: 'Ανελκυστήρας',
        balcony: 'Balcony',
        corner: 'Μπαλκόνι',
        airy: 'Ευάερο',
        double_glass: 'Διπλά Τζάμια',
        attic: 'Σοφίτα',
        has_view: 'Θέα',
        garden: 'Κήπος',
        air_condition: 'Κλιματισμός',
        penthouse: 'Ρετιρέ',
        night_power: 'Νυχτερινό Ρέυμα',
        parking: 'Χώρος Στάθμευσης',
        playroom: 'Δωμάτιο Παιχνιδιού',
        pool: 'Πισίνα',
        satellite: 'Δορυφορική',
        secure_door: 'Πόρτα ασφαλείας',
        shared_expenses: 'Κοινόχρηστα Έξοδα',
      },
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
      atRoad: 'στην οδό',
    },
  },
};

Vue.config.lang = 'el';

Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang]);
});
router.map({
  '/': {
    name: 'latest',
    component(resolve) {
      require(['./components/latest'], resolve) // eslint-disable-line
    },
  },
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
  '/card/:gid': {
    name: 'card',
    component(resolve) {
    require(['./components/card'], resolve)  // eslint-disable-line
    },
  },
});
// router.redirect({
//   '*': '/',
// });
sync(store, router);
router.start(App, '#app');
// window.router = router;
// router.beforeEach((transition) => {
//   console.log('transition', transition.from);
//   transition.next();
// });
export default router;
