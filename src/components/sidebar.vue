<template lang="html">
  <div>
    <nav class="actions">
      <mdl-tooltip for="actions-advanced">{{{ $t('navigation.advancedSearch') }}}</mdl-tooltip>
      <mdl-button icon='true' v-link="{ name: 'advanced-search' }" id="actions-advanced"><i class="mdi mdi-google-circles-extended"></i></mdl-button>
      <mdl-tooltip for="actions-toggleLanguage">{{{ $t('navigation.toggleLanguage') }}}</mdl-tooltip>
      <mdl-button icon='true'  @click="toggleLanguage" id="actions-toggleLanguage"><i class="mdi mdi-translate"></i></i></mdl-button>
      <mdl-tooltip for="actions-home">{{{ $t('navigation.home') }}}</mdl-tooltip>
      <mdl-button icon='true'  @click="goToHome" id="actions-home"><i class="mdi mdi-home"></i></i></mdl-button>
      <mdl-tooltip for="actions-back">{{{ $t('navigation.back') }}}</mdl-tooltip>
      <mdl-button icon='true'   @click="goBack" id="actions-back"><i class="mdi mdi-undo-variant"></i></i></mdl-button>
      <!-- <a href="#" ><i class="mdi mdi-translate"></i></a> -->
    </nav>

    <router-view keep-alive></router-view>
  </div>
</template>
<script>
  import Vue from 'vue';
  import advancedSearch from './advanced-search';
  import { changeLanguage } from '../vuex/actions';
  import { getLanguage } from '../vuex/getters';
  export default {
    // Options / Data
    data() {
      return {
      };
    },
    props: [],
    computed: {},
    methods: {
      toggleLanguage() {
        if (this.getLanguage === 'el') {
          Vue.config.lang = 'en';
          this.changeLanguage('en');
        } else {
          Vue.config.lang = 'el';
          this.changeLanguage('el');
        }
      },
      goToHome() {
        this.$router.go({ path: '/' });
      },
      goBack() {
        this.$router.go({ path: '/advanced-search/amenities' });
      },
    },
    // watch: {},
    // Options / DOM
    // el () {},
    // replace: true,
    // template: '',
    // Options / Lifecycle Hooks
    // init () {},
    // crated () {},
    // beforeCompile () {},
    // compiled () {},
    ready() {
    },
    // attached () {},
    // detached () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    // directives: {},
    // elementDirectives: {},
    // filters: {},
    components: {
      advancedSearch,
    },
    // transitions: {},
    // partials: {},
    // Options / Misc
    // parent: null,
    // events: {},
    // mixins: [],
    // name: ''
    vuex: {
      getters: {
        getLanguage,
      },
      actions: {
        changeLanguage,
      },
    },
  };
</script>
<style lang="scss" scoped>
@import "../sass/_fonts";
@import "~mdi/css/materialdesignicons.css";
nav {
  height: 3em;
  border-bottom: .3em solid rgb(255, 82, 82);
  display: flex;
  align-items: center;
  // justify-content: center;
  button {
    align-self: center;
  }
}

</style>
