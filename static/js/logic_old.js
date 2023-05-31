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
let asian1 = new L.LayerGroup();
let white1 = new L.LayerGroup();
let aian1 = new L.LayerGroup();
let hpac1 = new L.LayerGroup();
let hispanic1 = new L.LayerGroup();
let black1 = new L.LayerGroup();
// let twomore1 = new L.LayerGroup();

// Create the overlay maps with ethnicity layers
let overlayMaps = {
  "Asian": asian1,
  "White": white1,
  "American Indian": aian1,
  "Hawaiian/Pacific Islander": hpac1,
  "Hispanic": hispanic1,
  "Black": black1
  // "2 or more races": twomore1
};

// Add layer control to the map
L.control.layers({ "Street": street, "Topo": topo }, overlayMaps, {
  collapsed: false
}).addTo(myMap);

// Load the JSON data
d3.json("../data/student_demo.json").then(function (data) {

  // Function to get the radius based on magnitude
  function getRadius(magnitude) {
    let magnitude1 = magnitude;
    let magnitude2 = magnitude1;
    if (magnitude2 === 0) {
      return 1;
    }

    return magnitude2 * 400;
  }
  // Function to style the features (ASIAN - Purple)
  function styleInfo1(feature) {
    return {
      opacity: 4,
      fillOpacity: 0.5,
      fillColor: '#D6BDE1',
      radius: getRadius(feature.properties),
      stroke: true,
      weight: 0.1
    };
  }
  // Create the GeoJSON layer
  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo1,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Faculty Demographic (Asian): " +
        feature.properties["faculty demographic (asian)"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["completion rate in 4 years (asian)"] 
      );
    }
  }).addTo(asian1); // Add the layer to "Asian" initially

  // Filter the data for "White" ethnicity
  let whiteData = data.features.filter(function (feature) {
    return feature.properties["faculty demographic (white)"] > 0;
  });


  // Function to style the features (WHITE - Coral)
  function styleInfo2(feature) {
    return {
      opacity: 4,
      fillOpacity: 0.5,
      fillColor: '#F4998D',
      radius: getRadius(feature.properties),
      stroke: true,
      weight: 0.1
    };
  }

  // Create the GeoJSON layer for "White" ethnicity
  L.geoJson(whiteData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo2,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Faculty Demographic (White): " +
        feature.properties["faculty demographic (white)"] +
        "<br>Percentage completed at 4 yr university: " +
        feature.properties["completion rate in 4 years (white)"] 
      );
    }
  }).addTo(white1); // Add the layer to "White" ethnicity

  // Add the "White" ethnicity layer to the map
  white1.addTo(myMap);

  // Filter the data for "American Indian" ethnicity
  let aianData = data.features.filter(function (feature) {
    return feature.properties["faculty demographic (american indian)"] > 0;
  });

  // Function to style the features (AMERICAN INDIAN - Periwinkle)
  function styleInfo3(feature) {
    return {
      opacity: 4,
      fillOpacity: 0.5,
      fillColor: '#BAC0FC',
      radius: getRadius(feature.properties),
      stroke: true,
      weight: 0.1
    };
  }

  // Create the GeoJSON layer for "American Indian" ethnicity
  L.geoJson(aianData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo3,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Faculty Demographic (American Indian): " +
        feature.properties["faculty demographic (american indian)"] +
        "<br>Completion rate in 4 years (American Indian): " +
        feature.properties["completion rate in 4 years (american indian)"]
      );
    }
  }).addTo(aian1); // Add the layer to "American Indian" ethnicity

  // Add the "American Indian" ethnicity layer to the map
  aian1.addTo(myMap);

  // Filter the data for "Black" ethnicity
  let blackData = data.features.filter(function (feature) {
    return feature.properties["faculty demographic (black)"] > 0;
  });

    // Function to style the features (BLACK - Mustard Yellow)
    function styleInfo4(feature) {
      return {
        opacity: 4,
        fillOpacity: 0.5,
        fillColor: '#FFB157',
        radius: getRadius(feature.properties),
        stroke: true,
        weight: 0.1
      };
    }

  // Create the GeoJSON layer for "Black" ethnicity
  L.geoJson(blackData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo4,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Faculty Demographic (Black): " +
        feature.properties["faculty demographic (black)"] +
        "<br>Completion rate in 4 years (Black): " +
        feature.properties["completion rate in 4 years (black)"]
      );
    }
  }).addTo(black1); // Add the layer to "Black" ethnicity

  // Add the "Black" ethnicity layer to the map
  black1.addTo(myMap);

  // Filter the data for "Two or More" ethnicity
  let twomoreData = data.features.filter(function (feature) {
    return feature.properties["faculty demographic (hawaiian or pacific islander)"] > 0;
  });

       // Function to style the features (TWO OR MORE - Pink)
       function styleInfo5(feature) {
        return {
          opacity: 4,
          fillOpacity: 0.5,
          fillColor: '#FF57B1',
          radius: getRadius(feature.properties),
          stroke: true,
          weight: 0.1
        };
      }
  // Create the GeoJSON layer for "Two or More" ethnicity
  // L.geoJson(twomoreData, {
  //   pointToLayer: function (feature, latlng) {
  //     return L.circleMarker(latlng);
  //   },

  //   style: styleInfo5,

  //   onEachFeature: function (feature, layer) {
  //     layer.bindPopup(
  //       "School Name: " +
  //       feature.properties["school name"] +
  //       "<br>Percentage completed at 4 yr university: " +
  //       feature.properties["compl rate for 4y (2 or more races)"] +
  //       "<br>Average tuition cost (full-time student): " +
  //       feature.properties["tuition revenue per full time enrollment"]
  //     );
  //   }
  // }).addTo(twomore1); // Add the layer to "Two or More" ethnicity

  // // Add the "Two or More" ethnicity layer to the map
  // twomore1.addTo(myMap);

  // FOR HAWAIIAN AND PAC ISLANDERS

  // Filter the data for "Hawaiian/Pacific Islanders" ethnicity
  let hpacData = data.features.filter(function (feature) {
    return feature.properties["faculty demographic (hawaiian or pacific islander)"] > 0;
  });

    // Function to style the features (HAWAIIAN/PI - Light Green)
    function styleInfo6(feature) {
      return {
        opacity: 4,
        fillOpacity: 0.5,
        fillColor: '#C3E76F',
        radius: getRadius(feature.properties),
        stroke: true,
        weight: 0.1
      };
    }

  // Create the GeoJSON layer for "Hawaiian" ethnicity
  L.geoJson(hpacData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    style: styleInfo6,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Faculty Demographic (Hawaiian/Pacific Islander): " +
        feature.properties["faculty demographic (hawaiian or pacific islander)"] +
        "<br>Completion rate in 4 years (Hawaiian/Pacific Islander): " +
        feature.properties["completion rate in 4 years (hawaiian or pacific islander)"]
      );
    }
  }).addTo(hpac1); // Add the layer to "Hawaiian" ethnicity

  // Add the "Hawaiian" ethnicity layer to the map
  hpac1.addTo(myMap);


///// FOR HISPANIC STUDENTS

// Filter the data for "Hispanic" ethnicity
  let hispanicData = data.features.filter(function (feature) {
  return feature.properties["faculty demographic (hispanic)"] > 0;
  });

    // Function to style the features (HISPANIC - Sea Green)
    function styleInfo7(feature) {
      return {
        opacity: 4,
        fillOpacity: 0.5,
        fillColor: '#6BA29C',
        radius: getRadius(feature.properties),
        stroke: true,
        weight: 0.1
      };
    }

  // Create the GeoJSON layer for "Hispanic" ethnicity
  L.geoJson(hispanicData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },



    style: styleInfo7,

    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "School Name: " +
        feature.properties["school name"] +
        "<br>Faculty Demographic (Hispanic): " +
        feature.properties["faculty demographic (hispanic)"] +
        "<br>Completion rate for 4 years (Hispanic): " +
        feature.properties["completion rate in 4 years (hispanic)"]
      );
    }
  }).addTo(hispanic1); // Add the layer to "Hispanic" ethnicity

  // Add the "Hispanic" ethnicity layer to the map
  hispanic1.addTo(myMap);

 /////// ADDING THE LEGEND!!!

  // Adding the actual legend on the page
  let legend = L.control({
    position: "bottomright"
  });

  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");

    //each ethnicity corresponds to the colors in the colors array
    
    const magnitudes = ["Asian", "White", "American Indian", "Black", "Hawaiian/Pacific Islander", "Hispanic"];

    const colors = [
      "#D6BDE1",
      "#F4998D",
      "#BAC0FC",
      "#FFB157",
      "#C3E76F",
      "#6BA29C"
    ];

    // Looping through our intervals to generate a label with a colored square for each interval.
    for (var i = 0; i < magnitudes.length; i++) {
      console.log(colors[i]);
      div.innerHTML += "<i style='background: " + colors[i] + "'></i> " + magnitudes[i] + "<br>";
    }
    return div;
  };

  // Finally, we our legend to the map.
  legend.addTo(myMap);


});
