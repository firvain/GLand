import ol from 'openlayers';

export const mapLayers = () => {
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
  return layers;
};

export default (el) => {
  const myMap = new ol.Map({
    target: el,
    layers: mapLayers(),
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 15,
    }),
  });
  return myMap;
};
