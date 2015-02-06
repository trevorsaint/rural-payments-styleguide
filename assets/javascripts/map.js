// Self evoking JavaScript function

(function openLayers(){

  var map;
  var lat  = -0.977852;
  var lon  = 51.454291;
  var zoom = 4;

  map = new OpenLayers.Map('map', {

    layers: [
      new OpenLayers.Layer.OSM()
    ],

    controls: [

      new OpenLayers.Control.Navigation({

        dragPanOptions: {
          enableKinetic: true
        }

      }),

      new OpenLayers.Control.Zoom({
        zoomInId: 'customZoomIn',
        zoomOutId: 'customZoomOut'
      }),

    ],

    center: [0, 0],
    zoom: zoom

  });

  map.setCenter(
    new OpenLayers.LonLat(lat, lon).transform(
        new OpenLayers.Projection("EPSG:4326"),
        map.getProjectionObject()
    ), 10
  );


})();