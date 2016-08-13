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
      gid: 'Estate Id',
      category: {
        description: {
          apartment: 'Apartment',
          maisonete: 'Maisonette',
          detached_house: 'Detached House',
          villa: 'Villa',
        },
        id: {
          id2: 'Apartment',
          id3: 'Maisonette',
          id4: 'Detached House',
          id5: 'Villa',
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
      contactInfo: 'Contact Info',
    },
    user: {
      phone: 'Τηλέφωνο',
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
      gid: 'Κωδικός Ιδιοκτησίας',
      category: {
        description: {
          apartment: 'Διαμέρισμα',
          maisonete: 'Μαιζονέτα',
          detached_house: 'Μονοκατοικία',
          villa: 'Έπαυλη',
        },
        id: {
          id2: 'Διαμέρισμα',
          id3: 'Μαιζονέτα',
          id4: 'Μονοκατοικία',
          id5: 'Έπαυλη',
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
      contactInfo: 'Στοιχεια Επικοινωνιας',
    },
    user: {
      phone: 'Τηλέφωνο',
    },
    parishes: {
      agios_nektarios: 'Agios Nektarios',
      'ap.petrou_kai_pavlou': 'Ap.Petrou Kai Pavlou',
      agia_triada: 'Agia Triada',
      agia_zoni: 'Agia Zoni',
      agia_napa: 'Agia Napa',
      katholiki: 'Katholiki',
      agios_ioannis: 'Agios Ioannis',
      arnaout: 'Arnaout',
      omonoia: 'Omonoia',
      agios_nikolaos_lemesos: 'Agios Nikolaos (Lemesos)',
      panagia_evagelistria: 'Panagia Evagelistria',
      kontovathkeia: 'Kontovathkeia',
      agios_andreas: 'Agios Andreas',
      kapsalos: 'Kapsalos',
      agia_fylaxis: 'Agia Fylaxis',
      apostolos_varnavas: 'Apostolos Varnavas',
      apostolos_andreas: 'Apostolos Andreas',
      archangelos_michael: 'Archangelos Michael',
      agios_spyridon: 'Agios Spyridon',
      agios_nikolaos_Kato_Polemidia: 'Agios Nikolaos (Kato Polemidia)',
      agios_georgios_lemesos: 'Agios Georgios (Lemesos)',
      makarios_iii: 'Makarios III',
      anthoupolis: 'Anthoupolis',
      chalkoutsa: 'Chalkoutsa',
      neapoli: 'Neapoli',
      tzami_tzatit: 'Tzami Tzatit',
      zakaki: 'Zakaki',
      tsiflikoudia: 'Tsiflikoudia',
      timiou_prodromou: 'Timiou Prodromou',
      agios_antonios: 'Agios Antonios',
      'pan._evangelistria': 'Pan. Evangelistria',
      panthea: 'Panthea',
      agios_loukas: 'Agios Loukas',
      agia_paraskevi: 'Agia Paraskevi',
      agios_georgios: 'Agios Georgios',
      parekklisia: 'Parekklisia',
      potamos_germasogeias: 'Potamos Germasogeias',
      apostolos_loukas: 'Apostolos Loukas',
      agios_athanasios: 'Agios Athanasios',
      agios_stylianos: 'Agios Stylianos',
      erimi: 'Erimi',
      moni: 'Moni',
      fasoula_lemesou: 'Fasoula Lemesou',
      paramytha: 'Paramytha',
      agios_tychon: 'Agios Tychon',
      tserkezoi: 'Tserkezoi',
      episkopi_lemesou: 'Episkopi Lemesou',
      palodeia: 'Palodeia',
      kantou: 'Kantou',
      ypsonas: 'Ypsonas',
      pano_polemidia: 'Pano Polemidia',
      mesa_geitonia: 'Mesa Geitonia',
      mouttagiaka: 'Mouttagiaka',
      trachoni_lemesou: 'Trachoni Lemesou',
      kolossi: 'Kolossi',
      asomatos_lemesoy: 'Asomatos Lemesoy',
      akrotiri: 'Akrotiri',
      pyrgos: 'Pyrgos',
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
  '/list': {
    name: 'list',
    component(resolve) {
    require(['./components/list'], resolve)  // eslint-disable-line
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
