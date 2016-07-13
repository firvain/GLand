<template lang="html">
  <div class="mdl-cell mdl-cell--6-col">
    <mdl-checkbox  v-for="amenity in amenities" :checked.sync="checks" :id="'search-form__maenities'+amenity" :value="amenity" class="mdl-js-ripple-effect"> {{ amenity }} </mdl-checkbox>
  </div>
</template>
<script>
  import { getLanguage } from '../vuex/getters';
  export default {
    // Options / Data
    data() {
      return {
        checks: [],
        amenities: [],
      };
    },
    props: [],
    computed: {
      amenities() {
        if (this.getLanguage === 'el') {
          return ['Χώρος Στάθμεσης', 'Επιπλωμένο', 'Θέρμανση', 'Κλιματισμός', 'Θέα'];
        }
        return ['Parking', 'Furnished', 'Heating', 'Air Condition', 'View'];
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
