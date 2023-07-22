
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            // text: "Contribution Overtime"
        },
        axisX: {
            interval: 1,
            intervalType: "year",
            valueFormatString: "YYYY"
        },
        axisY: {
            suffix: "%"
        },
        toolTip: {
            shared: true
        },
        legend: {
            reversed: true,
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: [{
            type: "stackedColumn100",
            name: "Employer ",
            showInLegend: true,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { x: new Date(2010,0), y: 40 },
                { x: new Date(2011,0), y: 50 },
                { x: new Date(2012,0), y: 60 },
                { x: new Date(2013,0), y: 61 },
                { x: new Date(2014,0), y: 63 },
                { x: new Date(2015,0), y: 65 },
                { x: new Date(2016,0), y: 67 }
            ]
        }, 
        {
            type: "stackedColumn100",
            name: "Employee",
            showInLegend: true,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { x: new Date(2010,0), y: 28 },
                { x: new Date(2011,0), y: 18 },
                { x: new Date(2012,0), y: 12 },
                { x: new Date(2013,0), y: 10 },
                { x: new Date(2014,0), y: 10 },
                { x: new Date(2015,0), y: 7 },
                { x: new Date(2016,0), y: 5 }
            ]
        }, 
        {
            type: "stackedColumn100",
            name: "Total Interest",
            showInLegend: true,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { x: new Date(2010,0), y: 15 },
                { x: new Date(2011,0), y: 12 },
                { x: new Date(2012,0), y: 10 },
                { x: new Date(2013,0), y: 9 },
                { x: new Date(2014,0), y: 7 },
                { x: new Date(2015,0), y: 5 },
                { x: new Date(2016,0), y: 1 }
            ]
        },
        {
            type: "stackedColumn100",
            name: "Others",
            showInLegend: true,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { x: new Date(2010,0), y: 17 },
                { x: new Date(2011,0), y: 20 },
                { x: new Date(2012,0), y: 18 },
                { x: new Date(2013,0), y: 20 },
                { x: new Date(2014,0), y: 20 },
                { x: new Date(2015,0), y: 23 },
                { x: new Date(2016,0), y: 27 }
            ]
        }]
    });
    chart.render();
}


//charts

var options1 = {
  chart: {
    height: 190,
    type: "radialBar",
  },
  series: [78],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      startAngle: 135,
      endAngle: -135,
      track: {
        background: '#333',
        startAngle: 135,
        endAngle: -135,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "butt"
  },
  labels: ["Progress"]
};

new ApexCharts(document.querySelector("#chart1"), options1).render();

var options2 = {
  chart: {
    height: 190,
    type: "radialBar",
  },
  series: [95],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      track: {
        background: '#333',
        startAngle: -135,
        endAngle: 135,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "butt"
  },
  labels: ["Progress"]
};

new ApexCharts(document.querySelector("#chart2"), options2).render();

var options3 = {
  chart: {
    height: 190,
    type: "radialBar",
  },
  series: [59],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      startAngle: 135,
      endAngle: -135,
      track: {
        background: '#333',
        startAngle: 135,
        endAngle: -135,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "butt"
  },
  labels: ["Progress"]
};

new ApexCharts(document.querySelector("#chart3"), options3).render();

  






var options = {
  series: [{
  name: 'Employer',
  data: [12, 55, 41, 67, 22, 43, 21, 49]
}, {
  name: 'Employee',
  data: [55, 23, 20, 8, 13, 27, 33, 12]
}, {
  name: 'Total Interest',
  data: [48, 17, 15, 15, 21, 14, 15, 13]
}],
  chart: {
  type: 'bar',
  height: 250,
  stacked: true,
  stackType: '100%'
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
xaxis: {
  categories: ['20', '30', '40', '50', '60', '70',
    '80', '90'
  ],
},
legend: {
  position: 'right',
  offsetX: 0,
  offsetY: 50
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
