<template>
<div id="map" class="map"></div>
</template>
<script>
  import { setSnackbarMsg } from '../vuex/actions';
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
          if (layer.get('id') === 'estates' || layer.get('id') === 'filteredEstates') {
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
            self.$router.go({ path: '/card' });
          }
        } else {
          self.setSnackbarMsg(`Found ${length} estates`);
        }
      });
    },
    vuex: {
      actions: {
        setSnackbarMsg,
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
