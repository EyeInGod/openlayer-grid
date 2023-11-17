// Define the map view
var map = new ol.Map({
    target: 'map',
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    })
  });
  
  // Function to create the grid
  function createGrid() {
    var xmin = parseFloat(document.getElementById('xmin').value);
    var ymin = parseFloat(document.getElementById('ymin').value);
    var xmax = parseFloat(document.getElementById('xmax').value);
    var ymax = parseFloat(document.getElementById('ymax').value);
  
    var extent = ol.extent.boundingExtent([[xmin, ymin], [xmax, ymax]]);
    var grid = ol.proj.transformExtent(extent, 'EPSG:4326', 'EPSG:3857');
  
    var gridFeature = new ol.Feature(new ol.geom.Polygon.fromExtent(grid));
    var gridLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [gridFeature]
      }),
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(0, 0, 255, 0.1)'
        }),
        stroke: new ol.style.Stroke({
          color: 'blue',
          width: 2
        })
      })
    });
  
    map.addLayer(gridLayer);
    map.getView().fit(grid, { padding: [50, 50, 50, 50] });
  }
  