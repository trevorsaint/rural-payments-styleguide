// Self evoking JavaScript function

(function openLayers() {

  var map;
  var lat  = -0.977852;
  var lon  = 51.454291;
  var zoom = 4;

  map = new OpenLayers.Map('map', {

    layers: [
      new OpenLayers.Layer.OSM()
    ],
    
    theme: null,

    controls: [

      new OpenLayers.Control.Navigation({

        dragPanOptions: {
          enableKinetic: true
        }

      })
      
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
      '<a class="olControlMeasurementClear olButton olButtonHidden" id="clearMeasurements" href="#clearMeasurements" title="Clear measure" role="button">Clear measure</a>' +
    '</div>' +
    
    '<div class="olControlMapSwitcher" id="OpenLayers_Map_Switcher">' +
      '<a class="olControlMap" id="toggleMapSwitcher" href="#toggleMapSwitcher" role="button">Show Aerial Map</a>' +
    '</div>'
    
  );



  var $doc         = $(document);

  var $mapElements = $(".olButton:visible, .olControlMap");
  var $mapToggle   = $(".olControlFullscreen");
  
  var mapActive    = false;



  // Open map fullscreen

  var openMap = function() {
    
    
    $(".map-container").addClass("map-container-full");
    
    
    map.updateSize();
    
    
    mapActive = true;
    
    
    $mapElements.on("keydown", function(e) {
        
        
      // If tab key pressed
      
      if (e.keyCode == 9 || e.which == 9) {
      
        e.preventDefault();
        
        var nextElement = $mapElements.get($mapElements.index(this) + 1);
        
        if (nextElement) {
          
          nextElement.focus();
          
        } else {
          
          $mapElements[0].focus();
          
        }
      
      }
    
    
      // If shift and tab key pressed
      
      if (e.shiftKey && e.keyCode == 9) {
      
        e.preventDefault();
        
        var prevElement = $mapElements.get($mapElements.index(this) - 1);
        
        if (prevElement) {
          
          prevElement.focus();
          
        } else {
          
          $mapElements[0].focus();
          
        }
      
      } 
    
    
    });
    
      
  }
  
  
  
  // Close map fullscreen
  
  var closeMap = function() {
    
    $(".map-container").removeClass("map-container-full");
    
    map.updateSize();
    
    mapActive = false;
    
    $mapElements.off("keydown");
    
     
    
  }



  // Click handler

  $mapToggle.on("click", function(e) {
    
  
    e.preventDefault();
    
    
    if (mapActive === false) {
      
      $(this).removeClass("olControlFullscreen").addClass("olControlFullscreenActive");
      
      openMap();
      
    } else if (mapActive === true) {         
              
      $(this).removeClass("olControlFullscreenActive").addClass("olControlFullscreen");
      
      closeMap();
      
    }   
    
    
  });
  
  
  // Close map fullscreen by esc key
  
  $doc.on("keyup", function(e) {
         

    e.preventDefault();

          
    if (e.keyCode === 27 && mapActive === true) {
      
      closeMap();
      
    }  


  });


})();