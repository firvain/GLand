<template lang="html">
  <div class="card-wrapper">
    <h2 class="title">
    {{ properties.description }} {{ $t('message.atRoad') }}  {{ properties.address.street_name }}
    </h2>
    <mdl-card class="info-card" title=' '>
    </mdl-card>
    <h2 class="listingType" v-show='properties.listing.sale'>
      {{ $t('listing.type.sale') }}
    </h2>
    <h2 class="listingType" v-show='!properties.listing.sale'>
      {{ $t('listing.type.rent') }}
    </h2>
    <h3 class="address">
      {{ $t('estate.address') }}
    </h3>
    <p>
      {{ properties.address.street_name }} {{ properties.address.street_number }}, {{ properties.address.ps_code }}, {{ properties.address.city }}
    </p>
    <div class="mdl-grid amenities">
      <div class="mdl-cell mdl-cell--12-col">
        <amenities :show-amenities='showAmenities' :amenities='properties.amenities'></amenities>
      </div>
    </div>
  </div>
</template>
<script >
  import $ from '../javascripts/helpers';
  import { isEmpty, cloneDeep, set } from 'lodash';
  import { setCurrentRoute, setPreviousRoute, setClickedEstate } from '../vuex/actions';
  import { getLanguage } from '../vuex/getters';
  import amenities from './amenities';

  export default {
    // Options / Data
    data() {
      return {
        showAmenities: true,
        amenities: [
          {
            name: 'Χώρος Στάθμεσης',
            value: 'parking',
            show: false,
          },
          {
            name: 'Επιπλωμένο',
            value: 'furnished',
            show: true,
          },
          {
            name: 'Θέρμανση',
            value: 'heating_system',
            show: true,
          },
          {
            name: 'Κλιματισμός',
            value: 'air_condition',
            show: true,
          },
          {
            name: 'Θέα',
            value: 'has_view',
            show: true,
          },
        ],
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
          set(obj, 'description', description);
          this.setClickedEstate(obj);
          return obj;
        });
      },
    },
    watch: {
      getLanguage: function a() {
        console.log(this.getLanguage);
        return this.getLanguage;
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
        setClickedEstate,
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
    border-radius: .2em;
  }
  .listingType {
    background-color: rgb(255, 82, 82);
    color: #fff;
    font-size: 1.2em;
    line-height: normal;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    padding: .2em;
    text-align: right;
    border-radius: .2em;
    letter-spacing: .1em;
  }
}
</style>
