<template lang="html">
  <div>
    <p>
      {{ lang }}
    </p>
    <nav class="actions">
      <mdl-tooltip for="actions-advanced">{{{ $t('navigation.advancedSearch') }}}</mdl-tooltip>
      <mdl-button icon='true' v-link="{ path: 'advanced-search' }" id="actions-advanced"><i class="mdi mdi-google-circles-extended"></i></mdl-button>
      <mdl-button icon='true'  @click="ch" ><i class="mdi mdi-translate"></i></i></mdl-button>
      <!-- <a href="#" ><i class="mdi mdi-translate"></i></a> -->
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
  import advancedSearch from './advanced-search';
  import { changeLanguage } from '../vuex/actions';
  import { getLanguage } from '../vuex/getters';
 // const getLanguage = state => state.lang;
  export default {
    // Options / Data
    data() {
      return {
      };
    },
    props: [],
    computed: {},
    methods: {
      ch() {
        this.changeLanguage('en');
      },
    }, // ,
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
        lang: getLanguage,
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
