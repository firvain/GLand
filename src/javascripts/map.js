import ol from 'openlayers';

const center = [3677385, 4120949];
const extent = [3652772, 4112808, 3700000, 4132797];
const geoJSONFormat = new ol.format.GeoJSON({
  defaultDataProjection: 'EPSG:4326',
});
const styleCache = {};
const mapLayers = () => {
  const layers = [];
  const mapbox = new ol.layer.Tile({
    source: new ol.source.XYZ({
      attributions: [new ol.Attribution({
        html: '<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a>',
      })],
      url: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZmlydmFpbiIsImEiOiJlOWYyYTM0NThiNWM0YjJjODJjNDE4ODQzNzA2MGQyNiJ9.-NVDO27Hzt-w_nQosUPfLA',
    }),
    id: 'mapbox',
  });
  layers.push(mapbox);
  const estates = new ol.layer.Vector({
    source: new ol.source.Cluster({
      distance: 40,
      source: new ol.source.Vector({
        format: geoJSONFormat,
        url: 'http://127.0.0.1:3000/v1/listings',
      }),
      attributions: [new ol.Attribution({
        html: 'All maps © <a href="http://www.terracognita.gr/">Terra Cognita</a>',
      })],
    }),
    id: 'estates',
    visible: true,
    style: (feature) => {
      const size = feature.get('features').length;
      let style = styleCache[size];
      let radius;
      let width;
      if (size > 1) {
        radius = 15;
        width = 2;
      } else {
        radius = 10;
        width = 2;
      }
      if (!style) {
        style = [new ol.style.Style({
          image: new ol.style.Circle({
            radius,
            stroke: new ol.style.Stroke({
              color: [255, 82, 82, 1],
              width,
            }),
            fill: new ol.style.Fill({
              color: [96, 125, 139, 0.8],
            }),
          }),
          text: new ol.style.Text({
            text: size.toString(),
            fill: new ol.style.Fill({
              color: '#FFFFFF',
            }),
          }),
          zIndex: 101,
        })];
        styleCache[size] = style;
      }
      return style;
    },
    zIndex: 2,
    name: 'estates',
  });
  layers.push(estates);
  return layers;
};
const map = new ol.Map({
  layers: mapLayers(),
  view: new ol.View({
    center,
    extent,
    projection: 'EPSG:3857',
    zoom: 14,
    maxZoom: 19,
    minZoom: 14,
  }),
});

export default map;
