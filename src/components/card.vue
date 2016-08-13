<template lang="html">
<div class="card-wrapper">
  <div v-if="$loadingRouteData">Loading data...</div>
  <div v-if="!$loadingRouteData" >
    <h2 class="title">
    {{ $t(`estate.category.id.id${properties.category_id}`) }} {{ $t('message.atRoad') }}  {{ properties.address.street_name }}
    </h2>
    <!-- <mdl-card class="info-card" title=' ' :media='media'>
    </mdl-card> -->
    <div class="mdl-grid ">
      <div class="mdl-cell mdl-cell--12-col info-card">
        <img :src='media' alt="test" class=" mdl-shadow--2dp"/>
      </div>
    </div>
    <h2 class="listingType" v-show='properties.listing.sale'>
      {{ $t('listing.type.sale') }}
    </h2>
    <h2 class="listingType" v-show='!properties.listing.sale'>
      {{ $t('listing.type.rent') }}
    </h2>

    <div v-show='!contactInfo' :transition="transitions.fade.id" class="mdl-grid address-details">
      <div class="mdl-cell mdl-cell--12-col">
        <h3 class="address">
          {{ $t('estate.address') }}
        </h3>
        <p>
          {{ properties.address.street_name }} {{ properties.address.street_number }}
        </p>
        <p>
          {{ properties.address.ps_code }}, {{ properties.address.city }}
        </p>
      </div>
    </div>
    <div v-show='!contactInfo' :transition="transitions.fade.id" class="mdl-grid amenities">
      <div class="mdl-cell mdl-cell--12-col">
        <amenities :show-amenities='showAmenities' :amenities='properties.amenities'></amenities>
      </div>
    </div>
    <mdl-button raised colored @click.stop="showContactInfo">{{ $t('message.contactInfo') }}</mdl-button>
    <div v-show='contactInfo' class="mdl-grid address-details">
      <div class="mdl-cell mdl-cell--12-col info-card">
        <p>
          <strong>{{ properties.user.first_name }} {{ properties.user.last_name }}</strong>, {{ properties.user.street_name }} {{ properties.user.street_number }}, {{ properties.user.city }}, {{ properties.user.country }}
        </p>
        <p>
          {{ $t('user.phone') }}: <strong>{{ properties.user.phone}}</strong>
        </p>
        <p>
           Fax: {{ properties.user.fax}}
        </p>
        <p>
          E-mail: <strong>{{ properties.user.email}}</strong>
        </p>
    </div>
  </div>
  </div>
</div>
</template>
<script >
  // import $ from '../javascripts/helpers';
  import { isEmpty } from 'lodash';
  import { setCurrentRoute, setPreviousRoute, setClickedEstate } from '../vuex/actions';
  import { getLanguage } from '../vuex/getters';
  import amenities from './amenities';

  export default {
    // Options / Data
    data() {
      return {
        showAmenities: true,
        contactInfo: false,
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
          user: {},
        },
        transitions: {
          fade: {
            id: 'fade',
            // hooks: {
            //   beforeEnter: function(el) { // eslint-disable-line
            //     console.log('beforeEnter');
            //   },
            // },
          },
        },
        media: 'https://res.cloudinary.com/firvain/image/upload/v1467659504/1091/dfovlwox0w1si4ggb0sv.jpg',
      };
    },
    ready() {
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
          .then(response => response.data.features[0].properties);
      },
      showContactInfo() {
        if (this.$data.contactInfo) {
          this.$data.contactInfo = false;
        } else {
          this.$data.contactInfo = true;
        }
      },
    },
    watch: {
      getLanguage: function a() {
        console.log(this.getLanguage);
        return this.getLanguage;
      },
    },
    route: {
      waitForData: false,
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
.info-card {
  img {
    width: 100%;
    height: auto;
  }
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
    border-radius: .2em;
    text-align: center;
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
  .address-details{
    p {
      margin: 0;
    }
  }
  .fade-transition {
    overflow: hidden;
    visibility: visible;
    opacity: 1;
  }
  .fade-enter, .fade-leave {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
