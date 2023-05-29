
function init() {
  let textName = ['top', 'hundred', 'schools', 'for', 'selected', 'withdrawal', 'rate', 'persex', 'go', 'here'];
  let textNum = [1, .9, .8, .7, .6, .5, .4, .3, .2, .1];

  var topTwentyFivePlot = [{
    x: textName,
    y: textNum,
    type: 'bar',
    name: 'Student Demographic',
    marker: {
      color: "pink" // Set the bar color to pink
    }
  }];

  var layout = {
    title: "Top 100 Schools with Most Students Withdrawn Based on Sex",
    barmode: "bar",
    yaxis: {
      tickformat: ',.0%',
      range: [0, 1]
    },
  }


  Plotly.newPlot("plot", topTwentyFivePlot, layout);
};

let malew2 = [];
let malew3 = [];
let femalew2 = [];
let femalew3 = [];

d3.json("data/coords.json").then((data) => {
  let sex = data.features;

  for (let i = 0; i < sex.length; i++) {
    let male_withdraw_2 = sex[i].properties["males withdr t9 by 2y"];
    let male_withdraw_3 = sex[i].properties["males withdr t9 by 3y"];
    let female_withdraw_2 = sex[i].properties["females withdr t9 by 2y"];
    let female_withdraw_3 = sex[i].properties["females withdr t9 by 3y"];
    let school_name = sex[i].properties["school name"];

    malew2.push([school_name, male_withdraw_2]);
    malew3.push([school_name, male_withdraw_3]);
    femalew2.push([school_name, female_withdraw_2]);
    femalew3.push([school_name, female_withdraw_3]);
  }
});

let median_debtm = [];
let median_debtf = [];

d3.json("data/student_demo.json").then((data) => {
  let student = data.features;

  for (let i = 0; i < student.length; i++) {
    let median_debt_male = student[i].properties["median debt for male students"];
    let median_debt_female = student[i].properties["median debt for female students"];
    let school_name = student[i].properties["school name"];

    median_debtm.push([school_name, median_debt_male]);
    median_debtf.push([school_name, median_debt_female]);
    
  }
});


d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
  let dropdownMenu = d3.select("#selDataset");
  let dataset = dropdownMenu.property("value");

  let x = [];
  let y = [];

  let newTitle = "";

  if (dataset === 'Withdrawal by 2 years (Male)') {
    let descend = malew2.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })

    let top = descend.slice(0, 100);
    x = top.map(item => item[0]);
    y = top.map(item => item[1]);
    newTitle = "Top 100 Schools with Most Withdrawal by 2 years (Male)";

  } else if (dataset === 'Withdrawal by 3 years (Male)') {
    let descend = malew3.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })

    let top_malew3 = descend.slice(0, 100);
    x = top_malew3.map(item => item[0]);
    y = top_malew3.map(item => item[1]);
    newTitle = "Top 100 Schools with Most Withdrawal by 3 years (Male)";

  } else if (dataset === 'Withdrawal by 2 years (Female)') {
    let descend = femalew2.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })

    let top_femalew2 = descend.slice(0, 100);
    x = top_femalew2.map(item => item[0]);
    y = top_femalew2.map(item => item[1]);
    newTitle = "Top 100 Schools with Most Withdrawal by 2 years (Female)";

  } else if (dataset === 'Withdrawal by 3 years (Female)') {
    let descend = femalew3.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })
    let top_femalew3 = descend.slice(0, 100);
    x = top_femalew3.map(item => item[0]);
    y = top_femalew3.map(item => item[1]);
    newTitle = "Top 100 Schools with Most Withdrawal by 3 years (Female)";

  } else if (dataset === 'Median Debt (Male)') {
    let descend = median_debtm.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })
    let top_median_debtm = descend.slice(0, 100);
    x = top_median_debtm.map(item => item[0]);
    y = top_median_debtm.map(item => item[1]);
    newTitle = "Median Debt (Male)";

  } else if (dataset === 'Median Debt (Female)') {
    let descend = median_debtf.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })
    let top_median_debtf = descend.slice(0, 100);
    x = top_median_debtf.map(item => item[0]);
    y = top_median_debtf.map(item => item[1]);
    newTitle = "Median Debt (Female)";
  }


// Note the extra brackets around 'x' and 'y'
Plotly.restyle("plot", "x", [x]);
Plotly.restyle("plot", "y", [y]);

Plotly.relayout("plot", "title", newTitle);
}

init();

