function initialize() {
  let textName1 = ['top', 'hundred', 'schools', 'for', 'selected', 'withdrawal', 'rate', 'persex', 'go', 'here'];
  let textNum1 = [1, .9, .8, .7, .6, .5, .4, .3, .2, .1];

  var topTwentyFivePlot1 = [{
    x: textName1,
    y: textNum1,
    type: 'bar',
    name: 'Student Demographic',
    marker: {
      color: "pink" // Set the bar color to pink
    }
  }];

  var layout1 = {
    title: "Top 100 Schools with Most Students Withdrawn Based on Sex",
    barmode: "bar",
    yaxis: {
      tickformat: ',.0%',
      range: [0, 1],
    },
    margin: {
      b: 80 // Adjust the bottom margin value to prevent x-ticks from being cut off
    }
  }


  Plotly.newPlot("plot2", topTwentyFivePlot1, layout1);
};

let malew2 = [];
let malew3 = [];
let femalew2 = [];
let femalew3 = [];

d3.json("../data/student_sex.json").then((data) => {
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
  initialize();
});

let median_debtm = [];
let median_debtf = [];

d3.json("../data/student_demo.json").then((data) => {
  let student = data.features;

  for (let i = 0; i < student.length; i++) {
    let median_debt_male = student[i].properties["median debt for male students"];
    let median_debt_female = student[i].properties["median debt for female students"];
    let school_name = student[i].properties["school name"];

    median_debtm.push([school_name, median_debt_male]);
    median_debtf.push([school_name, median_debt_female]);
    
  }
});


d3.selectAll("#selDataset2").on("change", updatePlotly);

function updatePlotly() {
  let dropdownMenu1 = d3.select("#selDataset2");
  let dataset1 = dropdownMenu1.property("value");

  let x1 = [];
  let y1 = [];
  let newyaxis = {
    tickformat: ',.0%',
    range: [0, 1],
    automargin: true
  };
  let newMargin1 = {
    b: 230 
  }

  let newTitle1 = "";

  if (dataset1 === 'Withdrawal by 2 years (Male)') {
    let descend1 = malew2.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })

    let top = descend1.slice(0, 100);
    x1 = top.map(item => item[0]);
    y1 = top.map(item => item[1]);
    newyaxis = {
      tickformat: ',.0%',
      range: [0, 1],
      automargin: true
    };
    newTitle1 = "Top 100 Schools with Most Withdrawal by 2 years (Male)";

  } else if (dataset1 === 'Withdrawal by 3 years (Male)') {
    let descend1 = malew3.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })

    let top_malew3 = descend1.slice(0, 100);
    x1 = top_malew3.map(item => item[0]);
    y1 = top_malew3.map(item => item[1]);
    newyaxis = {
      tickformat: ',.0%',
      range: [0, 1],
      automargin: true
    };
    newTitle1 = "Top 100 Schools with Most Withdrawal by 3 years (Male)";

  } else if (dataset1 === 'Withdrawal by 2 years (Female)') {
    let descend1 = femalew2.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })

    let top_femalew2 = descend1.slice(0, 100);
    x1 = top_femalew2.map(item => item[0]);
    y1 = top_femalew2.map(item => item[1]);
    newyaxis = {
      tickformat: ',.0%',
      range: [0, 1],
      automargin: true
    };
    newTitle1 = "Top 100 Schools with Most Withdrawal by 2 years (Female)";

  } else if (dataset1 === 'Withdrawal by 3 years (Female)') {
    let descend1 = femalew3.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })
    let top_femalew3 = descend1.slice(0, 100);
    x1 = top_femalew3.map(item => item[0]);
    y1 = top_femalew3.map(item => item[1]);
    newyaxis = {
      tickformat: ',.0%',
      range: [0, 1],
      automargin: true
    };
    newTitle1 = "Top 100 Schools with Most Withdrawal by 3 years (Female)";

  } else if (dataset1 === 'Median Debt (Male)') {
    let descend1 = median_debtm.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })
    let top_median_debtm = descend1.slice(0, 100);
    x1 = top_median_debtm.map(item => item[0]);
    y1 = top_median_debtm.map(item => item[1]);
    newyaxis = {
      tickformat: '',
      range: [0, 35000],
      automargin: true
    };

    newTitle1 = "Median Debt (Male)";

  } else if (dataset1 === 'Median Debt (Female)') {
    let descend1 = median_debtf.sort(function compareFunction(firstNum, secondNum) {
      return secondNum[1] - firstNum[1];
    })
    let top_median_debtf = descend1.slice(0, 100);
    x1 = top_median_debtf.map(item => item[0]);
    y1 = top_median_debtf.map(item => item[1]);
    newTitle1 = "Median Debt (Female)";
  }

  if (dataset1.includes('Median Debt')) {
    newyaxis = {
      tickformat: '',
      range: [0, 35000],
      automargin: true
    };
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot2", "x", [x1]);
  Plotly.restyle("plot2", "y", [y1]);

  Plotly.relayout("plot2", "title", newTitle1);
  Plotly.relayout("plot2", "yaxis", newyaxis);
  Plotly.relayout("plot2", "margin", newMargin1);
}