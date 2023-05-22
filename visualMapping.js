//from belly button hw (14)
function buildMetadata(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let metadata = data.metadata;
        // Filter the data for the object with the desired sample number
        let filter = metadata.filter(obj => obj.id == sample)[0];

        // Use d3 to select the panel with id of `#sample-metadata`
        let panel = d3.select("#sample-metadata");

        // Use `.html("") to clear any existing metadata
        panel.html("")

        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        for (obj in filter) { panel.append("h4").text(`${obj}: ${filter[obj]}`) } // unpacking the key and value

    });
}
function init() {
    // Grab a reference to the dropdown select element
    let select = d3.select("#selDataset") // # is CSS referencing for id

    // Use the list of sample names to populate the select options
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
        .then((data) => {
            for (let i = 0; i < data.names.length; i++) {
                select
                    .append("option")
                    .text(data.names[i])
                    .property("value", data.names[i]) // property is what goes inside html tag
            }
            buildCharts(data.names[0]);
            buildMetadata(data.names[0]);
        });
}
function optionChanged(newSample) {
    // Rebuild the charts and metadat each time a new option is available
    buildCharts(newSample);
    buildMetadata(newSample);
  }
//from earthquake hw (15)
let streetmap = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png")

let map = L.map("map", {
    center: [40.73, -94.0059],
    zoom: 3,
    layers: [streetmap]
  });

//reading the data
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function (data) {
    function styleFunction(feature) {
        return {
            fillColor: getColor(feature.geometry.coordinates[2]),// 2 indicates depth into the earth in the geojson url we are pulling from
            radius: getRadius(feature.properties.mag),
            opacity: 1,
            fillOpacity: 1,
            color: 'black',
            weight: 0.3
        }
    };
    function getColor(depth) {
        switch (true) {
            case depth > 90: return "red";
            case depth > 60: return "blue";
            case depth > 30: return "yellow";
            default: return "green";
        } //switch is shorthand for if statements
    }
    function getRadius(mag) {
        if (mag === 0) {
            return 1
        }
        return mag * 4 // increase size to see
    }
    L.geoJson(data, {
        pointToLayer: function (feature, coords) {
            return L.circleMarker(coords);
        }, style: styleFunction, onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.place + "<br> Magnitude" + feature.properties.mag + 
            "<br> depth:" + feature.geometry.coordinates[2])
        }
    }).addTo(map);
})

//Bard example
var ethnicities = [
//list of data
]
var dropdown = document.getElementById("ethnicity-dropdown");

for (var i = 0; i < ethnicities.length; i++) {
  var option = document.createElement("option");
  option.value = ethnicities[i].name;
  option.text = ethnicities[i].name;
  dropdown.appendChild(option);
}

dropdown.addEventListener("change", function() {
  var ethnicity = this.value;
  var heatmap = document.getElementById("ethnicity-heatmap");
  heatmap.src = "https://example.com/heatmaps/" + ethnicity + ".png";
});
