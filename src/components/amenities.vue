<template lang="html">

    <fieldset class="search-form__amenities">

        <div v-if="!search">
        <template v-for="(key, val) of amenities">
          <div v-if="val">
            <mdl-checkbox  :checked.sync="checks" :id="'search-form__amenities-' + key" :value="key" class="mdl-js-ripple-effect" disabled> {{ $t(`estate.amenities.${key}`) }}</mdl-checkbox>
          </div>
          <!-- <div v-else>
            <mdl-checkbox :checked.sync="checks" :id="'search-form__amenities-' + key" :value="key" class="mdl-js-ripple-effect"> {{ $t(`estate.amenities.${key}`) }}</mdl-checkbox>
          </div> -->
        </template>
      </div>
      <div v-else>
        <template v-for="(key, val) of amenities">
            <mdl-checkbox  :checked.sync="checks" :id="'search-form__amenities-' + key" :value="key" class="mdl-js-ripple-effect"> {{ $t(`estate.amenities.${key}`) }}</mdl-checkbox>
          <!-- <div v-else>
            <mdl-checkbox :checked.sync="checks" :id="'search-form__amenities-' + key" :value="key" class="mdl-js-ripple-effect"> {{ $t(`estate.amenities.${key}`) }}</mdl-checkbox>
          </div> -->
        </template>
      </div>

    </fieldset>

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
        type: Boolean,
        default: false,
      },
      amenities: {
        type: Object,
        default() {
          return {};
        },
      },
      search: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      checks() {
        const self = this;
        let checks;
        const keys = Object.keys(this.amenities);
        function filterByKey(key) {
          return self.amenities[key];
        }
        if (this.search) {
          checks = [];
        } else {
          checks = keys.filter(filterByKey);
        }
        return checks;
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
<style lang="scss">
.mdl-checkbox  {
  &.is-disabled {
    .mdl-checkbox__label {
      color: inherit;
    }
  }
}

</style>
