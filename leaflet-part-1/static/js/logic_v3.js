// Store the API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
  // Send the response data.features object to the createFeatures function.
  createFeatures(data.features);
  console.log(data)
});

function createFeatures(earthquakeData) {
  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr>
    <p>Latitude: ${(feature.geometry.coordinates[0])} <br> Longitude: ${(feature.geometry.coordinates[1])}</p>
    <p>Magnitude: ${(feature.properties.mag)}</p>
    <p>Depth: ${(feature.geometry.coordinates[2])}</p>
    <br><p>Date:  ${new Date(feature.properties.time)}</p>`);
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: feature.properties.mag * 5, 
        fillColor: colorCircle(feature.geometry.coordinates[2]),
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      });
    }
  });

  // Send our earthquakes layer to the createMap function.
  createMap(earthquakes);
}

// Function for color of circle by depth of magnitude
function colorCircle(depth) {
  if (depth >= 90) {
      color = "#840026";
  }
  else if (depth < 90 && depth >= 70) {
      color = "#A60026";
  }
  else if (depth < 70 && depth >= 50) {
      color = "#BD0026";
  }
  else if (depth < 50 && depth >= 30) { 
      color = "#F03B21";
  }
  else if (depth < 30 && depth >= 10) {
      color = "#FD8D3C";
  }
  else if (depth < 10 && depth >= -10) {
      color = "#FFFFB2";
  };
  return color;
};

function createMap(earthquakes) {
    // Create the base layers.
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    });
  
    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
  
    // Create a layer group for the markers
    var quakeLocations = L.layerGroup();
  
    // Create a baseMaps object.
    var baseMaps = {
      "Street Map": street,
      "Topographic Map": topo
    };
  
    // Create an overlay object to hold our overlay.
    var overlayMaps = {
      "Earthquakes": quakeLocations
    };
  
    // Create our map, giving it the streetmap and earthquakes layers to display on load.
    var myMap = L.map("map", {
      center: [37.09, -95.71],
      zoom: 3.5,
      layers: [street, quakeLocations]
    });
  
    // Add the earthquakes layer to the quakeLocations layer group.
    earthquakes.addTo(quakeLocations);
  
    // Create a layer control.
    // Pass it our baseMaps and overlayMaps.
    // Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);


    // Create a legend control.
  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function (){  //(map) {
    var div = L.DomUtil.create("div", "info legend");
    var colors = ['#FFFFB2', '#FD8D3C', '#F03B21', '#BD0026', '#A60026', '#840026'];
    var intervals = [-10, 10, 30, 50, 70, 90];


    // Loop through the intervals and add a color swatch and label for each interval
    for (var i = 0; i < intervals.length; i++) {
      console.log(colors[i]);
      console.log(intervals[i]);
      // var color = colors[i];
      // var interval = intervals[i];
      // var label = interval + (intervals[i + 1] ? "&ndash;" + (intervals[i + 1] - 1) : "+");

      var row = "<i style='background: " + colors[i] + "'></i> " +
      intervals[i] + (intervals[i + 1] ? "&ndash;" + intervals[i + 1] + "<br>" : "+");
      div.innerHTML += row;
    }

    return div;
  };
  legend.addTo(myMap)}