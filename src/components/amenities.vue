<template lang="html">
  <div class="mdl-grid" v-show='showAmenities'>
    <fieldset class="search-form__amenities">
      <div class="mdl-cell mdl-cell--6-col">
        <mdl-checkbox  v-for="amenity of amenities" :checked.sync="amenitiesChecks" :id="'search-form__maenities-' + amenity.value" :value="amenity.value" class="mdl-js-ripple-effect"> {{ amenity.name }} </mdl-checkbox>
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
        // checks: [],
      };
    },
    props: {
      showAmenities: {
        default: false,
      },
      amenitiesChecks: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    computed: {
      amenities() {
        if (this.getLanguage === 'el') {
          return [
            {
              name: 'Χώρος Στάθμεσης',
              value: 'parking',
            },
            {
              name: 'Επιπλωμένο',
              value: 'furnished',
            },
            {
              name: 'Θέρμανση',
              value: 'heating',
            },
            {
              name: 'Κλιματισμός',
              value: 'air_condition',
            },
            {
              name: 'Θέα',
              value: 'has_view',
            },
          ];
        }
        return [
          {
            name: 'Parking',
            value: 'parking',
          },
          {
            name: 'Furnished',
            value: 'furnished',
          },
          {
            name: 'Heating',
            value: 'heating',
          },
          {
            name: 'Air Condition',
            value: 'air_condition',
          },
          {
            name: 'view',
            value: 'has_view',
          },
        ];
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
