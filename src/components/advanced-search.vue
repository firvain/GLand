<template lang="html">
  <div class="mdl-grid" id='search-form'>
    <div class="mdl-cell mdl-cell--12-col">
      <form class="search-form" action="#" method="post">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
              <mdl-select label="Estate" id="estate-type" :value.sync="estateType" :options="estateTypes" @change='getSelectValue'></mdl-select>
            </div>
          </div>
          <div class="mdl-grid" v-show="showAme">
            <fieldset class="search-form__amenities">
              <legend>Select Amenities</legend>
              <amenities></amenities>
            </fieldset>
          </div>
      </form>
    </div>
  </div>

</template>
<script>
  import $ from '../javascripts/helpers';
  import { getLanguage } from '../vuex/getters';
  import amenities from './amenities';
  export default {
    name: 'advancedSearch',
    // Options / Data
    data() {
      return {
        items: ['2', '3', '4', '5'],
        estateType: '',
        estateTypes: [],
        showAme: false,
      };
    },
    components: {
      amenities,
    },
    props: [],
    computed: {
      estateTypes() {
        if (this.getLanguage === 'el') {
          return ['Διαμέρισμα', 'Μαιζονέτα', 'Μονοκατοικία', 'Έπαυλη'];
        }
        return ['Apartment', 'Maisonette', 'Detached House', 'Villa'];
      },
      estateType() {
        if (this.getLanguage === 'el') {
          return 'Διαμέρισμα';
        }
        return 'Apartment';
      },
    },
    methods: {
      getSelectValue(event) { // eslint-disable-line
        this.$nextTick(() => $.qs('#estate-type').value);
      },
      toggleAmenities() {
        // if (this.$data)
        this.$data.showAme = true;
      },
    },
    vuex: {
      getters: {
        getLanguage,
      },
    },
    // route: {
    //   activate(transition) {
    //     console.log('activated', 'activated advancedSearch');
    //     // when done:
    //     transition.next();
    //   },
    // },
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
    // name: ''
  };
</script>
