<template>
<div id="map" class="map"></div>
</template>
<script>
  import createMap from '../javascripts/map.js';


  export default {
    name: 'Map',
    data() {
      return {};
    },
    methods: {
    },
    ready() {
      createMap(this.$el);
    },
  };
</script>
<style lang="scss">
@import "~openlayers/dist/ol.css";
.map {
  height: 100%;
  width: 100%;
}
</style>
