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
      switchLang: 'Switch Language',
    },
    navigation: {
      search: 'Search',
      advancedSearch: 'Advanced Search',
    },
    message: {
      hello: 'hello world',
    },
  },
  el: {
    language: {
      en: 'Αγγλικά',
      el: 'Ελληνικά',
      switchLang: 'Αλλαγή Γλώσσας',
    },
    navigation: {
      search: 'Αναζήτηση',
      advancedSearch: 'Σύνθετη Αναζήτηση',
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
  '/advanced-search': {
    component(resolve) {
      require(['./components/advanced-search'], resolve) // eslint-disable-line
    },
    name: 'advanced-search',
  },
});
sync(store, router);
router.start(App, '#app');
