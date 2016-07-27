<template lang="html">
  <div class="mdl-grid" v-show='showAmenities'>
    <fieldset class="search-form__amenities">
      <div class="mdl-cell mdl-cell--12-col">
        <template v-for="(key, val) of amenities">
            <mdl-checkbox :checked.sync="checks" :id="'search-form__amenities-' + key" :value="key" class="mdl-js-ripple-effect"> {{ $t(`estate.amenities.${key}`) }}</mdl-checkbox>
        </template>
      </div>
    </fieldset>
  </div>
</template>
<script>
  import { getLanguage } from '../vuex/getters';

  export default {
    // Options / Data
    data() {
      return {
      };
    },
    props: {
      showAmenities: {
        default: false,
      },
      amenities: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    computed: {
      checks() {
        const self = this;
        const keys = Object.keys(this.amenities);
        console.log('keys', keys);
        function filterByKey(key) {
          return self.amenities[key];
        }
        const a = keys.filter(filterByKey);
        console.log('keys', a);
        return a;
      },
    },
    methods: {},
    vuex: {
      getters: {
        getLanguage,
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
    // ready () {},
    // attached () {},
    // detached () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    // directives: {},
    // elementDirectives: {},
    // filters: {},
    // components: {},
    // transitions: {},
    // partials: {},
    // Options / Misc
    // parent: null,
    // events: {},
    // mixins: [],
    // name: 'amenities',
  };
</script>
