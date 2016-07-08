<template lang="html">
  <div class="mdl-grid" id='search-form'>
    <div class="mdl-cell mdl-cell--12-col">
      <form class="search-form" action="#" method="post">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--6-col">
              <mdl-select label="Estate" id="estate-type" :value.sync="country" :options="countriesArray" @change='getSelectValue'></mdl-select>
              <fieldset class="search-form__amenities">
                <legend>Select Amenities</legend>
                <mdl-checkbox  v-for="item in items" :checked.sync="checks" :id="'search-form__'+item" :value="item" class="mdl-js-ripple-effect"> {{item}} </mdl-checkbox>
              </fieldset>
            </div>
          </div>
      </form>
    </div>
  </div>

</template>
<script>
  import $ from '../javascripts/helpers';
  export default {
    name: 'advancedSearch',
    // Options / Data
    data() {
      return {
        checks: [],
        items: ['one', 'two', 'three'],
        country: 'Spain',
        countriesArray: ['Russia', 'Spain', 'France', 'China'],
      };
    },
    props: [],
    computed: {},
    methods: {
      getSelectValue(event) { // eslint-disable-line
        this.$nextTick(() => $.qs('#estate-type').value);
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
    // name: ''
  };
</script>
