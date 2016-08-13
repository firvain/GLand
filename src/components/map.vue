<template>
<div id="map" class="map"></div>
</template>
<script>
  import { setSnackbarMsg, addToCart } from '../vuex/actions';
  import map from '../javascripts/map.js';

  export default {
    data() {
      return {};
    },
    methods: {
    },
    ready() {
      map.setTarget(this.$el);
      const self = this;
      map.on('click', function clickHandler(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        const clickedFeature = this.forEachFeatureAtPixel(evt.pixel, (feature, layer) => (
          {
            feature,
            layer,
          }
        ), map, (layer) => {
          if (layer.get('id') === 'estates' || layer.get('id') === 'results') {
            return true;
          }
          return false;
        }, map);
        if (clickedFeature) {
          const length = clickedFeature.feature.getProperties().features.length;
          if (length === 1) {
            const gid = clickedFeature.feature.getProperties().features[0]
              .getProperties().gid;
            const coords = clickedFeature.feature.getProperties().features[0]
              .getGeometry().getCoordinates();
            this.getView().setCenter(coords);
            self.$router.go({ path: `/card/${gid}` });
          } else if (length > 1) {
            const features = clickedFeature.feature.getProperties().features;
            features.forEach((f) => {
              const price = f.get('listing').price;
              const gid = f.get('gid');
              const amenities = f.get('amenities');
              console.log('amenitites', amenities);
              self.addToCart({ gid, price, amenities });
            });
            self.$router.go({ path: '/list' });
          }
        } else {
          self.setSnackbarMsg(`Found ${length} estates`);
        }
      });
    },
    vuex: {
      actions: {
        setSnackbarMsg,
        addToCart,
      },
    },
  };
</script>
<style lang="scss">
@import "~openlayers/dist/ol.css";
.map {
  width: 100%;
  height: 100%; /*Fallback*/
  height: 100vh;
}
.ol-zoom {
  background-color: rgba(255,255,255,0);
  &:hover {
  background-color: rgba(255,255,255,0);
  }
  .ol-zoom-in {
    background-color: rgba(96, 125, 139, .5);
    border-radius: 50%;
  }
  .ol-zoom-out {
    background-color: rgba(96, 125, 139, .5);
    border-radius: 50%;
    top: .5em;
    position: relative;
  }
}
.ol-touch .ol-control button {
font-size: 1.14em;
}
.ol-control button {
font-size: 1.5em;
 &:hover {
   background-color: red;
 }
}
</style>
