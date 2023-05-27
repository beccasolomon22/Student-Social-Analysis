function init() {

  let textName = ['top', 'ten', 'schools', 'for', 'selected', 'ethnicity', 'completion', 'rate', 'go', 'here'];
  let textNum = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  var topTenPlot = [{
    x: textName,
    y: textNum,
    text: textName,
    type: 'bar'
  }];

  Plotly.newPlot("plot", topTenPlot);
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
      // console.log(white);
  });

// console.log(white);
// console.log(twomore);
// console.log(hawpac);
// console.log(hispanic);
// console.log(black);
// console.log(asian);
// console.log(aian);

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
let newText = [];

if (dataset === 'White') {
  let descend = white.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTen = descend.slice(0,20); 
  
  let topTenNames = [];
  let topTenNums = [];
  for (i=0; i<topTen.length; i++) {
    topTenNames.push(topTen[i][0]);
    topTenNums.push(topTen[i][1]);
  }
  x = topTenNames;
  y = topTenNums;
  
}

else if (dataset === 'Two or More Races') {
  let descend = twomore.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTen = descend.slice(0,20);
  
  let topTenNames = [];
  let topTenNums = [];
  for (i=0; i<topTen.length; i++) {
    topTenNames.push(topTen[i][0]);
    topTenNums.push(topTen[i][1]);
  }
  x = topTenNames;
  y = topTenNums;
}

else if (dataset === 'Hawaiian/Pacific Islander') {
  let descend = hawpac.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTen = descend.slice(0,20);
  
  let topTenNames = [];
  let topTenNums = [];
  for (i=0; i<topTen.length; i++) {
    topTenNames.push(topTen[i][0]);
    topTenNums.push(topTen[i][1]);
  }
  x = topTenNames;
  y = topTenNums;
}

else if (dataset === 'Hispanic') {
  let descend = hispanic.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTen = descend.slice(0,20);
  
  let topTenNames = [];
  let topTenNums = [];
  for (i=0; i<topTen.length; i++) {
    topTenNames.push(topTen[i][0]);
    topTenNums.push(topTen[i][1]);
  }
  x = topTenNames;
  y = topTenNums;
}

else if (dataset === 'Black') {
  let descend = black.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTen = descend.slice(0,20);
  
  let topTenNames = [];
  let topTenNums = [];
  for (i=0; i<topTen.length; i++) {
    topTenNames.push(topTen[i][0]);
    topTenNums.push(topTen[i][1]);
  }
  x = topTenNames;
  y = topTenNums;
}

else if (dataset === 'Asian') {
  let descend = asian.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTen = descend.slice(0,20);
  
  let topTenNames = [];
  let topTenNums = [];
  for (i=0; i<topTen.length; i++) {
    topTenNames.push(topTen[i][0]);
    topTenNums.push(topTen[i][1]);
  }
  x = topTenNames;
  y = topTenNums;
}

else if (dataset === 'American Indian') {
  let descend = aian.sort(function compareFunction(firstNum, secondNum) {
    return secondNum[1] - firstNum[1];
})
  let topTen = descend.slice(0,20);
  
  let topTenNames = [];
  let topTenNums = [];
  for (i=0; i<topTen.length; i++) {
    topTenNames.push(topTen[i][0]);
    topTenNums.push(topTen[i][1]);
  }
  x = topTenNames;
  y = topTenNums;
}

// Note the extra brackets around 'x' and 'y'
Plotly.restyle("plot", "x", [x]);
Plotly.restyle("plot", "y", [y]);
Plotly.restyle("plot", "text", [newText]);
}

init();

