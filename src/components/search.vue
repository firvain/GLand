<template lang="html">
  <div class="search">
    <div class="mdl-grid search-toggle">
      <div class="mdl-cell mdl-cell--6-col">
        <mdl-switch v-ref:search-id-switch :checked.sync="searchTypeCheck" value="one">{{ $t('listing.searchSwitch') }}</mdl-switch>
        </div>
        <div v-show="isCheckByid" class="mdl-cell mdl-cell--6-col">
          <mdl-textfield id="search-id" v-ref:search-id :floating-label="floating" :label=searchByIdLabel :value.sync="estateId" type="text" pattern="^[0-9]*[1-9]+[0-9]*$" :error=errormsg></mdl-textfield>
        </div>

    </div>
    <div class="mdl-grid search-id__buttons" v-show="isCheckByid">
      <div class="mdl-cell mdl-cell--6-col">
        <mdl-button @click.stop.prevent="clearSearchById">{{ $t('btns.clear') }}</mdl-button>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <mdl-button colored raised @click.stop.prevent="searchById">{{ $t('btns.search') }}</mdl-button>
      </div>
    </div>
    <div class="mdl-grid" id='search-form' v-show="!isCheckByid">
      <div class="mdl-cell mdl-cell--12-col">
      <form class="search-form" action="#" method="post">
          <div class="mdl-grid search-form__listingType">
              <div class="mdl-cell mdl-cell--12-col">
                <mdl-radio v-ref:rent :checked.sync="listingType" value='rent' class="mdl-js-ripple-effect" name="search-form__listingType-options">{{ $t('listing.type.rent') }}</mdl-radio>
                <mdl-radio v-ref:sale :checked.sync="listingType" value='sale' class="mdl-js-ripple-effect" name="search-form__listingType-options">{{ $t('listing.type.sale') }}</mdl-radio>
              </div>
          </div>
          <div class="mdl-grid search-form__estateType">
            <div class="mdl-cell mdl-cell--12-col">
              <mdl-select v-ref:estate-type id="estate-type" :label=estateTypeLabel :value.sync="estateType" :options="estateTypes"></mdl-select>
            </div>
          </div>
          <div class="mdl-grid search-form__rangebox">
            <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-cell--stretch">
              <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--12-col">
                  <p>{{ $t('listing.price') }} <strong style="color: rgb(255,82,82);">&euro;</strong></p>
                </div>
                <div class="mdl-cell mdl-cell--6-col">
                  <mdl-textfield v-ref:price-start :floating-label="floating" :label=from :value.sync="startPrice" type="text" pattern="^[0-9]*[1-9]+[0-9]*$" :error=errormsg></mdl-textfield>
                </div>
                <div class="mdl-cell mdl-cell--6-col">
                  <mdl-textfield v-ref:price-end :floating-label="floating" :label=to :value.sync="endPrice" type="text" pattern="^[0-9]*[1-9]+[0-9]*$" :error=errormsg></mdl-textfield>
                </div>
              </div>
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-cell--stretch">
              <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--12-col">
                  <p>{{ $t('estate.area') }} <strong style="color: rgb(255,82,82);">{{ $t('estate.areaUnits') }}</strong></p>
                </div>
                <div class="mdl-cell mdl-cell--6-col">
                    <mdl-textfield  v-ref:area-start :floating-label="floating" :label=from :value.sync="startArea" type="text" pattern="^[0-9]*[1-9]+[0-9]*$" :error=errormsg></mdl-textfield>
                </div>
                <div class="mdl-cell mdl-cell--6-col">
                  <mdl-textfield v-ref:area-end :floating-label="floating" :label=to :value.sync="endArea" type="text" pattern="^[0-9]*[1-9]+[0-9]*$" :error=errormsg></mdl-textfield>
                </div>
              </div>
            </div>
          </div>
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
              <a v-link="'search'" @click.stop='toggleAmenities'>{{ $t('advancedOptions') }}</a>
            </div>
          </div>
          <amenities :show-amenities='showAmenities' :amenities='amenitiesChecks' :search='true' :listing-type='listingType' v-ref:amenities></amenities>
          <div class="mdl-grid search-form__buttons">
            <div class="mdl-cell mdl-cell--6-col">
              <mdl-button @click.stop.prevent="clearForm">{{ $t('btns.clear') }}</mdl-button>
            </div>
            <div class="mdl-cell mdl-cell--6-col">
              <mdl-button colored raised @click.stop.prevent="getValues">{{ $t('btns.search') }}</mdl-button>
            </div>
          </div>
      </form>
    </div>
    </div>
  </div>
</template>
<script>
  import $ from '../javascripts/helpers';
  import _ from 'lodash';
  import Vue from 'vue';
  import amenities from './amenities';
  import { setSearchType, setCurrentRoute, setPreviousRoute } from '../vuex/actions';
  import { getLanguage, getSearchType, getCurrentRoute, getPreviousRoute } from '../vuex/getters';
  import map from '../javascripts/map.js';

  export default {
    name: 'search',
    // Options / Data
    data() {
      return {
        items: ['2', '3', '4', '5'],
        showAmenities: true,
        listingType: 'rent',
        startPrice: '',
        endPrice: '',
        startArea: '',
        endArea: '',
        floating: true,
        estateId: '',
        searchTypeCheck: [],
      };
    },
    components: {
      amenities,
    },
    props: [],
    computed: {
      from() {
        return Vue.t('listing.range.from'); //eslint-disable-line
      },
      to() {
        return Vue.t('listing.range.to');
      },
      errormsg() {
        return Vue.t('listing.error');
      },
      searchByIdLabel() {
        return Vue.t('listing.searchMsg');
      },
      estateType: {
        get() {
          if (this.getLanguage === 'el') {
            return 'Διαμέρισμα';
          }
          return 'Apartment';
        },
      },
      estateTypes() {
        if (this.getLanguage === 'el') {
          return ['Διαμέρισμα', 'Μαιζονέτα', 'Μονοκατοικία', 'Έπαυλη'];
        }
        return ['Apartment', 'Maisonette', 'Detached House', 'Villa'];
      },
      estateTypeLabel() {
        return Vue.t('estate.type');
      },
      isCheckByid() {
        let showFilters;
        if (this.$refs.searchIdSwitch.isChecked) {
          showFilters = true;
        } else {
          showFilters = false;
        }
        this.setSearchType(!showFilters);
        return showFilters;
      },
      amenitiesChecks() {
        if (this.listingType === 'rent') {
          return {
            furnished: false,
            heating_system: false,
            air_condition: false,
            has_view: false,
            parking: false,
          };
        }
        return {
          heating_system: false,
          air_condition: false,
          has_view: false,
          parking: false,
        };
      },
    },
    methods: {
      getCheckedAmenities(event) { // eslint-disable-line
        const values = {};
        this.$refs.amenities.$children.forEach((c) => {
          values[c.value] = c.isChecked;
        });
        return values;
      },
      toggleAmenities() {
        if (this.$data.showAmenities) {
          this.$data.showAmenities = false;
        } else {
          this.$data.showAmenities = true;
        }
      },
      clearForm() {
        this.$data.showAmenities = false;
        this.$data.listingType = ['rent'];
        $.ac('is-checked', this.$refs.rent.$el);
        this.$data.amenitiesChecks = [];
        this.$data.startPrice = '';
        this.$data.endPrice = '';
        this.$data.startArea = '';
        this.$data.endArea = '';
        const inputs = document.querySelectorAll('.search-form__rangebox .mdl-textfield');
        for (const input of inputs) {
          $.rc('is-invalid', input);
        }
        const results = $.findById.call(map, 'results');
        const estates = $.findById.call(map, 'estates');
        results.setVisible(false);
        estates.setVisible(true);
      },
      assignCategories(name) {
        const types = {
          Διαμέρισμα() {
            return '2';
          },
          Μαιζονέτα() {
            return '3';
          },
          Μονοκατοικία() {
            return '4';
          },
          Έπαυλη() {
            return '5';
          },
          Apartment() {
            return '2';
          },
          Maisonette() {
            return '3';
          },
          'Detached House': (() => '4'),
          Villa() {
            return '5';
          },
        };
        return types[name];
      },
      getValues() {
        const results = $.findById.call(map, 'results');
        const estates = $.findById.call(map, 'estates');
        const geoJSONFormat = results.getSource().getSource().getFormat();
        const values = {};
        values.category_id = this.assignCategories(this.$refs.estateType.value)();
        values.price_start = parseInt(this.$refs.priceStart.value, 10);
        values.price_end = parseInt(this.$refs.priceEnd.value, 10);
        values.area_start = parseInt(this.$refs.areaStart.value, 10);
        values.area_end = parseInt(this.$refs.areaEnd.value, 10);
        values.amenities = this.getCheckedAmenities();
        let data = {};
        data = _(values).omitBy(_.isNil).omitBy(_.isEmpty)
          .value();
        this.$http.get('http://127.0.0.1:3000/v1/listed/search', {
          params: {
            sale: data.sale,
            categoryId: data.category_id,
          },
        })
          .then(response => {
            const features = geoJSONFormat.readFeatures(response.data, {
              featureProjection: 'EPSG:3857',
            });
            results.getSource().getSource().clear();
            results.getSource().getSource().addFeatures(features);
          })
          .catch((err) => {
            if (err.status === 0) {
              console.log('sercice Anavailable');
            } else {
              console.log('err', err.statusText);
            }
          });
        // console.log('values', values);

        // _(data.amenities).omitBy((v, k) => {
        //   console.log('v', v);
        //   console.log('k', k);
        //   if (!v) {
        //     return true;
        //   }
        //   return false;
        // }).value();
        // console.log('data', data);

        results.setVisible(true);
        estates.setVisible(false);
        // console.log('title', results.getFeatures());
      },
      searchById() {
        console.log('title', this.$data.estateId);
      },
      clearSearchById() {
        this.$data.estateId = '';
        $.rc('is-invalid', document.querySelector('.search-toggle .mdl-textfield'));
      },
    },
    ready() {
    },
    route: {
      activate(transition) {
        return new Promise((resolve) => {
          this.setCurrentRoute(transition.to.path);
          if (!_.isEmpty(transition.from)) {
            this.setPreviousRoute(transition.from.path);
          }
          resolve();
        });
      },
    },
    vuex: {
      getters: {
        getLanguage,
        getSearchType,
        getCurrentRoute,
        getPreviousRoute,
      },
      actions: {
        setSearchType,
        setCurrentRoute,
        setPreviousRoute,
      },
    },
  };
</script>
<style lang="scss">
.search-toggle {
  justify-content: center;
  align-items: center;
  .mdl-switch__label{
    font-size: 0.8em;
  }
}
.search-id {
  justify-content: center;
  align-items: center;
  .mdl-cell {
    text-align: center;
    border: 1px solid rgb(96,125,139);
    padding: .313em;
  }
}
.search-id__buttons {
  .mdl-cell {
    text-align: center;
  }
}
.search-form__listingType{
  .mdl-cell {
    text-align: center;
      label {
        display: inline-block;
        vertical-align: top;
        margin-right: 1%;
      }
  }
}
.search-form__rangebox {
  > .mdl-cell {
    border: 1px solid rgb(96,125,139);
  }
  label.mdl-textfield__error {
    font-size: 10px;
  }
}
.search-form__buttons {
  .mdl-cell {
    text-align: center;
  }
}

</style>
