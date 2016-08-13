<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <div id="hacker-list">

  <input class="search" />
  <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary" class="sort" data-sort="gid">Sort by gid</button>
  <!-- <span class="sort" data-sort="city">Sort by city</span> -->

  <ul class="list">
   <li v-for='item of getCartProducts'>
     <div class='title'>
       <p class="gid">{{$t('estate.gid')}} {{item.gid}}</p>
     </div>
     <p class="price">{{$t('listing.price')}} {{item.price}}</p>

     <!-- <p class="city">{{item.city}}</p> -->
   </li>
  </ul>
  <div style="display:none;">
  <!-- A template element is needed when list is empty, TODO: needs a better solution -->
  <li id="hacker-item">
   <p class="gid"></p>
   <p class="price"></p>
  </li>
</div>
</div>
    </div>
  </div>


</template>
<script>
  import { isEmpty } from 'lodash';
  import { setCurrentRoute, setPreviousRoute } from '../vuex/actions';
  import { getLanguage, getCurrentRoute, getPreviousRoute, getCartProducts } from '../vuex/getters';
  import List from 'list.js';

  export default {
    // Options / Data
    data() {
      return {
      };
    },
    props: [],
    computed: {},
    methods: {},
    route: {
      activate(transition) {
        return new Promise((resolve) => {
          this.setCurrentRoute(transition.to.path);
          if (!isEmpty(transition.from)) {
            this.setPreviousRoute(transition.from.path);
          }
          resolve();
        });
      },
    },
    vuex: {
      getters: {
        getLanguage,
        getCurrentRoute,
        getPreviousRoute,
        getCartProducts,
      },
      actions: {
        setCurrentRoute,
        setPreviousRoute,
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
      console.log('products', this.getCartProducts);
      const options = {
        valueNames: ['gid'],
      };
      const myList = new List('hacker-list', options); // eslint-disable-line
    },
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
    name: 'list',
  };
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
    padding: 0.2em;
    border: 1px solid rgb(96,125,139);
    border-radius: 0.2em;
    margin: 0 0 0.2em 0;
    // color: #fff;
}


</style>
