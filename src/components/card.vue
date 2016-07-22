<template lang="html">
  <div class="card-wrapper">
    <h2 class="title">
    {{ properties.description }} στην οδό  {{ properties.address.street_name }}
    </h2>
    <mdl-card class="info-card" title=' '>
    </mdl-card>
    <h3 class="address">
      {{ $t('estate.address') }}
    </h3>
    <p>
      <!-- {{ address }} -->
    </p>
    <div class="mdl-grid amenities">
      <div class="mdl-cell mdl-cell--12-col">
        <amenities :show-amenities='showAmenities' :amenities-checks='amenitiesChecks'></amenities>
      </div>
    </div>
  </div>
</template>
<script >
  import $ from '../javascripts/helpers';
  import { isEmpty, cloneDeep, set } from 'lodash';
  import { setCurrentRoute, setPreviousRoute } from '../vuex/actions';
  import { getLanguage } from '../vuex/getters';
  import amenities from './amenities';
  export default {
    // Options / Data
    data() {
      return {
        showAmenities: true,
        amenitiesChecks: [],
        properties: {
          ameniies: {},
          address: {},
          listing: {},
        },
        media: 'https://res.cloudinary.com/firvain/image/upload/v1467659504/1091/dfovlwox0w1si4ggb0sv.jpg',
      };
    },
    ready() {
      this.$el.querySelector('.mdl-card__title').style.background =
      `url(' ${this.$data.media}') center / cover`;
      // const a = $.categoryToDesc(this.getLanguage, this.properties.category_id);
      // console.log('res', getEstate(this.$route.params.gid));
    },
    props: [],
    components: {
      amenities,
    },
    computed: {
    },
    // asyncComputed: {
    //   properties() {
    //     return this.$http.get('http://127.0.0.1:3000/v1/listed/12')
    //     .then(response => response.data.features[0].properties);
    //   },
    // },
    methods: {
      getEtsateProperties(gid) {
        return this.$http.get(`http://127.0.0.1:3000/v1/listed/${gid}`)
        .then(response => {
          const obj = cloneDeep(response.data.features[0].properties);
          const categoryId = response.data.features[0].properties.category_id;
          const description = $.categoryToDesc(this.getLanguage, `id${categoryId}`);
          console.log('description', description);
          set(obj, 'description', description);
          console.log('obj', obj);
          return obj;
        });
      },
    },
    route: {
      waitForData: true,
      data({ to: { params: { gid } } }) { // eslint-disable-line
        // console.log('$route.params',);
        return {
          properties: this.getEtsateProperties(gid),
        };
      },
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
      },
      actions: {
        setCurrentRoute,
        setPreviousRoute,
      },
    },
    name: 'card',
  };
</script>
<style lang="scss">
.card-wrapper {
  margin: 1em;
}
.info-card.mdl-card {
  width: 100%;
}
.info-card .mdl-card__title,
.info-card .mdl-card__menu {
  color: white;
}
.info-card .mdl-card__title {
  height: 20em;
  justify-content: center;
}
.info-card .mdl-card__title-text {
  background-color: rgba(255, 82, 82, .5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%
}
.card-wrapper {
  .title {
    background-color: rgb(96, 125, 139);
    color: #fff;
    font-size: 1.2em;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 0.2em;
    padding: .2em;
  }
  .address {
    background-color: rgb(96, 125, 139);
    color: #fff;
    font-size: 1.2em;
    line-height: normal;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    padding: .2em;
  }
  .amenitites {

  }
}
</style>
