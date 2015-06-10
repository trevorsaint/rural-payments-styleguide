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

      /*
        new OpenLayers.Control.Zoom({
        zoomInId: 'customZoomIn',
        zoomOutId: 'customZoomOut'
      }),
      */
      
      /*
        new OpenLayers.Control ({
        autoActivate: false,
        active: true,
        displayClass: 'measurementButton'})
      */

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
  
  
  // Map controls
  
  $('.map').append(
    
    '<div class="olControlMeasureOutput" id="OpenLayers_Measure">8888.88 m</div>' +
    
    '<div class="olControlView" id="OpenLayers_Fullscreen">' +
      '<a class="olControlFullscreen olButton" id="toggleFullscreen" href="#" title="Fullscreen toggle" role="button">Fullscreen toggle</a>' +
    '</div>' +
    
    '<div class="olControlZoom" id="OpenLayers_Control_Zoom">' +
      '<a class="olControlZoomReset olButton" href="#resetLoc" title="Reset view" role="button">Reset view</a>' +
      '<a class="olControlZoomIn olButton" href="#zoomIn" title="Zoom in" role="button">Zoom in</a>' +
      '<a class="olControlZoomOut olButton" href="#zoomOut" title="Zoom out" role="button">Zoom out</a>' +
    '</div>' +
    
    '<div class="olControlMeasureControls" id="OpenLayers_Measure_Controls">' +
      '<a class="olControlMeasurement olButton" id="toggleMeasurementMode" href="#toggleMeasurementMode" title="Measure" role="button">Measure</a>' +
      '<a class="olControlMeasurementClear olButton" id="clearMeasurements" href="#clearMeasurements" title="Clear measure" role="button">Clear measure</a>' +
    '</div>'
    
  );


})();