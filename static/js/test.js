//////////////////////////
// THIS 
d3.json("../data/coords.json").then((data) => {
  let students = data.features;
  // console.log(students)
  // Empty lists for all the values per ethnicities (placeholder)
  let white = [];
  let twomore = [];
  let hawpac = [];
  let hispanic = [];
  let black = [];
  let asian = [];
  let aian = [];

  // For loop to start getting the values
  function init() {
    let select = d3.select("#selDataset")
    for (let i = 0; i < students.length; i++) {
      let gradrate_white = students[i].properties["compl rate for 4y (white)"];
      let gradrate_twomore = students[i].properties["compl rate for 4y (2 or more races)"];
      let gradrate_hawpac = students[i].properties["compl rate for 4y (hawaiian/pac islander)"];
      let gradrate_hispanic = students[i].properties["compl rate for 4y (hispanic)"];
      let gradrate_black = students[i].properties["compl rate for 4y (black)"];
      let gradrate_asian = students[i].properties["compl rate for 4y (asian)"];
      let gradrate_aian = students[i].properties["compl rate for 4y (american indian)"];
      let school_name = students[i].properties["school name"];


      white.push([school_name, gradrate_white]);
      twomore.push([school_name, gradrate_twomore]);
      hawpac.push([school_name, gradrate_hawpac]);
      hispanic.push([school_name, gradrate_hispanic]);
      black.push([school_name, gradrate_black]);
      asian.push([school_name, gradrate_asian]);
      aian.push([school_name, gradrate_aian]);
    }
  }

  // console.log(white);
});
////////////////////////




///////////////////////
// THIS IS THE CODE TO CREATE THE DROP DOWN MENU WITH A LIST OF NAMES!!!!
function populateDropdown() {
  let ethnicity = [
    "White",
    "Two or More Races",
    "Hawaiian/Pacific Islander",
    "Hispanic",
    "Black",
    "Asian",
    "American Indian"
  ];

  let selector = d3.select("#selDataset");

  for (let i = 0; i < ethnicity.length; i++) {
    selector
      .append("option")
      .text(ethnicity[i])
      .property("value", ethnicity[i]);
  }
}

populateDropdown();

//////////////////////

function buildMetadata(sample) {
  d3.json("../data/coords.json").then((data) => {
    let school_name = data.features[0].properties["school name"];
    let resultArray = school_name.filter(sampleObj => sampleObj.school_name == sample);
    let result = resultArray[0];
    let box = d3.select("#sample-metadata");
    box.html("")
    for (key in result) {
      box.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
    };
   console.log(buildMetadata)

  });
}
buildMetadata();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample)
  // buildCharts(newSample)
}
