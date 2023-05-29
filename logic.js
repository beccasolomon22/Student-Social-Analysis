// Create the map layers
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create the map with base layers
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 3,
  layers: [street, topo]
});

// Create layer groups for each ethnicity
let asian = new L.LayerGroup();
let white = new L.LayerGroup();
let aian = new L.LayerGroup();
let hpac = new L.LayerGroup();
let hispanic = new L.LayerGroup();
let black = new L.LayerGroup();
let twomore = new L.LayerGroup();

// Create the overlay maps with ethnicity layers
let overlayMaps = {
  "Asian": asian,
  "White": white,
  "American Indian": aian,
  "Hawaiian/Pacific Islander": hpac,
  "Hispanic": hispanic,
  "Black": black,
  "2 or more races": twomore
};

// Add layer control to the map
L.control.layers({ "Street": street, "Topo": topo }, overlayMaps, {
  collapsed: false
}).addTo(myMap);

// Load the JSON data
d3.json("coords.json").then(function (data) {

  // Function to style the features
  function styleInfo(feature) {
    return {
      opacity: 4,
      fillOpacity: 0.5,
      fillColor: getColor(feature.properties),
      color: "#000000",
      radius: getRadius(feature.properties),
      stroke: true,
      weight: 0.1
    };
  }

  // Function to get the color based on ethnicity
  function getColor(depth) {
    let ethnicity = Object.keys(depth).find(key => depth[key]);
    switch (ethnicity) {
      case "compl rate for 4y (asian)" > 0:
        return "#FFFF00"; //yellow
      case "compl rate for 4y (white)" > 0:
        return "#FFFFFF"; //white
      case "compl rate for 4y (hispanic)" > 0:
        return "#964B00"; //brown
      case "compl rate for 4y (black)" > 0:
        return "#000000"; //black
      case "compl rate for 4y (american indian)" > 0:
        return "#FF0000"; // red
      case "compl rate for 4y (hawaiian/pac islander)" > 0:
        return "#FFA500"; //orange
      case "compl rate for 4y (2 or more races)" > 0:
        return "#0000FF"; //blue
      default:
        return "#98ee00"; //green
    }
  }

  // Function to get the radius based on magnitude
  function getRadius(magnitude) {
    let magnitude1 = magnitude;
    let magnitude2 = magnitude1;
    if (magnitude2 === 0) {
      return 1;
    }

    return magnitude2 * 400;
  }

  // Create the GeoJSON layer
  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["compl rate for 4y (asian)"] +
        "<br>Average tuition cost (full-time student): " +
        feature.properties["tuition revenue per full time enrollment"]
      );
    }
  }).addTo(asian); // Add the layer to "Asian" initially

  // Filter the data for "White" ethnicity
  let whiteData = data.features.filter(function (feature) {
    return feature.properties["compl rate for 4y (white)"] > 0;
  });

  // Create the GeoJSON layer for "White" ethnicity
  L.geoJson(whiteData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["compl rate for 4y (white)"] +
        "<br>Average tuition cost (full-time student): " +
        feature.properties["tuition revenue per full time enrollment"]
      );
    }
  }).addTo(white); // Add the layer to "White" ethnicity

  // Add the "White" ethnicity layer to the map
  white.addTo(myMap);

  // Filter the data for "American Indian" ethnicity
  let aianData = data.features.filter(function (feature) {
    return feature.properties["compl rate for 4y (american indian)"] > 0;
  });

  // Create the GeoJSON layer for "American Indian" ethnicity
  L.geoJson(aianData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["compl rate for 4y (american indian)"] +
        "<br>Average tuition cost (full-time student): " +
        feature.properties["tuition revenue per full time enrollment"]
      );
    }
  }).addTo(aian); // Add the layer to "American Indian" ethnicity

  // Add the "American Indian" ethnicity layer to the map
  aian.addTo(myMap);

  // Filter the data for "Black" ethnicity
  let blackData = data.features.filter(function (feature) {
    return feature.properties["compl rate for 4y (black)"] > 0;
  });

  // Create the GeoJSON layer for "Black" ethnicity
  L.geoJson(blackData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["compl rate for 4y (black)"] +
        "<br>Average tuition cost (full-time student): " +
        feature.properties["tuition revenue per full time enrollment"]
      );
    }
  }).addTo(black); // Add the layer to "Black" ethnicity

  // Add the "Black" ethnicity layer to the map
  black.addTo(myMap);

  // Filter the data for "Two or More" ethnicity
  let twomoreData = data.features.filter(function (feature) {
    return feature.properties["compl rate for 4y (2 or more races)"] > 0;
  });

  // Create the GeoJSON layer for "Two or More" ethnicity
  L.geoJson(twomoreData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["compl rate for 4y (2 or more races)"] +
        "<br>Average tuition cost (full-time student): " +
        feature.properties["tuition revenue per full time enrollment"]
      );
    }
  }).addTo(twomore); // Add the layer to "Two or More" ethnicity

  // Add the "Two or More" ethnicity layer to the map
  twomore.addTo(myMap);

  // FOR HAWAIIAN AND PAC ISLANDERS

  // Filter the data for "Hawaiian/Pacific Islanders" ethnicity
  let hpacData = data.features.filter(function (feature) {
    return feature.properties["compl rate for 4y (hawaiian/pac islander)"] > 0;
  });

  // Create the GeoJSON layer for "Hawaiian" ethnicity
  L.geoJson(hpacData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["compl rate for 4y (hawaiian/pac islander)"] +
        "<br>Average tuition cost (full-time student): " +
        feature.properties["tuition revenue per full time enrollment"]
      );
    }
  }).addTo(hpac); // Add the layer to "Hawaiian" ethnicity

  // Add the "Hawaiian" ethnicity layer to the map
  hpac.addTo(myMap);


///// FOR HISPANIC STUDENTS

// Filter the data for "White" ethnicity
  let hispanicData = data.features.filter(function (feature) {
  return feature.properties["compl rate for 4y (hispanic)"] > 0;
  });


  //////// BRENNAN'S CODE

  // Create the GeoJSON layer for "Hispanic" ethnicity
  L.geoJson(hispanicData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["compl rate for 4y (hispanic)"] +
        "<br>Average tuition cost (full-time student): " +
        feature.properties["tuition revenue per full time enrollment"]
      );
    }
  }).addTo(hispanic); // Add the layer to "Hispanic" ethnicity

  // Add the "Hispanic" ethnicity layer to the map
  hispanic.addTo(myMap);
});