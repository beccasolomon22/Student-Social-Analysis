

function init() {

  let textName = ['top', 'twenty-five', 'schools', 'for', 'selected', 'ethnicity', 'completion', 'rate', 'go', 'here'];
  let textNum = [1, .9, .8, .7, .6, .5, .4, .3, .2, .1];

  var topTwentyFivePlot = [{
    x: textName,
    y: textNum,
    type: 'bar'
  }];

  var layout = {
    title: "Top 25 Schools with Highest Completion Rate For Selected Ethnicity",
    yaxis: {
      tickformat: ',.0%',
      range: [0,1]
    }
  }

  Plotly.newPlot("plot", topTwentyFivePlot, layout);
};
let white = [];
let twomore = [];
let hawpac = [];
let hispanic = [];
let black = [];
let asian = [];
let aian = [];

d3.json("../data/coords.json").then((data) => {
    let students = data.features;
    // console.log(students)
    // Empty lists for all the values per ethnicities (placeholder)
    
  
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
      
  });


// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
// Use D3 to select the dropdown menu
let dropdownMenu = d3.select("#selDataset");
// Assign the value of the dropdown menu option to a variable
let dataset = dropdownMenu.property("value");


// Initialize x and y arrays
let x = [];
let y = [];

let newTitle = "";

if (dataset === 'White') {
  let descend = white.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTwentyFive = descend.slice(0,25); 
  
  let topTwentyFiveNames = [];
  let topTwentyFiveNums = [];
  for (i=0; i<topTwentyFive.length; i++) {
    topTwentyFiveNames.push(topTwentyFive[i][0]);
    topTwentyFiveNums.push(topTwentyFive[i][1]);
  }
  x = topTwentyFiveNames;
  y = topTwentyFiveNums;

  newTitle = "Top 25 Schools with Highest Completion Rate For Whites";
  
}

else if (dataset === 'Two or More Races') {
  let descend = twomore.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTwentyFive = descend.slice(0,25);
  
  let topTwentyFiveNames = [];
  let topTwentyFiveNums = [];
  for (i=0; i<topTwentyFive.length; i++) {
    topTwentyFiveNames.push(topTwentyFive[i][0]);
    topTwentyFiveNums.push(topTwentyFive[i][1]);
  }
  x = topTwentyFiveNames;
  y = topTwentyFiveNums;
  newTitle = "Top 25 Schools with Highest Completion Rate For Two or More Races";
}

else if (dataset === 'Hawaiian/Pacific Islander') {
  let descend = hawpac.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTwentyFive = descend.slice(0,25);
  
  let topTwentyFiveNames = [];
  let topTwentyFiveNums = [];
  for (i=0; i<topTwentyFive.length; i++) {
    topTwentyFiveNames.push(topTwentyFive[i][0]);
    topTwentyFiveNums.push(topTwentyFive[i][1]);
  }
  x = topTwentyFiveNames;
  y = topTwentyFiveNums;
  newTitle = "Top 25 Schools with Highest Completion Rate For Hawaiians/Pacific Islanders";
}

else if (dataset === 'Hispanic') {
  let descend = hispanic.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTwentyFive = descend.slice(0,25);
  
  let topTwentyFiveNames = [];
  let topTwentyFiveNums = [];
  for (i=0; i<topTwentyFive.length; i++) {
    topTwentyFiveNames.push(topTwentyFive[i][0]);
    topTwentyFiveNums.push(topTwentyFive[i][1]);
  }
  x = topTwentyFiveNames;
  y = topTwentyFiveNums;
  newTitle = "Top 25 Schools with Highest Completion Rate For Hispanics";
}

else if (dataset === 'Black') {
  let descend = black.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTwentyFive = descend.slice(0,25);
  
  let topTwentyFiveNames = [];
  let topTwentyFiveNums = [];
  for (i=0; i<topTwentyFive.length; i++) {
    topTwentyFiveNames.push(topTwentyFive[i][0]);
    topTwentyFiveNums.push(topTwentyFive[i][1]);
  }
  x = topTwentyFiveNames;
  y = topTwentyFiveNums;
  newTitle = "Top 25 Schools with Highest Completion Rate For Blacks";
}

else if (dataset === 'Asian') {
  let descend = asian.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTwentyFive = descend.slice(0,25);
  
  let topTwentyFiveNames = [];
  let topTwentyFiveNums = [];
  for (i=0; i<topTwentyFive.length; i++) {
    topTwentyFiveNames.push(topTwentyFive[i][0]);
    topTwentyFiveNums.push(topTwentyFive[i][1]);
  }
  x = topTwentyFiveNames;
  y = topTwentyFiveNums;
  newTitle = "Top 25 Schools with Highest Completion Rate For Asians";
}

else if (dataset === 'American Indian') {
  let descend = aian.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTwentyFive = descend.slice(0,25);
  
  let topTwentyFiveNames = [];
  let topTwentyFiveNums = [];
  for (i=0; i<topTwentyFive.length; i++) {
    topTwentyFiveNames.push(topTwentyFive[i][0]);
    topTwentyFiveNums.push(topTwentyFive[i][1]);
  }
  x = topTwentyFiveNames;
  y = topTwentyFiveNums;
  newTitle = "Top 25 Schools with Highest Completion Rate For American Indians";
}

// Note the extra brackets around 'x' and 'y'
Plotly.restyle("plot", "x", [x]);
Plotly.restyle("plot", "y", [y]);

Plotly.relayout("plot", "title", newTitle);
}

init();
